<script setup>
import { ref } from 'vue';
import Copy from '@/components/icon/Copy.vue';
import { copyToClip } from '@/assets/global/utils.js';

const props = defineProps({
    title: {
        type: String,
        default: null
    },
});

const codeBlockRef = ref();
const hasCodeTitle = props.title !== null;
const contentClass = hasCodeTitle ? "cp-code-content" : "cp-code-content cp-code-content-without-title";

function copyCodeContent() {
    const codeBlockDom = codeBlockRef.value;
    const content = codeBlockDom.querySelector(".cp-code-content").innerText;
    copyToClip(content, "复制成功！");
}
</script>

<template>
    <div class="cp-code-block" ref="codeBlockRef">
        <div class="cp-code-title" v-if="hasCodeTitle">{{ props.title }}</div>
        <div :class="contentClass">
            <slot></slot>
        </div>
        <div class="cp-code-copy" @click="copyCodeContent">
            <Copy />
        </div>
    </div>
</template>

<style lang="scss">
.cp-code-block {
    position: relative;
    border-radius: 0.5rem;
}

.cp-code-title {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-top-left-radius: .75rem;
    border-top-right-radius: .75rem;
    background-color: rgb(230, 240, 249);
}

.cp-code-content {
    padding: 0.75rem 3.5rem 0.75rem 1rem;
    border-bottom-left-radius: .75rem;
    border-bottom-right-radius: .75rem;
    background-color: rgb(242, 247, 252);
    overflow-x: auto;
}

.cp-code-content.cp-code-content-without-title {
    border-top-left-radius: .75rem;
    border-top-right-radius: .75rem;
}

.cp-theme-dark .cp-code-title {
    background-color: rgb(40, 53, 62);
}

.cp-theme-dark .cp-code-content {
    background-color: rgb(29, 36, 41);
}

.cp-code-copy {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.625rem;
    right: 0.75rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-color: rgb(229, 239, 249);
    border-radius: 0.5rem;

    svg {
        width: 1.25rem;
        stroke: rgb(99, 85, 99);
    }
}

.cp-code-copy:hover {
    svg {
        stroke: rgb(26, 24, 39);
    }
}

.cp-theme-dark .cp-code-copy {
    background-color: rgb(40, 53, 61);

    svg {
        stroke: rgb(156, 154, 156);
    }
}

.cp-theme-dark .cp-code-copy:hover {
    svg {
        stroke: rgb(239, 231, 234);
    }
}
</style>