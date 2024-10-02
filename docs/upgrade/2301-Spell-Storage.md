---
title: "部落冲突 coc 都城法术仓库升级数据"
navTitle: "法术仓库"
shownTitle: "法术仓库"
description: "储存都城里配制的法术。升级法术仓库可提升突袭时的法术容量。"
module: upgrade-capital
imgFolder: capital_buildings/2301
wiki: https://clashofclans.fandom.com/wiki/Spell_Storage
canonical: /upgrade/2301-Spell-Storage
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spell_Storage5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spell_Storage_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Spell_Storage1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spell_Storage2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spell_Storage3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Spell_Storage4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Spell_Storage5.png" />
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
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 4,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |可容纳的<br>法术空间| 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
|  --- |        ---       |  ---   |   ---   |   ---   |       ---        |        ---        |
|   1  |         3        |  1000  |    \    |    30   |         3        |         1         |
|   2  |         4        |  1150  |    50k  |    35   |         4        |         2         |
|   3  |         5        |  1350  |   100k  |    40   |         6        |         3         |
|   4  |         6        |  1550  |   200k  |    45   |         8        |         4         |
|   5  |         7        |  1750  |   400k  |    50   |        10        |         5         |
</UnitTable>