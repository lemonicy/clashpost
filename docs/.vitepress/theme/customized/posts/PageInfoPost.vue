<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
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
const mounted = ref(false);

// 文章的基本信息（文章 ID、最后更新时间等）
const postId = computed(() => parseInt(props.link.replace("/p/", "")));
const postInfo = computed(() => getPostInfo(postId.value));
const author = computed(() => postInfo.value.author);

// 进入文章页面时，更新首次发布时间和上次更新时间的毫秒数
async function updateTimeInfo() {
    if (!mounted.value) return;

    await nextTick();

    const info = postInfo.value;
    const lastCreated = info.lastCreated;
    const lastUpdated = info.lastUpdated;
    const lastCreatedMills = new Date(lastCreated).getTime();
    const lastUpdatedMills = new Date(lastUpdated).getTime();

    const createTimeDom = createTimeRef.value;
    const updateTimeDom = updateTimeRef.value;

    if (!createTimeDom || !updateTimeDom) return;

    createTimeDom.setAttribute("datetime", getISOTimeStr(lastCreated));
    createTimeDom.innerText = getTimeStr(lastCreated) + "发布";

    if (lastUpdatedMills - lastCreatedMills < 60 * 1000) {
        updateTimeDom.removeAttribute("datetime");
        updateTimeDom.innerText = "从未更新";
    } else {
        updateTimeDom.setAttribute("datetime", getISOTimeStr(lastUpdated));
        updateTimeDom.innerText = getTimeStr(lastUpdated) + "更新";
    }
}

onMounted(() => {
    mounted.value = true;
    updateTimeInfo();
});

watch(() => props.link, updateTimeInfo);
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