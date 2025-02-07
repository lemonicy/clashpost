---
title: "部落冲突 coc 狂暴药水瓶装备升级数据"
navTitle: "狂暴药水瓶"
shownTitle: "狂暴药水瓶"
description: "狂暴药水瓶是野蛮人之王的两件初始装备之一。狂暴药水瓶可以使蛮王在技能生效期间伤害提高，移动速度也更快，也能提升使用技能时恢复的生命值。即使不使用技能，该装备也可提升蛮王的普攻伤害。"
module: upgrade-home
imgFolder: home_heroes/0701
wiki: https://clashofclans.fandom.com/wiki/Rage_Vial
canonical: /upgrade/0701-Rage-Vial
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rage_Vial_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 狂暴药水瓶是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的两件初始装备之一，另一件是 [野蛮人木偶](/upgrade/0700-Barbarian-Puppet)。
2. 狂暴药水瓶可以使蛮王在技能生效期间伤害提高，移动速度也更快，也能提升使用技能时恢复的生命值。
3. 即使不使用技能，该装备也可提升蛮王的普攻伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有蛮王即可" />
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

| 等级 |技能状态下<br>伤害提升|技能状态下<br>蛮王的移动速度|每秒伤害<br>增加|技能回血<br>属性加成|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |        ---         |           ----           |      ---      |         ---      |   ---  |  ---  |       ---      |       ---      |
|   1  |        120%        |           34.0           |       17      |         150      |    \   |   \   |        1       |        8       |
|   2  |        120%        |           34.0           |       22      |         225      |   120  |   -   |        1       |        8       |
|   3  |        130%        |           38.3           |       27      |         300      |   240  |   20  |        1       |        8       |
|   4  |        130%        |           38.3           |       32      |         375      |   400  |   -   |        1       |        8       |
|   5  |        130%        |           38.3           |       37      |         450      |   600  |   -   |        1       |        8       |
|   6  |        135%        |           41.5           |       42      |         525      |   840  |  100  |        1       |        8       |
|   7  |        135%        |           41.5           |       48      |         600      |  1120  |   -   |        1       |        8       |
|   8  |        135%        |           41.5           |       54      |         675      |  1440  |   -   |        1       |        8       |
|   9  |        140%        |           44.7           |       60      |         780      |  1800  |  200  |        1       |        8       |
|  10  |        140%        |           44.7           |       66      |         900      |  1900  |   -   |        3       |       10       |
|  11  |        140%        |           44.7           |       72      |        1020      |  2000  |   -   |        3       |       10       |
|  12  |        145%        |           48.0           |       79      |        1155      |  2100  |  400  |        3       |       10       |
|  13  |        145%        |           48.0           |       86      |        1290      |  2200  |   -   |        5       |       12       |
|  14  |        145%        |           48.0           |       94      |        1410      |  2300  |   -   |        5       |       12       |
|  15  |        150%        |           51.1           |      104      |        1590      |  2400  |  600  |        5       |       12       |
|  16  |        150%        |           51.1           |      112      |        1695      |  2500  |   -   |        7       |       14       |
|  17  |        150%        |           51.1           |      120      |        1800      |  2600  |   -   |        7       |       14       |
|  18  |        155%        |           54.3           |      128      |        1890      |  2700  |  600  |        7       |       14       |
</UnitTable>

注：1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>
2. 上表中 8 点移动速度等于 1 格/秒。<br>
3. 上表中伤害提升 120% 的意思是伤害变为原来的 220%.

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁野蛮人之王的玩家会有一个初始的装备等级，并且不需要解锁 [铁匠铺](/upgrade/0488-Blacksmith)。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 野蛮人之王等级 | 狂暴药水瓶等级 |
|      ---      |      ---     |
|     1 - 10    |       1      |
|    11 - 20    |       2      |
|    21 - 25    |       3      |
|    26 - 30    |       4      |
|    31 - 35    |       5      |
|    36 - 40    |       6      |
|    41 - 45    |       7      |
|    46 - 50    |       8      |
|    51 - 55    |       9      |
|    56 - 60    |      10      |
|    61 - 65    |      11      |
|    66 - 70    |      12      |
|    71 - 75    |      13      |
|    76 - 80    |      14      |
|    81 - 90    |      15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，狂暴药水瓶是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>