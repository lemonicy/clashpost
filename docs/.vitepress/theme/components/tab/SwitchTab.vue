<script>
import { setCookie } from '@/assets/global/utils.js';

// 显示对应 Tab 的内容，并将点击的 Tab 设为活跃状态
function showActiveTabContent(clickedDom) {
    // 查找点击的 Tab 所在的 container
    let containerDom = clickedDom.parentNode;
    const mainContent = document.querySelector("main");
    while(!containerDom.classList.contains("cp-tabs-container")) {
        if (containerDom === mainContent) {
            console.error("[clashpost error]: \".cp-tab\" 的 DOM 结构有误，请检查以下元素所在的 Tab container:");
            console.error(clickedDom);
            break;
        }
        containerDom = containerDom.parentNode;
    }

    // 查找点击的 Tab
    let clickedTab = clickedDom;
    while(!clickedTab.classList.contains("cp-tab")) {
        clickedTab = clickedTab.parentNode;
    }

    // 给当前活跃的 Tab 添加 class
    const groupTabs = containerDom.querySelectorAll("button.cp-tab");
    groupTabs.forEach(tab => {
        if (tab === clickedTab) {
            tab.classList.add("cp-tab-active");
        } else {
            tab.classList.remove("cp-tab-active");
        }
    });

    // 只显示当前点击的 Tab 对应的目录内容
    const activeTabId = clickedTab.getAttribute("tabid");
    const contentClass = containerDom.querySelector(".cp-tabs").getAttribute("content-class");
    const targetGroupDom = document.querySelectorAll("." + contentClass);
    targetGroupDom.forEach(item => {
        const allTitleDoms = item.querySelectorAll("h2, h3");
        if (item.getAttribute("id") === activeTabId) {
            // 如果这就是当前点击的 Tab 所对应的内容，则显示这部分内容，并在目录中显示相关标题
            item.style.display = "";
            // 当 containerDom 含有 cp-page-tabs class 时才修改目录内容，因为只有标注了 page-tabs 的 Tab 才会影响目录
            if (containerDom.classList.contains("cp-page-tabs")) {
                allTitleDoms.forEach(titleDom => {
                    const titleId = titleDom.getAttribute("id");
                    const tocId = titleId.replace("cp-title-", "cp-toc-");
                    document.getElementById(tocId).parentNode.style.display = "";
                });
            }
        } else {
            item.style.display = "none";
            if (containerDom.classList.contains("cp-page-tabs")) {
                allTitleDoms.forEach(titleDom => {
                    const titleId = titleDom.getAttribute("id");
                    const tocId = titleId.replace("cp-title-", "cp-toc-");
                    document.getElementById(tocId).parentNode.style.display = "none";
                });
            }
        }
    });
}

function setDefaultTabCookie(cookieValue) {
    if (cookieValue) {
        setCookie("cp-upgrade-active-tab", cookieValue, 2, "hours");
    }
}
</script>

<script setup>
const props = defineProps({
    tabId: {
        type: String,
        required: true
    },
    activeTab: {
        type: Boolean,
        default: false
    },
    upgradeCookieValue: {
        type: String,
        default: null
    }
});

const tabId = props.tabId;
const activeTab = props.activeTab;
const cookieValue = props.upgradeCookieValue;

function tabClickEvent(event) {
    const clickedDom = event.target; // 获取点击的 Tab    
    showActiveTabContent(clickedDom); // 显示对应 Tab 的内容，并将点击的 Tab 设为活跃状态
    setDefaultTabCookie(cookieValue); // 使用 Cookie 记住刚才使用的 Tab，方便再次加载时读取
}
</script>

<template>
    <button :tabid="tabId"
        :class="activeTab ? 'cp-tab cp-tab-active' : 'cp-tab'"
        @click="event => tabClickEvent(event)">
        <slot></slot>
        <div class="cp-tab-bottom"></div>
    </button>
</template>