---
title: "部落冲突 coc 野蛮人木偶（野蛮人玩偶）装备升级数据"
navTitle: "野蛮人木偶"
shownTitle: "野蛮人木偶（野蛮人玩偶）"
description: "野蛮人木偶是野蛮人之王的两件初始装备之一。野蛮人木偶装备可以让野蛮人之王使用技能时召唤出大量处于狂暴状态下的野蛮人，这些野蛮人比普通的野蛮人伤害更高，移动速度更快。"
module: upgrade-home
imgFolder: home_heroes/0700
wiki: https://clashofclans.fandom.com/wiki/Barbarian_Puppet
canonical: /upgrade/0700-Barbarian-Puppet
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barbarian_Puppet_info.png" :imgAlt="$frontmatter.navTitle" description="召唤一群狂暴野蛮人。" />

<SmallTitle>说明</SmallTitle>

1. 野蛮人木偶是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的两件初始装备之一，另一件是 [狂暴药水瓶](/upgrade/0701-Rage-Vial)。
2. 野蛮人木偶装备可以让野蛮人之王使用技能时召唤出大量处于狂暴状态下的 [野蛮人](/upgrade/0000-Barbarian)，这些野蛮人比普通的野蛮人伤害更高，移动速度更快。
   - 装备召唤出的野蛮人不会一直处于狂暴状态，技能失效后这些部队就会变成普通的野蛮人，总狂暴时间为 20 秒。
   - 野蛮人木偶的召唤速度为每秒 10 个野蛮人。
   - 召唤出的野蛮人等级与进攻方 [实验室](/upgrade/0483-Laboratory) 中野蛮人的等级相同。
3. 除了召唤野蛮人外，该装备还可以为蛮王提供额外的生命值，并且增加开技能时恢复的生命值。

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

| 等级 |召唤的<br>野蛮人数量|野蛮人<br>伤害增加|野蛮人<br>速度提升|英雄生命值<br>增加|开启技能后<br>生命值恢复加成|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---        |       ---       |       ---       |       ---      |            ---           |   ---  |  ---  |       ---      |       ---     |
|   1  |         8        |       100%      |        60%      |       309      |            110           |    \   |   \   |        1       |        8      |
|   2  |         8        |       100%      |        60%      |       385      |            165           |   120  |   -   |        1       |        8      |
|   3  |        16        |       120%      |        80%      |       467      |            220           |   240  |   20  |        1       |        8      |
|   4  |        16        |       120%      |        80%      |       564      |            275           |   400  |   -   |        1       |        8      |
|   5  |        16        |       120%      |        80%      |       649      |            330           |   600  |   -   |        1       |        8      |
|   6  |        20        |       140%      |       100%      |       734      |            385           |   840  |  100  |        1       |        8      |
|   7  |        20        |       140%      |       100%      |       836      |            440           |  1120  |   -   |        1       |        8      |
|   8  |        20        |       140%      |       100%      |       940      |            495           |  1440  |   -   |        1       |        8      |
|   9  |        30        |       160%      |       120%      |      1045      |            572           |  1800  |  200  |        1       |        8      |
|  10  |        30        |       160%      |       120%      |      1155      |            660           |  1900  |   -   |        3       |       10      |
|  11  |        30        |       160%      |       120%      |      1265      |            748           |  2000  |   -   |        3       |       10      |
|  12  |        36        |       180%      |       140%      |      1445      |            847           |  2100  |  400  |        3       |       10      |
|  13  |        36        |       180%      |       140%      |      1755      |            946           |  2200  |   -   |        5       |       12      |
|  14  |        36        |       180%      |       140%      |      2087      |           1034           |  2300  |   -   |        5       |       12      |
|  15  |        40        |       200%      |       160%      |      2444      |           1166           |  2400  |  600  |        5       |       12      |
|  16  |        40        |       200%      |       160%      |      2703      |           1243           |  2500  |   -   |        7       |       14      |
|  17  |        40        |       200%      |       160%      |      3093      |           1320           |  2600  |   -   |        7       |       14      |
|  18  |        44        |       220%      |       180%      |      3366      |           1386           |  2700  |  600  |        7       |       14      |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁野蛮人之王的玩家会有一个初始的装备等级，并且不需要解锁 [铁匠铺](/upgrade/0488-Blacksmith)。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 野蛮人之王等级 | 野蛮人木偶等级 |
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
    <TimelineItem date="2025/02/10">
        <TimelineRow>所有等级野蛮人木偶的每秒伤害增加值和开启技能后生命值恢复加成提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>野蛮人被召唤出来后，其狂暴时间由 10 秒增加到 20 秒。</TimelineRow>
        <TimelineRow>13 - 18 级野蛮人木偶装备可以给英雄加更多生命值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，野蛮人木偶是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>