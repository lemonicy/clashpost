---
title: "部落冲突 coc 都城滚木陷阱升级数据"
navTitle: "滚木陷阱"
shownTitle: "滚木陷阱"
description: "小心滚木。"
module: upgrade-capital
imgFolder: capital_buildings/2282
wiki: https://clashofclans.fandom.com/wiki/Log_Trap
canonical: /upgrade/2282-Log-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Log_Trap5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Log_Trap_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Log_Trap1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Log_Trap2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Log_Trap3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Log_Trap4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Log_Trap5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4, 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1, 2, 3,      4" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   1   |   1   |   1   |   1   |
|   法师山谷   |   4   |   4   |   4   |   4   |   4   |
| 建筑工人工坊 |   5   |   6   |   7   |   8   |   8   |
|   飞龙悬崖   |   2   |   2   |   2   |   2   |   2   |
|   戈仑石场   |   4   |   5   |   6   |   6   |   6   |
|   骷髅公园   |   4   |   6   |   7   |   7   |   \   |
|  哥布林矿井  |   2   |   2   |   2   |   3   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发距离" pValue="9 格<sup>*</sup>" />
    <UnitProperty pKey="穿透区域宽度" pValue="1 格" />
</UnitProperties>

\* 只有当兵种站在陷阱前方时才能触发。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |   伤害   | 升级费用 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |        ---        |        ---       |
|   1  |   400   |  1.5k   |         4         |         1        |
|   2  |   450   |    3k   |         4         |         3        |
|   3  |   500   |    6k   |         6         |         3        |
|   4  |   550   |   12k   |         8         |         4        |
|   4  |   600   |   20k   |        10         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>滚木陷阱随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>