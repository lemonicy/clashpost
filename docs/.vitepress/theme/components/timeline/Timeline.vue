<template>
    <div class="cp-timeline">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-timeline {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: 0;
    margin-bottom: -1rem;
}

@media (min-width: $cp-col-tablat-big) {
    .cp-timeline {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>