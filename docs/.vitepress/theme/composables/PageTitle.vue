<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();

const frontmatterValues = frontmatter.value;
const metaTitle = frontmatterValues.title;
const navTitle = frontmatterValues.navTitle;
const shownTitle = frontmatterValues.shownTitle;

let finalTitle;
if (frontmatterValues.customTitle) {
    // 如果 frontmatter 中写明 title 已经在页面中自行实现，则不再自动加载标题
    finalTitle = "";
} else {
    if (shownTitle) {
        // 如果指定了 shownTitle，则使用 shownTitle
        finalTitle = shownTitle;
    } else if (navTitle) {
        // 如果未指定 shownTitle，再检测 navTitle
        finalTitle = navTitle;
    } else {
        // 如果 shownTitle 和 navTitle 均未指定，则使用 metaTitle
        finalTitle = metaTitle;
    }
}
</script>

<template>
    <h1>{{ finalTitle }}</h1>
</template>