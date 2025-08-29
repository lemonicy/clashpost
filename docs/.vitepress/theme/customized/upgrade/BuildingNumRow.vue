<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    num: {
        type: String,
        required: true
    }
})

const numArr = props.num.split(",");
</script>

<template>
    <tr>
        <td v-html="props.title"></td>
        <td v-for="num in numArr">{{ num.trim() }}</td>
    </tr>
</template>