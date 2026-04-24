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

1. 火箭背包是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的第一件史诗装备，于 2026 年 4 月的冲突之声活动中开放获取。
2. 使用时，飞龙公爵会沿直线飞行，穿越整座基地，并对路径上的所有目标造成伤害。
3. 飞行期间，飞龙公爵不会被选为目标，也不会触发陷阱或部落城堡援军，但会触发特斯拉电磁塔。
4. 除了主动技能外，火箭背包还会提升飞龙公爵的每秒伤害、生命值，以及开启技能后的生命值恢复量。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="伤害半径" pValue="4 格" />
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

| 等级 |主动技能<br>伤害|每秒伤害值<br>提升|生命值<br>增加|生命值<br>恢复量增加|闪亮矿石|璀璨矿石|星辉矿石|所需铁匠铺等级|
|  --- |     ---      |       ---       |      ---    |        ---        |   ---  |  ---  |  ---  |     ---     |
|   1  |      575     |        20       |      900    |         300       |    \   |   \   |   \   |      \      |
|   2  |      575     |        23       |      988    |         380       |   120  |   -   |   -   |      1      |
|   3  |      750     |        26       |     1077    |         460       |   240  |   20  |   -   |      1      |
|   4  |      750     |        29       |     1165    |         540       |   400  |   -   |   -   |      1      |
|   5  |      750     |        32       |     1254    |         620       |   600  |   -   |   -   |      1      |
|   6  |      950     |        35       |     1342    |         700       |   840  |  100  |   -   |      1      |
|   7  |      950     |        38       |     1431    |         780       |  1120  |   -   |   -   |      1      |
|   8  |      950     |        41       |     1519    |         860       |  1440  |   -   |   -   |      1      |
|   9  |     1125     |        44       |     1608    |         940       |  1800  |  200  |  10   |      1      |
|  10  |     1125     |        47       |     1696    |        1020       |  1900  |   -   |   -   |      1      |
|  11  |     1125     |        50       |     1785    |        1100       |  2000  |   -   |   -   |      1      |
|  12  |     1325     |        53       |     1873    |        1180       |  2100  |  400  |  20   |      1      |
|  13  |     1325     |        56       |     1962    |        1260       |  2200  |   -   |   -   |      3      |
|  14  |     1325     |        59       |     2050    |        1340       |  2300  |   -   |   -   |      3      |
|  15  |     1500     |        62       |     2139    |        1420       |  2400  |  600  |  30   |      3      |
|  16  |     1500     |        64       |     2227    |        1500       |  2500  |   -   |   -   |      5      |
|  17  |     1500     |        66       |     2316    |        1580       |  2600  |   -   |   -   |      5      |
|  18  |     1700     |        68       |     2404    |        1660       |  2700  |  600  |  50   |      5      |
|  19  |     1700     |        70       |     2493    |        1740       |  2800  |   -   |   -   |      7      |
|  20  |     1700     |        72       |     2581    |        1800       |  2900  |   -   |   -   |      7      |
|  21  |     1925     |        74       |     2670    |        1860       |  3000  |  600  | 100   |      7      |
|  22  |     1925     |        76       |     2758    |        1910       |  3100  |   -   |   -   |      8      |
|  23  |     1925     |        78       |     2847    |        1950       |  3200  |   -   |   -   |      8      |
|  24  |     2050     |        80       |     2935    |        1975       |  3300  |  600  | 120   |      8      |
|  25  |     2050     |        82       |     3024    |        1990       |  3400  |   -   |   -   |      9      |
|  26  |     2050     |        84       |     3112    |        1995       |  3500  |   -   |   -   |      9      |
|  27  |     2200     |        86       |     3200    |        2000       |  3600  |  600  | 150   |      9      |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/08">
        <TimelineRow>新装备：火箭背包。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
