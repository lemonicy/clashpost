<template>
    <div class="cp-post-history">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.cp-post-history {
    font-size: 0.875rem;
    font-style: italic;
    color: var(--cp-grey-text-light);
}

.cp-theme-dark .cp-post-history {
    color: var(--cp-grey-text-dark);
}
</style>