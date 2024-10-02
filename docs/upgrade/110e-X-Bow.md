---
title: "部落冲突 coc 夜世界X连弩（十字连弩）升级数据"
navTitle: "X连弩"
shownTitle: "X连弩（十字连弩）"
description: "X连弩会发射威力巨大的弩箭。您可将X连弩设置为攻击地面单位，或攻击空中单位。"
module: upgrade-bh
imgFolder: bh_buildings/110e
wiki: https://clashofclans.fandom.com/wiki/X-Bow/Builder_Base
canonical: /upgrade/110e-X-Bow
---

- 如需查看家乡的X连弩，请访问：[X连弩](/upgrade/0309-X-Bow)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="X-Bow5_Ground.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="对地" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="X-Bow1_Ground.png" />
        <UnitImg imgTitle="2 级" imgSrc="X-Bow2_Ground.png" />
        <UnitImg imgTitle="3 级" imgSrc="X-Bow3_Ground.png" />
        <UnitImg imgTitle="4 级" imgSrc="X-Bow4_Ground.png" />
        <UnitImg imgTitle="5 级" imgSrc="X-Bow5_Ground.png" />
    </UnitImgGroup>
    <UnitImgGroup title="对空" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="X-Bow1_Air.png" />
        <UnitImg imgTitle="2 级" imgSrc="X-Bow2_Air.png" />
        <UnitImg imgTitle="3 级" imgSrc="X-Bow3_Air.png" />
        <UnitImg imgTitle="4 级" imgSrc="X-Bow4_Air.png" />
        <UnitImg imgTitle="5 级" imgSrc="X-Bow5_Air.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 9,10" />
    <BuildingNumRow title="建筑数量" num="0,1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="可调对地和对空<sup>*</sup>" />
    <UnitProperty pKey="射程" pValue="12 格" />
    <UnitProperty pKey="攻速" pValue="0.192 秒/次" />
</UnitProperties>

\* 夜世界的X连弩要么只对空，要么只对地，没有家乡那种空地两用的模式。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |   ---  |    ---  |    ---  |         ---         |         ---        |
| 1    |    80   |  15.36  |  1700  |   4.4M  |     7   |                     |          10        |
| 2    |    88   |  16.90  |  1900  |   4.8M  |     8   |                     |          10        |
| 3    |    96   |  18.43  |  2100  |   5.2M  |    10   |                     |          10        |
| 4    |   106   |  20.35  |  2350  |   5.6M  |    11   |                     |          10        |
| 5    |   116   |  22.27  |  2600  |     6M  |    12   |                     |          10        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界 10 本推出，新建筑：X连弩。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>