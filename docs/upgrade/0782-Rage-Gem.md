---
title: "部落冲突 coc 狂暴宝石装备升级数据"
navTitle: "狂暴宝石"
shownTitle: "狂暴宝石"
description: "狂暴宝石是大守护者的一件普通装备。狂暴宝石装备可以在大守护者周围投射出魔法光环，当我方部队在光环内时，它们可以打出更高的伤害。狂暴宝石的效果不能与狂暴法术叠加。如果在光环内使用狂暴法术，则狂暴法术的效果会覆盖狂暴宝石的效果。"
module: upgrade-home
imgFolder: home_heroes/0782
wiki: https://clashofclans.fandom.com/wiki/Rage_Gem
canonical: /upgrade/0782-Rage-Gem
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rage_Gem_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 狂暴宝石是 [大守护者](/upgrade/0202-Grand-Warden) 的一件普通装备。
2. 狂暴宝石装备可以在大守护者周围投射出魔法光环，当我方部队在光环内时，它们可以打出更高的伤害。
3. 狂暴宝石装备可以让大守护者自己获得更高的每秒伤害和攻击速度，但这不是光环的效果，是装备本身的属性。
4. 狂暴宝石的效果不能与 [狂暴法术](/upgrade/0102-Rage-Spell) 叠加。如果在光环内使用狂暴法术，则狂暴法术的效果会覆盖狂暴宝石的效果。
5. 与狂暴法术一样，狂暴宝石的效果对英雄减半，对攻城机器无效。
6. 与狂暴法术不同的是，狂暴宝石的光环不能提高部队的移动速度和攻击速度。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="11" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |光环内部队<br>伤害增加|英雄每秒<br>伤害增加|英雄攻击<br>速度增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |         ---        |        ---        |        ---       |   --- |  ---  |       ---       |       ---     |
|   1  |         15%        |         12        |         5%       |    \  |   \   |        4        |       11      |
|   2  |         15%        |         14        |         6%       |   120 |   -   |        4        |       11      |
|   3  |         20%        |         16        |         7%       |   240 |   20  |        4        |       11      |
|   4  |         20%        |         18        |         8%       |   400 |   -   |        4        |       11      |
|   5  |         20%        |         20        |         9%       |   600 |   -   |        4        |       11      |
|   6  |         25%        |         22        |        10%       |   840 |  100  |        4        |       11      |
|   7  |         25%        |         24        |        11%       |  1120 |   -   |        4        |       11      |
|   8  |         25%        |         26        |        12%       |  1440 |   -   |        4        |       11      |
|   9  |         30%        |         30        |        13%       |  1800 |  200  |        4        |       11      |
|  10  |         30%        |         36        |        14%       |  1900 |   -   |        4        |       11      |
|  11  |         30%        |         43        |        15%       |  2000 |   -   |        4        |       11      |
|  12  |         35%        |         49        |        16%       |  2100 |  400  |        4        |       11      |
|  13  |         35%        |         56        |        17%       |  2200 |   -   |        5        |       12      |
|  14  |         35%        |         62        |        18%       |  2300 |   -   |        5        |       12      |
|  15  |         45%        |         69        |        19%       |  2400 |  600  |        5        |       12      |
|  16  |         45%        |         75        |        20%       |  2500 |   -   |        7        |       14      |
|  17  |         45%        |         82        |        21%       |  2600 |   -   |        7        |       14      |
|  18  |         50%        |         88        |        22%       |  2700 |  600  |        7        |       14      |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>1 - 14 级狂暴宝石装备给光环内部队提供的伤害加成比例提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，狂暴宝石是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>