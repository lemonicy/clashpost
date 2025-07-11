---
title: "部落冲突 coc 嗜血胡须（治疗胡须）装备升级数据"
navTitle: "嗜血胡须"
shownTitle: "嗜血胡须（治疗胡须）"
description: "嗜血胡须是野蛮人之王的一件普通装备。嗜血胡须可以使蛮王每次攻击时都能回血，此外，嗜血胡须还可以提高蛮王的攻击速度和每秒伤害。例外：被凤凰复活的蛮王不能回血。"
module: upgrade-home
imgFolder: home_heroes/0703
wiki: https://clashofclans.fandom.com/wiki/Vampstache
canonical: /upgrade/0703-Vampstache
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Vampstache_info.png" :imgAlt="$frontmatter.navTitle" description="野蛮人之王每次攻击都会治疗自身" />

<SmallTitle>说明</SmallTitle>

1. 嗜血胡须是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的一件普通装备。
2. 嗜血胡须可以使蛮王每次攻击时都能回血，此外，嗜血胡须还可以提高蛮王的攻击速度和每秒伤害。
   - 例外：被 [凤凰](/upgrade/0287-Phoenix) 复活的蛮王不能回血。
3. 该装备的英文名称 Vampstache 取自吸血鬼（vampire）这个单词的前半边和胡须（mustache）这个单词的后半边，因此顾名思义这个装备有吸血效果，网站出于准确性原则采用了“嗜血胡须”这个翻译。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
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

| 等级 |每次攻击<br>回血|每秒伤害<br>增加|攻击速度<br>增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ----     |      ---      |      ---     |   ---  |  ---  |       ---      |       ---      |
|   1  |       60      |       10      |      +5%     |    \   |   \   |        3       |       10       |
|   2  |       60      |       15      |      +6%     |   120  |   -   |        3       |       10       |
|   3  |       90      |       20      |      +7%     |   240  |   20  |        3       |       10       |
|   4  |       90      |       25      |      +8%     |   400  |   -   |        3       |       10       |
|   5  |       90      |       30      |      +9%     |   600  |   -   |        3       |       10       |
|   6  |      120      |       40      |     +10%     |   840  |  100  |        3       |       10       |
|   7  |      120      |       45      |     +11%     |  1120  |   -   |        3       |       10       |
|   8  |      120      |       50      |     +12%     |  1440  |   -   |        3       |       10       |
|   9  |      160      |       60      |     +13%     |  1800  |  200  |        3       |       10       |
|  10  |      160      |       65      |     +14%     |  1900  |   -   |        3       |       10       |
|  11  |      160      |       70      |     +15%     |  2000  |   -   |        3       |       10       |
|  12  |      200      |       80      |     +16%     |  2100  |  400  |        3       |       10       |
|  13  |      200      |       85      |     +17%     |  2200  |   -   |        5       |       12       |
|  14  |      200      |       90      |     +18%     |  2300  |   -   |        5       |       12       |
|  15  |      250      |      100      |     +19%     |  2400  |  600  |        5       |       12       |
|  16  |      250      |      105      |     +20%     |  2500  |   -   |        7       |       14       |
|  17  |      250      |      110      |     +21%     |  2600  |   -   |        7       |       14       |
|  18  |      300      |      120      |     +22%     |  2700  |  600  |        7       |       14       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>所有等级嗜血胡须的每秒伤害增加值提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，嗜血胡须是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>