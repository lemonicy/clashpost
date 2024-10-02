---
title: "部落冲突 coc 都城撼地巨石升级数据"
navTitle: "撼地巨石"
shownTitle: "撼地巨石"
description: "撼地巨石非常在意自己的私人空间。这块巨石会凶狠地砸向入侵的地面部队，将他们碾压！"
module: upgrade-capital
imgFolder: capital_buildings/220a
wiki: https://clashofclans.fandom.com/wiki/Crusher/Clan_Capital
canonical: /upgrade/220a-Crusher
---

- *如想查看夜世界的撼地巨石，请访问：[夜世界撼地巨石](/upgrade/1105-Crusher)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Crusher5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Crusher_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Crusher1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Crusher2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Crusher3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Crusher4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Crusher5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4, 5 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   气球环礁   |   2   |   2   |   2   |   2   |   2   |
| 建筑工人工坊 |   2   |   2   |   2   |   2   |   2   |
|   戈仑石场   |   1   |   2   |   2   |   2   |   2   |
|  哥布林矿井  |   0   |   1   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="2.1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="1.7 格" />
    <UnitProperty pKey="攻速" pValue="3.5 秒/次" />
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
|   1  |   150   |   525   |  2300  |    4k   |   130   |         4         |         1        |
|   2  |   175   |   612.5 |  2550  |    8k   |   140   |         5         |         2        |
|   3  |   200   |   700   |  2700  |   16k   |   150   |         6         |         3        |
|   4  |   225   |   787.5 |  2950  |   27k   |   160   |         8         |         4        |
|   5  |   250   |   875   |  3200  |   45k   |   170   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>撼地巨石随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>