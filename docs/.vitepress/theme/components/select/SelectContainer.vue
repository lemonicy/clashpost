<script setup>
import Select from "@/components/select/Select.vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    selectId: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        default: ""
    },
    selectWidth: {
        type: String,
        default: "12rem"
    },
    activeValue: {
        type: [String, Number],
        default: 0
    },
    description: {
        type: String,
        default: null
    }
});
</script>

<template>
    <div class="cp-select-container">
        <div class="cp-select-title">{{ title }}</div>
        <Select :id="props.selectId" :aria-label="props.ariaLabel" :selectWidth="props.selectWidth" :activeValue="props.activeValue">
            <slot></slot>
        </Select>
        <div class="cp-select-description" v-if="props.description" v-html="description"></div>
    </div>
</template>

<style lang="scss">
.cp-select-container {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    justify-content: space-between;
}

@media (max-width: 359.99px) {
    .cp-select-container {
        display: block;
    }
}

.cp-select-title {
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: 700;
    color: rgb(75, 85, 99);
    margin: 0.5rem 0;
}

.cp-theme-dark .cp-select-title {
    color: rgb(175, 180, 185);
}

.cp-select-description {
    margin-top: 1rem;
    width: 100%;
}
</style>