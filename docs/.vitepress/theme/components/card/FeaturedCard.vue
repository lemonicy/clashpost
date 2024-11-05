<script setup>
import { getFileExtension, replaceFileExtension, getConvertWebpInfo} from '@/assets/global/utils.js';

const props = defineProps({
    link: {
        type: String,
        default: null
    },
    style: {
        type: Object,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: null
    },
    imgSrc: {
        type: String,
        default: null
    },
    lazyLoading: {
        type: Boolean,
        default: false
    }
});

const imgSrcOriginal = props.imgSrc;
const imgExtension = getFileExtension(imgSrcOriginal);
const hasAdditionalSource = getConvertWebpInfo(imgExtension);
const imgSrcWebp = replaceFileExtension(imgSrcOriginal, ".webp");
const loadingValue = props.lazyLoading ? "lazy" : "eager";
</script>

<template>
    <a class="cp-featured-card-link" :href="props.link" v-if="props.link">
        <div class="cp-featured-card" :style="props.style">
            <div class="cp-featured-card-text">
                <div class="cp-featured-card-title">{{ props.title }}</div>
                <div class="cp-featured-card-subtitle" v-if="props.subtitle">{{ props.subtitle }}</div>
            </div>
            <div class="cp-featured-card-img-container" v-if="imgSrc">
                <picture>
                    <source :srcset="imgSrcWebp" type="image/webp" v-if="hasAdditionalSource" />
                    <img :loading="loadingValue" :src="imgSrcOriginal" :alt="props.title" width="720" height="480" />
                </picture>
            </div>
        </div>
    </a>
    <div class="cp-featured-card" :style="props.style" v-else>
        <div class="cp-featured-card-text">
            <div class="cp-featured-card-title">{{ props.title }}</div>
            <div class="cp-featured-card-subtitle" v-if="props.subtitle">{{ props.subtitle }}</div>
        </div>
        <div class="cp-featured-card-img-container" v-if="imgSrc">
            <picture>
                <source :srcset="imgSrcWebp" type="image/webp" v-if="hasAdditionalSource" />
                <img :src="imgSrcOriginal" :alt="props.title" width="720" height="480" />
            </picture>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

/* 特色卡片 */
.cp-featured-card {
    /* 让文字在上边，图片在下边 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* 固定卡片高度 */
    line-height: 24px;
    text-decoration: none;
    overflow: hidden;
    border-radius: 1rem;
    border: 0.05rem solid rgb(229, 231, 235);

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .12) , 0 4px 6px -4px rgba(0, 0, 0, .12);
    }

    .cp-featured-card-text {
        padding: 1rem 1rem 0.75rem 1rem;
        background-color: transparent;

        * {
            background-color: transparent;
        }
    }

    .cp-featured-card-img-container img {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0;
    }
}

.cp-theme-dark .cp-featured-card {
    border: 0.05rem solid rgb(42, 42, 42);

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(255, 255, 255, .08) , 0 4px 6px -4px rgba(255, 255, 255, .08);
    }
}

.cp-featured-card-link:focus .cp-featured-card {
    outline: 0.1rem solid var(--cp-primary-light);
}

.cp-theme-dark .cp-featured-card-link:focus .cp-featured-card {
    outline: 0.1rem solid var(--cp-primary-dark);
}

@media (min-width: $cp-col-tablat) {
    .cp-featured-card .cp-featured-card-text {
        padding: 1.5rem 1.5rem 1.25rem 1.5rem;
    }
}

.cp-featured-card-title {
    line-height: 1.5rem;
    font-size: 1.375rem;
    margin-bottom: .5rem;
}

@media (min-width: $cp-col-tablat-big) {
    .cp-featured-card-title {
        font-size: 1.5rem;
    }
}

.cp-featured-card-subtitle {
    line-height: 1.5rem;
    color: var(--cp-grey-text-light) !important;
    font-size: .875rem;
}

.cp-theme-dark .cp-featured-card-subtitle {
    color: var(--cp-grey-text-dark) !important;
}
</style>