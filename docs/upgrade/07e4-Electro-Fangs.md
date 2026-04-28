---
title: "部落冲突 coc 雷电獠牙装备升级数据"
navTitle: "雷电獠牙"
shownTitle: "雷电獠牙（Electro Fangs）"
description: "雷电獠牙是飞龙公爵的普通装备。带上它后，飞龙公爵的攻击会附带连锁闪电，能对初始目标附近的单位造成递减伤害，同时还会提高飞龙公爵的生命值。"
module: upgrade-home
imgFolder: home_heroes/07e4
wiki: https://clashofclans.fandom.com/wiki/Electro_Fangs
canonical: /upgrade/07e4-Electro-Fangs
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electro_Fangs_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>说明</SmallTitle>

1. 雷电獠牙是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的一件普通装备，在 [铁匠铺](/upgrade/0488-Blacksmith) 10 级时解锁，也就是 17 本。
2. 带上雷电獠牙后，飞龙公爵的攻击会附带连锁闪电效果，对初始目标附近的单位造成伤害；后续目标会依次承受更低的伤害，每跳减少 20%。
   - 第一个被连锁击中的目标会承受完整伤害，原本的初始目标不会额外吃到这段连锁伤害。
   - 如果附近没有可连锁的目标，连锁闪电不会触发。
3. 这个连锁闪电伤害属于直接技能伤害，不会被 [狂暴法术](/upgrade/0102-Rage-Spell) 等加成伤害的效果强化，也不会受到难度修正影响。
4. 除了连锁闪电外，该装备还会为飞龙公爵提供额外生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="10" />
    <UnitProperty pKey="所需大本等级" pValue="17" />
    <UnitProperty pKey="连锁伤害衰减" pValue="每跳减少 20%" />
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

| 等级 | 每次伤害 | 目标数量 | 英雄生命值提升 | 升级费用 | 升级费用 | 所需铁匠铺等级 | 所需大本等级 |
| ---- | ------- | ------- | ------------ | -------- | -------- | -------------- | ----------- |
|   1  |   330   |    1    |     400      |    \    |    \    |       10       |     17      |
|   2  |   330   |    1    |     650      |   120    |    -     |       10       |     17      |
|   3  |   340   |    2    |     850      |   240    |    20    |       10       |     17      |
|   4  |   340   |    2    |    1000      |   400    |    -     |       10       |     17      |
|   5  |   340   |    2    |    1150      |   600    |    -     |       10       |     17      |
|   6  |   350   |    2    |    1300      |   840    |   100    |       10       |     17      |
|   7  |   350   |    2    |    1450      |  1120    |    -     |       10       |     17      |
|   8  |   350   |    2    |    1600      |  1440    |    -     |       10       |     17      |
|   9  |   360   |    3    |    1750      |  1800    |   200    |       10       |     17      |
|  10  |   360   |    3    |    1900      |  1900    |    -     |       10       |     17      |
|  11  |   360   |    3    |    2000      |  2000    |    -     |       10       |     17      |
|  12  |   370   |    3    |    2100      |  2100    |   400    |       10       |     17      |
|  13  |   370   |    3    |    2200      |  2200    |    -     |       10       |     17      |
|  14  |   370   |    3    |    2275      |  2300    |    -     |       10       |     17      |
|  15  |   380   |    4    |    2325      |  2400    |   600    |       10       |     17      |
|  16  |   380   |    4    |    2375      |  2500    |    -     |       10       |     17      |
|  17  |   380   |    4    |    2400      |  2600    |    -     |       10       |     17      |
|  18  |   400   |    4    |    2400      |  2700    |   600    |       10       |     17      |
</UnitTable>

注意：
1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。
2. 连锁闪电的伤害会逐跳衰减，最终伤害取决于目标数量和站位。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/27">
        <TimelineRow>新装备：雷电獠牙。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/04/26">
        <TimelineRow>抢先预览雷电獠牙，共有 18 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
