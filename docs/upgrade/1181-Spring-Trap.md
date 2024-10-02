---
title: "部落冲突 coc 夜世界隐形弹簧升级数据"
navTitle: "隐形弹簧"
shownTitle: "隐形弹簧"
description: "曾经有一个精妙的弹簧摆在我的面前，我没有看见，然后，就没有然后了！"
module: upgrade-bh
imgFolder: bh_buildings/1181
wiki: https://clashofclans.fandom.com/wiki/Spring_Trap/Builder_Base
canonical: /upgrade/1181-Spring-Trap
---

- 如想查看家乡的隐形弹簧，请访问：[隐形弹簧](/upgrade/0381-Spring-Trap)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spring_Trap_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Spring_Trap1.png"/>
        <UnitImg imgTitle="2 - 3 级" imgSrc="Spring_Trap2.png"/>
        <UnitImg imgTitle="4 级" imgSrc="Spring_Trap4.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 4, 5 - 6, 7, 8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     2,     3, 4, 5,      6" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="弹飞部队" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="0.7 格" />  
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
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
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 可弹走的<br>总重量 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本营等级|
|  --- |        ---       |   ---   |   ---   |         ---         |         ---          |
|  1   |         4        |   10k   |    \    |                     |           3          |
|  2   |         6        |   30k   | 0, 1    |                     |           4          |
|  3   |         7        |  100k   | 1       |                     |           6          |
|  4   |         8        |  300k   | 2       |                     |           8          |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>所有等级隐形弹簧可以弹飞的兵种重量降低。</TimelineRow>
        <TimelineRow>3 ~ 4 级隐形弹簧的升级费用增加。</TimelineRow>
        <TimelineRow>所有等级隐形弹簧可以弹飞的兵种重量降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，9 本新增一个隐形弹簧。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>