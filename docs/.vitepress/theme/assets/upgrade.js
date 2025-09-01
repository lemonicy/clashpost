import { inBrowser } from "vitepress";
import { isNumber, convertTime, convertNum, getCookie } from "@/assets/global/utils.js";

/**
 * 给定训练时间和折扣，返回指定折扣下的训练时间
 * discount = 10 代表月卡减免 10%，也就是打九折
 *
 * @param seconds 训练时间，以秒为单位
 * @param discount 月卡折扣
 */
function getTrainingTime(seconds, discount) {

    // 如果传过来的内容不是数字，则原样返回
    if (!(isNumber(seconds))) {
        return seconds;
    }
    // 如果是数字，则进行计算
    const sec = Number(seconds);
    const newTime = Math.ceil(sec * (1 - discount / 100));
    return convertTime(newTime, true);
}

/*
 * 根据时间的 value 值确定秒数
 *
 * 时间的 value 读取规则如下：
 * 6,12,5,10 => 6天12小时5分10秒
 * 6,12,0,0 => 6天12小时
 * 6,12 => 6天12小时（简写形式）
 * 6,0 => 6天
 * 6 => 还是6天
 * 0,0,0,30 => 30秒（不能简写，前面的 0 必须写出来）
 * 
 * 数字之间建议使用英文逗号，当然中文逗号（U+ff0c）也能识别，不强制
 */
export function getTimeSecFromValue(value) {
    if (!value || value.trim() === "\\") {
        // 如果 value 是斜杠，则直接返回
        return value;
    }

    const valueArr = value.split(/[,\uff0c]/);
    const timeD = valueArr[0] ? valueArr[0].trim() : 0;
    const timeH = valueArr[1] ? valueArr[1].trim() : 0;
    const timeM = valueArr[2] ? valueArr[2].trim() : 0;
    const timeS = valueArr[3] ? valueArr[3].trim() : 0;

    // 最后的 timeS 必须乘以 1，强制触发 js 的隐式类型转换，让 js 自己把字符串转为数字，
    // 否则程序会把数字和字符串直接拼接起来，导致最终结果出错
    const seconds = 86400 * timeD + 3600 * timeH + 60 * timeM + 1 * timeS;
    return seconds;
}

/**
 * 给定升级时间和折扣，返回指定折扣下的升级时间，结果以秒为单位
 *
 * @param seconds 训练时间，以秒为单位
 * @param discount 月卡折扣
 */
function getDiscountTimeSec(seconds, discount) {
    // 如果传过来的内容不是数字，则原样返回
    if (!(isNumber(seconds))) {
        return seconds;
    } else {
        // 如果是数字，则进行计算
        const sec = Number(seconds);
        const multiple = 1 - discount / 100;
        let newTime;
        if (sec < 30 * 60 || discount === 0) {
            // 当升级时间不超过 30 分钟时，或减免比例为零时，直接减去减免比例即可，不足疫苗的部分向上取整。
            newTime = Math.ceil(sec * multiple);
        } else if (sec < 24 * 60 * 60) {
            // 当升级时间大于 30 分钟但不超过 1 天时，计算后向下取整到最近的 10 分钟。
            newTime = Math.floor(Math.floor(sec * multiple) / 600) * 600;
        } else {
            // 当升级时间大于 1 天时，计算后向下取整到最近的 1 小时。
            newTime = Math.floor(Math.floor(sec * multiple) / 3600) * 3600;
        }
        return newTime;
    }
}

/**
 * 给定升级时间和折扣，返回指定折扣下的升级时间，结果是方便用户读取的字符串形式。
 */
function getUpgradeTime(value, discount) {
    const seconds = getTimeSecFromValue(value);
    const newTimeSec = getDiscountTimeSec(seconds, discount);
    return convertTime(newTimeSec);
}

/**
 * 根据数字的 value 值确定具体数字
 * 
 * value 后缀有五种形式（不区分大小写）：
 * k => 千
 * M => 百万
 * B => 十亿
 * W => 万
 * Y => 亿
 */
export function geNumFromValue(value) {
    if (!value || isNumber(value) || value.trim() === "\\" || value.trim() === "-") {
        return value;
    }
    
    // 由于表格的原始数据含有很多空格（包括字符串头尾的空格以及网站维护人员手动添加的三位数字分隔符），这里需要全部去掉
    value = value.replaceAll(" ", "");

    let cost;
    if (isNumber(value)) {
        // 如果没有后缀，则直接将 value 转化为数字
        cost = Number(value);
    } else if (isNumber(value.substring(0, value.length - 1))) {
        // 如果有后缀，则需要进一步处理
        const numPrefix = Number(value.substring(0, value.length - 1));
        const costSuffix = value.substring(value.length - 1, value.length);
        switch (costSuffix) {
            case "K":
            case "k":
                cost = numPrefix * 10 ** 3;
                break;
            case "M":
            case "m":
                cost = numPrefix * 10 ** 6;
                break;
            case "B":
            case "b":
                cost = numPrefix * 10 ** 9;
                break;
            case "W":
            case "w":
                cost = numPrefix * 10 ** 4;
                break;
            case "Y":
            case "y":
                cost = numPrefix * 10 ** 8;
                break;
            default:
                // 无法转化，直接返回
                console.warn("[clashpost warn] 字符串“" + value + "”无法被转化为数字，请检查表格中的相关内容，确认数据正确。如果确认数据是正确的，请忽略本消息。");
                return value;
        }
    } else {
        console.warn("[clashpost warn] 字符串“" + value + "”无法被转化为数字，请检查表格中的相关内容，确认数据正确。如果确认数据是正确的，请忽略本消息。");
        return value;
    }
    return cost;
}

/**
 * 计算受黄金令牌影响的升级花费
 * getCostNum() 获取到的是纯数字，getUpgradeCost() 获取到的是转化后的值
 */
function getCostNum(value, discount) {
    const costNum = geNumFromValue(value);

    if (isNumber(costNum)) {
        return Math.ceil(costNum * (1 - discount / 100));
    } else {
        // 如果 value 不是数字，则 geNumFromValue 程序不会结束，而会直接把 value 原路返回，因此这里需要额外处理
        return costNum;
    }
}

function getUpgradeCost(value, discount) {
    const costInDiscount = getCostNum(value, discount);
    return convertNum(costInDiscount);
}

/*
 * 升级后可获得的经验值
 */
function getUpgradeExp(timeValue, discount) {
    if (timeValue === "\\") {
        return "\\";
    }

    // 经验值的计算方式：将升级时间（单位：秒）开根号以后向下取整。
    const timeSec = getTimeSecFromValue(timeValue);
    const newTimeSec = getDiscountTimeSec(timeSec, discount);
    const expNum = Math.floor(Math.sqrt(newTimeSec));
    return convertNum(expNum);
}

/*
 * 日均消耗资源（仅英雄页面）
 */
function getDailyCost(timeValue, costValue, discount) {
    // 计算新的升级花费和升级时间，再用花费除以时间得到日均资源

    if (costValue === "\\" || timeValue === "\\") {
        return "\\";
    } else if (costValue == "0") {
        // 如果升级花费为 0，日均消耗一定为 0
        // 即使此时时间为 0，也即零做除数，日均消耗也显示为 0
        return 0;
    } else if (timeValue == "0") {
        // 这个分支是为了排除时间为 0 时出现零做除数的情况
        return "\\";
    } else {
        const timeSec = getTimeSecFromValue(timeValue);
        const newTimeSec = getDiscountTimeSec(timeSec, discount);
        const costNum = geNumFromValue(costValue);
        const newCost = getCostNum(costNum, discount);
        const dailyCost = newCost / newTimeSec * 86400;
        return convertNum(dailyCost);
    }
}

/**
 * 训练费用（针对临时兵种）
 */
function getTrainingCost(value, discount) {
    const costInDiscount = getCostNum(value, discount);
    return convertNum(costInDiscount);
}

/*
 * 返回各月卡减免比例下的费用或时间
 *
 * 其中 numType 为以下几个值之一：
 * training、time、cost、exp、dailyCost
 */
export function getGoldPassValueArr(numType, timeValue, costValue) {
    let valueArr = new Array();
    switch (numType) {
        case "training":
            valueArr[0] = getTrainingTime(timeValue, 0);
            valueArr[1] = getTrainingTime(timeValue, 10);
            valueArr[2] = getTrainingTime(timeValue, 15);
            valueArr[3] = getTrainingTime(timeValue, 20);
            break;
        case "time":
            valueArr[0] = getUpgradeTime(timeValue, 0);
            valueArr[1] = getUpgradeTime(timeValue, 10);
            valueArr[2] = getUpgradeTime(timeValue, 15);
            valueArr[3] = getUpgradeTime(timeValue, 20);
            break;
        case "cost":
            valueArr[0] = getUpgradeCost(costValue, 0);
            valueArr[1] = getUpgradeCost(costValue, 10);
            valueArr[2] = getUpgradeCost(costValue, 15);
            valueArr[3] = getUpgradeCost(costValue, 20);
            break;
        case "exp":
            valueArr[0] = getUpgradeExp(timeValue, 0);
            valueArr[1] = getUpgradeExp(timeValue, 10);
            valueArr[2] = getUpgradeExp(timeValue, 15);
            valueArr[3] = getUpgradeExp(timeValue, 20);
            break;
        case "dailyCost":
            valueArr[0] = getDailyCost(timeValue, costValue, 0);
            valueArr[1] = getDailyCost(timeValue, costValue, 10);
            valueArr[2] = getDailyCost(timeValue, costValue, 15);
            valueArr[3] = getDailyCost(timeValue, costValue, 20);
            break;
        case "trainingCost":
            // trainingCost 这一项仅在个别临时兵种中使用，这些兵种推出时训练费用尚未取消
            valueArr[0] = getTrainingCost(costValue, 0);
            valueArr[1] = getTrainingCost(costValue, 10);
            valueArr[2] = getTrainingCost(costValue, 15);
            valueArr[3] = getTrainingCost(costValue, 20);
            break;
        default:
            console.error("[clashpost error] getGoldPassValueArr() 函数的 numType 参数错误，numType 必须是以下几者之一，且区分大小写：" +
                "training, time, cost, exp, dailyCost, trainingCost.")
            return null;
    }
    return valueArr;
}

/**
 * 给定资源类型，获取资源的链接和图片 alt 值
 */
export function getResourceInfo(type) {
    let imgSrc = "https://static.clashpost.com/resources/";
    let imgSrcWithoutExtension = "https://static.clashpost.com/resources/";
    switch (type) {
        case "Gold":
        case "Elixir":
        case "Dark_Elixir":
        case "Gold2":
        case "Elixir2":
        case "Gold3":
        case "Gem":
        case "Exp":
        case "Wall_Ring":
        case "CWL_Medal":
        case "Raid_Medal":
        case "Shiny_Ore":
        case "Glowy_Ore":
        case "Starry_Ore":
        case "Sour_Elixir":
        case "Sweet_Elixir":
            imgSrc += type + ".png";
            imgSrcWithoutExtension += type;
            break;
        default:
            console.warn("[clashpost warn] getResourceInfo() 函数中的 type 参数错误，type = " + type);
            return null;
    }
    
    let imgAlt = "";
    switch (type) {
        case "Gold":
            imgAlt = "金币";
            break;
        case "Elixir":
            imgAlt = "圣水";
            break;
        case "Dark_Elixir":
            imgAlt = "黑油";
            break;
        case "Gold2":
            imgAlt = "夜本金币";
            break;
        case "Elixir2":
            imgAlt = "夜本圣水";
            break;
        case "Gold3":
            imgAlt = "都城金币";
            break;
        case "Gem":
            imgAlt = "宝石";
            break;
        case "Exp":
            imgAlt = "经验";
            break;
        case "Wall_Ring":
            imgAlt = "戒指";
            break;
        case "CWL_Medal":
            imgAlt = "联赛奖章";
            break;
        case "Raid_Medal":
            imgAlt = "突袭奖章";
            break;
        case "Shiny_Ore":
            imgAlt = "闪亮矿石";
            break;
        case "Glowy_Ore":
            imgAlt = "璀璨矿石";
            break;
        case "Starry_Ore":
            imgAlt = "星辉矿石";
            break;
        case "Sour_Elixir":
            imgAlt = "酸腐圣水";
            break;
        case "Sweet_Elixir":
            imgAlt = "香甜圣水";
            break;
    }
    return {"src": imgSrc, "srcWithoutExtension": imgSrcWithoutExtension, "alt": imgAlt};
}

export function getResourceHTML(type) {
    let resourceHtml = "";
    const resourceTypeArr = type.split(/[,\uff0c]/); // 用英文或中文逗号将资源类型分隔开来

    for (const index in resourceTypeArr) {
        if (Object.hasOwnProperty.call(resourceTypeArr, index)) {
            const resourceType = resourceTypeArr[index].trim();
            const iconInfo = getResourceInfo(resourceType);
            if (iconInfo) {
                // 如果 iconInfo 为 null，则最终结果为空字符串
                const imgSrc = iconInfo.src;
                const imgSrcWithoutExtension = iconInfo.srcWithoutExtension;
                const imgAlt = iconInfo.alt;
                
                resourceHtml += '<figure class="cp-img-container cp-img-resource-icon"><picture>' +
                    '<source srcset="' + imgSrcWithoutExtension + '.webp" type="image/webp" />' +
                    '<img loading="lazy" src="' + imgSrc + '" alt="' + imgAlt + '" width="" height="" />' +
                    '</picture></figure>';
            }
        }
    }

    return resourceHtml;
}

/**
 * 给出目标单元格和折扣值，显示指定的数据
 */
function setTargetGoldPassTd(td, discount) {
    switch (discount) {
        case 10:
            td.querySelector(".cp-gp-discount-0").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-10").classList.add("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-15").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-20").classList.remove("cp-gp-showing-value");
            break;
        case 15:
            td.querySelector(".cp-gp-discount-0").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-10").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-15").classList.add("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-20").classList.remove("cp-gp-showing-value");
            break;
        case 20:
            td.querySelector(".cp-gp-discount-0").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-10").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-15").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-20").classList.add("cp-gp-showing-value");
            break;
        default:
            // 默认没有折扣
            td.querySelector(".cp-gp-discount-0").classList.add("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-10").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-15").classList.remove("cp-gp-showing-value");
            td.querySelector(".cp-gp-discount-20").classList.remove("cp-gp-showing-value");
    }
}

/**
 * 根据已有计算结果和用户的月卡减免设置，展示符合要求的数据
 * 
 * @param {Array} DOM 要展示数据的 DOM，默认为 document
 * @param {Array} discountArr 减免比例的数组，三个值分别为训练、研究、建筑加成
 */
export function showGoldPassValue(DOM, discountArr) {
    // 如果没传入月卡见面比例的参数，则从 cookie 获取
    if (!discountArr) {
        let cookieValue;
        // 当不在浏览器环境，或 cookie 中的月卡减免比例为 null 时，则按照见面比例为零处理
        if (inBrowser) {
            cookieValue = getCookie("cp-gp-discount");
            if (!cookieValue) {
                cookieValue = "0-0-0";
            }
        } else {
            cookieValue = "0-0-0";
        }
        discountArr = cookieValue.split("-");
    }

    // 得到三个减免比例
    const trainingDiscount = parseInt(discountArr[0]);
    const researchDiscount = parseInt(discountArr[1]);
    const buildingDiscount = parseInt(discountArr[2]);

    // 展示符合要求的数据
    DOM.querySelectorAll(".cp-gp-item").forEach(td => {
        const tdClassList = td.classList;
        if (tdClassList.contains("cp-gp-class-training")) {
            // 训练加成
            setTargetGoldPassTd(td, trainingDiscount);
        } else if (tdClassList.contains("cp-gp-class-research")) {
            // 研究加成
            setTargetGoldPassTd(td, researchDiscount);
        } else if (tdClassList.contains("cp-gp-class-building")) {
            // 建筑加成
            setTargetGoldPassTd(td, buildingDiscount);
        } else if (tdClassList.contains("cp-gp-type-dailyCost")) {
            // 日均花费只有英雄和战宠有，对应的类型一定是 research
            setTargetGoldPassTd(td, researchDiscount);
        } else if (tdClassList.contains("cp-gp-type-trainingCost")) {
            // 训练费用（仅针最后一次推出时训练费用尚未取消的临时兵种）
            setTargetGoldPassTd(td, trainingDiscount);
        } else {
            // 如果识别不出是什么加成，则打印错误信息
            console.error("黄金令牌加成的数据类型有误，请检查 td.classList 数据：" + tdClassList);
        }
    });
}