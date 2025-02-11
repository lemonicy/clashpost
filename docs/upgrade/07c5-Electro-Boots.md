---
title: "部落冲突 coc 雷电战靴装备升级数据"
navTitle: "雷电战靴"
shownTitle: "雷电战靴"
description: "雷电战靴是飞盾战神的第二件史诗装备，它在 2024 年 12 月的大闹玩具店活动中首次开放购买。装备雷电战靴后，飞盾战神周围会形成雷电光环，对敌方单位造成持续伤害。除了雷电光环外，雷电战靴装备还可以为飞盾战神提供额外生命值，并让飞盾战神拥有自行回血的能力。"
module: upgrade-home
imgFolder: home_heroes/07c5
wiki: https://clashofclans.fandom.com/wiki/Electro_Boots
canonical: /upgrade/07c5-Electro-Boots
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electro_Boots_info.png" :imgAlt="$frontmatter.navTitle" description="每隔一段时间对飞盾战神附近的一切造成伤害。" />

<SmallTitle>说明</SmallTitle>

1. 雷电战靴是 [飞盾战神](/upgrade/0203-Royal-Champion) 的第二件史诗装备，它在 2024 年 12 月的大闹玩具店活动中首次开放购买。
2. 装备雷电战靴后，飞盾战神周围会形成雷电光环，对敌方单位造成持续伤害。
3. 除了雷电光环外，雷电战靴装备还可以为飞盾战神提供额外生命值，并让飞盾战神拥有自行回血的能力。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="光环半径" pValue="5 格" />
    <UnitProperty pKey="光环攻击速度" pValue="0.4 秒/次" />
</UnitProperties>

\* 在 2024 年 12 月的大闹玩具店活动中积攒 3 100 玩具奖章（活动货币）后去商人那里购买即可解锁。

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

| 等级 |光环<br>每秒伤害|光环<br>每次伤害|英雄<br>每秒回血|英雄<br>生命值增加| 升级费用| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
|  --- |      ---      |      ---     |      ---      |       ---       |   ---  |   ---  |   --- |       ---       |       ---     |
|   1  |      132      |      54.8    |        6      |        50       |    \   |    \   |   \   |        1        |       13      |
|   2  |      132      |      54.8    |        8      |        75       |   120  |    -   |   -   |        1        |       13      |
|   3  |      140      |      60      |       10      |       100       |   240  |    20  |   -   |        1        |       13      |
|   4  |      140      |      60      |       12      |       125       |   400  |    -   |   -   |        1        |       13      |
|   5  |      140      |      60      |       14      |       150       |   600  |    -   |   -   |        1        |       13      |
|   6  |      147      |      64.8    |       16      |       175       |   840  |   100  |   -   |        1        |       13      |
|   7  |      147      |      64.8    |       18      |       200       |  1120  |    -   |   -   |        1        |       13      |
|   8  |      147      |      64.8    |       20      |       225       |  1440  |    -   |   -   |        1        |       13      |
|   9  |      155      |      70      |       22      |       250       |  1800  |   200  |   10  |        1        |       13      |
|  10  |      155      |      70      |       24      |       275       |  1900  |    -   |   -   |        1        |       13      |
|  11  |      155      |      70      |       26      |       300       |  2000  |    -   |   -   |        1        |       13      |
|  12  |      162      |      74.8    |       28      |       325       |  2100  |   400  |   20  |        1        |       13      |
|  13  |      162      |      74.8    |       30      |       350       |  2200  |    -   |   -   |        3        |       13      |
|  14  |      162      |      74.8    |       32      |       375       |  2300  |    -   |   -   |        3        |       13      |
|  15  |      170      |      80      |       33      |       400       |  2400  |   600  |   30  |        3        |       13      |
|  16  |      170      |      80      |       34      |       425       |  2500  |    -   |   -   |        5        |       13      |
|  17  |      170      |      80      |       35      |       450       |  2600  |    -   |   -   |        5        |       13      |
|  18  |      177      |      84.8    |       36      |       475       |  2700  |   600  |   50  |        5        |       13      |
|  19  |      177      |      84.8    |       37      |       500       |  2800  |    -   |   -   |        7        |       14      |
|  20  |      177      |      84.8    |       38      |       525       |  2900  |    -   |   -   |        7        |       14      |
|  21  |      185      |      90      |       39      |       550       |  3000  |   600  |  100  |        7        |       14      |
|  22  |      185      |      90      |       40      |       575       |  3100  |    -   |   -   |        8        |       15      |
|  23  |      185      |      90      |       41      |       600       |  3200  |    -   |   -   |        8        |       15      |
|  24  |      192      |      94.8    |       42      |       625       |  3300  |   600  |  120  |        8        |       15      |
|  25  |      192      |      94.8    |       43      |       650       |  3400  |    -   |   -   |        9        |       16      |
|  26  |      192      |      94.8    |       44      |       675       |  3500  |    -   |   -   |        9        |       16      |
|  27  |      200      |     100      |       45      |       700       |  3600  |   600  |  150  |        9        |       16      |
</UnitTable>

注意：

1. 上表的 8 点移动速度代表 1 格/秒。
2. 如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>15 ~ 27 级雷电战靴对英雄的每秒回血值减小。</TimelineRow>
        <TimelineRow>所有等级雷电战靴的光环伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/12/11">
        <TimelineRow>新装备：雷电战靴。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>