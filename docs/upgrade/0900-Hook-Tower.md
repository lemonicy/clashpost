---
title: "部落冲突 coc 钩索塔升级数据"
navTitle: "钩索塔"
shownTitle: "钩索塔"
description: "建筑大师应该不会介意我们借用他船上的绳索吧？钩索塔可将远处的敌人拖拽过来并击晕。不过攻城机器实在太重了，这招对它们无效！"
module: upgrade-temp
imgFolder: temp_crafted/0900
wiki: https://clashofclans.fandom.com/wiki/Hook_Tower
canonical: /upgrade/0900-Hook-Tower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hook_Tower4_hd.png" :imgAlt="$frontmatter.navTitle"
    description="建筑大师应该不会介意我们借用他船上的绳索吧？<br>钩索塔可将远处的敌人拖拽过来并击晕。不过攻城机器实在太重了，这招对它们无效！"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 钩索塔可以从远距离抓取一个部队，并将其带到钩索塔的攻击盲区内（距离钩索塔 1.5 格）。
2. 钩索塔每次攻击可以对目标造成 1 点伤害，并眩晕一段时间。
3. 钩索塔可以攻击英雄、战宠和攻城机器。不过攻城机器比较特殊，钩索塔可以对攻城机器造成伤害，也可以眩晕攻城机器，但不能把攻城机器抓到攻击盲区。
4. 钩索塔无法瞄准 [隐形](/upgrade/0106-Invisibility-Spell) 单位。
5. 当 [掘地矿工](/upgrade/000b-Miner)、[超级矿工](/upgrade/060e-Super-Miner)、[地兽](/upgrade/0285-Diggy)、[攻城钻机](/upgrade/0246-Battle-Drill) 等单位位于地下时，钩索塔无法瞄准。
6. [蔓生法术](/upgrade/0185-Overgrowth-Spell) 可以缠住钩索塔，使其暂时无法攻击。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="攻击距离" pValue="4 - 15 格" />
    <UnitProperty pKey="每次伤害" pValue="1" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="17" />
</UnitProperties>

<SmallTitle>可升级模组 1：生命值模组</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---  |   ---   |   ---   |         ---        |
|   1  |   500  |     \   |    \    |                    |
|   2  |  1000  |    4M   |   1     |                    |
|   3  |  1500  |    5M   |   1, 6  |                    |
|   4  |  2000  |    6M   |   1,12  |                    |
|   5  |  2500  |    7M   |   1,18  |                    |
|   6  |  3000  |    8M   |   2     |                    |
|   7  |  3500  |    9M   |   2, 6  |                    |
|   8  |  4000  |   10M   |   2,12  |                    |
|   9  |  4500  |   11M   |   2,18  |                    |
|  10  |  5000  |   12M   |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：攻击力模组（减少攻击冷却时间）</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 攻击<br>冷却时间 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |       ---       |    ---  |   ---   |         ---        |
|   1  |      7.1 秒     |      \  |    \    |                    |
|   2  |      6.9 秒     |     5M  |   0,12  |                    |
|   3  |      6.7 秒     |     6M  |   0,16  |                    |
|   4  |      6.5 秒     |     7M  |   0,20  |                    |
|   5  |      6.3 秒     |     8M  |   1     |                    |
|   6  |      6.1 秒     |     9M  |   1, 6  |                    |
|   7  |      5.9 秒     |    10M  |   1,12  |                    |
|   8  |      5.7 秒     |    11M  |   2     |                    |
|   9  |      5.5 秒     |  11.5M  |   2,12  |                    |
|  10  |      5.3 秒     |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 3：效果模组（增加眩晕时间）</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 眩晕时间 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |    ---  |   ---   |         ---        |
|   1  |  2.7 秒 |      \  |    \    |                    |
|   2  |  2.8 秒 |    25k  |   1,12  |                    |
|   3  |  2.9 秒 |    30k  |   2     |                    |
|   4  |  3.0 秒 |    35k  |   2,12  |                    |
|   5  |  3.1 秒 |    40k  |   2,14  |                    |
|   6  |  3.2 秒 |    55k  |   2,16  |                    |
|   7  |  3.3 秒 |    70k  |   2,18  |                    |
|   8  |  3.4 秒 |    85k  |   2,20  |                    |
|   9  |  3.5 秒 |   100k  |   2,22  |                    |
|  10  |  3.6 秒 |   115k  |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>新精工防御：钩索塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>

<script setup>
const tableExtraInfo1 = [
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
const tableExtraInfo2 = [
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
const tableExtraInfo3 = [
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
</script>