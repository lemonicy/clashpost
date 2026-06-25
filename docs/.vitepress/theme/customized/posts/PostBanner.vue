<script setup>
import { invalidatedPosts, oldBuilderBasePosts } from "#/global-variables.js";
import Callout from "@/components/Callout.vue";

const props = defineProps({
    link: {
        type: String,
        required: true
    }
});

// 文章的基本信息（最后更新时间等）
const link = props.link;
const postId = parseInt(link.replace("/p/", ""));

// 文章的 mark 标记
const isDiscarded = invalidatedPosts.includes(postId);
const isOldBuilderBasePost = oldBuilderBasePosts.includes(postId);
</script>

<template>
    <Callout type="error" class="cp-callout-post-mark" v-if="isDiscarded">
        本文已被手动标注为废弃状态，请用考古的心态查看这篇文章。
    </Callout>
    <Callout type="error" class="cp-callout-post-mark" v-else-if="isOldBuilderBasePost">
        这篇文章是夜世界 2.0 更新之前写的，本文已作废，请查看新文章。
    </Callout>
</template>

<style>
    .cp-callout-post-mark {
        margin: 1rem 0 -0.5rem 0;
    }
</style>