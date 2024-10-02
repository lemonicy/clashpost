---
title: "部落冲突 coc 都城多管迫击炮升级数据"
navTitle: "多管迫击炮"
shownTitle: "多管迫击炮"
description: "远距离发射多枚能造成溅射伤害的炮弹，以保证最大可能命中目标！"
module: upgrade-capital
imgFolder: capital_buildings/2206
wiki: https://clashofclans.fandom.com/wiki/Multi_Mortar/Clan_Capital
canonical: /upgrade/2206-Multi-Mortar
---

- *如想查看家乡改装后的迫击炮，请访问该页面后切换为“连发模式”：[迫击炮](/upgrade/0303-Mortar)。*
- *如想查看夜世界的多管迫击炮，请访问：[夜世界多管迫击炮](/upgrade/1108-Multi-Mortar)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Multi_Mortar5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Multi_Mortar_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Multi_Mortar1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Multi_Mortar2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Multi_Mortar3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Multi_Mortar4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Multi_Mortar5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num=" 1, 2, 3 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   2   |   2   |   2   |   3   |   4   |
| 建筑工人工坊 |   2   |   2   |   2   |   2   |   2   |
|   戈仑石场   |   2   |   3   |   4   |   4   |   4   |
|   骷髅公园   |   1   |   2   |   3   |   3   |   \   |
|  哥布林矿井  |   1   |   2   |   3   |   4   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.7 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="3 ~ 10 格" />
    <UnitProperty pKey="攻速" pValue="7 秒/轮<sup>*</sup>" />
</UnitProperties>

\* 多管迫击炮的攻击节奏是：4 连发期间每发 0.5 秒，之后休息 5 秒。

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

| 等级 | 每秒伤害 | 每次发射伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |     ---    |   ---  |    ---   |   ---   |        ---        |        ---        |
|   1  |   45    |     80     |  1700  |     5k   |   150   |         2         |         1         |
|   2  |   51    |     90     |  1900  |    10k   |   160   |         3         |         2         |
|   3  |   56    |     100    |  2100  |    20k   |   170   |         5         |         3         |
|   4  |   62    |     110    |  2300  |    33k   |   180   |         7         |         4         |
|   5  |   68    |     120    |  2500  |    55k   |   190   |         9         |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级都城多管迫击炮的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>多管迫击炮随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>