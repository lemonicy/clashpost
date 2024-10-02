<template>
    <h2 class="cp-small-subtitle">
        <slot></slot>
    </h2>
</template>

<style lang="scss">
.cp-small-subtitle {
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem 0.125rem;
    padding-bottom: 0;
    color: rgb(75, 85, 99);
}

.cp-theme-dark .cp-small-subtitle {
    color: rgb(175, 180, 185);
}

h2, h3, h4, h5, h6 {
    &.cp-small-subtitle {
        border: none;
    }
}

.cp-units-container .cp-small-subtitle {
    margin: 0 0 1rem 0.125rem;
}
</style>