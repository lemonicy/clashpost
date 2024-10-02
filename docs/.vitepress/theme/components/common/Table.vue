<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { formatTableData } from '@/assets/global/utils.js';

const props = defineProps({
    maxWidth: {
        type: String,
        default: null
    },
    stickyColumn: {
        type: Boolean,
        default: true
    }
});

const stickyColumn = props.stickyColumn;
let containerClass = "cp-table-container";
if (!stickyColumn) {
    containerClass += " cp-table-nosticky-column";
}

const maxWidth = props.maxWidth;
let styleAttr = "";
if (maxWidth) {
    styleAttr += "max-width: " + maxWidth;
}

const tableContainerRef = ref();

onMounted(() => {
    nextTick(() => {
        const table = tableContainerRef.value.querySelector("table");
        formatTableData(table);
    })
})
</script>

<template>
    <div :class="containerClass" :style="styleAttr" ref="tableContainerRef">
        <slot></slot>
    </div>
</template>