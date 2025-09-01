<script setup>
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        default: null
    },
    link: {
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
    caption: {
        type: String,
        default: null
    },
    maxWidth: {
        type: String,
        default: ""
    },
    maxHeight: {
        type: String,
        default: ""
    }
});

const imgSrc = "https://static.clashpost.com" + props.imgSrc;
const link = props.link ? "https://static.clashpost.com" + props.link : null;

// 未传入 imgAlt 时，使用 caption 的值作为 alt.
// 如果传入了 imgAlt，但未传入 caption，或两个参数都未传入，则不做任何操作
let imgAlt = props.imgAlt;
let caption = props.caption;
if (caption && !imgAlt) {
    imgAlt = caption;
}

// 如果图片中规定了 maxWidth 或 maxHeight，则添加相关 css
let imgItemStyle = "";
if (props.maxWidth) {
    imgItemStyle += "max-width: " + props.maxWidth + ";";
}
if (props.maxHeight) {
    imgItemStyle += "max-height: " + props.maxHeight + ";";
}
</script>

<template>
    <div class="cp-img-item">
        <a :href="link" target="_blank" v-if="link">
            <Pic :src="imgSrc" :alt="imgAlt" :width="props.width" :height="props.height" :maxWidth="props.maxWidth" :maxHeight="props.maxHeight" />
        </a>
        <Pic :src="imgSrc" :alt="imgAlt" :width="props.width" :height="props.height" :maxWidth="props.maxWidth" :maxHeight="props.maxHeight" v-else />
        <div class="cp-img-item-text" v-if="caption" v-html="caption"></div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-img-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(50% - 1rem);

    figure.cp-img-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0;

        img {
            max-width: 100%;
            border-radius: 0.25rem;
        }
    }

    .cp-img-item-text {
        margin-bottom: 0.25rem;
        text-align: center;
    }
}

@media (min-width: $cp-col-phone-large) {
    .cp-img-item {
        width: calc(33% - 1rem);
    }
}

@media (min-width: $cp-col-tablat) {
    .cp-img-item {
        width: calc(50% - 1rem);
    }
}

@media (min-width: $cp-col-tablat-big) {
    .cp-img-item {
        width: calc(33% - 1rem);
    }
}

@media (min-width: $cp-col-deskop) {
    .cp-img-item {
        width: calc(25% - 1rem);
    }
}

/* 极小尺寸的图片（如图标） */
.cp-img-group-tiny .cp-img-item {
    width: 80px;
}

@media (min-width: $cp-col-tablat) {
    .cp-img-group-tiny .cp-img-item {
        width: 90px;
    }
}

@media (min-width: $cp-col-laptop) {
    .cp-img-group-tiny .cp-img-item {
        width: 100px;
    }
}

/* 小尺寸的图片 */
.cp-img-group-small .cp-img-item {
    width: calc(33% - 0.5rem);
}

@media (min-width: $cp-col-phone-large) {
    .cp-img-group-big .cp-img-item {
        width: calc(25% - 0.5rem);
    }
}

@media (min-width: $cp-col-tablat) {
    .cp-img-group-small .cp-img-item {
        width: 160px;
    }
}

@media (min-width: $cp-col-laptop) {
    .cp-img-group-small .cp-img-item {
        width: 240px;
    }
}

/* 大尺寸的图片 */
.cp-img-group-big .cp-img-item {
    width: 100%;
}

@media (min-width: $cp-col-phone-large) {
    .cp-img-group-big .cp-img-item {
        width: calc(50% - 1rem);
    }
}

@media (min-width: $cp-col-deskop) {
    .cp-img-group-big .cp-img-item {
        width: calc(33% - 1rem);
    }
}
</style>