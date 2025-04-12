<script setup>
const props = defineProps({
    activeTab: {
        type: Boolean,
        default: false
    }
});

const activeTab = props.activeTab;
const emits = defineEmits([
    "clickEvent"
]);
</script>

<template>
    <button :class="activeTab ? 'cp-tab cp-tab-active' : 'cp-tab'" @click="emits('clickEvent')">
        <slot></slot>
        <div class="cp-tab-bottom"></div>
    </button>
</template>

<style lang="scss">
button.cp-tab {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
</style>