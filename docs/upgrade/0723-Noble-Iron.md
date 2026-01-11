---
title: "部落冲突 coc 贵族哑铃装备升级数据"
navTitle: "贵族哑铃"
shownTitle: "贵族哑铃"
description: "贵族哑铃是亡灵王子的一件普通装备。带上贵族哑铃装备后，亡灵王子在部署后的前几次射击射程更远，伤害更高（类似于超级亡灵的能力）。除了上述能力外，贵族哑铃装备还可以提升亡灵王子的攻击速度。"
module: upgrade-home
imgFolder: home_heroes/0723
wiki: https://clashofclans.fandom.com/wiki/Noble_Iron
canonical: /upgrade/0723-Noble-Iron
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Noble_Iron_info.png" :imgAlt="$frontmatter.navTitle" description="提升亡灵王子前几次攻击的速度、范围和威力。"  />

<SmallTitle>说明</SmallTitle>

1. 贵族哑铃是 [亡灵王子](/upgrade/0204-Minion-Prince) 的一件普通装备。
2. 带上贵族哑铃装备后，亡灵王子在部署后的前几次射击射程更远，伤害更高（类似于 [超级亡灵](/upgrade/0608-Super-Minion) 的能力）。
3. 除了上述能力外，贵族哑铃装备还有以下功能：
    - 提升攻击速度；
    - 增加生命值（与是否开技能无关）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
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

| 等级 |前 n 次攻击<br>每次伤害增加|前 n 次攻击<br>射程增加| n = ? |攻击速度增加|英雄<br>生命值增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |           ---           |         ---         |   ---  |     ---   |       ---      |   ---  |  ---  |       ---       |       ---     |
|   1  |           350           |          9 格       |    4   |      5%   |       500      |    \   |   \   |        5        |       12      |
|   2  |           350           |          9 格       |    4   |      6%   |       500      |   120  |   -   |        5        |       12      |
|   3  |           420           |        9.5 格       |    4   |      6%   |       500      |   240  |   20  |        5        |       12      |
|   4  |           420           |        9.5 格       |    4   |      7%   |       500      |   400  |   -   |        5        |       12      |
|   5  |           420           |        9.5 格       |    4   |      8%   |       500      |   600  |   -   |        5        |       12      |
|   6  |           490           |         10 格       |    5   |      8%   |       500      |   840  |  100  |        5        |       12      |
|   7  |           490           |         10 格       |    5   |      9%   |       500      |  1120  |   -   |        5        |       12      |
|   8  |           490           |         10 格       |    5   |     10%   |       500      |  1440  |   -   |        5        |       12      |
|   9  |           560           |         10 格       |    5   |     10%   |       500      |  1800  |  200  |        5        |       12      |
|  10  |           560           |         10 格       |    5   |     11%   |       500      |  1900  |   -   |        5        |       12      |
|  11  |           560           |         10 格       |    5   |     12%   |       500      |  2000  |   -   |        5        |       12      |
|  12  |           630           |       10.5 格       |    6   |     12%   |       500      |  2100  |  400  |        5        |       12      |
|  13  |           630           |       10.5 格       |    6   |     13%   |       500      |  2200  |   -   |        5        |       12      |
|  14  |           630           |       10.5 格       |    6   |     14%   |       500      |  2300  |   -   |        5        |       12      |
|  15  |           700           |       10.5 格       |    6   |     14%   |       500      |  2400  |  600  |        5        |       12      |
|  16  |           700           |       10.5 格       |    6   |     15%   |       500      |  2500  |   -   |        7        |       14      |
|  17  |           700           |       10.5 格       |    6   |     16%   |       500      |  2600  |   -   |        7        |       14      |
|  18  |           770           |         11 格       |    7   |     17%   |       500      |  2700  |  600  |        7        |       14      |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>现在亡灵王子的所有装备都提供 500 生命值加成。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>新装备：贵族哑铃。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>