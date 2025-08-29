<template>
    <div class="cp-vh-card-grid">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

/* 历史版本（Verison History）卡片的网格 */
.cp-vh-card-grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    a {
        color: inherit;
    }

    a:hover, a:focus {
        text-decoration: none;
    }
}

@media (min-width: 360px) {
    .cp-vh-card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: $cp-col-tablat-big) {
    .cp-vh-card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: $cp-col-deskop) {
    .cp-vh-card-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>