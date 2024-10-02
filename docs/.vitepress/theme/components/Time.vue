<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { getISOTimeStr, getTimeStr } from '@/assets/global/datetime.js';

const props = defineProps({
    datetime: {
        type: [String, Number],
        required: true
    }
})

const timeDomRef = ref();
const resolvedTime = getISOTimeStr(props.datetime);
const postTimeText = getTimeStr(props.datetime);

// 由于时区的关系，不同的地区加载出的字符串不一样，会导致除了和作者相同时区的玩家外全部报 Hydration Mismatch
// 这里在 DOM 加载完毕后才写入最近更新时间，避免因为 Hydration Mismatch 导致页面整体重绘。
onMounted(() => {
    nextTick(() => {
        const timeDom = timeDomRef.value;
        timeDom.innerHTML = postTimeText;
    })
})
</script>

<template>
    <time :datetime="resolvedTime" ref="timeDomRef">加载中</time>
</template>