---
title: "部落冲突 coc 都城大本营升级数据"
navTitle: "都城大本营"
shownTitle: "都城大本营"
description: "它是都城的核心！升级都城大本营以解锁新的子城，并提高都城之巅建筑的等级上限。"
module: upgrade-capital
imgFolder: capital_buildings/2400
wiki: https://clashofclans.fandom.com/wiki/Capital_Hall
canonical: /upgrade/2400-Capital-Hall
---

- *如想查看家乡的大本营，请访问：[大本营](/upgrade/0400-Town-Hall)。*
- *如想查看夜世界的大本营，请访问：[建筑大师大本营](/upgrade/1200-Builder-Hall)，[夜世界奥仔哨站](/upgrade/1240-O.T.T.O's-Outpost)。*
- *如想查看子城大本营，请访问：[子城大本营](/upgrade/2401-District-Hall)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Capital_Hall10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="未激活" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Capital_Hall1_thumb.png" imgHd="Capital_Hall1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Capital_Hall2_thumb.png" imgHd="Capital_Hall2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Capital_Hall3_thumb.png" imgHd="Capital_Hall3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Capital_Hall4_thumb.png" imgHd="Capital_Hall4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Capital_Hall5_thumb.png" imgHd="Capital_Hall5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Capital_Hall6_thumb.png" imgHd="Capital_Hall6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Capital_Hall7_thumb.png" imgHd="Capital_Hall7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Capital_Hall8_thumb.png" imgHd="Capital_Hall8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Capital_Hall9_thumb.png" imgHd="Capital_Hall9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Capital_Hall10_thumb.png" imgHd="Capital_Hall10.png" />
    </UnitImgGroup>
    <UnitImgGroup title="已激活" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="2 级" imgSrc="Capital_Hall2_Active_thumb.png" imgHd="Capital_Hall2_Active.png" />
        <UnitImg imgTitle="3 级" imgSrc="Capital_Hall3_Active_thumb.png" imgHd="Capital_Hall3_Active.png" />
        <UnitImg imgTitle="4 级" imgSrc="Capital_Hall4_Active_thumb.png" imgHd="Capital_Hall4_Active.png" />
        <UnitImg imgTitle="5 级" imgSrc="Capital_Hall5_Active_thumb.png" imgHd="Capital_Hall5_Active.png" />
        <UnitImg imgTitle="6 级" imgSrc="Capital_Hall6_Active_thumb.png" imgHd="Capital_Hall6_Active.png" />
        <UnitImg imgTitle="7 级" imgSrc="Capital_Hall7_Active_thumb.png" imgHd="Capital_Hall7_Active.png" />
        <UnitImg imgTitle="8 级" imgSrc="Capital_Hall8_Active_thumb.png" imgHd="Capital_Hall8_Active.png" />
        <UnitImg imgTitle="9 级" imgSrc="Capital_Hall9_Active_thumb.png" imgHd="Capital_Hall9_Active.png" />
        <UnitImg imgTitle="10 级" imgSrc="Capital_Hall10_Active_thumb.png" imgHd="Capital_Hall10_Active.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="6×6" />
    <UnitProperty pKey="判定面积" pValue="5×5" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="15 格" />
    <UnitProperty pKey="攻速" pValue="8 秒/轮" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |  生命值 | 升级费用 | 升级要求 | 摧毁奖励 |
| ---- |   ---   |   ---   |   ---   |   ---   |    ---  |   ---   |
|   1  |     0   |      0  |  10000  |    \    |     \   |   100   |
|   2  |    80   |    640  |  14000  |   50k   |    15   |   200   |
|   3  |   100   |    800  |  18000  |   75k   |    65   |   300   |
|   4  |   120   |    960  |  22000  |  100k   |   165   |   400   |
|   5  |   140   |   1120  |  25000  |  150k   |   285   |   500   |
|   6  |   160   |   1280  |  28000  |  200k   |   480   |   600   |
|   7  |   190   |   1520  |  31000  |  400k   |   670   |   700   |
|   8  |   220   |   1760  |  34000  |  600k   |  1090   |   800   |
|   9  |   250   |   2000  |  37000  |  800k   |  1500   |   900   |
|  10  |   280   |   2240  |  40000  |    1M   |  2000   |  1000   |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>都城大本营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>