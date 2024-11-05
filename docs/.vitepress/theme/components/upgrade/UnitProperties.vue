<template>
    <div class="cp-unit-properties">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-unit-properties {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    border-radius: 0.5rem;
    overflow: hidden; /* 遮住重叠的边框 */
    border: var(--cp-border-light);
}

@media (min-width: $cp-col-phone-large) {
    .cp-unit-properties {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: $cp-col-laptop) {
    .cp-unit-properties {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

.cp-theme-dark .cp-unit-properties {
    border: var(--cp-border-dark);
}
</style>