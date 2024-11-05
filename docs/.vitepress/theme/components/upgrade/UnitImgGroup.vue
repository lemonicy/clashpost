<script setup>
const props = defineProps({
    title: {
        type: String,
        default: null
    },
    folder: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="unit-img-group">
        <div class="unit-img-group-title" v-if="props.title">{{ props.title }}</div>
        <div class="unit-img-group-content" :data-folder="props.folder">
            <slot></slot>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
            <div class="cp-unit-img-item cp-unit-img-item-placeholder"></div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.unit-img-group {
    border-bottom: 0.1rem solid rgb(205, 205, 205);
}

.unit-img-group:last-child {
    border-bottom: none;
}

.unit-img-group-title {
    margin-left: 0.75rem;
    margin-bottom: 0.25rem;
    margin-top: 0.5rem;
}

.unit-img-group:first-child .unit-img-group-title {
    margin-top: 0;
}

.unit-img-group-content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    justify-content: space-between;
}

.unit-img-group:last-child .unit-img-group-content {
    margin-bottom: 0rem;
}

@media (min-width: $cp-col-tablat) {
    .unit-img-group-content {
        margin-right: -0.25rem;
    }
}

.cp-unit-img-item-placeholder {
    margin-bottom: 0 !important;
    height: 0 !important;
    min-height: 0 !important;
}
</style>