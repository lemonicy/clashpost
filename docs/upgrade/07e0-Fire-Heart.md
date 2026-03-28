---
title: "部落冲突 coc 烈焰之心装备升级数据"
navTitle: "烈焰之心"
shownTitle: "烈焰之心"
description: "烈焰之心是飞龙公爵的两件初始装备之一，另一件是助燃器。烈焰之心装备的死亡爆炸效果只会在飞龙公爵第一次死亡时触发。如果他被凤凰复活后再次死亡，则不会再触发爆炸效果。除死亡爆炸外，烈焰之心装备还可以增加飞龙公爵的生命值和攻击力。"
module: upgrade-home
imgFolder: home_heroes/07e0
wiki: https://clashofclans.fandom.com/wiki/Fire_Heart
canonical: /upgrade/07e0-Fire-Heart
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Fire_Heart_info.png" :imgAlt="$frontmatter.navTitle" description="缓慢恢复飞龙公爵的生命值，当他倒下时，会爆发出灼伤敌人的烈焰。" />

<SmallTitle>说明</SmallTitle>

1. 烈焰之心是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的两件初始装备之一，另一件是 [助燃器](/upgrade/07e1-Flame-Blower)。
2. 烈焰之心装备的死亡爆炸效果只会在飞龙公爵第一次死亡时触发。如果他被 [凤凰](/upgrade/0287-Phoenix) 复活或 [复苏法术](/upgrade/0108-Revive-Spell) 复苏后再次死亡，则不会再触发爆炸效果。
3. 除死亡爆炸外，烈焰之心装备还可以增加飞龙公爵的伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="有飞龙公爵即可" />
    <UnitProperty pKey="死亡爆炸半径" pValue="4 格" />
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

| 等级 |死亡爆炸<br>伤害|每秒恢复<br>血量|每秒<br>伤害提升|生命值增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---     |       ---     |      ---      |    ---  |  ---  |  ---  |       ---       |       ---      |
|   1  |     1000     |        50     |       10      |    900  |     \ |   \   |        \        |        \       |
|   2  |     1000     |        50     |       12      |   1200  |   120 |   -   |        1        |       15       |
|   3  |     1350     |        70     |       14      |   1450  |   240 |   20  |        1        |       15       |
|   4  |     1350     |        70     |       16      |   1750  |   400 |   -   |        1        |       15       |
|   5  |     1350     |        70     |       18      |   2000  |   600 |   -   |        1        |       15       |
|   6  |     1700     |        90     |       20      |   2300  |   840 |  100  |        1        |       15       |
|   7  |     1700     |        90     |       22      |   2600  |  1120 |   -   |        1        |       15       |
|   8  |     1700     |        90     |       24      |   2850  |  1440 |   -   |        1        |       15       |
|   9  |     2000     |       110     |       26      |   3150  |  1800 |  200  |        1        |       15       |
|  10  |     2000     |       110     |       28      |   3400  |  1900 |   -   |        3        |       15       |
|  11  |     2000     |       110     |       30      |   3700  |  2000 |   -   |        3        |       15       |
|  12  |     2350     |       130     |       32      |   4000  |  2100 |  400  |        3        |       15       |
|  13  |     2350     |       130     |       34      |   4250  |  2200 |   -   |        5        |       15       |
|  14  |     2350     |       130     |       36      |   4550  |  2300 |   -   |        5        |       15       |
|  15  |     2700     |       155     |       38      |   4800  |  2400 |  600  |        5        |       15       |
|  16  |     2700     |       155     |       40      |   5100  |  2500 |   -   |        7        |       15       |
|  17  |     2700     |       155     |       42      |   5450  |  2600 |   -   |        7        |       15       |
|  18  |     3000     |       175     |       45      |   5600  |  2700 |  600  |        7        |       15       |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>新装备：烈焰之心。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>