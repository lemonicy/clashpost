<script setup>
import { useRouter, useData } from "vitepress";
import HTTPNotFound from "@/layouts/HTTPNotFound.vue";
import Posts from "@/layouts/Posts.vue";
import Upgrade from "@/layouts/Upgrade.vue";
import Basic from "@/layouts/Basic.vue";

const router = useRouter();
const { page } = useData();
</script>

<template>
    <HTTPNotFound v-if="page.isNotFound" />
    <Posts v-else-if="router.route.data.relativePath.startsWith('p/')" />
    <Upgrade v-else-if="router.route.data.relativePath.startsWith('upgrade/')" />
    <Basic v-else />
</template>