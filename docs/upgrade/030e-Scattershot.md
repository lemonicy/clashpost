---
title: "部落冲突 coc 投石炮（投石机）升级数据"
navTitle: "投石炮"
shownTitle: "投石炮（投石机）"
description: "投石炮朝射程内最近的目标发射又大又重的石块，但这些石块捆得并不牢固，它们撞击目标后会散开，对目标后方的部队造成溅射伤害。"
module: upgrade-home
imgFolder: home_buildings/030e
wiki: https://clashofclans.fandom.com/wiki/Scattershot
canonical: /upgrade/030e-Scattershot
---

- *玩家所说的投石车指的是攻城烈焰车，而不是投石炮，攻城烈焰车的数据请参考： [攻城烈焰车](/upgrade/0245-Flame-Flinger)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Scattershot5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="日常状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Scattershot1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Scattershot2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Scattershot3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Scattershot4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Scattershot5.png" />
    </UnitImgGroup>
        <UnitImgGroup title="无弹药" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Scattershot1_Depleted.png" />
        <UnitImg imgTitle="2 级" imgSrc="Scattershot2_Depleted.png" />
        <UnitImg imgTitle="3 级" imgSrc="Scattershot3_Depleted.png" />
        <UnitImg imgTitle="4 级" imgSrc="Scattershot4_Depleted.png" />
        <UnitImg imgTitle="5 级" imgSrc="Scattershot5_Depleted.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 12, 13 - 16" />
    <BuildingNumRow title="建筑数量" num="     0,       2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

投石炮击中目标后会爆炸，爆炸后会对攻击方向向前 1 ~ 5 格散射 90° 并造成散射伤害，溅射伤害随距离递减。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="射程" pValue="3 ~ 10 格" />
    <UnitProperty pKey="攻速" pValue="3.228 秒/次" />
    <UnitProperty pKey="弹药数量" pValue="90" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 |    每次伤害   |  散射伤害  | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |      ---     |    ---    |   ---  |   ---   |    ----   |        ---          |       ----      |
|   1  |   125   | 300 - 403.5  | 100 - 300 |  3600  |    11M  |    10     |                     |        13       |
|   2  |   150   | 360 - 484.2  | 120 - 360 |  4200  |    12M  |    11     |                     |        13       |
|   3  |   175   | 420 - 564.9  | 140 - 420 |  4800  |  12.6M  |    13     |                     |        14       |
|   4  |   185   | 450 - 597.18 | 150 - 450 |  5100  |  19.3M  |    14     |                     |        15       |
|   5  |   190   | 480 - 613.32 | 160 - 480 |  5410  |  22.5M  |    15     |                     |        16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>4 级投石炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 5 级投石炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>所有等级投石炮的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>3 级投石炮的升级费用降低。</TimelineRow>
        <TimelineRow>4 级投石炮的每秒伤害降低 15。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 4 级投石炮。</TimelineRow>
        <TimelineRow>1 ~ 2 级投石炮的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 2 级投石炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>1 ~ 3 级投石炮的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>游戏新增 14 本，并在 14 本新增 3 级投石炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>投石炮的攻击速度从 3.036 秒/次减慢至 3.228 秒/次。</TimelineRow>
        <TimelineRow>投石炮的每秒伤害值降低 10。</TimelineRow>
        <TimelineRow>提升投石炮的生命值。（1 级：3000 → 3600，2 级：3500 → 4200）</TimelineRow>
    </TimelineItem>    
    <TimelineItem date="2020/06/22">
        <TimelineRow>投石炮的攻击速度从 3 秒/次减慢到 3.036 秒/次。</TimelineRow>
        <TimelineRow>投石炮现在可能会出现弹药用尽的情况，和X连弩、地狱之塔类似。</TimelineRow>
    </TimelineItem>       
    <TimelineItem date="2019/12/09">
        <TimelineRow>游戏新增 13 本，并在 13 本新增建筑：投石炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>