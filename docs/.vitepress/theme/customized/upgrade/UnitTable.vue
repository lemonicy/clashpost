<script>
import {showDialog} from "@/components/dialog/Dialog.vue";
import {convertNum, convertTime} from "@/assets/global/utils.js";
import {
  getResourceHTML,
  getGoldPassValueArr,
  geNumFromValue,
  getTimeSecFromValue,
  showGoldPassValue
} from "@/assets/upgrade.js";
import dayjs from "dayjs";

/**
 * 修改表头的值，使数据格式符合用户需求
 *
 * @param {Object} targetTd 要修改的单元格
 * @param {String} targetValue 单元格原本的值
 * @param {Array} item 升级数据页面给的 tableExtraInfo，item 是整个数组中的其中一项
 */
function setTheadValue(targetTd, targetValue, item) {
  const type = item.type;
  const icon = item.icon;
  let isTime = false;
  if (type === "time") {
    isTime = true;
  }
  if (icon) {
    if (type === "dailyCost") {
      // 如果数据类型是升级花费或英雄日均耗油，则做一些特殊处理
      const iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" class="cp-icon cp-icon-thead-key" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>';
      targetTd.innerHTML = targetValue + "<br>" + getResourceHTML(icon) + iconHtml;
      targetTd.querySelector("svg").addEventListener("click", () => showDialog("cp-daily-cost-dialog"));
    } else {
      // 如果不是英雄的日均耗油，则只添加图标
      targetTd.innerHTML = targetValue + " " + getResourceHTML(icon);
    }
  }
  return isTime;
}

/**
 * 如果对应的数据受月卡影响吗，则将这些 DOM 改为以下形式：
 *
 * <div class="cp-gp-discount-0">月卡 -0% 后的值</div>
 * <div class="cp-gp-discount-10">月卡 -10% 后的值</div>
 * <div class="cp-gp-discount-15">月卡 -15% 后的值</div>
 * <div class="cp-gp-discount-20">月卡 -20% 后的值</div>
 *
 * 这个函数只写入单元格，确定展示哪个 div 还需要后续处理。
 *
 * @param {Object} targetTd 要修改的单元格
 * @param {String} targetValue 单元格原本的值
 * @param {Array} item 升级数据页面给的 tableExtraInfo，item 是整个数组中的其中一项
 */
function setTbodyValue(targetTd, targetValue, item) {
  const type = item.type;
  const noGoldPass = item.noGoldPass;

  // 如果 type 为空，或者单元格内是一个反斜杠，说明不需要任何操作
  if (!type || targetValue === "\\") {
    return;
  }

  // 如果数据不受月卡影响，则只需简单计算
  if (noGoldPass) {
    switch (type) {
      case "cost":
      case "trainingCost":
      case "number":
        const num = geNumFromValue(targetValue);
        targetTd.innerHTML = convertNum(num, false);
        break;
      case "time":
        const sec = getTimeSecFromValue(targetValue);
        targetTd.innerHTML = convertTime(sec);
        break;
    }

    // 如果不受月卡影响，则程序到这里就结束了
    return;
  }

  // 如果程序运行到这里，说明这个数据受月卡影响，按照月卡的算法计算
  // 算出各月卡减免比例下的升级时间或升级花费
  // 这里不会有多个 td 符合要求，只取第一个即可
  const gpTimeDom = targetTd.parentNode.querySelector(".cp-gp-type-time");
  const gpCostDom = targetTd.parentNode.querySelector(".cp-gp-type-cost");
  let timeValue = null, costValue = null;
  switch (type) {
    case "training":
      timeValue = targetValue;
      break;
    case "time":
      timeValue = targetValue;
      break;
    case "cost":
    case "trainingCost":
      // trainingCost 这一项仅在个别临时兵种中使用，这些兵种推出时训练费用尚未取消
      costValue = targetValue;
      break;
    case "exp":
      timeValue = gpTimeDom == null ? "\\" : gpTimeDom.getAttribute("data-value").trim();
      break;
    case "dailyCost":
      // 由于同一个表格中展示的单位只能是一种类型，不可能同时是建筑和科技，即拿花费除以时间得到的结果也只能是同一种类型，
      // 因此日均花费只有四种结果（0%、10%、15%、20% 加成），不会因为用户选择了不同的研究加成和建筑加成导致结果不一样。
      timeValue = gpTimeDom == null ? "\\" : gpTimeDom.getAttribute("data-value").trim();
      costValue = gpCostDom == null ? "\\" : gpCostDom.getAttribute("data-value").trim();
      break;
    case "number":
      console.warn("[clashpost warn] 当 tableExtraInfo 的 type 为 number 时，不可设定其受月卡影响，请手动添加 noGoldPass: true 字段");
      break;
    default:
      console.error("[clashpost error] type 错误，type = " + type);
      console.error(targetTd);
      return null;
  }

  // 替换原有 HTML 内容
  if (type === "number") {
    targetTd.innerHTML = targetValue;
  } else {
    const valueArr = getGoldPassValueArr(type, timeValue, costValue);
    if (valueArr[0] === "\\") {
      // 由于计算出的经验可能为斜杠，因此这里需要做个判断，防止将斜杠判断为受月卡影响的数据
      targetTd.setAttribute("data-value", "\\");
      targetTd.innerHTML = "\\";
    } else {
      // 如果结果不是斜杠，则确认是受月卡影响的数据，需添加月卡相关的 class
      const gpClass = type === "exp" ? "building" : item.gpClass;
      if (gpClass) {
        targetTd.classList.add("cp-gp-item", "cp-gp-type-" + type, "cp-gp-class-" + gpClass);
      } else {
        targetTd.classList.add("cp-gp-item", "cp-gp-type-" + type);
      }
      targetTd.innerHTML = "<div class=\"cp-gp-discount-0\">" + valueArr[0] + "</div>" +
          "<div class=\"cp-gp-discount-10\">" + valueArr[1] + "</div>" +
          "<div class=\"cp-gp-discount-15\">" + valueArr[2] + "</div>" +
          "<div class=\"cp-gp-discount-20\">" + valueArr[3] + "</div>";
    }
  }
}

/* 
 * 修改表格本体的值，使数据格式符合用户需求，其中数据格式指的是“xx万”这种方便用户阅读的格式。
 * 兵种属性的数据已经在 Property 部分添加过 class 和资源图标了，所以这里只处理升级数据表格。
 */
function setSpecialItems(table, tableExtraInfo) {
  let haveTime = false
  const allRows = table.querySelectorAll("tr");
  tableExtraInfo.forEach(item => {
    const column = item.column;
    // 遍历每一行，给指定的单元格添加 class
    allRows.forEach((row, index) => {
      // 获取目标单元格
      const targetTd = row.querySelectorAll("td, th")[column];
      if (targetTd) {
        const dataBefore = targetTd.getAttribute("data-value");

        let targetValue;
        if (dataBefore) {
          // 如果之前设置过 data-value 属性，则直接使用 dataBefore，不再更改，防止将处理过的数据再处理一遍
          targetValue = dataBefore.trim();
        } else {
          targetValue = targetTd.innerHTML.trim();
          targetTd.setAttribute("data-value", targetValue);
        }

        // index 为零代表表头，不为零则代表表格主体
        if (index === 0) {
          if (setTheadValue(targetTd, targetValue, item)) {
            haveTime = true;
          }
        } else {
          setTbodyValue(targetTd, targetValue, item);
        }
      } else {
        console.error("[clashpost error] 无法找到 tableExtraInfo 对应的单元格，请检查相关信息是否正确");
        console.error(table);
        console.error(tableExtraInfo);
      }
    });
  });
  return haveTime;
}


// 生成结束时间表头元素
function createTimeTitleElement() {
  const element = document.createElement("th")
  element.setAttribute("style", "transform: none;");
  element.innerHTML = "建造结束<br>时间"
  return element
}


/**
 * 生成结束时间元素
 *
 * @param {time}  时间信息,诸如0, 4或3, 2,1 天,时,分,秒
 */
function createTimeElement(time) {
  const element = document.createElement("td")
  let Times = time.split(",")
  let finalsec = 0
  switch (Times.length) {
    case 1:
      finalsec = 86400 * Number(Times[0].trim())
      break
    case 2:
      finalsec = 86400 * Number(Times[0].trim()) + 3600 * Number(Times[1].trim())
      break
    case 3:
      finalsec = 86400 * Number(Times[0].trim()) + 3600 * Number(Times[1].trim()) + 60 * Number(Times[2].trim())
      break
    case 4:
      finalsec = 86400 * Number(Times[0].trim()) + 3600 * Number(Times[1].trim()) + 60 * Number(Times[2].trim()) + Number(Times[3].trim())
      break
  }
  const djs = dayjs().add(finalsec,"s")
  element.innerHTML = djs.format('YYYY-MM-DD<br>HH:mm')
  return {dayjs: djs,dom: element}
}


</script>

<script setup>
import {onMounted, nextTick, ref} from "vue";
import {formatTableData} from "@/assets/global/utils.js";
import dayjs from "dayjs";

const props = defineProps({
  tableExtraInfo: {
    type: Array,
    default: []
  },
  maxWidth: {
    type: String,
    default: null
  }
});

const maxWidth = props.maxWidth;
let styleAttr = "";
if (maxWidth) {
  styleAttr += "max-width: " + maxWidth;
}
const haveTime = ref(false);
const tableContainerRef = ref();
let allTime = []
// [{dayjs: dayjs(),dom: Element}]

setInterval(() => {
  allTime.forEach((item,index) => {
    item.dayjs = item.dayjs.add(1, 'm');
    item.dom.innerHTML = item.dayjs.format('YYYY-MM-DD<br>HH:mm')
  })
}, 60000)

onMounted(() => {
  nextTick(() => {
    const table = tableContainerRef.value.querySelector("table");
    // 对 tableExtraInfo 中标注出来的特殊数据进行处理，并写入单元格
    haveTime.value = setSpecialItems(table, props.tableExtraInfo);
    // 根据用户要求（cookie 值）确定要展示哪个特殊数据
    showGoldPassValue(table);
    // 对没有特意标注出来的一般数据进行处理，并展示出来
    formatTableData(table);
    console.log(`Have time attribute ${haveTime.value.toString()}`);
    if (haveTime.value) {
      table.querySelectorAll("tr").forEach((row, index) => {
        if (index === 0) {
          row.appendChild(createTimeTitleElement());
        } else {
          // 获取原始时间数据
          // etc. <td data-value="0, 4" className="cp-gp-item cp-gp-type-time cp-gp-class-building">
          const timedata = row.querySelector(".cp-gp-type-time").getAttribute("data-value")
          const allTimedata = createTimeElement(timedata)
          row.appendChild(allTimedata.dom)
          allTime.push(allTimedata);
        }
      })


    }
  });
});
</script>

<template>
  <div class="cp-table-container cp-upgrade-table" :style="styleAttr" ref="tableContainerRef">
    <slot></slot>
  </div>

</template>

<style lang="scss">
.cp-upgrade-table {
  a {
    white-space: nowrap; // a 元素内部不换行
    line-height: 2.25;
  }
}
</style>