<script setup>
import { isSupportWebp, replaceFileExtension} from '@/assets/global/utils.js';

const props = defineProps({
    lazyLoading: {
        type: Boolean,
        default: true
    },
    src: {
        type: String,
        required: true
    },
    poster: {
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
    muted: {
        type: Boolean,
        default: false
    },
    videoStyle: {
        type: String,
        default: null
    },
    figureStyle: {
        type: String,
        default: ""
    }
});

const loadingValue = props.lazyLoading ? "lazy" : "eager";
const caption = props.caption;
const width = props.width;
const height = props.height;
const maxWidth = props.maxWidth;
const maxHeight = props.maxHeight;
const aspectRatio = width && height && width / height;

// 容器的 css 样式
let figureStyle = "";
if (props.figureStyle) {
    figureStyle += props.figureStyle;
}

// 视频的最大宽度和最小宽度
let videoStyle = props.videoStyle ? props.videoStyle + ";" : "";
if (maxWidth) {
    // 当 maxWidth 以 % 结尾，或者以 min、max 开头时，则尊重填入的值，不使用 min(xxx, 100%) 形式。
    if (maxWidth.endsWith("%") || maxWidth.startsWith("min") || maxWidth.startsWith("max")) {
        videoStyle += "max-width: " + maxWidth + ";";
    } else {
        videoStyle += "max-width: min(" + maxWidth + ", 100%);";
    }
}
if (maxHeight) {
    if (maxHeight.endsWith("%") || maxHeight.startsWith("min") || maxHeight.startsWith("max")) {
        videoStyle += "max-height: " + maxHeight + ");";
    } else {
        videoStyle += "max-height: min(" + maxHeight + ", 100%);";
    }
}
// 如果视频比例不是 16：9，则额外写入 css
if (aspectRatio && aspectRatio !== 16 / 9) {
    videoStyle += "aspect-ratio: " + aspectRatio + ";"
}

// 视频链接
const srcProp = props.src;
let srcOriginal;
if (srcProp.startsWith("http://") || srcProp.startsWith("https://")) {
    srcOriginal = srcProp;
} else {
    srcOriginal = "https://static.clashpost.com" + srcProp;
}

// 视频封面
const posterProp = props.poster;
let posterOriginal;
if (posterProp.startsWith("http://") || posterProp.startsWith("https://")) {
    posterOriginal = posterProp;
} else {
    posterOriginal = "https://static.clashpost.com" + posterProp;
}
if (isSupportWebp) {
    posterOriginal = replaceFileExtension(posterOriginal, ".webp");
}
</script>

<template>
    <figure class="cp-video-container" :style="figureStyle">
        <video :loading="loadingValue" :poster="posterOriginal" :src="srcOriginal" :width="width" :height="height"
            controls="" :style="videoStyle" :muted="props.muted">
        </video>
        <figcaption v-if="caption" v-html="caption"</figcaption>
    </figure>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

figure.cp-video-container {
    text-align: center;
    margin: 1rem 0;

    video {
        max-width: min(750px, 100%);
        border-radius: 0.5rem;
        aspect-ratio: 1.77778 / 1; /* 默认为 16:9 */
    }

    figcaption {
        margin-top: 0.25rem;
    }
}
</style>