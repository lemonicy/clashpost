<script setup>
import { invalidatedPosts, oldBuilderBasePosts, maintenancePosts } from "#/global-variables.js";
import { getPostInfo } from "@/assets/posts/posts.js";
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
const postInfo = getPostInfo(postId);

// 获取首次发布时间和上次更新时间的毫秒数，方便运算
const lastUpdated = postInfo.lastUpdated;
const lastUpdatedMills = new Date(lastUpdated).getTime();

// 判断文章是否太长时间（超过两年）没有编辑
const currentTimeMills = new Date().getTime();
const isPostTooOld = currentTimeMills - lastUpdatedMills > 2 * 365 * 86400 * 1000;

// 文章的 mark 标记
const isDiscarded = invalidatedPosts.includes(postId);
const isOldBuilderBasePost = oldBuilderBasePosts.includes(postId);
const isUnderMaintenance = maintenancePosts.includes(postId);
</script>

<template>
    <Callout type="error" class="cp-callout-post-mark" v-if="isDiscarded">
        本文已被手动标注为废弃状态，请用考古的心态查看这篇文章。
    </Callout>
    <Callout type="error" class="cp-callout-post-mark" v-else-if="isOldBuilderBasePost">
        这篇文章是夜世界 2.0 更新之前写的，本文已作废，请查看新文章。
    </Callout>
    <Callout type="warning" class="cp-callout-post-mark" v-else-if="isPostTooOld">
        这篇文章已经很久没修订了，部分内容可能已过期，链接可能已失效，请注意辨别。
    </Callout>
    <Callout type="warning" class="cp-callout-post-mark" v-else-if="isUnderMaintenance">
        文章正在维护，内容尚不完善，且可能存在错误，请大家积极反馈。
    </Callout>
</template>

<style>
    .cp-callout-post-mark {
        margin: 1rem 0 0 0;
    }
</style>