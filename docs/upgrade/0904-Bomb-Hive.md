---
title: "部落冲突 coc 炸弹蜂巢升级数据"
navTitle: "炸弹蜂巢"
shownTitle: "炸弹蜂巢"
description: "瞧瞧我们这炸弹，引爆那叫一个快！这些炸弹会沿直线飞出蜂巢，一旦命中地面或空中目标就会爆炸。"
module: upgrade-temp
imgFolder: temp_crafted/0904
wiki: https://clashofclans.fandom.com/wiki/Bomb_Hive
canonical: /upgrade/0904-Bomb-Hive
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bomb_Hive4_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Bomb_Hive1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Bomb_Hive2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Bomb_Hive3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Bomb_Hive4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 在攻击时，炸弹蜂巢会持续发射炸弹。这些炸弹沿直线飞行，方向与村庄网格平行（从玩家视角来看是斜向的）。炸弹会在接触到敌方单位或飞行一段距离后爆炸，造成范围伤害。
2. 在战斗期间，炸弹蜂巢始终处于活跃状态，即使攻击范围内没有目标也会持续发射炸弹。
3. 炸弹蜂巢的第一枚炸弹向右下角发射，随后每次攻击都顺时针旋转 90°.

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="未知" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="随升级提升" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="18" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   --- |   ---    |   ---   |         ---        |
|   1  |   400 |      \   |      \  |                    |
|   2  |   900 |     3M   |   1,12  |                    |
|   3  |  1400 |   3.5M   |   2     |                    |
|   4  |  1900 |     4M   |   2,12  |                    |
|   5  |  2400 |   4.5M   |   2,14  |                    |
|   6  |  2900 |     6M   |   2,16  |                    |
|   7  |  3400 |   7.5M   |   2,18  |                    |
|   8  |  3900 |     9M   |   2,20  |                    |
|   9  |  4400 |  10.5M   |   2,22  |                    |
|  10  |  4900 |    12M   |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：提升炸弹的伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 炸弹的<br>每次伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |         ---       |    ---  |   ---   |         ---        |
|   1  |         324       |      \  |   \     |                    |
|   2  |         378       |    35k  |   1     |                    |
|   3  |         432       |    45k  |   1, 6  |                    |
|   4  |         486       |    55k  |   1,12  |                    |
|   5  |         540       |    65k  |   1,18  |                    |
|   6  |         594       |    75k  |   2     |                    |
|   7  |         648       |    85k  |   2, 6  |                    |
|   8  |         702       |    95k  |   2,12  |                    |
|   9  |         756       |   105k  |   2,18  |                    |
|  10  |         810       |   115k  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 3：提升建筑的射程</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 |   射程  | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |    ---  |   ---   |         ---        |
|   1  |  11 格  |     \   |      \  |                    |
|   2  |  12 格  |     5M  |   0,12  |                    |
|   3  |  13 格  |   6.5M  |   0,16  |                    |
|   4  |  14 格  |     8M  |   0,20  |                    |
|   5  |  15 格  |   9.5M  |   1     |                    |
|   6  |  16 格  |    10M  |   1, 6  |                    |
|   7  |  17 格  |  10.5M  |   1,12  |                    |
|   8  |  18 格  |    11M  |   2     |                    |
|   9  |  19 格  |  11.5M  |   2,12  |                    |
|  10  |  20 格  |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>新精工防御：炸弹蜂巢。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>

<script setup>
const tableExtraInfo1 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfo2 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfo3 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>