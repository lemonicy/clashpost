---
title: "部落冲突 coc 急速药水瓶装备升级数据"
navTitle: "急速药水瓶"
shownTitle: "急速药水瓶"
description: "急速药水瓶是飞盾战神的一件普通装备。急速药水瓶可以让飞盾战神在开启技能后获得更快的移动速度和攻击速度。即使不开启技能，急速药水瓶也可以提升飞盾战神在常规状态下的每秒伤害和攻击速度。"
module: upgrade-home
imgFolder: home_heroes/07c3
wiki: https://clashofclans.fandom.com/wiki/Haste_Vial
canonical: /upgrade/07c3-Haste-Vial
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Haste_Vial_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 急速药水瓶是 [飞盾战神](/upgrade/0203-Royal-Champion) 的一件普通装备。
2. 急速药水瓶可以让飞盾战神在开启技能后获得更快的移动速度和攻击速度。
3. 即使不开启技能，急速药水瓶也可以提升飞盾战神在常规状态下的每秒伤害和攻击速度。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="8" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |技能<br>持续时间|技能下移动<br>速度增加|技能下攻击<br>速度增加|每秒伤害<br>增加|攻击速度<br>增加| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
|  --- |      ---      |         ---        |         ---         |      ---     |      ---      |   ---  |  ---  |       ---       |       ---     |
|   1  |     7.0 秒    |         18.0       |          60%        |       20     |       5%      |    \   |   \   |        8        |       15      |
|   2  |     7.0 秒    |         18.0       |          60%        |       24     |       6%      |   120  |   -   |        8        |       15      |
|   3  |     7.5 秒    |         22.3       |          60%        |       28     |       6%      |   240  |   20  |        8        |       15      |
|   4  |     7.5 秒    |         22.3       |          60%        |       32     |       7%      |   400  |   -   |        8        |       15      |
|   5  |     7.5 秒    |         22.3       |          60%        |       36     |       8%      |   600  |   -   |        8        |       15      |
|   6  |     8.0 秒    |         25.5       |          80%        |       40     |       8%      |   840  |  100  |        8        |       15      |
|   7  |     8.0 秒    |         25.5       |          80%        |       44     |       9%      |  1120  |   -   |        8        |       15      |
|   8  |     8.0 秒    |         25.5       |          80%        |       48     |      10%      |  1440  |   -   |        8        |       15      |
|   9  |     8.5 秒    |         28.7       |          80%        |       52     |      10%      |  1800  |  200  |        8        |       15      |
|  10  |     8.5 秒    |         28.7       |          80%        |       56     |      11%      |  1900  |   -   |        8        |       15      |
|  11  |     8.5 秒    |         28.7       |          80%        |       60     |      12%      |  2000  |   -   |        8        |       15      |
|  12  |     9.0 秒    |         32.0       |          80%        |       64     |      12%      |  2100  |  400  |        8        |       15      |
|  13  |     9.0 秒    |         32.0       |          80%        |       68     |      13%      |  2200  |   -   |        8        |       15      |
|  14  |     9.0 秒    |         32.0       |          80%        |       72     |      14%      |  2300  |   -   |        8        |       15      |
|  15  |     9.5 秒    |         35.1       |         100%        |       76     |      14%      |  2400  |  600  |        8        |       15      |
|  16  |     9.5 秒    |         35.1       |         100%        |       80     |      15%      |  2500  |   -   |        8        |       15      |
|  17  |     9.5 秒    |         35.1       |         100%        |       84     |      16%      |  2600  |   -   |        8        |       15      |
|  18  |    10.0 秒    |         38.3       |         100%        |       88     |      16%      |  2700  |  600  |        8        |       15      |
</UnitTable>

注意：

1. 上表的 8 点移动速度代表 1 格/秒。
2. 如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>所有等级急速药水瓶装备的技能持续时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>9 - 18 级急速药水瓶给飞盾战神（非技能状态下）的攻击速度加成降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>在 15 本新增急速药水瓶装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>