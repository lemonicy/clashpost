<template>
    <p class="cp-p-caption">
        <slot></slot>
    </p>
</template>

<style lang="scss">
/* 与 figcaption 样式近似的说明文字 */
.cp-p-caption {
    text-align: center;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    color: var(--cp-grey-text-light);
}

.cp-theme-dark .cp-p-caption {
    color: var(--cp-grey-text-dark);
}
</style>