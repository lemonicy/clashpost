---
title: "部落冲突 coc 都城地狱之塔升级数据"
navTitle: "地狱之塔"
shownTitle: "地狱之塔"
description: "地狱之塔是高生命值部队的克星，可对其持续锁定的目标造成毁灭性的伤害。"
module: upgrade-capital
imgFolder: capital_buildings/220e
wiki: https://clashofclans.fandom.com/wiki/Inferno_Tower/Clan_Capital
canonical: /upgrade/220e-Inferno-Tower
---

- *如想查看家乡的地狱之塔，请访问：[地狱之塔](/upgrade/030a-Inferno-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Tower5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Inferno_Tower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Tower5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   法师山谷   |   0   |   0   |   2   |   2   |   3   |
|   气球环礁   |   0   |   0   |   2   |   2   |   2   |
|   飞龙悬崖   |   1   |   2   |   2   |   2   |   2   |
|  哥布林矿井  |   0   |   0   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>重要说明</SmallTitle>

都城的地狱之塔只有单目标模式，没有像家乡的那种多目标模式。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
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

| 等级 | 初始<br>每秒伤害 | 2.5秒后<br>每秒伤害 | 7.5秒后<br>每秒伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |       ---      |        ---         |        ---         |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |       200      |        500         |        2000        |  3600  |   15k   |   380   |         6         |         1        |
|   2  |       230      |        575         |        2300        |  4000  |   30k   |   400   |         7         |         2        |
|   3  |       260      |        650         |        2600        |  4400  |   60k   |   420   |         8         |         3        |
|   4  |       290      |        725         |        2900        |  4800  |   93k   |   440   |         9         |         4        |
|   5  |       320      |        800         |        3200        |  5200  |  155k   |   460   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>4 ~ 5 级地狱之塔的每秒伤害（第一阶段和第二阶段）降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>地狱之塔随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>