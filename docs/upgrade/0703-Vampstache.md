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
|   1  |       60      |        9      |      +5%     |    \   |   \   |        1       |        8       |
|   2  |       60      |       10      |      +6%     |   120  |   -   |        1       |        8       |
|   3  |       90      |       12      |      +7%     |   240  |   20  |        1       |        8       |
|   4  |       90      |       13      |      +8%     |   400  |   -   |        1       |        8       |
|   5  |       90      |       15      |      +9%     |   600  |   -   |        1       |        8       |
|   6  |      120      |       16      |     +10%     |   840  |  100  |        1       |        8       |
|   7  |      120      |       18      |     +11%     |  1120  |   -   |        1       |        8       |
|   8  |      120      |       19      |     +12%     |  1440  |   -   |        1       |        8       |
|   9  |      160      |       22      |     +13%     |  1800  |  200  |        1       |        8       |
|  10  |      160      |       27      |     +14%     |  1900  |   -   |        3       |       10       |
|  11  |      160      |       32      |     +15%     |  2000  |   -   |        3       |       10       |
|  12  |      200      |       37      |     +16%     |  2100  |  400  |        3       |       10       |
|  13  |      200      |       42      |     +17%     |  2200  |   -   |        5       |       12       |
|  14  |      200      |       48      |     +18%     |  2300  |   -   |        5       |       12       |
|  15  |      250      |       53      |     +19%     |  2400  |  600  |        5       |       12       |
|  16  |      250      |       58      |     +20%     |  2500  |   -   |        7       |       14       |
|  17  |      250      |       63      |     +21%     |  2600  |   -   |        7       |       14       |
|  18  |      300      |       68      |     +22%     |  2700  |  600  |        7       |       14       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，嗜血胡须是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>