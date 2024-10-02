---
title: "部落冲突 coc 生命宝石装备升级数据"
navTitle: "生命宝石"
shownTitle: "生命宝石"
description: "生命宝石是大守护者的两件初始装备之一。生命宝石装备可以在大守护者周围投射出魔法光环，当我方部队在光环内时，它们会获得额外的生命值。当守护者学徒的光环与生命宝石装备的光环叠加时，以加血百分比高的那个为准。"
module: upgrade-home
imgFolder: home_heroes/0781
wiki: https://clashofclans.fandom.com/wiki/Life_Gem
canonical: /upgrade/0781-Life-Gem
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Life_Gem_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 生命宝石是 [大守护者](/upgrade/0202-Grand-Warden) 的两件初始装备之一，另一件是 [永恒书卷](/upgrade/0780-Eternal-Tome)。
2. 生命宝石装备可以在大守护者周围投射出魔法光环，当我方部队在光环内时，它们会获得额外的生命值。
3. 生命宝石装备可以让大守护者自己获得更高的每秒伤害和生命值，但这不是光环的效果，是装备本身的属性。
4. 当 [守护者学徒](/upgrade/0089-Apprentice-Warden) 的光环与生命宝石装备的光环叠加时，以加血百分比高的那个为准。守护者学徒的光环在生命值更高的单位上会更强，因为守护者学徒的加血没有上限。
5. 什么是加血上限呢？假如你的生命宝石装备是 18 级，加血比例 100%，上限 725. 现在你有个 100 血的兵，加血 100% 就是提升 100 滴血，这个数字没有超过 725 的上限，所以最后这个兵在大守护者的光环下可以实实在在地加 100 滴血。但是如果你这个兵有 10 000 滴血呢？10 000 滴血明显超过了 725 的上限，因此最后这个兵在光环下只能加 725 血。这就是所谓的上限。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有咏王即可" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |光环加血<br>百分比|光环加血<br>上限|英雄每秒<br>伤害增加|英雄生命值<br>增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---      |      ---      |        ---        |       ---      |   ---  |  ---  |       ---       |       ---     |
|   1  |       40%      |      330      |         10        |       150      |    \   |   \   |        1        |       11      |
|   2  |       40%      |      330      |         12        |       163      |   120  |   -   |        1        |       11      |
|   3  |       50%      |      420      |         14        |       172      |   240  |   20  |        1        |       11      |
|   4  |       50%      |      420      |         16        |       181      |   400  |   -   |        1        |       11      |
|   5  |       50%      |      420      |         18        |       192      |   600  |   -   |        1        |       11      |
|   6  |       60%      |      510      |         20        |       203      |   840  |  100  |        1        |       11      |
|   7  |       60%      |      510      |         22        |       225      |  1120  |   -   |        1        |       11      |
|   8  |       60%      |      510      |         24        |       249      |  1440  |   -   |        1        |       11      |
|   9  |       70%      |      600      |         28        |       275      |  1800  |  200  |        1        |       11      |
|  10  |       70%      |      600      |         32        |       304      |  1900  |   -   |        3        |       11      |
|  11  |       70%      |      600      |         38        |       336      |  2000  |   -   |        3        |       11      |
|  12  |       80%      |      690      |         42        |       351      |  2100  |  400  |        3        |       11      |
|  13  |       80%      |      690      |         46        |       366      |  2200  |   -   |        5        |       12      |
|  14  |       80%      |      690      |         50        |       381      |  2300  |   -   |        5        |       12      |
|  15  |       90%      |      780      |         54        |       396      |  2400  |  600  |        5        |       12      |
|  16  |       90%      |      780      |         58        |       411      |  2500  |   -   |        7        |       14      |
|  17  |       90%      |      780      |         62        |       426      |  2600  |   -   |        7        |       14      |
|  18  |      100%      |      870      |         66        |       441      |  2700  |  600  |        7        |       14      |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>
2. 如果玩家升级到了 11 本并解锁了大守护者，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级生命宝石装备。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁大守护者的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 大守护者等级 | 生命宝石等级 |
|     ---     |     ---     |
|    1 - 3    |      1      |
|    4 - 5    |      2      |
|    6 - 7    |      3      |
|    8 - 9    |      4      |
|   10 - 11   |      5      |
|   12 - 13   |      6      |
|   14 - 15   |      7      |
|   16 - 20   |      8      |
|   21 - 30   |      9      |
|   31 - 35   |     10      |
|   36 - 40   |     11      |
|   41 - 45   |     12      |
|   46 - 50   |     13      |
|   51 - 55   |     14      |
|   56 - 65   |     15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>所有等级生命宝石装备的光环加血上限提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，生命宝石是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>