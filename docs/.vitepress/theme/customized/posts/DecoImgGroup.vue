<template>
    <div class="cp-deco-img-group">
        <slot></slot>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
        <div class="cp-deco-img cp-deco-img-placeholder"></div>
    </div>
</template>

<style lang="scss">
.cp-deco-img-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 0.1rem solid rgb(192, 192, 192);
    border-radius: 0.5rem;
}

.cp-theme-dark .cp-deco-img-group {
    border: 0.1rem solid rgb(80, 80, 80);
}

.cp-deco-img-placeholder {
    height: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
</style>