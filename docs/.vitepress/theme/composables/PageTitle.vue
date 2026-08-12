<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();

const finalTitle = computed(() => {
    const values = frontmatter.value;

    // 如果 frontmatter 中写明 title 已经在页面中自行实现，则不再自动加载标题
    if (values.customTitle) {
        return "";
    }

    // 如果指定了 shownTitle，则使用 shownTitle
    // 如果未指定 shownTitle，再检测 navTitle
    // 如果 shownTitle 和 navTitle 均未指定，则使用 metaTitle
    return values.shownTitle || values.navTitle || values.title || "";
});
</script>

<template>
    <h1>{{ finalTitle }}</h1>
</template>
