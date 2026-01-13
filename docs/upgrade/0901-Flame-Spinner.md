---
title: "部落冲突 coc 旋转喷火器升级数据"
navTitle: "旋转喷火器"
shownTitle: "旋转喷火器"
description: "这台经过改造的烤箱会永不停歇地旋转，令人望而生畏！旋转喷火器无论转多久都不会晕，还能制造无尽的烈焰旋风，对地面和空中的敌人造成伤害。"
module: upgrade-temp
imgFolder: temp_crafted/0901
wiki: https://clashofclans.fandom.com/wiki/Flame_Spinner
canonical: /upgrade/0901-Flame-Spinner
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flame_Spinner4_hd.png" :imgAlt="$frontmatter.navTitle"
    description="这台经过改造的烤箱会永不停歇地旋转，令人望而生畏！<br>旋转喷火器无论转多久都不会晕，还能制造无尽的烈焰旋风，对地面和空中的敌人造成伤害。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Flame_Spinner1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Flame_Spinner2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Flame_Spinner3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Flame_Spinner4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 旋转喷火器会不断以顺时针螺旋方式喷射火焰，对附近的目标造成范围伤害，甚至能将小单位部队弹飞到地图外。
2. 旋转喷火器在战斗中始终处于激活状态，即使没有目标也会持续旋转喷火。
3. 旋转喷火器每次喷射结束到下一次喷射开始有 4 秒的冷却时间。
4. 旋转喷火器的第一发火焰一定会朝着大本营的反方向喷射，后续喷射的方向与上一轮喷射结束时的方向一致。
5. 如果旋转喷火器没有受到减速或冰冻效果影响，则每次攻击旋转的角度约为 16°.

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="8 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="爆发状态的攻击速度" pValue="0.25 秒/次" />
    <UnitProperty pKey="爆发后的冷却时间" pValue="4 秒" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="17" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---  |   ---   |   ---   |         ---        |
|   1  |   600  |      \  |    \    |                    |
|   2  |  1200  |     3M  |   1,12  |                    |
|   3  |  1800  |   3.5M  |   2     |                    |
|   4  |  2400  |     4M  |   2,12  |                    |
|   5  |  3000  |   4.5M  |   2,14  |                    |
|   6  |  3600  |     6M  |   2,16  |                    |
|   7  |  4200  |   7.5M  |   2,18  |                    |
|   8  |  4800  |     9M  |   2,20  |                    |
|   9  |  5400  |  10.5M  |   2,22  |                    |
|  10  |  6000  |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：提升每次攻击造成的伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 每次攻击<br>造成的伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |          ---         |    ---  |   ---   |         ---        |
|   1  |          220         |      \  |    \    |                    |
|   2  |          240         |    35k  |   1     |                    |
|   3  |          260         |    45k  |   1, 6  |                    |
|   4  |          280         |    55k  |   1,12  |                    |
|   5  |          300         |    65k  |   1,18  |                    |
|   6  |          320         |    75k  |   2     |                    |
|   7  |          340         |    85k  |   2, 6  |                    |
|   8  |          360         |    95k  |   2,12  |                    |
|   9  |          380         |   105k  |   2,18  |                    |
|  10  |          400         |   115k  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 3：增加每次爆发的连射次数</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 连射次数 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |    ---  |   ---   |         ---        |
|   1  |    19   |      \  |    \    |                    |
|   2  |    20   |     5M  |   0,12  |                    |
|   3  |    21   |   6.5M  |   0,16  |                    |
|   4  |    22   |     8M  |   0,20  |                    |
|   5  |    23   |   9.5M  |   1     |                    |
|   6  |    24   |    10M  |   1, 6  |                    |
|   7  |    25   |  10.5M  |   1,12  |                    |
|   8  |    26   |    11M  |   2     |                    |
|   9  |    27   |  11.5M  |   2,12  |                    |
|  10  |    28   |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>该精工防御失效。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>新精工防御：旋转喷火器。</TimelineRow>
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