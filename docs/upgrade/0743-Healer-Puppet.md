---
title: "部落冲突 coc 天使木偶（天使玩偶）装备升级数据"
navTitle: "天使木偶"
shownTitle: "天使木偶（天使玩偶）"
description: "天使木偶是弓箭女皇的一件普通装备。天使木偶可以使弓箭女皇在使用技能使召唤天使，还可以给女王提供额外的生命值，并赋予女王自愈能力。"
module: upgrade-home
imgFolder: home_heroes/0743
wiki: https://clashofclans.fandom.com/wiki/Healer_Puppet
canonical: /upgrade/0743-Healer-Puppet
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Healer_Puppet_info.png" :imgAlt="$frontmatter.navTitle" description="召唤一群天使。" />

<SmallTitle>说明</SmallTitle>

1. 天使木偶是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的一件普通装备。
2. 天使木偶可以使弓箭女皇在使用技能使召唤 [天使](/upgrade/0007-Healer)。
   - 和 [野蛮人木偶](/upgrade/0700-Barbarian-Puppet) 和 [弓箭手木偶](/upgrade/0740-Archer-Puppet) 不同，天使的等级取决于装备等级，而非你在 [实验室](/upgrade/0483-Laboratory) 中的天使等级。
3. 除了召唤天使外，天使木偶还可以给女王提供额外的生命值，并赋予女王自愈能力。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
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

| 等级 |召唤的<br>天使数量|召唤的<br>天使等级|每秒自愈的<br>生命值|生命值加成| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---      |        ---      |        ---        |   ---   |   ---  |  ---  |       ---      |       ---      |
|   1  |        1       |         4       |          6        |   132   |    \   |   \   |        5       |       12       |
|   2  |        1       |         4       |          8        |   154   |   120  |   -   |        5       |       12       |
|   3  |        1       |         5       |         10        |   177   |   240  |   20  |        5       |       12       |
|   4  |        1       |         5       |         12        |   199   |   400  |   -   |        5       |       12       |
|   5  |        1       |         5       |         14        |   221   |   600  |   -   |        5       |       12       |
|   6  |        2       |         5       |         16        |   243   |   840  |  100  |        5       |       12       |
|   7  |        2       |         5       |         18        |   265   |  1120  |   -   |        5       |       12       |
|   8  |        2       |         5       |         20        |   287   |  1440  |   -   |        5       |       12       |
|   9  |        2       |         6       |         22        |   331   |  1800  |  200  |        5       |       12       |
|  10  |        2       |         6       |         24        |   402   |  1900  |   -   |        5       |       12       |
|  11  |        2       |         6       |         26        |   473   |  2000  |   -   |        5       |       12       |
|  12  |        2       |         7       |         28        |   543   |  2100  |  400  |        5       |       12       |
|  13  |        2       |         7       |         30        |   614   |  2200  |   -   |        5       |       12       |
|  14  |        2       |         7       |         31        |   685   |  2300  |   -   |        5       |       12       |
|  15  |        3       |         7       |         32        |   756   |  2400  |  600  |        5       |       12       |
|  16  |        3       |         7       |         33        |   836   |  2500  |   -   |        7       |       14       |
|  17  |        3       |         7       |         34        |   897   |  2600  |   -   |        7       |       14       |
|  18  |        3       |         8       |         35        |   968   |  2700  |  600  |        7       |       14       |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，天使木偶是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>