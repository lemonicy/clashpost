---
title: "部落冲突 coc 都城疾速火箭（多管火箭）升级数据"
navTitle: "疾速火箭"
shownTitle: "疾速火箭（多管火箭）"
description: "这台机器装填有多发火箭。和防空火箭相比，它射程更短，但攻势更猛烈，弥补了射程上的不足。"
module: upgrade-capital
imgFolder: capital_buildings/2209
wiki: https://clashofclans.fandom.com/wiki/Rapid_Rockets
canonical: /upgrade/2209-Rapid-Rockets
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rapid_Rockets5.png" :imgAlt="$frontmatter.navTitle"
    description="这台机器装填有多发火箭。<br>和防空火箭相比，它射程更短，但攻势更猛烈，弥补了射程上的不足。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Rapid_Rockets_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Rapid_Rockets1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Rapid_Rockets2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Rapid_Rockets3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Rapid_Rockets4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Rapid_Rockets5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4, 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 2, 4, 6, 8" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   0   |   2   |   3   |   4   |
|   气球环礁   |   4   |   4   |   4   |   4   |   4  |
| 建筑工人工坊 |   2   |   3   |   4   |   4   |   4   |
|   戈仑石场   |   1   |   2   |   3   |   3   |   3   |
|   骷髅公园   |   2   |   3   |   4   |   5   |   \   |
|  哥布林矿井  |   2   |   4   |   6   |   8   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="攻速" pValue="2.15 秒/轮*" />
</UnitProperties>

* 疾速的攻击节奏是 0.32 秒一发，5 发后休息 0.55 秒。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   328   |   143   |  1400  |  5.5k   |   130   |         4         |         1        |
|   2  |   372   |   162   |  1500  |   11k   |   140   |         5         |         2        |
|   3  |   417   |   181   |  1600  |   22k   |   150   |         6         |         3        |
|   4  |   461   |   200   |  1700  |   36k   |   160   |         8         |         4        |
|   5  |   505   |   220   |  1900  |   60k   |   170   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级疾速火箭的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>疾速火箭随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>