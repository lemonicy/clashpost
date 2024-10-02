---
title: "部落冲突 coc 都城疗伤法术工厂升级数据"
navTitle: "疗伤法术工厂"
shownTitle: "疗伤法术工厂"
description: "配制一桶桶疗伤法术。里面散发出的花香能让你的头疼奇迹般消失。"
module: upgrade-capital
imgFolder: capital_buildings/2380
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Spell_Factories#Heal_Spell_Factory
canonical: /upgrade/2380-Heal-Spell-Factory
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Heal_Spell_Factory5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spell_Factory_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Heal_Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Heal_Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Heal_Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Heal_Spell_Factory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Heal_Spell_Factory5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   法师山谷   |   1   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可配置的法术" pValue="<a href='/upgrade/2100-Healing-Spell'>疗伤法术</a>" />
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
|   1  |  1000 |     \   |    25    |         2        |         1         |
|   2  |  1150 |   25k   |    30    |         3        |         2         |
|   3  |  1300 |   50k   |    35    |         5        |         3         |
|   4  |  1450 |  100k   |    40    |         7        |         4         |
|   5  |  1600 |  200k   |    45    |         9        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>疗伤法术工厂随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>