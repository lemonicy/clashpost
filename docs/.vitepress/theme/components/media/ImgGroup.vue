<script setup>
const props = defineProps({
    itemSize: {
        type: String,
        required: true
    },
    centeredItems: {
        type: Boolean,
        default: true
    },
});

let groupDomClass = "cp-img-group";
if (props.centeredItems) {
    groupDomClass += " cp-img-group-centered";
}
switch (props.itemSize) {
    case "Tiny":
        groupDomClass += " cp-img-group-tiny";
        break;
    case "Small":
        groupDomClass += " cp-img-group-small";
        break;
    case "Big":
        groupDomClass += " cp-img-group-big";
        break;
    default:
        // 不添加任何 class
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
    gap: 1rem;
}

.cp-img-item.cp-img-placeholder {
    height: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

/* 图片居中 */
.cp-img-group-centered {
    justify-content: center;
}

.cp-img-group-centered .cp-img-item.cp-img-placeholder {
    width: 0;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
</style>