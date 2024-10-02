---
title: "部落冲突 coc 子城大本营升级数据"
navTitle: "子城大本营"
shownTitle: "子城大本营"
description: "村民们和超级建筑工人在这里管理着子城。升级子城大本营以提高子城建筑的等级上限。"
module: upgrade-capital
imgFolder: capital_buildings/2401
wiki: https://clashofclans.fandom.com/wiki/District_Hall
canonical: /upgrade/2401-District-Hall
---

- *如想查看家乡的大本营，请访问：[大本营](/upgrade/0400-Town-Hall)。*
- *如想查看夜世界的大本营，请访问：[建筑大师大本营](/upgrade/1200-Builder-Hall)，[夜世界奥仔哨站](/upgrade/1240-O.T.T.O's-Outpost)。*
- *如想查看都城大本营，请访问：[都城大本营](/upgrade/2400-Capital-Hall)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="District_Hall5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="子城大本营" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="District_Hall1.png" />
        <UnitImg imgTitle="2 级" imgSrc="District_Hall2.png" />
        <UnitImg imgTitle="3 级" imgSrc="District_Hall3.png" />
        <UnitImg imgTitle="4 级" imgSrc="District_Hall4.png" />
        <UnitImg imgTitle="5 级" imgSrc="District_Hall5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 摧毁奖励 |
| ---- |  ---   |   ---   |   ---   |
|   1  |  6000  |    \    |   200   |
|   2  |  7000  |   25k   |   225   |
|   3  |  8000  |   75k   |   250   |
|   4  |  9000  |  150k   |   275   |
|   5  | 10000  |  300k   |   300   |
</UnitTable>

<SmallTitle>各子城所需的都城大本营等级</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="子城大本营等级" num="1, 2, 3, 4, 5" />
    <BuildingNumRow title="野蛮人兵营" num="2, 3, 5, 7, 9" />
    <BuildingNumRow title="法师山谷" num="3, 4, 6, 8,10" />
    <BuildingNumRow title="气球环礁" num="4, 5, 7, 8,10" />
    <BuildingNumRow title="建筑工人工坊" num="5, 6, 7, 9,10" />
    <BuildingNumRow title="飞龙悬崖" num="6, 7, 8, 9,10" />
    <BuildingNumRow title="戈仑石场" num="7, 7, 8, 9,10" />
    <BuildingNumRow title="骷髅公园" num="8, 8, 9,10, \" />
    <BuildingNumRow title="哥布林矿井" num="9, 9,10,10, \" />    
</BuildingNum>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>子城大本营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>