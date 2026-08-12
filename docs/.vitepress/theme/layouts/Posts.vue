<script setup>
import Head from "@/composables/Head.vue";
import SidebarLeft from "@/composables/sidebar/SidebarLeft.vue";
import GlobalBanner from "../customized/GlobalBanner.vue";
import PostBanner from "@/customized/posts/PostBanner.vue";
import TopNav from "@/composables/top-nav/TopNav.vue";
import PageTitle from "@/composables/PageTitle.vue";
import PageInfoPost from "@/customized/posts/PageInfoPost.vue";
import Main from "@/composables/Main.vue";
import Footer from "@/composables/Footer.vue";
import SidebarRight from "@/composables/sidebar/SidebarRight.vue";
import NetworkWarning from "@/components/common/NetworkWarning.vue";
import { isSinglePost } from "@/assets/global/common.js";
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <GlobalBanner :link="$frontmatter.canonical" />
        <PostBanner :link="$frontmatter.canonical" v-if="isSinglePost($frontmatter.canonical)" />
        <TopNav />
        <PageTitle v-if="!$frontmatter.customTitle" />
        <PageInfoPost :link="$frontmatter.canonical" v-if="isSinglePost($frontmatter.canonical)" />
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
