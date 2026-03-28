---
title: "部落冲突 coc 助燃器装备升级数据"
navTitle: "助燃器"
shownTitle: "助燃器"
description: "助燃器是飞龙公爵的两件初始装备之一，另一件是烈焰之心。使用时，助燃器在飞龙公爵面前喷出锥形的火焰造成大量伤害。烈焰之心装备还可以增加飞龙公爵生命值以及技能状态下的生命值恢复量。"
module: upgrade-home
imgFolder: home_heroes/07e1
wiki: https://clashofclans.fandom.com/wiki/Flame_Blower
canonical: /upgrade/07e1-Flame-Blower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flame_Blower_info.png" :imgAlt="$frontmatter.navTitle" description="吹出炽热烈焰，灼烧敌人和建筑。" />

<SmallTitle>说明</SmallTitle>

1. 助燃器是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的两件初始装备之一，另一件是 [烈焰之心](/upgrade/07e0-Fire-Heart)。
2. 开启技能后，飞龙公爵面前会喷出锥形火焰，可造成大量伤害。
3. 烈焰之心装备还可以增加飞龙公爵生命值以及技能状态下的生命值恢复量。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="有飞龙公爵即可" />
    <UnitProperty pKey="火焰半径" pValue="12 格" />
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

| 等级 | 技能伤害 |英雄<br>生命值增加|开启技能后<br>生命值恢复量增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |    ---  |       ---      |            ---             |   ---  |  ---  |       ---       |       ---     |
|   1  |   1300  |       500      |            150             |     \  |   \   |        \        |        15     |
|   2  |   1300  |       700      |            250             |   120  |   -   |        1        |        15     |
|   3  |   1375  |       900      |            350             |   240  |   20  |        1        |        15     |
|   4  |   1375  |      1100      |            450             |   400  |   -   |        1        |        15     |
|   5  |   1375  |      1300      |            550             |   600  |   -   |        1        |        15     |
|   6  |   1500  |      1500      |            650             |   840  |  100  |        1        |        15     |
|   7  |   1500  |      1700      |            750             |  1120  |   -   |        1        |        15     |
|   8  |   1500  |      1850      |            850             |  1440  |   -   |        1        |        15     |
|   9  |   1750  |      2000      |            950             |  1800  |  200  |        1        |        15     |
|  10  |   1750  |      2150      |           1050             |  1900  |   -   |        3        |        15     |
|  11  |   1750  |      2300      |           1150             |  2000  |   -   |        3        |        15     |
|  12  |   2000  |      2450      |           1250             |  2100  |  400  |        3        |        15     |
|  13  |   2000  |      2600      |           1300             |  2200  |   -   |        5        |        15     |
|  14  |   2000  |      2750      |           1350             |  2300  |   -   |        5        |        15     |
|  15  |   2700  |      2900      |           1400             |  2400  |  600  |        5        |        15     |
|  16  |   2250  |      3000      |           1450             |  2500  |   -   |        7        |        15     |
|  17  |   2250  |      3050      |           1500             |  2600  |   -   |        7        |        15     |
|  18  |   2500  |      3100      |           1500             |  2700  |  600  |        7        |        15     |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>新装备：助燃器。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>