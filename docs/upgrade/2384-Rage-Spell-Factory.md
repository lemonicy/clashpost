---
title: "部落冲突 coc 都城狂暴法术工厂升级数据"
navTitle: "狂暴法术工厂"
shownTitle: "狂暴法术工厂"
description: "配制一桶桶狂暴法术。稍微离它近一点，你都会变得异常狂暴。"
module: upgrade-capital
imgFolder: capital_buildings/2384
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Spell_Factories#Rage_Spell_Factory
canonical: /upgrade/2384-Rage-Spell-Factory
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rage_Spell_Factory5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spell_Factory_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Rage_Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Rage_Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Rage_Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Rage_Spell_Factory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Rage_Spell_Factory5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   飞龙悬崖   |   1   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可配置的法术" pValue="<a href='/upgrade/2104-Rage-Spell'>狂暴法术</a>" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   --- |   ---   |   ---    |        ---       |        ---        |
|   1  |  1000 |      \  |    25    |         6        |         1         |
|   2  |  1150 |    30k  |    30    |         7        |         2         |
|   3  |  1300 |    60k  |    35    |         8        |         3         |
|   4  |  1450 |   120k  |    40    |         9        |         4         |
|   5  |  1600 |   250k  |    45    |        10        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>狂暴法术工厂随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>