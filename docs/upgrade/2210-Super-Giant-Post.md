---
title: "部落冲突 coc 都城超级巨人岗哨升级数据"
navTitle: "超级巨人岗哨"
shownTitle: "超级巨人岗哨"
description: "超级巨人跃跃欲试，准备给入侵的敌军一顿痛揍。"
module: upgrade-capital
imgFolder: capital_buildings/2210
wiki: https://clashofclans.fandom.com/wiki/Super_Giant_Post
canonical: /upgrade/2210-Super-Giant-Post
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Giant_Post5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Guard_Post_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Super_Giant_Post1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Super_Giant_Post2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Super_Giant_Post3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Super_Giant_Post4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Super_Giant_Post5.png" />        
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 10" />
    <BuildingNumRow title="建筑数量" num="0, 1" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   1   |   2   |   2   |   3   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="守家兵种" pValue="<a href='/upgrade/2002-Super-Giant'>超级巨人</a>" />
    <UnitProperty pKey="兵种数量" pValue="2" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 4,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 兵种等级 | 建筑生命值 | 升级费用 | 摧毁奖励 | 所需都城<br>大本等级 | 所需子城<br>大本等级 |
| ---- |   ---   |    ---    |   ---   |    ---   |         ---        |         ---        |
|   1  |     1   |    800    |  7.5k   |    110   |          8         |          2         |
|   2  |     2   |    920    |   15k   |    120   |          8         |          2         |
|   3  |     3   |   1065    |   30k   |    130   |          8         |          3         |
|   4  |     4   |   1225    |   48k   |    140   |          9         |          4         |
|   5  |     5   |   1400    |   80k   |    150   |         10         |          5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级巨人岗哨随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>