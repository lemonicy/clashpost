<script setup>
import { useData, useRouter } from 'vitepress';
import HTTPNotFound from '@/layouts/HTTPNotFound.vue';
import General from '@/layouts/General.vue';

const { page } = useData();
</script>

<template>
    <HTTPNotFound v-if="page.isNotFound" />
    <General v-else />
</template>