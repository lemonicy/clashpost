<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vitepress";
import Head from "@/composables/Head.vue";
import SidebarLeft from "@/composables/sidebar/SidebarLeft.vue";
import TopNav from "@/composables/top-nav/TopNav.vue";
import PostBanner from "@/customized/posts/PostBanner.vue";
import PageTitle from "@/composables/PageTitle.vue";
import PageInfoPost from "@/customized/posts/PageInfoPost.vue";
import Main from "@/composables/Main.vue";
import Footer from "@/composables/Footer.vue";
import SidebarRight from "@/composables/sidebar/SidebarRight.vue";
import NetworkWarning from "@/components/common/NetworkWarning.vue";
import { isSinglePost } from "@/assets/global/common.js";

const router = useRouter();

let postBannerKey = ref(0);
let pageTitleKey = ref(0);
let pageInfoPostKey = ref(0);

watch(() => router.route.data.relativePath, (path) => {
    postBannerKey.value++;
    pageTitleKey.value++;
    pageInfoPostKey.value++;
}, { immediate: false });
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <TopNav />
        <PostBanner :key="'postBanner-' + postBannerKey" :link="$frontmatter.canonical" v-if="isSinglePost($frontmatter.canonical)" />
        <PageTitle :key="'pageTitle-' + pageTitleKey" v-if="!$frontmatter.customTitle" />
        <PageInfoPost :key="'pageInfoPost-' + pageInfoPostKey" :link="$frontmatter.canonical" v-if="isSinglePost($frontmatter.canonical)" />
        <Main />
        <Footer />
    </main>
    <SidebarRight />
    <NetworkWarning />
</template>

<style lang="scss">
.cp-top-callout {
    margin-bottom: -0.5rem;
}
</style>