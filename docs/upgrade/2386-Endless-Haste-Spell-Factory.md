---
title: "部落冲突 coc 都城永恒急速法术工厂升级数据"
navTitle: "永恒急速法术工厂"
shownTitle: "永恒急速法术工厂"
description: "配制一桶桶永恒急速法术。村民们每次路过这里都会加快脚步。"
module: upgrade-capital
imgFolder: capital_buildings/2386
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Spell_Factories#Endless_Haste_Spell_Factory
canonical: /upgrade/2386-Endless-Haste-Spell-Factory
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Endless_Haste_Spell_Factory4.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spell_Factory_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Endless_Haste_Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Endless_Haste_Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Endless_Haste_Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Endless_Haste_Spell_Factory4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井  |   0   |   1   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可配置的法术" pValue="<a href='/upgrade/2106-Endless-Haste-Spell'>永恒急速法术</a>" />
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
|   1  |  1000 |    25k  |    25    |         9        |         2         |
|   2  |  1150 |    50k  |    30    |         9        |         2         |
|   3  |  1300 |   125k  |    35    |        10        |         3         |
|   4  |  1450 |   250k  |    40    |        10        |         4         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新建筑：永恒急速法术工厂。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline> 

