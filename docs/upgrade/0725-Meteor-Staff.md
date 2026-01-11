---
title: "部落冲突 coc 陨石法杖装备升级数据"
navTitle: "陨石法杖"
shownTitle: "陨石法杖"
description: "陨石法杖是亡灵王子的第二件史诗装备。当亡灵王子带上陨石法杖装备后，他会周期性地在最近的防御建筑上召唤陨石，这些陨石会对地面和空中单位造成伤害，其伤害足以波及相邻建筑。除了召唤陨石外，陨石法杖还可以提升亡灵王子在常规状态下的伤害和生命值。"
module: upgrade-home
imgFolder: home_heroes/0725
wiki: https://clashofclans.fandom.com/wiki/Meteor_Staff
canonical: /upgrade/0725-Meteor-Staff
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Meteor_Staff_info.png" :imgAlt="$frontmatter.navTitle" description="召唤出神秘的陨石，反复轰击最近的防御建筑。"  />

<SmallTitle>说明</SmallTitle>

1. 陨石法杖是 [亡灵王子](/upgrade/0204-Minion-Prince) 的第二件史诗装备，它在 2025 年 10 月的宇宙摇滚活动中首次开放购买。
2. 当亡灵王子带上陨石法杖装备后，他会周期性地在最近的防御建筑上召唤陨石，这些陨石会对地面和空中单位造成伤害，其伤害足以波及相邻建筑。
3. 只要建筑未被 [隐身](/upgrade/0106-Invisibility-Spell) 且未被 [蔓生法术](/upgrade/0185-Overgrowth-Spell) 的藤蔓缠住，建筑就能被攻击。即使该建筑距离亡灵王子很远，只要满足“最近建筑”这个条件，也会被攻击。
    - 如果地图上没有防御建筑，陨石会攻击最近的建筑。如果地图上没有可攻击的建筑，则陨石不会生成。
4. 除了召唤陨石外，陨石法杖还可以提升亡灵王子在常规状态下的伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
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
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 冷却时间 | 每次伤害 | 英雄每秒<br>伤害增加 | 英雄<br>生命值增加 | 升级费用  | 升级费用 | 升级费用 | 所需<br>铁匠铺等级 | 所需<br>大本等级 |
| ---- |   ---   |   ---   |         ---         |        ---       |   ----   |   ----   |   ----  |        ---        |      -----      |
|   1  |  10 秒  |   250   |          13         |        558       |     \    |     \    |    \    |          1        |        9        |
|   2  |  10 秒  |   250   |          17         |        587       |    120   |    -     |    -    |          1        |        9        |
|   3  | 9.5 秒  |   300   |          21         |        615       |    240   |    20    |    -    |          1        |        9        |
|   4  | 9.5 秒  |   300   |          25         |        644       |    400   |    -     |    -    |           1       |        9        |
|   5  | 9.5 秒  |   300   |          29         |        673       |    600   |    -     |    -    |           1       |        9        |
|   6  |   9 秒  |   350   |          33         |        702       |    840   |   100    |    -    |           1       |        9        |
|   7  |   9 秒  |   350   |          37         |        730       |   1120   |    -     |    -    |           1       |        9        |
|   8  |   9 秒  |   350   |          41         |        759       |   1440   |    -     |    -    |           1       |        9        |
|   9  | 8.5 秒  |   400   |          45         |        788       |   1800   |   200    |   10    |           1       |        9        |
|  10  | 8.5 秒  |   400   |          49         |        817       |   1900   |    -     |    -    |           1       |        9        |
|  11  | 8.5 秒  |   400   |          53         |        845       |   2000   |    -     |    -    |           1       |        9        |
|  12  |   8 秒  |   450   |          57         |        874       |   2100   |   400    |   20    |           1       |        9        |
|  13  |   8 秒  |   450   |          61         |        903       |   2200   |    -     |    -    |           3       |       10        |
|  14  |   8 秒  |   450   |          65         |        932       |   2300   |    -     |    -    |           3       |       10        |
|  15  | 7.5 秒  |   500   |          69         |        960       |   2400   |   600    |   30    |           3       |       10        |
|  16  | 7.5 秒  |   500   |          73         |        989       |   2500   |    -     |    -    |           5       |       12        |
|  17  | 7.5 秒  |   500   |          77         |       1018       |   2600   |    -     |    -    |           5       |       12        |
|  18  |   7 秒  |   575   |          81         |       1047       |   2700   |   600    |   50    |           5       |       12        |
|  19  |   7 秒  |   575   |          85         |       1107       |   2800   |    -     |    -    |           7       |       14        |
|  20  |   7 秒  |   575   |          90         |       1139       |   2900   |    -     |    -    |           7       |       14        |
|  21  | 6.5 秒  |   650   |          95         |       1171       |   3000   |   600    |   100   |           7       |       14        |
|  22  | 6.5 秒  |   650   |         100         |       1205       |   3100   |    -     |    -    |           8       |       15        |
|  23  | 6.5 秒  |   650   |         105         |       1239       |   3200   |    -     |    -    |           8       |       15        |
|  24  |   6 秒  |   750   |         110         |       1273       |   3300   |   600    |   120   |           8       |       15        |
|  25  |   6 秒  |   750   |         115         |       1309       |   3400   |    -     |    -    |           9       |       16        |
|  26  |   6 秒  |   750   |         120         |       1345       |   3500   |    -     |    -    |           9       |       16        |
|  27  |   5 秒  |   850   |         125         |       1381       |   3600   |   600    |   150   |           9       |       16        |

</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>推出记录</SmallTitle>

<UnitTable>

| 推出时间 |  活动名称  |    价格       | 购买渠道 |
|   ---   |    ---    |     ---       |    ---   |
| 2025/10 |  宇宙摇滚  | 3 100 摇滚奖章 |   商人   |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>现在亡灵王子的所有装备都提供 500 生命值加成。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/10">
        <TimelineRow>新装备：陨石法杖。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>