<script setup>
import { ref, onMounted, nextTick } from "vue";
import { getISOTimeStr, getTimeStr } from "@/assets/global/datetime.js";
import { getPostInfo } from "@/assets/posts/posts.js";

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
const postInfo = getPostInfo(postId);
const author = postInfo.author;

// 获取首次发布时间和上次更新时间的毫秒数，方便运算
const lastCreated = postInfo.lastCreated;
const lastUpdated = postInfo.lastUpdated;
const lastCreatedMills = new Date(lastCreated).getTime();
const lastUpdatedMills = new Date(lastUpdated).getTime();

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
        if (lastUpdatedMills - lastCreatedMills < 60 * 1000) {
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
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-post-details {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin: -0.5rem 0 1rem 0;
    color: var(--cp-grey-text-light);
    transform: translateY(-0.5rem);
    overflow-x: auto;
    overflow-y: hidden;
}

@media (min-width: $cp-col-tablat-big) {
    .cp-post-details {
        margin: -0.125rem 0 1rem 0;
    }
}

.cp-theme-dark .cp-post-details {
    color: var(--cp-grey-text-dark);
}

.cp-post-detail {
    display: flex;
    flex-shrink: 0;
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