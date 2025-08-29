<script setup>
const props = defineProps({
    link: {
        type: String,
        default: null
    },
    style: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    src: {
        type: String,
        default: null
    },
    lazyLoading: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <a class="cp-vh-card-link" :href="props.link">
        <div class="cp-vh-card" :style="props.style">
            <div class="cp-vh-card-title">{{ props.title }}</div>
            <div class="cp-vh-card-img-container">
                <Pic :src="props.src" :alt="props.title" width="720" height="480" />
            </div>
        </div>
    </a>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-vh-card {
    /* 让文字在上边，图片在下边 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* 固定卡片高度 */
    text-decoration: none;
    overflow: hidden;
    border-radius: 1rem;
    border: 0.05rem solid rgb(229, 231, 235);

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .12) , 0 4px 6px -4px rgba(0, 0, 0, .12);
    }

    .cp-vh-card-img-container figure {
        margin: 0;
    }

    .cp-vh-card-img-container img {
        border-radius: 0;
        aspect-ratio: 3 / 2;
        object-fit: cover;
    }
}

.cp-theme-dark .cp-vh-card {
    border: 0.05rem solid rgb(42, 42, 42);

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(255, 255, 255, .08) , 0 4px 6px -4px rgba(255, 255, 255, .08);
    }
}

.cp-vh-card-link:focus .cp-vh-card {
    outline: 0.1rem solid var(--cp-primary-light);
}

.cp-theme-dark .cp-vh-card-link:focus .cp-vh-card {
    outline: 0.1rem solid var(--cp-primary-dark);
}

.cp-vh-card-title {
    line-height: 1.5rem;
    font-size: 1.375rem;
    padding: 0.5rem 0.75rem;
}

@media (min-width: $cp-col-tablat-big) {
    .cp-vh-card-title {
        font-size: 1.5rem;
        padding: 0.75rem 1rem;
    }
}
</style>