<script setup>
const props = defineProps({
    centeredItems: {
        type: Boolean,
        default: true
    },
    biggerImg: {
        type: Boolean,
        default: false
    }
});

let groupDomClass = "cp-img-group";
if (props.centeredItems) {
    groupDomClass += " cp-centered-img-group";
}
if (props.biggerImg) {
    groupDomClass += " cp-bigger-img-group";
}
</script>

<template>
    <div :class="groupDomClass">
        <slot></slot>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
        <div class="cp-img-item cp-img-placeholder"></div>
    </div>
</template>

<style lang="scss">
.cp-img-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: -1rem;
    margin-bottom: -1rem;
}

.cp-img-item.cp-img-placeholder {
    height: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

/* 图片居中 */
.cp-centered-img-group {
    justify-content: center;
}

.cp-centered-img-group .cp-img-item.cp-img-placeholder {
    width: 0;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
</style>