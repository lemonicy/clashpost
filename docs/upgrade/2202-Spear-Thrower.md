---
title: "部落冲突 coc 都城投矛器（投矛机）升级数据"
navTitle: "投矛器"
shownTitle: "投矛器（投矛机）"
description: "向地面和空中的敌方单位投掷长矛，令人生畏。"
module: upgrade-capital
imgFolder: capital_buildings/2202
wiki: https://clashofclans.fandom.com/wiki/Spear_Thrower
canonical: /upgrade/2202-Spear-Thrower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spear_Thrower5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spear_Thrower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Spear_Thrower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spear_Thrower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spear_Thrower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Spear_Thrower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Spear_Thrower5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    4, 5,      6" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   4   |   6   |   8   |   9   |   9   |
|   法师山谷   |   11  |   12  |   13  |   14  |   14  |
|   气球环礁   |   8   |   10  |   12  |   13  |   14  |
| 建筑工人工坊 |   8   |   10  |   11  |   12  |   13  |
|   飞龙悬崖   |   9   |   10  |   11  |   12  |   13  |
|   戈仑石场   |   7   |   9   |   10  |   11  |   12  |
|   骷髅公园   |   3   |   4   |   6   |   7   |   \   |
|  哥布林矿井  |   4   |   5   |   6   |   7   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="0.9 秒/次" />
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
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   90    |  81     |  1200  |    3k   |   100   |         1         |         1        |
|   2  |   105   |  94.5   |  1350  |    6k   |   110   |         2         |         2        |
|   3  |   120   |  108    |  1500  |   12k   |   120   |         4         |         3        |
|   4  |   135   |  121.5  |  1650  |   21k   |   130   |         6         |         4        |
|   5  |   150   |  135    |  1800  |   35k   |   140   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级都城投矛器的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>投矛器随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>