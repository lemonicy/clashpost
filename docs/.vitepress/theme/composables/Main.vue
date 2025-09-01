<script setup>
import { onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useRouter, useData } from "vitepress";
import { debounce, reloadResource, reloadFailedResources } from "@/assets/global/utils.js";
import { stickyTheadWhenScrolling, stickyThead, changeHeader, bodyClickEvent, showCookieTip,
    resetDvhValue, resetSidebars } from '@/assets/global/common.js';
import { addOldBrowserTip } from "@/assets/global/browser-check.js";

onMounted(() => {
    nextTick(() => {
        // 冻结表头
        window.addEventListener("scroll", stickyTheadWhenScrolling);
        // 缩放页面时重新确定表头的位置，这里选择 400ms 是为了等动画播放完
        window.addEventListener("resize", debounce(stickyThead, 400));
        // 缩放页面后，如果发现屏幕够宽，则不显示侧边栏
        window.addEventListener("resize", debounce(resetSidebars, 300));
        // 点击空白处收缩弹窗、下拉框等元素
        window.addEventListener("click", event => bodyClickEvent(event));
        // 如果用户没访问过网站，则弹出网站会使用 Cookie 的提示
        showCookieTip();
        // 滚动和缩放结束时重新设定 vh 的大小（仅针对不能正确支持 dvh 的浏览器）
        resetDvhValue();
        window.addEventListener("scroll", debounce(resetDvhValue, 300));
        window.addEventListener("resize", debounce(resetDvhValue, 400));
        // 旧浏览器提示
        addOldBrowserTip();
        // 资源加载错误后做一些处理
        window.addEventListener("error", event => reloadResource(event), true);
        window.addEventListener("online", reloadFailedResources, true);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", stickyTheadWhenScrolling);
    window.removeEventListener("resize", debounce(stickyThead, 400));
    window.removeEventListener("resize", debounce(resetSidebars, 300));
    window.removeEventListener("click", event => bodyClickEvent(event));
    window.removeEventListener("scroll", debounce(resetDvhValue, 300));
    window.removeEventListener("resize", debounce(resetDvhValue, 400));
    window.removeEventListener("error", event => reloadResource(event), true);
    window.removeEventListener("online", reloadFailedResources, true);
});

const router = useRouter();
const { frontmatter } = useData();

watch(() => router.route.data.relativePath, (path) => {
    // 暂时关闭滚动动画
    document.documentElement.style.scrollBehavior = "auto";
    nextTick(() => {
        // 修改部分 meta 信息
        changeHeader(frontmatter.value.robots, frontmatter.value.canonical);
        // 重新开启滚动动画
        document.documentElement.style.scrollBehavior = "";
    }, 100);
}, { immediate: false });

// 由于开发环境下没有生成 canonical 标记，需要第一次进入页面时就修改 header
if (import.meta.env.MODE === 'development') {
    changeHeader(frontmatter.value.robots, frontmatter.value.canonical);
}
</script>

<template>
    <Content />
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

main {
    width: 100%;
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
}

.cp-theme-dark main {
    background-color: var(--cp-page-bg-dark);
}

@media (min-width: $cp-col-tablat) {
    main {
        /* 240px + 2rem = 272px */
        padding-left: 272px;
    }
}

@media (min-width: $cp-col-laptop) {
    main {
        padding-right: 272px;
    }
}

/*
 * $cp-col-deskop + 2 * 1rem = 1632px
 * (100% - $cp-col-deskop) / 2 + 272px = 50% - 528px
 */
@media (min-width: 1632px) {
    main {
        padding-left: calc(50% - 528px);
        padding-right: calc(50% - 528px);
    }
}
</style>
