---
title: "部落冲突升级数据"
shownTitle: "升级数据"
description: "在这里，你可以看到游戏内的各种数据，像升级要多久、多少资源这些写得清清楚楚，可以说是规划升级必备。"
module: upgrade
canonical: /upgrade
hasUpdateTime: false
---

<script setup>
import FeaturedCardGrid from "@/components/card/FeaturedCardGrid.vue";
import FeaturedCard from "@/components/card/FeaturedCard.vue";
</script>

<div style="margin-bottom: 1.5rem">
    在这里，你可以看到游戏内的各种数据，像升级要多久、多少资源这些写得清清楚楚，可以说是规划升级必备。
</div>

<FeaturedCardGrid>
    <FeaturedCard link="/upgrade/category/home" style="background: radial-gradient(ellipse at 50% 80%,rgba(144,238,144,0.15),hsla(0,0%,100%,0));"
        title="家乡" subtitle="游戏里永远的家"
        imgSrc="https://static.clashpost.com/upgrade/upgrade_home.jpg" />
    <FeaturedCard link="/upgrade/category/bh" style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
        title="夜世界" subtitle="海的对岸是什么呢"
        imgSrc="https://static.clashpost.com/upgrade/upgrade_bh.jpg" />
    <FeaturedCard link="/upgrade/category/capital" style="background: radial-gradient(ellipse at 50% 80%,rgba(255,99,71,0.15),hsla(0,0%,100%,0));"
        title="部落都城" subtitle="怎么有点像公会副本"
        imgSrc="https://static.clashpost.com/upgrade/upgrade_capital.jpg" />
    <FeaturedCard link="/upgrade/category/temp" style="background: radial-gradient(ellipse at 50% 80%,rgba(1,87,226,0.15),hsla(0,0%,100%,0));"
        title="临时单位" subtitle="曾经存在过的东西"
        imgSrc="https://static.clashpost.com/upgrade/upgrade_temp.jpg" />
    <FeaturedCard link="/upgrade/category/level" style="background: radial-gradient(ellipse at 50% 80%,rgba(128,0,128,0.15),hsla(0,0%,100%,0));"
        title="按大本等级分类" subtitle="该功能已废弃"
        imgSrc="https://static.clashpost.com/upgrade/upgrade_level.jpg" />
</FeaturedCardGrid>