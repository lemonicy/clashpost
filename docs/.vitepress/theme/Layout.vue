<script setup>
import { useRouter, useData } from "vitepress";
import HTTPNotFound from "@/layouts/HTTPNotFound.vue";
import General from "@/layouts/General.vue";
import Posts from "@/layouts/Posts.vue";

const router = useRouter();
const { page } = useData();
</script>

<template>
    <HTTPNotFound v-if="page.isNotFound" />
    <Posts v-else-if="router.route.data.relativePath.startsWith('p/') || router.route.data.relativePath === 'p.md'" />
    <General v-else />
</template>