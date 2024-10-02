---
title: "部落冲突 coc 夜世界预备营升级数据"
navTitle: "预备营"
shownTitle: "预备营"
description: "进入相应区域后，预备营会提供增援助您一臂之力。"
module: upgrade-bh
imgFolder: bh_buildings/1285
wiki: https://clashofclans.fandom.com/wiki/Reinforcement_Camp
canonical: /upgrade/1285-Reinforcement-Camp
---

- *如想查看夜世界的兵营，请访问：[夜世界兵营](/upgrade/1281-Army-Camp)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Reinforcement_Camp.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="0, 1, 2" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, 0, 0" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, 1, 2" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="300" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    },
    {
        "column": 2,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 3,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 第几个预备营 | 升级花费 | 升级时间 | 升级后可获<br>得的经验 |
|    ----     |    ---  |   ---   |          ---          |
|      1      |     \   |     \   |           \           |
|      2      |    4M   |    10   |                       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">    
        <TimelineRow>夜世界重做，现在 6 本可解锁新建筑：预备营。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>