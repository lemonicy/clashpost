import { inBrowser } from 'vitepress';

/**
 * 确定传入的数值是否是数字
 */
export function isNumber(num) {
    return Number(num).toString() !== "NaN";
}

/**
 * 获取 Cookie 的域名
 * @returns Cookie 的域名
 */
function getDomain() {
    let domain;
    if (window.location.origin.indexOf("localhost") >= 0) {
        domain = "localhost";
    } else {
        domain = ".clashpost.com";
    }
    return domain;
}

/**
 * 添加、获取和删除 cookie
 * @param {*} name cookieName
 * @param {*} value cookieValue
 * @param {*} expire expireTime
 * @param {*} timeUnit days, hours, minutes or seconds
 */
export function setCookie(name, value, expire, timeUnit) {
    let multiple;
    switch (timeUnit) {
        case "years":
            multiple = 365 * 24 * 60 * 60;
            break;
        case "days":
            multiple = 24 * 60 * 60;
            break;
        case "hours":
            multiple = 60 * 60;
            break;
        case "minutes":
            multiple = 60;
            break;
        case "seconds":
            multiple = 1;
            break;
        default:
            // use "days" by default
            multiple = 24 * 60 * 60;
    }
    const maxAge = multiple * expire;
    const domain = getDomain();
    document.cookie = name + "=" + encodeURIComponent(value) + ";max-age=" + maxAge +
        ";path=/;domain=" + domain + ";SameSite=Lax";
}

export function getCookie(name) {
    if (!inBrowser) {
        return null; // node 环境下没有 window
    }

    const cName = name + "=";
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        const c = cookieArr[i].trim();
        if (c && c.indexOf(cName) === 0) {
            return c.substring(name.length + 1, c.length);
        }
    }
    return null;
}

export function deleteCookie(name, path = "/") {
    const domain = getDomain();
    document.cookie = name + "=;expires=" + new Date().toUTCString() + ";path=" + path + ";domain=" + domain;
}

/**
 * 实现函数的节流（目的是频繁触发中缩减频率）
 * @param fn {Function} 实际要执行的函数
 * @param wait {Number} 执行间隔，单位是毫秒，默认 16ms
 * @return {Function} 可被调用执行的函数
 */
export function throttle(fn, wait = 16) {
    let timer;
    return () => {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn();
            timer = null;
        }, wait)
    }
}

/**
 * 防抖函数（目的是滚动完成之后只执行一次）
 * @param {Function} func 要执行的函数
 * @param {Number} wait 执行延时，单位是毫秒，默认 16ms
 * @returns 
 */
export function debounce(func, wait = 16) { 
    let timeout; 
    return () => { 
        clearTimeout(timeout); 
        timeout = setTimeout(func, wait); 
    };
}

/**
 * 将时间转化为 x天x小时的形式
 * 
 * @param {Number} timeSec 以秒为单位的时间
 * @param {Boolean} trainingFlag 传入的数据是否为训练时间，如果是，则在数字和英文之间加空格，和属性版块的其他属性的风格保持一致
 */
export function convertTime(timeSec, trainingFlag) {
    if (timeSec === 0) {
        return "无";
    }

    let day = Math.floor(timeSec / 86400);
    let hour = Math.floor((timeSec % 86400) / 3600);
    let min = Math.floor(((timeSec % 86400) % 3600) / 60);
    let sec = Math.floor(((timeSec % 86400) % 3600) % 60);

    if (trainingFlag) {
        if (timeSec < 60) {
            return sec + " 秒";
        } else if (timeSec < 60 * 60) {
            if (sec === 0) {
                return min + " 分钟";
            } else {
                return min + " 分 " + sec + " 秒";
            }
        } else {
            console.warn("[clashpost warn] 兵种的训练时间超过了一小时，请检查传入的数据是否正确。")
        }
    } else {
        if (timeSec < 60) {
            return sec + "秒";
        } else if (timeSec < 60 * 60) {
            if (sec === 0) {
                return min + "分钟";
            } else {
                // 只显示两个等级的精度
                return min + "分" + sec + "秒";
            }
        } else if (timeSec < 24 * 60 * 60) {
            if (sec === 0) {
                if (min === 0) {
                    return hour + "小时";
                } else {
                    return hour + "小时" + min + "分";
                }
            } else {
                return hour + "小时" + min + "分" + sec + "秒";
            }
        } else {
            if (sec === 0) {
                if (min === 0) {
                    if (hour === 0) {
                        return day + "天";
                    } else {
                        return day + "天" + hour + "小时";
                    }
                } else {
                    return day + "天" + hour + "小时" + min + "分";
                }
            } else {
                return day + "天" + hour + "小时" + min + "分" + sec + "秒";
            }
        }
    }
}

/**
 * 对数字进行转化以提高阅读效率。
 * 
 * 如果数字小于 1000 则不转化
 * 当数字大于等于 1000 但小于 10万 时，给千分位加空格
 * 当数字大于等于 10万 但小于 1亿 时，四舍五入到最近的 0.1 万，如 2.2 万
 * 当数字大于等于 1亿 时，四舍五入到最近的 100万，如 1.14 亿
 * 
 * @param {Number} num 要转化的数字
 * @param {boolean} [rounding=true] 是否四舍五入到整数
 */
export function convertNum(num, rounding = true) {
    // 如果传入的参数不是数字则不做处理
    if (!isNumber(num)) {
        return num;
    }
    // 除非在第二个参数中明确说明不四舍五入，否则全部四舍五入到整数
    if (rounding) {
        num = Math.round(num);
    }

    const numStr = num.toString();
    if (num < 1000) {
        return num;
    } else if (num < 10 ** 4) {
        return numStr.substring(0, 1) + " " + numStr.substring(1, numStr.length);
    } else if (num < 10 ** 5) {
        return numStr.substring(0, 2) + " " + numStr.substring(2, numStr.length);
    } else if (num < 10 ** 8) {
        return Math.round(num / 10 ** 3) / 10 + "万";
    } else {
        return Math.round(num / 10 ** 6) / 100 + "亿";
    }
}

/**
 * 格式化表格中的数字（给数字的千位后面加空格等）
 * 
 * @param {Object} table 表格的 DOM 元素
 */
export function formatTableData(table) {
    table.querySelectorAll("td").forEach(td => {
        const tdHTML = td.innerHTML.trim();
        // 排除受月卡影响的单元格，因为这部分数据已经在升级数据表格中处理过了
        if (!td.classList.contains("cp-gp-item") && isNumber(tdHTML)) {
            td.innerHTML = convertNum(tdHTML, false);
        }
    });
}

/**
 * 获取文件扩展名，最终结果带点
 */
export function getFileExtension(fileName) {
    if (fileName && fileName.indexOf(".") >= 0) {
        const splittedFileName = fileName.split(".");
        return "." + splittedFileName[splittedFileName.length - 1];
    } else {
        return null;
    }
}

/**
 * 替换文件的扩展名
 * 
 * @param {String} fileName 文件名
 * @param {String} replacedExtension 新扩展名
 * @returns 替换后的文件名称
 */
export function replaceFileExtension(fileName, replacedExtension) {
    const extension = getFileExtension(fileName);
    if (extension) {
        const newFileNameWithoutExt = fileName.replace(new RegExp(extension + "$"), "");
        const newFileName = newFileNameWithoutExt + replacedExtension;
        return newFileName;
    } else {
        // 如果没有扩展名，则直接返回
        return fileName;
    }
}

/**
 * 切换路由页面
 * 
 * @param {Object} router vitepress 自带的 router，不是 vue router
 * @param {Array} pageArr 给出一组页面链接
 * @param {Number} pageIndex 要切换的页面在这组链接中的 index 值
 */
export function switchRoutePage(router, pageUrlArr, pageIndex) {
    router.go(pageUrlArr[pageIndex]);
}

/**
 * 确定网站使用浅色主题还是深色主题
 */
function setSpecifiedTheme(theme) {
    const bodyClassList = document.querySelector("body").classList;
    if (theme === "light") {
        bodyClassList.add("cp-theme-light");
        bodyClassList.remove("cp-theme-dark");
    } else {
        bodyClassList.add("cp-theme-dark");
        bodyClassList.remove("cp-theme-light");
    }
}

function setThemeToSystem(media) {
    if (media.matches) {
        // 深色模式
        setSpecifiedTheme("dark");
    } else {
        setSpecifiedTheme("light");
    }
}

export function setUserTheme() {
    // node 环境下不进行任何操作
    if (!inBrowser) return;

    const preferredTheme = getCookie("cp-preferred-theme");
    if (preferredTheme === "light") {
        setSpecifiedTheme("light");
    } else if (preferredTheme === "dark") {
        setSpecifiedTheme("dark");
    } else {
        // 使用系统设置（默认）
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            setThemeToSystem(media);
            media.addEventListener("change", setThemeToSystem);
        } catch (e) {
            // 该浏览器没有跟随系统主题的功能，默认使用浅色主题
            setSpecifiedTheme("light");
        }
    }
}

/**
 * 判断是否需要将图片转化为 webp
 */
export function getConvertWebpInfo(imgExtension) {
    return imgExtension !== ".gif" && imgExtension !== ".svg" && imgExtension !== ".webp";
}

/**
 * 判断用户的浏览器是否支持 webp
 */
export function isSupportWebp() {
    try {
        return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
    } catch (err) {
        return false;
    }
}

/**
 * 获取 rem 对应的 px 大小
 */
export function getRemValue() {
    const htmlFontSize = window.getComputedStyle(document.documentElement, null).getPropertyValue("font-size");
    return parseInt(htmlFontSize); // parseInt 可以自动去掉字体大小后面的 px
}

/**
 * 将链接改为规范形式，包括：
 * 1. 将多个斜杠合并为一个
 * 2. 将反斜杠改为正斜杠
 */
export function normalizeLink() {
    if (!inBrowser) return;

    const link = window.location.pathname;
    let newLink = null;

    if (link.includes("//")) {
        newLink = link.replace(/\/{2,}/g, "/");
    }
    if (link.includes("\\")) {
        newLink = link.replace(/\\/g, "/");
    }

    if (newLink) {
        window.location.pathname = newLink;
    }
}

/**
 * 重新加载资源（资源加载失败后调用）
 */
export function reloadResource(event) {
    const eventDom = event.target;
    if (eventDom.tagName === "IMG") {
        // 图片链接
        const img = eventDom;
        const srcOriginal = img.getAttribute("src");
        // 重试次数
        const retryTimesAttr = img.getAttribute("retrytimes");
        let retryTimes = retryTimesAttr ? parseInt(retryTimesAttr) : 0;
        // 如果从未重试过，且状态码以 4 或 5 开头，则设定 retryTimes 为 -1，后续无需重试
        if (retryTimes === 0) {
            // 根据用户是否支持 webp，决定要抓取的 url
            const imgWebpSource = img.parentNode.querySelector("source");
            const srcWebp = imgWebpSource.getAttribute("srcset").split(",")[0];
            const useWebp = isSupportWebp() && imgWebpSource;
            const srcUsed = useWebp ? srcWebp : srcOriginal;
            fetch(srcUsed).then(response => {
                if (response.status.toString().match(/^[4|5]/g)) {
                    retryTimes = -1;
                    img.setAttribute("retrytimes", retryTimes);
                }
            }).catch (error => {
                // 这个 fetch 几乎必然失败，不需要打印到控制台
            });
        }
        // 5 秒后重试
        setTimeout(() => {
            // 这里判断大于 0 是为了排除 -1 这种情况
            // 如果重新加载三次都失败了，则只在断网恢复时重新加载，和这里没关系了
            if (retryTimes >= 0 && retryTimes < 3) {
                // 只写入 src 就可以实现刷新
                img.setAttribute("src", srcOriginal);
                img.setAttribute("retrytimes", retryTimes + 1);
            }
        }, 5000);
    }
}

/**
 * 重新加载所有失败的资源（网络恢复时调用）
 */
export function reloadFailedResources() {
    const failedImages = document.querySelectorAll("img[retryTimes]");
    failedImages.forEach(img => {
        // 重新加载次数低于 3 时，reloadResource 会起作用，这里需要做个判断，防止两边都运行了
        const retryTimes = parseInt(img.getAttribute("retrytimes"));
        if (retryTimes >= 3) {
            // 只写入 src 就可以实现刷新
            img.setAttribute("src", img.getAttribute("src"));
        }
    });
}

/**
 * 判断元素是否可以滚动。
 * 判断原理是设置滚动位置为 1，如果能读取到这个值，说明可以滚动。
 * 为避免对页面的影响，判断完成后会将滚动位置恢复为 0。
 * 
 * @param {Object} element 要判断的元素
 * @param {Object} direction 垂直滚动填 Y，水平滚动填 X
 */
function isElementScrollable(element, direction = "Y") {
    if (!element) {
        console.error("[clashpost error] 无法判断元素是否可滚动，要判断的元素不存在。");
    }

    // 如果元素的滚动位置已经不为零了，则一定可以滚动
    if (direction === "Y" && element.scrollTop > 0 ||
        direction === "X" && element.scrollLeft > 0) {
        return true;
    }

    let scrollableY = false;
    let scrollableX = false;
    if (direction === "Y") {
        element.scrollTop = 1;
        scrollableY = element.scrollTop > 0;
        element.scrollTop = 0;
    } else if (direction === "X") {
        element.scrollLeft = 1;
        scrollableX = element.scrollLeft > 0;
        element.scrollLeft = 0;
    } else {
        console.error("[clashpost error] 无法判断元素是否可滚动，滚动方向参数错误。");
    }
    return scrollableY || scrollableX;
}

/**
 * 将纵向滚动改为横向滚动
 * 
 * @param {Object} scrollDom 要滚动的元素
 * @param {Object} wheelEvent 鼠标滚动事件
 */
export function changeScrollDirection(scrollDom, wheelEvent) {
    // 如果元素不可滚动，则不运行后续代码
    if (!isElementScrollable(scrollDom, "X")) {
        return;
    }
    const tabsLeftPosition = scrollDom.scrollLeft;
    const deltaX = wheelEvent.deltaY;
    scrollDom.scrollLeft = tabsLeftPosition + deltaX;
    wheelEvent.preventDefault();
}