<script setup>
import { onMounted, ref, nextTick } from "vue";
import { getFileExtension, replaceFileExtension, getConvertWebpInfo} from "@/assets/global/utils.js";

const props = defineProps({
    imgTitle: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    imgHd: {
        type: String,
        default: null
    }
});

const imgItemRef = ref();
const imgSrcOriginal = props.imgSrc;
const imgExtension = getFileExtension(imgSrcOriginal);
const hasAdditionalSource = getConvertWebpInfo(imgExtension);

onMounted(() => {
    // 确定图片链接
    const refDom = imgItemRef.value;
    const folder = refDom.parentNode.getAttribute("data-folder");
    const linkPrefix = "https://static.clashpost.com/upgrade/" + folder + "/";
    
    const imgSrcWebp = replaceFileExtension(imgSrcOriginal, ".webp");
    const imgLinkOriginal = linkPrefix + imgSrcOriginal;
    const imgLinkWebp = linkPrefix + imgSrcWebp;
    // 高清图片地址，方便点击图片时展示
    const imgLinkHd = linkPrefix + props.imgHd;

    // 将图片链接写入 src
    nextTick(() => {
        const pictureDom = refDom.querySelector("picture");
        pictureDom.querySelector("img").setAttribute("src", imgLinkOriginal);
        if (hasAdditionalSource) {
            pictureDom.querySelector("source").setAttribute("srcset", imgLinkWebp);
        }
        if (props.imgHd) {
            pictureDom.querySelector("img").setAttribute("data-src-hd", imgLinkHd);
        }
    });
});
</script>

<template>
    <div class="cp-unit-img-item" ref="imgItemRef">
        <div class="cp-unit-img-title">{{ props.imgTitle }}</div>
        <picture>
            <source srcset="" type="image/webp" v-if="hasAdditionalSource" />
            <img loading="lazy" class="cp-unit-img" src="" alt="" />
        </picture>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-unit-img-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    min-height: 6rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

@media (min-width: $cp-col-tablat) {
    .cp-unit-img-item {
        margin-right: 0.75rem;
        margin-bottom: 0.75rem;
    }
}

.cp-unit-img-title {
    margin-bottom: 0.125rem;
}

.cp-unit-img {
    width: auto;
    height: auto;
    max-width: 5rem;
    max-height: 6rem;
}
</style>