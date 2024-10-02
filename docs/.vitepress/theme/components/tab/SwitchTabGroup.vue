<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div :id="props.id" :class="'cp-switch-tab-item ' + props.class">
        <slot></slot>
    </div>
</template>