<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
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
    text: {
        type: String,
        required: true
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

const src = "https://static.clashpost.com" + props.src;
const link = props.link ? "https://static.clashpost.com" + props.link : null;

let imgItemStyle = "";
if (props.maxWidth) {
    imgItemStyle += "max-width: " + props.maxWidth + ";";
}
if (props.maxHeight) {
    imgItemStyle += "max-height: " + props.maxHeight + ";";
}
</script>

<template>
    <div class="cp-img-item" :style="imgItemStyle">
        <a :href="link" target="_blank" v-if="link">
            <Pic :src="src" :alt="props.text" :width="props.width" :height="props.height" :maxWidth="props.maxWidth" :maxHeight="props.maxHeight" />
        </a>
        <Pic :src="src" :alt="props.text" :width="props.width" :height="props.height" :maxWidth="props.maxWidth" :maxHeight="props.maxHeight" v-else />
        <div class="cp-img-item-text">{{ props.text }}</div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-img-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(50% - 1rem);
    margin-right: 1rem;
    margin-bottom: 1rem;

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

/* 占地稍大的图片 */
.cp-bigger-img-group .cp-img-item {
    width: calc(100% - 1rem);
}

@media (min-width: $cp-col-phone-large) {
    .cp-bigger-img-group .cp-img-item {
        width: calc(50% - 1rem);
    }
}

@media (min-width: $cp-col-deskop) {
    .cp-bigger-img-group .cp-img-item {
        width: calc(33% - 1rem);
    }
}

/* 场景中的飞空艇和铸币坊图片 */
.cp-scenery-components-group .cp-img-item {
    width: calc(50% - 1rem);

    figure.cp-img-container {
        max-width: 90px;
    }
}

@media (min-width: $cp-col-phone-large) {
    .cp-scenery-components-group .cp-img-item {
        width: 120px;
    }
}
</style>