---
title: "部落冲突 coc 都城超级法师塔升级数据"
navTitle: "超级法师塔"
shownTitle: "超级法师塔"
description: "超级法师电力十足，在对付大批来犯之敌时能发挥巨大作用，因为他们的攻击可以弹射到初始目标附近的其他敌人。。"
module: upgrade-capital
imgFolder: capital_buildings/2207
wiki: https://clashofclans.fandom.com/wiki/Super_Wizard_Tower
canonical: /upgrade/2207-Super-Wizard-Tower
---

- *如想查看家乡的法师塔，请访问：[法师塔](/upgrade/0305-Wizard-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Wizard_Tower5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Super_Wizard_Tower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Super_Wizard_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Super_Wizard_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Super_Wizard_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Super_Wizard_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Super_Wizard_Tower5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3, 4 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   法师山谷   |   4   |   4   |   5   |   6   |   6   |
| 建筑工人工坊 |   2   |   2   |   2   |   2   |   2   |
|   飞龙悬崖   |   2   |   3   |   4   |   4   |   4   |
|   骷髅公园   |   4   |   4   |   4   |   4   |   \   |
|  哥布林矿井  |   0   |   1   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="5.5 格" />
    <UnitProperty pKey="攻速" pValue="2 秒/次" />
    <UnitProperty pKey="连锁距离" pValue="2.25 格" />
    <UnitProperty pKey="最大目标数" pValue="10" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="连锁后保留的伤害" pValue="40%" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
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

| 等级 | 每秒伤害 | 直接伤害 | 连锁伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   60    |   120   |   48    |  1800  |  6.5k   |   150   |         3         |         1        |
|   2  |   70    |   140   |   56    |  2100  |   13k   |   160   |         4         |         2        |
|   3  |   80    |   160   |   64    |  2400  |   26k   |   170   |         6         |         3        |
|   4  |   90    |   180   |   72    |  2700  |   42k   |   180   |         8         |         4        |
|   5  |   100   |   200   |   80    |  3000  |   70k   |   190   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级法师塔随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>