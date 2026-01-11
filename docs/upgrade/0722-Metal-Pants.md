---
title: "部落冲突 coc 铁甲短裤（铁裤衩）装备升级数据"
navTitle: "铁甲短裤"
shownTitle: "铁甲短裤（铁裤衩）"
description: "铁甲短裤是亡灵王子的一件普通装备。带上铁甲短裤装备后，亡灵王子在开技能后的一段时间内受到的伤害会减少。除了减少伤害外，铁甲短裤装备还可以增加开启技能时的回血量以及日常状态下的生命值。"
module: upgrade-home
imgFolder: home_heroes/0722
wiki: https://clashofclans.fandom.com/wiki/Metal_Pants
canonical: /upgrade/0722-Metal-Pants
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Metal_Pants_info.png" :imgAlt="$frontmatter.navTitle" description="生成一层防护屏障，暂时减少所受伤害。"  />

<SmallTitle>说明</SmallTitle>

1. 铁甲短裤是 [亡灵王子](/upgrade/0204-Minion-Prince) 的一件普通装备。
2. 带上铁甲短裤装备后，亡灵王子在开技能后的一段时间内受到的伤害会减少。
3. 除了减少伤害外，铁甲短裤装备还可以增加开启技能时的回血量以及日常状态下的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
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
        "column":6,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |技能<br>持续时间|技能期间<br>伤害减少|英雄<br>生命值增加|技能状态下<br>英雄回血量增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---      |        ---       |       ---       |           ---           |   ---  |  ---  |       ---       |       ---     |
|   1  |      9 秒     |        46%       |       850       |          1600           |    \   |   \   |        3        |       10      |
|   2  |      9 秒     |        46%       |       900       |          1675           |   120  |   -   |        3        |       10      |
|   3  |     10 秒     |        50%       |       950       |          1750           |   240  |   20  |        3        |       10      |
|   4  |     10 秒     |        50%       |      1000       |          1800           |   400  |   -   |        3        |       10      |
|   5  |     10 秒     |        50%       |      1050       |          1850           |   600  |   -   |        3        |       10      |
|   6  |     11 秒     |        54%       |      1100       |          1900           |   840  |  100  |        3        |       10      |
|   7  |     11 秒     |        54%       |      1150       |          1950           |  1120  |   -   |        3        |       10      |
|   8  |     11 秒     |        54%       |      1200       |          2000           |  1440  |   -   |        3        |       10      |
|   9  |     12 秒     |        58%       |      1250       |          2050           |  1800  |  200  |        3        |       10      |
|  10  |     12 秒     |        58%       |      1300       |          2100           |  1900  |   -   |        3        |       10      |
|  11  |     12 秒     |        58%       |      1350       |          2150           |  2000  |   -   |        3        |       10      |
|  12  |     13 秒     |        62%       |      1400       |          2200           |  2100  |  400  |        3        |       10      |
|  13  |     13 秒     |        62%       |      1450       |          2250           |  2200  |   -   |        5        |       12      |
|  14  |     13 秒     |        62%       |      1500       |          2300           |  2300  |   -   |        5        |       12      |
|  15  |     14 秒     |        66%       |      1550       |          2350           |  2400  |  600  |        5        |       12      |
|  16  |     14 秒     |        66%       |      1600       |          2400           |  2500  |   -   |        7        |       14      |
|  17  |     14 秒     |        66%       |      1650       |          2450           |  2600  |   -   |        7        |       14      |
|  18  |     15 秒     |        70%       |      1700       |          2500           |  2700  |  600  |        7        |       14      |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>现在亡灵王子的所有装备都提供 500 生命值加成。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>新装备：铁甲短裤。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>