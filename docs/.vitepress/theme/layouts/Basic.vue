<script setup>
import { nextTick, ref, watch } from "vue";
import { useRouter } from "vitepress";
import Head from "@/composables/Head.vue";
import SidebarLeft from "@/composables/sidebar/SidebarLeft.vue";
import GlobalBanner from "../customized/GlobalBanner.vue";
import TopNav from "@/composables/top-nav/TopNav.vue";
import PageTitle from "@/composables/PageTitle.vue";
import Main from "@/composables/Main.vue";
import Footer from "@/composables/Footer.vue";
import SidebarRight from "@/composables/sidebar/SidebarRight.vue";
import NetworkWarning from "@/components/common/NetworkWarning.vue";

const router = useRouter();

let globalBannerKey = ref(0);
let pageTitleKey = ref(0);

watch(() => router.route.data.relativePath, (path) => {
    nextTick(() => {
        globalBannerKey.value++;
        pageTitleKey.value++;
    });
}, { immediate: false });
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <GlobalBanner :key="'globalBanner-' + globalBannerKey" :link="$frontmatter.canonical" />
        <TopNav />
        <PageTitle :key="'pageTitle-' + pageTitleKey" v-if="!$frontmatter.customTitle" />
        <Main />
        <Footer />
    </main>
    <SidebarRight />
    <NetworkWarning />
</template>