<script setup>
import { getResourceInfo } from '@/assets/upgrade.js';

const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const iconInfo = getResourceInfo(props.type);
const imgSrc = iconInfo.src;
const imgAlt = iconInfo.alt;
</script>

<template>
    <Pic class="cp-img-resource-icon" :src="imgSrc" :alt="imgAlt" />
</template>

<style lang="scss">
figure.cp-img-resource-icon {
    display: inline-block;
    width: 1.125rem;
    margin: 0;

    img {
        width: 1.125rem;
        vertical-align: baseline;
        border-radius: 0;
    }
}

.cp-unit-property-key .cp-img-resource-icon img {
    position: relative;
    top: 0.125rem;
}

table .cp-img-resource-icon img {
    position: relative;
    top: 0.125rem;
}
</style>