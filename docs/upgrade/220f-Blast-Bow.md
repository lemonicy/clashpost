---
title: "部落冲突 coc 都城爆炸强弩升级数据"
navTitle: "爆炸强弩"
shownTitle: "爆炸强弩"
description: "树干那么粗的箭有多危险？爆炸强弩的出现让这个古老的问题有了答案，那就是：毫不意外，非常危险。"
module: upgrade-capital
imgFolder: capital_buildings/220f
wiki: https://clashofclans.fandom.com/wiki/Blast_Bow
canonical: /upgrade/220f-Blast-Bow
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Blast_Bow5.png" :imgAlt="$frontmatter.navTitle"
    description="树干那么粗的箭有多危险？<br>爆炸强弩的出现让这个古老的问题有了答案，那就是：毫不意外，非常危险。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Blast_Bow_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Blast_Bow1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Blast_Bow2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Blast_Bow3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Blast_Bow4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Blast_Bow5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 9, 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,  2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
| 建筑工人工坊 |   0   |   1   |   1   |   1   |   2   |
|   飞龙悬崖   |   1   |   1   |   1   |   1   |   1   |
|   戈仑石场   |   1   |   1   |   2   |   2   |   3   |
|  哥布林矿井  |   0   |   0   |   0   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="3.5 ~ 14 格" />
    <UnitProperty pKey="攻速" pValue="4 秒/次" />
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
|   1  |   170   |   680   |  4800  |   20k   |   400   |         6         |         1        |
|   2  |   185   |   740   |  5400  |   40k   |   425   |         7         |         2        |
|   3  |   200   |   800   |  6000  |   80k   |   450   |         8         |         3        |
|   4  |   215   |   860   |  6600  |  133k   |   475   |         9         |         4        |
|   5  |   230   |   920   |  7200  |  205k   |   500   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级爆炸强弩的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>爆炸强弩随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>