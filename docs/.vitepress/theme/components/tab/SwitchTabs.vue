<script>
function showActiveContent() {
    // 只显示当前激活的 Tab 所对应的 div
    const allTabs = document.querySelectorAll(".cp-tab");
    allTabs.forEach(tab => {
        const tabId = tab.getAttribute("tabId"); // tabId 就是需要显示的 div 的 id
        const targetDom = document.getElementById(tabId);
        if (targetDom) {
            if (tab.classList.contains("cp-tab-active")) {
                targetDom.style.display = "";
            } else {
                targetDom.style.display = "none";
            }
        }
    });
}
</script>

<script setup>
import { onMounted, ref } from "vue";
import { changeScrollDirection } from "@/assets/global/utils.js";

const props = defineProps({
    contentClass: {
        type: String,
        required: true
    },
    stickyTabs: {
        type: Boolean,
        default: false
    },
    averageTabs: {
        type: Boolean,
        default: false
    },
    pageTabs: {
        type: Boolean,
        default: false
    },
});

let tabsClass = "cp-tabs-container";
if (props.stickyTabs) {
    tabsClass += " cp-sticky-tabs";
}
if (props.averageTabs) {
    tabsClass += " cp-average-tabs";
}
if (props.pageTabs) {
    // cp-page-tabs 表示这个 tab 是整个页面的导航，这个 class 会影响目录的生成
    tabsClass += " cp-page-tabs";
}

const tabsRef = ref();

onMounted(() => {
    // 根据激活的 Tab 确定当前要展示哪些内容
    showActiveContent();
});

function wheelEvent(event) {
    // 如果是滚动 Tab，则将滚动方向改为横向
    const scrollDom = tabsRef.value.querySelector(".cp-tabs");
    changeScrollDirection(scrollDom, event);
}
</script>

<template>
    <div :class="tabsClass" ref="tabsRef" @wheel="wheelEvent">
        <div class="cp-tabs" :groupid="props.groupId" :content-class="props.contentClass">
            <slot></slot>
        </div>
        <div class="cp-tabs-bottom-line"></div>
    </div>
</template>

<style lang="scss">
@use '@/components/tab/tab.scss';
</style>