---
title: "部落冲突 coc 夜世界弹射陷阱升级数据"
navTitle: "弹射陷阱"
shownTitle: "弹射陷阱"
description: "将敌军地面部队弹向您设定的方向。走你！"
module: upgrade-bh
imgFolder: bh_buildings/1180
wiki: https://clashofclans.fandom.com/wiki/Push_Trap
canonical: /upgrade/1180-Push-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Push_Trap10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Push_Trap1.png"/>
        <UnitImg imgTitle="2 级" imgSrc="Push_Trap2.png"/>
        <UnitImg imgTitle="3 级" imgSrc="Push_Trap3.png"/>
        <UnitImg imgTitle="4 级" imgSrc="Push_Trap4.png"/>
        <UnitImg imgTitle="5 级" imgSrc="Push_Trap5.png"/>
        <UnitImg imgTitle="6 级" imgSrc="Push_Trap6.png"/>
        <UnitImg imgTitle="7 级" imgSrc="Push_Trap7.png"/>
        <UnitImg imgTitle="8 级" imgSrc="Push_Trap8.png"/>
        <UnitImg imgTitle="9 级" imgSrc="Push_Trap9.png"/>
        <UnitImg imgTitle="10 级" imgSrc="Push_Trap10.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2, 3, 4, 5 - 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="0, 1, 2, 3,     4,      5" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="作用类型" pValue="将部队弹射到几格之外" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="1 格" />
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="弹射距离" pValue="6 格" />    
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

| 等级 | 可弹射的<br>总重量 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本营等级|
|  --- |        ---       |   ---   |   ---   |         ---         |         ---          |
|  1   |         8        |    1k   |    \    |                     |           2          |
|  2   |        10        |    3k   | 0, 0, 5 |                     |           3          |
|  3   |        12        |   10k   | 0, 0,20 |                     |           3          |
|  4   |        14        |   20k   | 0, 2    |                     |           4          |
|  5   |        16        |   40k   | 0, 4    |                     |           5          |
|  6   |        18        |   60k   | 0,12    |                     |           6          |
|  7   |        20        |  100k   | 0,16    |                     |           7          |
|  8   |        22        |  200k   | 1       |                     |           8          |
|  9   |        24        |  300k   | 1,12    |                     |           9          |
| 10   |        26        |  500k   | 2       |                     |          10          |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>1 ~ 3 级弹射陷阱的弹射能力增加，4 ~ 9 级弹射陷阱的弹射能力减弱。</TimelineRow>
        <TimelineRow>6 ~ 9 级弹射陷阱的升级费用增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，弹射陷阱可升至 10 级。</TimelineRow>
        <TimelineRow>弹射陷阱现在可以弹射弹跳单位，如野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>1 级和 2 级弹射陷阱的弹射能力从 5/7 提升至 6/8.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，弹射陷阱可升至 9 级。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>