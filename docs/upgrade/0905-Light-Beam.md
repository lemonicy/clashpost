---
title: "部落冲突 coc 圣光灯塔升级数据"
navTitle: "圣光灯塔"
shownTitle: "圣光灯塔"
description: "太亮了，就算眯起眼睛也没用！圣光灯塔的射程极远，但光束的亮度会随距离递减。目标离得越近，承受的伤害越高。"
module: upgrade-temp
imgFolder: temp_crafted/0905
wiki: https://clashofclans.fandom.com/wiki/Light_Beam
canonical: /upgrade/0905-Light-Beam
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Light_Beam4_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Light_Beam1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Light_Beam2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Light_Beam3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Light_Beam4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 圣光灯塔会对 5 格内的目标造成全额伤害，超出范围时伤害会降低，在射程边缘时仅有 30% 伤害。如果目标走出射程，则光束会完全落空。
2. 圣光灯塔的伤害计算点为命中点，而非光束发射时目标所在的位置。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="15 格" />
    <UnitProperty pKey="攻击速度" pValue="随升级改变" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="18" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   --- |   ---    |   ---   |         ---        |
|   1  |   600 |      \   |      \  |                    |
|   2  |  1200 |    45k   |   0,12  |                    |
|   3  |  1800 |    60k   |   0,16  |                    |
|   4  |  2400 |    75k   |   0,20  |                    |
|   5  |  3000 |    90k   |   1     |                    |
|   6  |  3600 |    95k   |   1, 6  |                    |
|   7  |  4200 |   100k   |   1,12  |                    |
|   8  |  4900 |   105k   |   2     |                    |
|   9  |  5400 |   110k   |   2,12  |                    |
|  10  |  6000 |   115k   |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：提升光束的伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 |  每次伤害  | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |    ---    |    ---  |   ---   |         ---        |
|   1  | 132 - 440 |      \  |   \     |                    |
|   2  | 144 - 480 |     3M  |   1,12  |                    |
|   3  | 156 - 520 |   3.5M  |   2     |                    |
|   4  | 168 - 560 |     4M  |   2,12  |                    |
|   5  | 180 - 600 |   4.5M  |   2,14  |                    |
|   6  | 192 - 640 |     6M  |   2,16  |                    |
|   7  | 204 - 680 |   7.5M  |   2,18  |                    |
|   8  | 216 - 720 |     9M  |   2,20  |                    |
|   9  | 228 - 760 |  10.5M  |   2,22  |                    |
|  10  | 240 - 800 |    12M  |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 3：降低攻击的冷却时间</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 冷却时间 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---   |    ---  |   ---   |         ---        |
|   1  |  1.9 秒 |     \   |      \  |                    |
|   2  |  1.8 秒 |    4M   |   1     |                    |
|   3  |  1.7 秒 |    5M   |   1, 6  |                    |
|   4  |  1.6 秒 |    6M   |   1,12  |                    |
|   5  |  1.5 秒 |    7M   |   1,18  |                    |
|   6  |  1.4 秒 |    8M   |   2     |                    |
|   7  |  1.3 秒 |    9M   |   2, 6  |                    |
|   8  |  1.2 秒 |   10M   |   2,12  |                    |
|   9  |  1.1 秒 |   11M   |   2,18  |                    |
|  10  |  1.0 秒 |   12M   |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>新精工防御：圣光灯塔。</TimelineRow>
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