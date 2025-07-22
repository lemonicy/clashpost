---
title: "部落冲突 coc 碎岩迫击炮升级数据"
navTitle: "碎岩迫击炮"
shownTitle: "碎岩迫击炮"
description: "世界各地的巨石投手都排着队要它的签名！碎岩迫击炮会发射带有尖刺的巨石，石头如戈仑石人般优雅坠落，落地后还会继续弹跳、造成附带伤害。建议佩戴安全帽！"
module: upgrade-home
imgFolder: home_buildings/0902
wiki: https://clashofclans.fandom.com/wiki/Crusher_Mortar
canonical: /upgrade/0902-Crusher-Mortar
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Crusher_Mortar4_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="随升级提升" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="攻击距离" pValue="2.5 - 9 格<sup>*</sup>" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="17" />
</UnitProperties>

\* 碎岩迫击炮扔出去的石头落地后还能再次弹起来，石头最多落地 3 次。上方所说的 2.5 - 9 格指的是石头的第一个落点与碎岩迫击炮的距离，每次弹跳距离上一个落点 3 格。

<SmallTitle>可升级模组 1：生命值模组</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---  |   ---   |   ---   |         ---        |
|   1  |   400  |      \  |    \    |                    |
|   2  |   900  |    45k  |   0,12  |                    |
|   3  |  1400  |    60k  |   0,16  |                    |
|   4  |  1900  |    75k  |   0,20  |                    |
|   5  |  2400  |    90k  |   1     |                    |
|   6  |  2900  |    95k  |   1, 6  |                    |
|   7  |  3400  |   100k  |   1,12  |                    |
|   8  |  3900  |   105k  |   2     |                    |
|   9  |  4400  |   110k  |   2,12  |                    |
|  10  |  4900  |   115k  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：攻击力模组</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 每秒伤害 | 每次伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |   ---   |    ---  |   ---   |         ---        |
|   1  |   195   |   351   |      \  |    \    |                    |
|   2  |   200   |   360   |     3M  |   1,12  |                    |
|   3  |   205   |   369   |   3.5M  |   2     |                    |
|   4  |   210   |   378   |     4M  |   2,12  |                    |
|   5  |   215   |   387   |   4.5M  |   2,14  |                    |
|   6  |   220   |   396   |     6M  |   2,16  |                    |
|   7  |   225   |   405   |   7.5M  |   2,18  |                    |
|   8  |   230   |   414   |     9M  |   2,20  |                    |
|   9  |   235   |   423   |  10.5M  |   2,22  |                    |
|  10  |   240   |   432   |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 3：效果模组（增加溅射半径）</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 伤害半径 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |    ---  |   ---   |         ---        |
|   1  |  0.7 格 |     \   |    \    |                    |
|   2  |  0.9 格 |    4M   |   1     |                    |
|   3  |  1.1 格 |    5M   |   1, 6  |                    |
|   4  |  1.3 格 |    6M   |   1,12  |                    |
|   5  |  1.5 格 |    7M   |   1,18  |                    |
|   6  |  1.7 格 |    8M   |   2     |                    |
|   7  |  1.9 格 |    9M   |   2, 6  |                    |
|   8  |  2.1 格 |   10M   |   2,12  |                    |
|   9  |  2.3 格 |   11M   |   2,18  |                    |
|  10  |  2.5 格 |   12M   |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>新精工防御：碎岩迫击炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>

<script setup>
const tableExtraInfo1 = [
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
const tableExtraInfo2 = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfo3 = [
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
</script>