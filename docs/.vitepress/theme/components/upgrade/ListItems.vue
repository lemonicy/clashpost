<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    imgFolder: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="cp-units-container">
        <SmallTitle>{{ props.title }}</SmallTitle>
        <div class="cp-units-content" :data-folder="props.imgFolder">
            <slot></slot>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
            <div class="cp-unit-card cp-unit-placeholder"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.cp-units-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    margin: -1rem -0.5rem 0 -0.5rem;
}

@media (min-width: $cp-col-tablat-big) { 
    .cp-units-content {
        margin: -1rem -0.75rem 0 -0.75rem;
    }
}

.cp-unit-card.cp-unit-placeholder {
    height: 0;
    min-height: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    border-top: none !important;
    border-bottom: none !important;
}
</style>