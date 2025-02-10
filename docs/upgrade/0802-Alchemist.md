---
title: "部落冲突 coc 炼金术士升级数据"
navTitle: "炼金术士"
shownTitle: "炼金术士"
description: ""
module: upgrade-home
imgFolder: home_tech/0802
wiki: https://clashofclans.fandom.com/wiki/Alchemist
canonical: /upgrade/0802-Alchemist
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Alchemist_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 炼金术士在家乡 [大本营](/upgrade/0400-Town-Hall) 达到 11 级后可以解锁。
2. 解锁后，炼金术士可以立即将该仓库的一部分资源转化为另一种资源。
    - 炼金术士的转化是立即完成的，游戏内播放的一小时动画并没有实际作用。
    - 炼金术士的冷却时间为 23 小时。
3. 转化后的资源最多为满库，游戏没给你溢出的选项。
4. 在下方的升级数据表中，转化率 110% 的意思是可以将 150 万金币转化为 165 万圣水或 1.1 万黑油。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gem",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每次转化上限<br>(金币和圣水)|每次转化上限<br>(黑油)| 转化率 | 升级费用 | 所需大本等级 |
|  --- |            ---           |          ---        |  ---  |   ---   |    ---      |
|   1  |          150 万          |         1 万        |  101% |   100   |     11      |
|   2  |          225 万          |       1.5 万        |  102% |   250   |     12      |
|   3  |          300 万          |         2 万        |  104% |   500   |     13      |
|   4  |          450 万          |         3 万        |  105% |  1000   |     14      |
|   5  |          600 万          |         4 万        |  107% |  1000   |     15      |
|   6  |          750 万          |         5 万        |  109% |  1500   |     16      |
|   7  |         1050 万          |         7 万        |  110% |  1500   |     17      |
</UnitTable>