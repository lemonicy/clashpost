---
title: "部落冲突 coc 野猪骑士木偶（野猪骑士玩偶）装备升级数据"
navTitle: "野猪骑士木偶"
shownTitle: "野猪骑士木偶（野猪骑士玩偶）"
description: "野猪骑士木偶是飞盾战神的一件普通装备。野猪骑士木偶装备可以让飞盾战神使用技能时召唤出一定数量的野猪骑士。带上野猪骑士木偶时，开启技能后，飞盾战神会在短时间内隐形，因此野猪骑士可以为她扛伤害。"
module: upgrade-home
imgFolder: home_heroes/07c2
wiki: https://clashofclans.fandom.com/wiki/Hog_Rider_Puppet
canonical: /upgrade/07c2-Hog-Rider-Puppet
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Rider_Puppet_info.png" :imgAlt="$frontmatter.navTitle" description="召唤一群野猪骑士。" />

<SmallTitle>说明</SmallTitle>

1. 野猪骑士木偶是 [飞盾战神](/upgrade/0203-Royal-Champion) 的一件普通装备。
2. 野猪骑士木偶装备可以让飞盾战神使用技能时召唤出一定数量的 [野猪骑士](/upgrade/0081-Hog-Rider)。
   - 召唤出的野猪骑士等级取决于装备等级，而非 [实验室](/upgrade/0483-Laboratory) 中野猪骑士的等级。
3. 带上野猪骑士木偶时，开启技能后，飞盾战神会在短时间内隐形，因此野猪骑士可以为她扛伤害。
4. 除了召唤野猪骑士外，该装备还可以为飞盾战神提供额外的生命值，并且增加技能时恢复的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
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

| 等级 |召唤的<br>野猪骑士数量|野猪骑士<br>等级|英雄生命值<br>增加|开启技能后<br>生命值恢复| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
|  --- |        ---         |      ---      |        ---      |          ---         |   ---  |  ---  |       ---       |       ---     |
|   1  |         7          |        4      |         60      |          180         |    \   |   \   |        7        |       14      |
|   2  |         7          |        4      |         90      |          220         |   120  |   -   |        7        |       14      |
|   3  |         7          |        5      |        120      |          270         |   240  |   20  |        7        |       14      |
|   4  |         7          |        5      |        150      |          320         |   400  |   -   |        7        |       14      |
|   5  |         7          |        5      |        180      |          370         |   600  |   -   |        7        |       14      |
|   6  |         8          |        6      |        210      |          420         |   840  |  100  |        7        |       14      |
|   7  |         8          |        6      |        240      |          470         |  1120  |   -   |        7        |       14      |
|   8  |         8          |        6      |        270      |          520         |  1440  |   -   |        7        |       14      |
|   9  |         8          |        7      |        300      |          560         |  1800  |  200  |        7        |       14      |
|  10  |         8          |        7      |        330      |          610         |  1900  |   -   |        7        |       14      |
|  11  |         8          |        7      |        360      |          660         |  2000  |   -   |        7        |       14      |
|  12  |         8          |        8      |        390      |          700         |  2100  |  400  |        7        |       14      |
|  13  |         8          |        8      |        420      |          750         |  2200  |   -   |        7        |       14      |
|  14  |         8          |        8      |        450      |          800         |  2300  |   -   |        7        |       14      |
|  15  |         9          |        9      |        480      |          850         |  2400  |  600  |        7        |       14      |
|  16  |         9          |        9      |        510      |          900         |  2500  |   -   |        7        |       14      |
|  17  |         9          |        9      |        540      |          950         |  2600  |   -   |        7        |       14      |
|  18  |         9          |       11      |        570      |         1000         |  2700  |  600  |        7        |       14      |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>3 - 18 级野猪骑士木偶装备召唤的野猪骑士等级降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>在 14 本新增野猪骑士木偶装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>