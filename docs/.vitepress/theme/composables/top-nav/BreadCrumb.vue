<script>
// 如果 link 为 null，则后续不会生成链接
function setBreadcrumbItem(link, text) {
    return {
        "link": link,
        "text": text
    };
}

function getBreadcrumbArr(moduleCode, finalTitle, path) {

    if (!moduleCode || moduleCode === "") {
        console.error("[clashpost error] 文章 " + path + " 的 module 值不存在，面包屑导航无法加载");
        return;
    }

    // 所有带有面包屑导航的页面都可以返回首页
    let items = new Array();
    items[0] = setBreadcrumbItem("/", "首页");
    
    // 根据不同的 moduleCode 分类讨论，其中外的 if 确定模块，内层的 switch 确定子模块
    if (moduleCode === "apk") {
        items[1] = setBreadcrumbItem(null, "安装包下载");

    } else if (moduleCode === "upgrade") {
        items[1] = setBreadcrumbItem(null, "升级数据");

    } else if (moduleCode === "posts") {
        items[1] = setBreadcrumbItem(null, "攻略教程");

    } else if (moduleCode === "faq") {
        items[1] = setBreadcrumbItem(null, "联系我们");

    } else if (moduleCode === "settings") {
        items[1] = setBreadcrumbItem(null, "设置");

    } else if (moduleCode.startsWith("upgrade-")) {
        items[1] = setBreadcrumbItem("/upgrade", "升级数据");
        if (path.startsWith("upgrade/category/")) {
            // 如果是分类页面，则面包屑导航不再显示标题
            switch (moduleCode) {
                case "upgrade-home":
                    items[2] = setBreadcrumbItem(null, "家乡");
                    break;
                case "upgrade-bh":
                    items[2] = setBreadcrumbItem(null, "夜世界");
                    break;
                case "upgrade-capital":
                    items[2] = setBreadcrumbItem(null, "都城");
                    break;
                case "upgrade-temp":
                    items[2] = setBreadcrumbItem(null, "临时单位");
                    break;
                case "upgrade-level":
                    items[2] = setBreadcrumbItem(null, "按大本等级分类");
                    break;
                default:
                    console.error("[clashpost error] 检测到未知模块，面包屑导航加载失败，请检查 frontmatter 中的 module 值 (" + moduleCode + ") 是否正确");
                    return;
            }
        } else {
            switch (moduleCode) {
                case "upgrade-home":
                    items[2] = setBreadcrumbItem("/upgrade/category/home", "家乡");
                    break;
                case "upgrade-bh":
                    items[2] = setBreadcrumbItem("/upgrade/category/bh", "夜世界");
                    break;
                case "upgrade-capital":
                    items[2] = setBreadcrumbItem("/upgrade/category/capital", "都城");
                    break;
                case "upgrade-temp":
                    items[2] = setBreadcrumbItem("/upgrade/category/temp", "临时单位");
                    break;
                case "upgrade-level":
                    items[2] = setBreadcrumbItem("/upgrade/category/level", "按大本等级分类");
                    break;
                default:
                    console.error("[clashpost error] 检测到未知模块，面包屑导航加载失败，请检查 frontmatter 中的 module 值 (" + moduleCode + ") 是否正确");
                    return;
            }
            items[3] = setBreadcrumbItem(null, finalTitle);
        }

    } else if (path.startsWith("p/category/")) {
        // 这里比较特殊，如果是文章的分类，则需要根据路径（path）确定实际模块
        items[1] = setBreadcrumbItem("/p", "攻略教程");
        const moduleInFact = path.split(/[\/\.]/)[2];
        switch (moduleInFact) {
            case "starter":
                items[2] = setBreadcrumbItem(null, "新手入门");
                break;
            case "advanced":
                items[2] = setBreadcrumbItem(null, "进阶攻略");
                break;
            case "knowledge":
                items[2] = setBreadcrumbItem(null, "游戏机制");
                break;
            case "material":
                items[2] = setBreadcrumbItem(null, "游戏素材");
                break;
            case "defense":
                items[2] = setBreadcrumbItem(null, "布阵和防守");
                break;
            case "bh":
                items[2] = setBreadcrumbItem(null, "夜世界");
                break;
            case "capital":
                items[2] = setBreadcrumbItem(null, "都城");
                break;
            case "storm":
                items[2] = setBreadcrumbItem(null, "风暴之后");
                break;
            case "archive":
                items[2] = setBreadcrumbItem(null, "历史档案");
                break;
            case "uncategorized":
                items[2] = setBreadcrumbItem(null, "未分类");
                break;
            default:
                console.error("[clashpost error] 检测到未知模块，面包屑导航加载失败，请检查 frontmatter 中的 module 值 (" + moduleCode + ") 是否正确");
                return;
        }

    } else if (moduleCode.startsWith("posts-")) {
        items[1] = setBreadcrumbItem("/p", "攻略教程");
        if (moduleCode === "posts-author") {
            items[2] = setBreadcrumbItem(null, "个人主页");
        } else {
            switch (moduleCode) {
                case "posts-starter":
                    items[2] = setBreadcrumbItem("/p/category/starter", "新手入门");
                    break;
                case "posts-advanced":
                    items[2] = setBreadcrumbItem("/p/category/advanced", "进阶攻略");
                    break;
                case "posts-knowledge":
                    items[2] = setBreadcrumbItem("/p/category/knowledge", "游戏机制");
                    break;
                case "posts-material":
                    items[2] = setBreadcrumbItem("/p/category/material", "游戏素材");
                    break;
                case "posts-defense":
                    items[2] = setBreadcrumbItem("/p/category/defense", "布阵和防守");
                    break;
                case "posts-bh":
                    items[2] = setBreadcrumbItem("/p/category/bh", "夜世界");
                    break;
                case "posts-capital":
                    items[2] = setBreadcrumbItem("/p/category/capital", "都城");
                    break;
                case "posts-storm":
                    items[2] = setBreadcrumbItem("/p/category/storm", "风暴之后");
                    break;
                case "posts-archive":
                    items[2] = setBreadcrumbItem("/p/category/archive", "历史档案");
                    break;
                case "posts-uncategorized":
                    items[2] = setBreadcrumbItem("/p/category/uncategorized", "未分类");
                    break;
                default:
                    console.error("[clashpost error] 检测到未知模块，面包屑导航加载失败，请检查 frontmatter 中的 module 值 (" + moduleCode + ") 是否正确");
                    return;
            }
            items[3] = setBreadcrumbItem(null, finalTitle);
        }

    } else {
        console.error("[clashpost error] 检测到未知模块，面包屑导航加载失败，请检查 frontmatter 中的 module 值 (" + moduleCode + ") 是否正确");
        return;
    }

    return items;
}
</script>

<script setup>
import { ref, watch } from "vue";
import { useData, useRouter, inBrowser } from "vitepress";
import BreadcrumbItem from "@/composables/top-nav/BreadCrumbItem.vue";

const props = defineProps({
    module: {
        type: String,
        required: true
    }
});

const { frontmatter } = useData();

function getBreadcrumbItems(path) {
    // 模块的内部名称
    const moduleCode = props.module;

    // 文章标题（只有文章详情页才使用这个标题）
    const title = frontmatter.value.title;
    const navTitle = frontmatter.value.navTitle;
    let displayTitle = navTitle ? navTitle : title;
    if (displayTitle.length > 10) {
        displayTitle = displayTitle.substring(0, 9) + "…";
    }

    // 根据已有信息确定面包屑导航的内容
    return getBreadcrumbArr(moduleCode, displayTitle, path);
}

const router = useRouter();
const routePath = router.route.data.relativePath;
let breadcrumbItems = getBreadcrumbItems(routePath);
let breadcrumbKey = ref(0);

// 当链接变化时刷新面包屑导航
// 如果将刷新逻辑都写入 watch 里，并将 immediate 设置为 true，那也可以得到同样的效果，
// 但这样会导致生成静态文件时面包屑导航是空的，进而导致 Hydration Mismatch.
if (inBrowser) {
    watch(() => router.route.data.relativePath, (path) => {
        breadcrumbItems = getBreadcrumbItems(path); // <= 重新获取目录结构
        breadcrumbKey.value++; // <= 刷新面包屑导航
    }, { immediate: false });
}
</script>

<template>
    <div id="cp-breadcrumb">
        <BreadcrumbItem :key="breadcrumbKey" :breadcrumbItems="breadcrumbItems" />
    </div>
</template>

<style lang="scss">
#cp-breadcrumb {
    display: flex;
    overflow-x: auto;
    margin: 1rem 0 0.5rem 0;
}
</style>