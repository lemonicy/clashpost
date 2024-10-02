---
title: "部落冲突 coc 夜世界巨型加农炮升级数据"
navTitle: "巨型加农炮"
shownTitle: "巨型加农炮"
description: "什么都无法阻挡巨型加农炮的攻击。它发射的巨型加农炮弹可以射穿任何东西，并一直向前飞行，一直向前……"
module: upgrade-bh
imgFolder: bh_buildings/110a
wiki: https://clashofclans.fandom.com/wiki/Giant_Cannon
canonical: /upgrade/110a-Giant-Cannon
---

- *如想查看夜世界的双管加农炮，请访问：[夜世界双管加农炮](/upgrade/1101-Double-Cannon)。*
- *如想查看都城的巨型加农炮，请访问：[都城巨型加农炮](/upgrade/220c-Giant-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Cannon10.png" :imgAlt="$frontmatter.navTitle"
    description="什么都无法阻挡巨型加农炮的攻击。<br>它发射的巨型加农炮弹可以射穿任何东西，并一直向前飞行，一直向前……"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giant_Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giant_Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giant_Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giant_Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giant_Cannon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Giant_Cannon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Giant_Cannon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Giant_Cannon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Giant_Cannon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Giant_Cannon10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6,7 - 10" />
    <BuildingNumRow title="建筑数量" num="0,1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="穿透伤害<sup>①</sup>" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="9.5 格<sup>②</sup>" />
    <UnitProperty pKey="攻速" pValue="5 秒/次" />
</UnitProperties>

① 穿透伤害：对炮弹经过的目标都造成伤害。<br>
② 巨型加农炮只能发现 9.5 格以内的目标并进行攻击，但它的炮弹会一直穿过整个地图， 并对被炮弹击中的目标造成伤害。

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
|  --- |   ---   |   ---   |   ---  |   ---   |   ---   |         ---         |         ---        |
|   1  |    41   |   205   |   700  |     2M  |    1    |                     |          7         |
|   2  |    45   |   225   |   800  |   2.1M  |    2    |                     |          7         |
|   3  |    49   |   245   |   950  |   2.2M  |    3    |                     |          7         |
|   4  |    54   |   270   |  1100  |   2.3M  |    4    |                     |          7         |
|   5  |    60   |   300   |  1300  |   2.4M  |    5    |                     |          7         |
|   6  |    66   |   330   |  1500  |   2.5M  |    6    |                     |          7         |
|   7  |    72   |   360   |  1700  |   2.7M  |    8    |                     |          7         |
|   8  |    79   |   395   |  1900  |   3.8M  |   10    |                     |          8         |
|   9  |    87   |   435   |  2150  |   4.7M  |   11    |                     |          9         |
|  10  |    96   |   480   |  2400  |   5.7M  |   12    |                     |         10         |
</UnitTable>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>所有等级巨型加农炮的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，巨型加农炮可升至 10 级。</TimelineRow>
        <TimelineRow>巨型加农炮的射程由 9 格提升到 9.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，巨型加农炮可升至 9 级。</TimelineRow>
        <TimelineRow>巨型加农炮不再对战争机器造成多倍伤害。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>