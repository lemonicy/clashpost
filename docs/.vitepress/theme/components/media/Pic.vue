<script setup>
import { getFileExtension, replaceFileExtension, getConvertWebpInfo} from '@/assets/global/utils.js';

const props = defineProps({
    lazyLoading: {
        type: Boolean,
        default: true
    },
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ""
    },
    caption: {
        type: String,
        default: null
    },
    width: {
        type: String,
        default: ""
    },
    height: {
        type: String,
        default: ""
    },
    maxWidth: {
        type: String,
        default: null
    },
    maxHeight: {
        type: String,
        default: null
    },
    imgStyle: {
        type: String,
        default: null
    },
    figureStyle: {
        type: String,
        default: ""
    },
    convertWebp: {
        type: Boolean,
        default: true
    },
});

const loadingValue = props.lazyLoading ? "lazy" : "eager";
const alt = props.alt;
const caption = props.caption;
const width = props.width;
const height = props.height;
const maxWidth = props.maxWidth;
const maxHeight = props.maxHeight;

// 容器的 css 样式
let figureStyle = "";
if (props.figureStyle) {
    figureStyle += props.figureStyle;
}

// 图片的最大宽度和最小宽度
let imgStyle = props.imgStyle ? props.imgStyle + ";" : "";
if (maxWidth) {
    // 当 maxWidth 以 % 结尾，或者以 min、max 开头时，则尊重填入的值，不使用 min(xxx, 100%) 形式。
    if (maxWidth.endsWith("%") || maxWidth.startsWith("min") || maxWidth.startsWith("max")) {
        imgStyle += "max-width: " + maxWidth + ";";
    } else {
        imgStyle += "max-width: min(" + maxWidth + ", 100%);";
    }
}
if (maxHeight) {
    if (maxHeight.endsWith("%") || maxHeight.startsWith("min") || maxHeight.startsWith("max")) {
        imgStyle += "max-height: " + maxHeight + ");";
    } else {
        imgStyle += "max-height: min(" + maxHeight + ", 100%);";
    }
}

// 图片链接
const srcProp = props.src;
let imgSrcOriginal;
if (srcProp.startsWith("http://") || srcProp.startsWith("https://")) {
    imgSrcOriginal = srcProp;
} else {
    imgSrcOriginal = "https://static.clashpost.com" + srcProp;
}

// 如果调用时明确说明不转化，则不进行其他判断
// 动图使用原图格式，不转化
// gif 即使不写是动图也不转化，webp 格式无需进一步转化
const convertWebp = props.convertWebp;
const imgExtension = getFileExtension(imgSrcOriginal);
const hasAdditionalSource = convertWebp && getConvertWebpInfo(imgExtension);
const imgSrcWebp = replaceFileExtension(imgSrcOriginal, ".webp");
</script>

<template>
    <figure class="cp-img-container" :style="figureStyle">
        <picture>
            <source :srcset="imgSrcWebp" type="image/webp" v-if="hasAdditionalSource" />
            <img :loading="loadingValue" :src="imgSrcOriginal" :alt="alt" :width="width" :height="height" :style="imgStyle" />
        </picture>
        <figcaption v-if="caption" v-html="caption"</figcaption>
    </figure>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

figure.cp-img-container {
    text-align: center;
    margin: 1rem 0;

    img {
        max-width: min(750px, 100%);
        border-radius: 0.5rem;
        object-fit: scale-down;
    }

    figcaption {
        margin-top: 0.25rem;
    }
}

figure.cp-img-container.cp-img-float-right {
    float: right;
    margin: 0 0 0 0.5rem;
    background-color: var(--cp-page-bg-light); /* 不透明 */

    img {
        border-radius: 0;
    }
}

.cp-theme-dark figure.cp-img-container.cp-img-float-right {
    background-color: var(--cp-page-bg-dark);
}

/* 配兵图片 */
figure.cp-img-container.cp-img-troop-matching {
    overflow-x: auto;

    img {
        width: auto;
        height: 100px;
        max-width: none;
    }
}
</style>