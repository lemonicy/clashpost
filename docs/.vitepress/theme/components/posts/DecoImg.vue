<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    width: {
        type: String,
        default: ""
    },
    height: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <div class="cp-deco-img">
        <Pic :src="props.src" :caption="props.caption" :width="props.width" :height="props.height" />
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-deco-img {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 70px;
    margin: 0.5rem;

    figure.cp-img-container {
        margin: 0;

        img {
            max-width: 55px;
        }
    }

    figcaption {
        color: inherit;
        font-size: inherit;
    }
}

@media (min-width: $cp-col-tablat) {
    .cp-deco-img {
        width: 75px;
        margin: 0.75rem;

        figure.cp-img-container {
            img {
                max-width: 65px;
            }
        }
    }
}

@media (min-width: $cp-col-laptop) {
    .cp-deco-img {
        width: 80px;
        margin: 1rem;

        figure.cp-img-container {
            img {
                max-width: 75px;
            }
        }
    }
}
</style>