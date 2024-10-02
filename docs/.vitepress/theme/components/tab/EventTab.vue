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