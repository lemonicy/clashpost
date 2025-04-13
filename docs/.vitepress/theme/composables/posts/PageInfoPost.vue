<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { getISOTimeStr, getTimeStr } from '@/assets/global/datetime.js';
import { invalidatedPosts, oldBuilderBasePosts, maintenancePosts } from '@/assets/posts/marks.js';
import { getPostInfo } from '@/assets/posts/posts.js';
import Callout from '@/components/Callout.vue';

const props = defineProps({
    link: {
        type: String,
        required: true
    }
});

const createTimeRef = ref();
const updateTimeRef = ref();

// 文章的基本信息（作者、最后更新时间等）
const link = props.link;
const postId = parseInt(link.replace("/p/", ""));
const postInfo = await getPostInfo(postId);
const author = postInfo.author;
const lastCreated = postInfo.lastCreated;
const lastUpdated = postInfo.lastUpdated;

// 判断文章是否太长时间（超过两年）没有编辑
const timeMillsNow = new Date().getTime();
const updateTimeMills = lastUpdated;
const isPostTooOld = timeMillsNow - updateTimeMills > 2 * 365 * 86400 * 1000;

// 文章的 mark 标记
const isDiscarded = invalidatedPosts.includes(postId);
const isOldBuilderBasePost = oldBuilderBasePosts.includes(postId);
const isUnderMaintenance = maintenancePosts.includes(postId);

// 页面加载完毕后给页面写入发布时间和更新时间，而非写死在页面中，防止出现 Hydration Mismatch
onMounted(() => {
    nextTick(() => {
        // 首次发布时间
        const createTimeDom = createTimeRef.value;
        const createTimeISO = getISOTimeStr(lastCreated);
        const createTime = getTimeStr(lastCreated);
        createTimeDom.setAttribute("datetime", createTimeISO);
        createTimeDom.innerText = createTime + "发布";

        // 更新时间（如果更新时间和首次发布时间相差不到一分钟，则显示从未更新）
        const updateTimeDom = updateTimeRef.value;
        if (lastUpdated - lastCreated < 60 * 1000) {
            updateTimeDom.innerText = "从未更新";
        } else {
            const lastUpdatedISO = getISOTimeStr(lastUpdated);
            const updateTime = getTimeStr(lastUpdated);
            updateTimeDom.setAttribute("datetime", lastUpdatedISO);
            updateTimeDom.innerText = updateTime + "更新";
        }
    });
});
</script>

<template>
    <div class="cp-post-details">
        <a class="cp-post-detail cp-post-detail-author" :href="author.link">
            <Pic class="cp-post-detail-author-avatar" :src="author.avatarSm" />
            <div class="cp-post-detail-author-name">{{ author.nickName }}</div>
        </a>
        <div class="cp-post-detail cp-post-detail-time" ref="createTimeRef"></div>
        <div class="cp-post-detail cp-post-detail-time" ref="updateTimeRef"></div>
        <!-- <div class="cp-post-detail cp-post-detail-views"></div> -->
    </div>
    <Callout type="error" class="cp-callout-post-mark" v-if="isDiscarded">
        本文已被手动标注为废弃状态，请用考古的心态查看这篇文章。
    </Callout>
    <Callout type="error" class="cp-callout-post-mark" v-else-if="isOldBuilderBasePost">
        这篇文章是夜世界 2.0 更新之前写的，文章内容已作废，请查看新文章。
    </Callout>
    <Callout type="warning" class="cp-callout-post-mark" v-else-if="isPostTooOld">
        这篇文章已经很久没修订了，部分内容可能已过期，链接可能已失效，请注意辨别。
    </Callout>
    <Callout type="warning" class="cp-callout-post-mark" v-else-if="isUnderMaintenance">
        文章正在维护，内容尚不完善，请大家积极反馈。
    </Callout>
</template>

<style lang="scss">
.cp-post-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.875rem;
    margin: 1rem 0;
    color: var(--cp-grey-text-light);
    transform: translateY(-0.5rem);
}

.cp-theme-dark .cp-post-details {
    color: var(--cp-grey-text-dark);
}

.cp-post-detail {
    display: flex;
    align-items: center;
    color: var(--cp-grey-text-light);
}

.cp-theme-dark .cp-post-detail {
    color: var(--cp-grey-text-dark);
}

.cp-post-detail::after {
    content: '·';
    font-size: 1.25rem;
    margin: 0 0.375rem;
}

.cp-post-detail:last-child::after {
    content: none;
}

.cp-post-detail-author {
    display: flex;
    align-items: center;
    text-decoration: none !important;

    .cp-post-detail-author-avatar {
        display: flex;
        justify-content: center;
        text-decoration: none;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0;
        margin-right: 0.25rem;

        img {
            max-width: 1.5rem;
            max-height: 1.5rem;
            border-radius: 50%;
        }
    }

    .cp-post-detail-author-name {
        color: var(--cp-grey-text-light);
    }

    &:hover, &:focus {
        .cp-post-detail-author-name {
            text-decoration: underline;
        }
    }
}

.cp-theme-dark .cp-post-detail-author {
    .cp-post-detail-author-name {
        color: var(--cp-grey-text-dark);
    }
}
</style>