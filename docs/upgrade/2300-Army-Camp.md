---
title: "部落冲突 coc 都城兵营升级数据"
navTitle: "兵营"
shownTitle: "兵营"
description: "等待突袭开始的日子里，您的部落大军可以在这里休息放松。升级兵营可增加部队容量。"
module: upgrade-capital
imgFolder: capital_buildings/2300
wiki: https://clashofclans.fandom.com/wiki/Army_Camp/Clan_Capital
canonical: /upgrade/2300-Army-Camp
---

- *如想查看家乡的兵营，请访问：[兵营](/upgrade/0480-Army-Camp)。*
- *如想查看夜世界的兵营，请访问：[夜世界兵营](/upgrade/1281-Army-Camp)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Army_Camp5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Army_Camp_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Army_Camp1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Army_Camp2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Army_Camp3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Army_Camp4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Army_Camp5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   3   |   3   |   3   |   3   |   3   |
|   法师山谷   |   0   |   1   |   1   |   1   |   1   |
|   飞龙悬崖   |   1   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" />
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

| 等级 |可容纳的<br>部队人口| 生命值 | 升级费用 | 摧毁奖励 |所需子城<br>大本等级|
| ---- |       ---        |   ---  |   ---   |   ---   |       ---        |
|   1  |        30        |   600  |   10k   |    20   |        1         |
|   2  |        35        |   750  |   25k   |    25   |        2         |
|   3  |        40        |   900  |   50k   |    30   |        3         |
|   4  |        45        |  1050  |   75k   |    35   |        4         |
|   5  |        50        |  1200  |  150k   |    40   |        5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>3 ~ 5 级都城兵营的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>兵营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>