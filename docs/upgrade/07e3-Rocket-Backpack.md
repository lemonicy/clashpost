---
title: "部落冲突 coc 火箭背包装备升级数据"
navTitle: "火箭背包"
shownTitle: "火箭背包"
description: "火箭背包是飞龙公爵的第一件史诗装备。使用后，飞龙公爵会沿直线飞向基地中心并穿越整座基地，对路径上的目标造成伤害。除此之外，火箭背包还会提升飞龙公爵的每秒伤害、生命值和开启技能后的生命值恢复。"
module: upgrade-home
imgFolder: home_heroes/07e3
wiki: https://clashofclans.fandom.com/wiki/Rocket_Backpack
canonical: /upgrade/07e3-Rocket-Backpack
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rocket_Backpack_info.png" :imgAlt="$frontmatter.navTitle" description="让飞龙公爵沿直线穿越整个基地，同时对路径上的目标造成伤害。" />

<SmallTitle>说明</SmallTitle>

1. 火箭背包是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的第一件史诗装备，于 2026 年 4 月的 Sound of Clash 活动中开放获取。
2. 使用时，飞龙公爵会沿直线飞行，穿越整座基地，并对路径上的所有目标造成伤害。
3. 飞行期间，飞龙公爵不会被选为目标，也不会触发陷阱或部落城堡援军，但会触发隐形特斯拉出现。
4. 除了主动技能外，火箭背包还会提升飞龙公爵的每秒伤害、生命值，以及开启技能后的生命值恢复。
5. 目前国服截图中的 24 ~ 27 级数据仍为削弱前版本，具体削弱时间未知。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
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
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |主动技能<br>伤害|生命值恢复|每秒伤害值提升|生命值提升|闪亮矿石|璀璨矿石|星辉矿石|所需铁匠铺等级|
|  --- |    ---     |   ---   |     ---     |   ---   |  ---  |  ---  |  ---  |      ---      |
|   1  |     575    |   300   |      20      |   900   |  N/A  |  N/A  |  N/A  |      N/A      |
|   2  |     575    |   380   |      23      |   988   |  120  |   -   |   -   |       1       |
|   3  |     750    |   460   |      26      |  1077   |  240  |   20  |   -   |       1       |
|   4  |     750    |   540   |      29      |  1165   |  400  |   -   |   -   |       1       |
|   5  |     750    |   620   |      32      |  1254   |  600  |   -   |   -   |       1       |
|   6  |     950    |   700   |      35      |  1342   |  840  |  100  |   -   |       1       |
|   7  |     950    |   780   |      38      |  1431   | 1120  |   -   |   -   |       1       |
|   8  |     950    |   860   |      41      |  1519   | 1440  |   -   |   -   |       1       |
|   9  |    1125    |   940   |      44      |  1608   | 1800  |  200  |  10   |       1       |
|  10  |    1125    |  1020   |      47      |  1696   | 1900  |   -   |   -   |       1       |
|  11  |    1125    |  1100   |      50      |  1785   | 2000  |   -   |   -   |       1       |
|  12  |    1325    |  1180   |      53      |  1873   | 2100  |  400  |  20   |       1       |
|  13  |    1325    |  1260   |      56      |  1962   | 2200  |   -   |   -   |       3       |
|  14  |    1325    |  1340   |      59      |  2050   | 2300  |   -   |   -   |       3       |
|  15  |    1500    |  1420   |      62      |  2139   | 2400  |  600  |  30   |       3       |
|  16  |    1500    |  1500   |      64      |  2227   | 2500  |   -   |   -   |       5       |
|  17  |    1500    |  1580   |      66      |  2316   | 2600  |   -   |   -   |       5       |
|  18  |    1700    |  1660   |      68      |  2404   | 2700  |  600  |  50   |       5       |
|  19  |    1700    |  1740   |      70      |  2493   | 2800  |   -   |   -   |       7       |
|  20  |    1700    |  1800   |      72      |  2581   | 2900  |   -   |   -   |       7       |
|  21  |    1925    |  1860   |      74      |  2670   | 3000  |  600  | 100   |       7       |
|  22  |    1925    |  1910   |      76      |  2758   | 3100  |   -   |   -   |       8       |
|  23  |    1925    |  1950   |      78      |  2847   | 3200  |   -   |   -   |       8       |
|  24  |    2050    |  1975   |      80      |  2935   | 3300  |  600  | 120   |       8       |
|  25  |    2050    |  1990   |      82      |  3024   | 3400  |   -   |   -   |       9       |
|  26  |    2050    |  1995   |      84      |  3112   | 3500  |   -   |   -   |       9       |
|  27  |    2200    |  2000   |      86      |  3200   | 3600  |  600  | 150   |       9       |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/08">
        <TimelineRow>火箭背包在 Sound of Clash 活动中开放获取。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/03/19">
        <TimelineRow>24 ~ 27 级火箭背包的主动技能伤害下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/02/23">
        <TimelineRow>新装备数据加入游戏文件。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
