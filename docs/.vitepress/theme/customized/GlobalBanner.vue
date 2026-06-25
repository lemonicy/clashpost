<script setup>
import Callout from "@/components/Callout.vue";

const props = defineProps({
    link: {
        type: String,
    }
});

const link = props.link;
const ifApkDownloading = link === "/apk" || false;
</script>

<template>
    <Callout type="warning" class="cp-callout-global-mark" v-if="!ifApkDownloading">
        除“安装包下载”版块外，网站已不再维护。如想查看游戏数据，请前往
        <a href="https://clashofclans.fandom.com/wiki/Clash_of_Clans_Wiki" target="_blank" rel="nofollow noreferrer">
            Clash of Clans Wiki (英文)
        </a>。
    </Callout>
</template>

<style>
    .cp-callout-global-mark {
        margin: 1rem 0 -0.5rem 0;
    }
</style>