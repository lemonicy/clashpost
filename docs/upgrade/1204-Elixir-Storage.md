---
title: "部落冲突 coc 夜世界圣水瓶升级数据"
navTitle: "圣水瓶"
shownTitle: "圣水瓶"
description: "圣水瓶用来保存从地下收集的圣水。升级圣水瓶以提升其存储上限。"
module: upgrade-bh
imgFolder: bh_buildings/1204
wiki: https://clashofclans.fandom.com/wiki/Elixir_Storage/Builder_Base
canonical: /upgrade/1204-Elixir-Storage
---

- *如想查看家乡的圣水瓶，请访问：[圣水瓶](/upgrade/0405-Elixir-Storage)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elixir_Storage10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Elixir_Storage1.png"/>
        <UnitImg imgTitle="2 级" imgSrc="Elixir_Storage2.png"/>
        <UnitImg imgTitle="3 级" imgSrc="Elixir_Storage3.png"/>
        <UnitImg imgTitle="4 级" imgSrc="Elixir_Storage4.png"/>
        <UnitImg imgTitle="5 级" imgSrc="Elixir_Storage5.png"/>
        <UnitImg imgTitle="6 级" imgSrc="Elixir_Storage6.png"/>
        <UnitImg imgTitle="7 级" imgSrc="Elixir_Storage7.png"/>
        <UnitImg imgTitle="8 级" imgSrc="Elixir_Storage8.png"/>
        <UnitImg imgTitle="9 级" imgSrc="Elixir_Storage9.png"/>
        <UnitImg imgTitle="10 级" imgSrc="Elixir_Storage10.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 10" />
    <BuildingNumRow title="合计" num="1, 2" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, 1" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, 1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />  
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "number",
        "icon": "Elixir2",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
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

| 等级 | 最大储量 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需夜世界<br>大本营等级 |
|  --- |   ---   |   ---  |    ---  |   ---   |         ---         |         ---          |
|  1   |   70k   |   650  |    20k  | 0, 0,30 |                     |           3          |
|  2   |  150k   |   800  |    80k  | 0, 1    |                     |           3          |
|  3   |  250k   |   975  |   200k  | 0, 3    |                     |           3          |
|  4   |  350k   |  1150  |   300k  | 0, 6    |                     |           4          |
|  5   |  600k   |  1350  |   600k  | 0,12    |                     |           5          |
|  6   |  800k   |  1600  |     1M  | 1       |                     |           6          |
|  7   |  1.2M   |  1850  |   1.5M  | 2       |                     |           7          |
|  8   |  1.6M   |  2150  |     2M  | 3       |                     |           8          |
|  9   |    2M   |  2450  |   2.5M  | 4       |                     |           9          |
| 10   |  2.5M   |  2750  |   3.2M  | 5       |                     |          10          |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>5 ~ 9 级圣水瓶的升级费用增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，圣水瓶可升至 10 级。</TimelineRow>
    </TimelineItem>
     <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，圣水瓶可升至 9 级。</TimelineRow>
    </TimelineItem>   
    <TimelineItem :historyBottom="true" />
</Timeline>