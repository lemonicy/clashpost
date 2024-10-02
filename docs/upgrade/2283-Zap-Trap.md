---
title: "部落冲突 coc 都城电击陷阱升级数据"
navTitle: "电击陷阱"
shownTitle: "电击陷阱"
description: "如果附近有个电击陷阱，路过的部队一定会被电得惊慌失措。"
module: upgrade-capital
imgFolder: capital_buildings/2283
wiki: https://clashofclans.fandom.com/wiki/Zap_Trap
canonical: /upgrade/2283-Zap-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Zap_Trap5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Small_Trap_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Zap_Trap1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Zap_Trap2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Zap_Trap3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Zap_Trap4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Zap_Trap5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5, 6, 7, 8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1, 2, 3, 4,      5" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
| 建筑工人工坊 |   4   |   5   |   6   |   6   |   6   |
|   飞龙悬崖   |   3   |   4   |   5   |   5   |   5   |
|   戈仑石场   |   3   |   4   |   5   |   6   |   6   |
|   骷髅公园   |   1   |   1   |   3   |   4   |   \   |
|  哥布林矿井  |   2   |   3   |   4   |   4   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="伤害目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发距离" pValue="5 格" />
</UnitProperties>

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
|   1  |   1000  |  2.5k   |         5         |         1        |
|   2  |   1400  |    5k   |         5         |         3        |
|   3  |   1600  |   10k   |         6         |         3        |
|   4  |   1800  |   18k   |         8         |         4        |
|   4  |   2000  |   30k   |        10         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/06/27">
        <TimelineRow>电击陷阱的触发距离提升 2 倍，与空中炸弹和搜空地雷一致（官方说一致，实际上并不一致）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>电击陷阱随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>