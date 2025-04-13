<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { getTimeStr } from '@/assets/global/datetime.js';

const props = defineProps({
    index: {
        type: Number,
        default: NaN
    },
    featuredImg: {
        type: String,
        default: null
    },
    featuredImgConvertWebp: {
        type: Boolean,
        required: true
    },
    lastUpdatedISO: {
        type: [String, null],
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        required: true
    }
});

// 每页的前四篇文章的图片不延迟加载
const lazyLoadingBool = props.index % 20 > 3;
const convertWebp = props.featuredImgConvertWebp;
const updateTimeRef = ref();
const hasFeaturedImg = props.featuredImg;
const author = props.author;
if (!author) {
    console.error("[clashpost error] 作者信息不存在，请检查文章 " + props.url + " (" + props.title +") 中的 author 信息。");
}

onMounted(() => {
    nextTick(() => {
        const updateTimeDom = updateTimeRef.value;
        const lastUpdatedISO = props.lastUpdatedISO;
        const updateTime = getTimeStr(lastUpdatedISO);
        updateTimeDom.setAttribute("datetime", lastUpdatedISO);
        updateTimeDom.innerText = updateTime;
    });
});
</script>

<template>
    <div class="cp-post-item">
        <a class="cp-post-item-img" :href="props.url" :aria-label="props.title" v-if="hasFeaturedImg">
            <Pic :lazyLoading="lazyLoadingBool" :src="props.featuredImg" :convertWebp="convertWebp" />
        </a>
        <div class="cp-post-item-details">
            <a class="cp-post-item-link" :href="props.url">
                <div class="cp-post-item-title">{{ props.title }}</div>
                <div class="cp-post-item-excerpt">{{ props.excerpt }}</div>
            </a>
            <div class="cp-post-item-bottom">
                <div class="cp-post-item-info">
                    <a class="cp-post-item-author" :href="author.link">
                        <Pic class="cp-post-item-author-avatar" :src="author.avatarSm" />
                        <div class="cp-post-item-author-name">{{ author.nickName }}</div>
                    </a>
                </div>
                <div class="cp-post-item-info cp-post-item-time" ref="updateTimeRef"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-post-item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: -0.5rem;
    padding: 0.75rem 0;
    border-bottom: var(--cp-border-light);

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
}

.cp-post-item-img {
    width: 100%;
    text-align: center;
    /*
     * -0.5rem 用于吃掉图片高度冗余，0.5rem 用于图片和文字之间的空隙，抵消之后正好是 0
     * 大屏设备中图片和文字的空隙在右边，因此 margin-bottom 就变成 -0.5rem 了
     */
    margin-bottom: 0;
}

/*
 * 小屏模式下的图片
 *
 * 为了兼容不支持 aspect-ratio 的浏览器（点名 Safari 14），需要用一种比较麻烦的办法：
 * https://juejin.cn/post/7105765180474130469
 */
.cp-post-item-img figure.cp-img-container {
    display: inline-block;
    margin: 0;
    overflow: hidden;
    border-radius: 0.5rem;
    text-align: center;
    width: 24rem;
    max-width: 100%;
    /* 如果浏览器不支持 min() 属性，则将图片大小固定为 13.5rem，避免图片显示不出来 */
    padding-bottom: 13.5rem;
    padding-bottom: min(56.25%, 13.5rem);
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.4s cubic-bezier(0, 0, 0.2, 1);

        &:hover {
            transform: scale(1.1);
        }
    }
}

/* 对于支持 aspect-ratio 的浏览器采用原生方案 */
@supports (aspect-ratio: 1.77778 / 1) {
    .cp-post-item-img figure.cp-img-container {
        padding-bottom: 0;
        position: static;
        
        img {
            position: static;
            width: 24rem;
            max-width: 100%;
            aspect-ratio: 1.77778 / 1;
        }
    }

    @media (min-width: $cp-col-tablat-big) {
        .cp-post-item-img figure.cp-img-container {
            img {
                aspect-ratio: auto;
            }
        }
    }
}

/*
 * 大屏设备下，图片固定宽度和高度，不需要再保持 16:9 的比例。
 * 图片和详细信息两个信息显示在同一行，图片不再居中。
 */
@media (min-width: $cp-col-tablat-big) {
    .cp-post-item {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .cp-post-item-img {
        width: auto;
        margin-right: 1.5rem;
        margin-bottom: -0.5rem;
    }

    .cp-post-item-img figure.cp-img-container {
        padding-bottom: 0;
        position: static;
        width: auto;
        height: auto;

        img {
            width: 18rem;
            height: 10rem;
            position: static;
            max-width: inherit;
        }
    }

    .cp-post-item-link {
        height: calc(100% - 1.875rem);

        .cp-post-item-excerpt {
            max-height: none; /* 不限制摘要大小，只限制父元素大小 */
        }
    }
}

/* 详细信息占用除了图片外的所有宽度 */
.cp-post-item-details {
    width: 100%;
    overflow: hidden;
}

@media (min-width: $cp-col-tablat-big) {
    .cp-post-item-details {
        max-height: 10rem;
    }
}

.cp-post-item-link {
    display: block;
    overflow: hidden;
    text-decoration: none !important;

    .cp-post-item-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.375rem;
    }

    .cp-post-item-excerpt {
        /* 小屏设备下限制摘要高度 */
        max-height: 5.25rem;
    }

    &:hover, &:focus {
        .cp-post-item-title {
            text-decoration: underline;
        }
    }
}

.cp-post-item-bottom {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0rem;
}

.cp-post-item-info {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: var(--cp-grey-text-light);
}

.cp-post-item-info::after {
    content: '·';
    font-size: 1.25rem;
    margin: 0 0.375rem;
}

.cp-post-item-info:last-child::after {
    content: none;
}

.cp-theme-dark .cp-post-item-info {
    color: var(--cp-grey-text-dark);
}

.cp-post-item-author {
    display: flex;
    text-decoration: none !important;

    .cp-post-item-author-avatar {
        display: flex;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0;
        margin-right: 0.25rem;
        text-decoration: none;

        img {
            width: auto;
            height: auto;
            max-width: 1.5rem;
            max-height: 1.5rem;
            border-radius: 50%;
        }
    }

    .cp-post-item-author-name {
        color: var(--cp-grey-text-light);
    }

    &:hover, &:focus {
        .cp-post-item-author-name {
            text-decoration: underline;
        }
    }
}

.cp-theme-dark .cp-post-item-author {
    .cp-post-item-author-name {
        color: var(--cp-grey-text-dark);
    }
}

.cp-post-item-time {
    width: 4.875rem;
}
</style>