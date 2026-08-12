<script setup>
import Head from "@/composables/Head.vue";
import SidebarLeft from "@/composables/sidebar/SidebarLeft.vue";
import GlobalBanner from "../customized/GlobalBanner.vue";
import UpgradeBanner from "@/customized/upgrade/UpgradeBanner.vue";
import TopNav from "@/composables/top-nav/TopNav.vue";
import PageTitle from "@/composables/PageTitle.vue";
import Main from "@/composables/Main.vue";
import Footer from "@/composables/Footer.vue";
import SidebarRight from "@/composables/sidebar/SidebarRight.vue";
import UpgradeDialog from "@/customized/upgrade/UpgradeDialog.vue";
import NetworkWarning from "@/components/common/NetworkWarning.vue";
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <GlobalBanner :link="$frontmatter.canonical" />
        <UpgradeBanner :link="$frontmatter.canonical" />
        <TopNav />
        <PageTitle v-if="!$frontmatter.customTitle" />
        <Main />
        <Footer />
    </main>
    <SidebarRight />
    <UpgradeDialog :link="$frontmatter.canonical" />
    <NetworkWarning />
</template>

<style lang="scss">
.cp-top-callout {
    margin-bottom: -0.5rem;
}
</style>
