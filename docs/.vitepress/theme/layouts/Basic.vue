<script setup>
import Head from "@/composables/Head.vue";
import SidebarLeft from "@/composables/sidebar/SidebarLeft.vue";
import GlobalBanner from "../customized/GlobalBanner.vue";
import TopNav from "@/composables/top-nav/TopNav.vue";
import PageTitle from "@/composables/PageTitle.vue";
import Main from "@/composables/Main.vue";
import Footer from "@/composables/Footer.vue";
import SidebarRight from "@/composables/sidebar/SidebarRight.vue";
import NetworkWarning from "@/components/common/NetworkWarning.vue";
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <GlobalBanner :link="$frontmatter.canonical" />
        <TopNav />
        <PageTitle v-if="!$frontmatter.customTitle" />
        <Main />
        <Footer />
    </main>
    <SidebarRight />
    <NetworkWarning />
</template>
