<script setup>
import { useRouter, useData } from 'vitepress';
import HTTPNotFound from '@/layouts/HTTPNotFound.vue';
import General from '@/layouts/General.vue';
import Posts from '@/layouts/Posts.vue';

const router = useRouter();
const { page } = useData();

const link = router.route.data.relativePath;
const isPostPage = link && (link.startsWith('p/') || link === "p.md");
</script>

<template>
    <HTTPNotFound v-if="page.isNotFound" />
    <Posts v-else-if="isPostPage" />
    <General v-else />
</template>