<template>
    <div class="cp-text-diff-container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-text-diff-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}

@media (min-width: $cp-col-tablat) {
    .cp-text-diff-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>