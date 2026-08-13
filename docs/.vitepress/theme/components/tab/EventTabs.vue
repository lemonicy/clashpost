<script setup>
import { ref } from "vue";
import { changeScrollDirection } from "@/assets/global/utils.js";

const props = defineProps({
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

function wheelEvent(event) {
    // 如果是滚动 Tab，则将滚动方向改为横向
    const scrollDom = tabsRef.value.querySelector(".cp-tabs");
    changeScrollDirection(scrollDom, event);
}
</script>

<template>
    <div :class="tabsClass" ref="tabsRef" @wheel="wheelEvent">
        <div class="cp-tabs">
            <slot></slot>
        </div>
        <div class="cp-tabs-bottom-line"></div>
    </div>
</template>

<style lang="scss">
@use '@/components/tab/tab.scss';
</style>