---
title: "部落冲突 coc 空气炮（吹风机）升级数据"
navTitle: "空气炮"
shownTitle: "空气炮（吹风机）"
description: "空气炮利用强力气流控制着天空，可以击退飞行的敌人。空气炮仅能朝一个方向喷射气流，因此请旋转它们来发挥最大作用！。"
module: upgrade-home
imgFolder: home_buildings/0306
wiki: https://clashofclans.fandom.com/wiki/Air_Sweeper
canonical: /upgrade/0306-Air-Sweeper
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Air_Sweeper7.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="空气炮" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Air_Sweeper1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Air_Sweeper2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Air_Sweeper3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Air_Sweeper4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Air_Sweeper5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Air_Sweeper6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Air_Sweeper7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 8, 9 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="作用类型" pValue="击退空中部队，无伤害" />
    <UnitProperty pKey="作用目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="1 ~ 15  格" />
    <UnitProperty pKey="攻速" pValue="5 秒/次" />
    <UnitProperty pKey="旋转时的调整角度" pValue="顺时针 45°<sup>①</sup>" />
    <UnitProperty pKey="可攻击的范围角" pValue="105°<sup>②</sup>" />
    <UnitProperty pKey="气波角度" pValue="45°<sup>③</sup>" />
</UnitProperties>

① 旋转时的调整角度是指玩家每次点击旋转按钮时调整的空气炮吹气口角度。<br>
② 设定好方向后，空气炮可发现在 1 ~ 15 格范围内，且在空气炮的吹气口正前方正负 52.5° 的目标。<br>
③ 空气炮攻击时，可以发出 45° 大小的扇形气流。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每次攻击的<br>击退距离 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |         ---          |   --- |    ---   |   ---     |        ---          |       ---      |
|   1  |        1.6 格        |   750 |   200k   |  0, 4     |                     |        6       |
|   2  |        2.0 格        |   800 |   300k   |  0, 6     |                     |        6       |
|   3  |        2.4 格        |   850 |   450k   |  0, 8     |                     |        7       |
|   4  |        2.8 格        |   900 |   800k   |  0,12     |                     |        8       |
|   5  |        3.2 格        |   950 |   1.2M   |  1        |                     |        9       |
|   6  |        3.6 格        |  1000 |   1.9M   |  2        |                     |       10       |
|   7  |        4.0 格        |  1050 |   3.4M   |  3        |                     |       11       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 4 级空气炮的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 5 级空气炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>6 ~ 7 级空气炮的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>6 ~ 7 级空气炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>所有等级空气炮的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>  
    <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 6 级空气炮的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 7 级空气炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>