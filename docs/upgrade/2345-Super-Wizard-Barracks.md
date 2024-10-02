---
title: "部落冲突 coc 都城超级法师训练营升级数据"
navTitle: "超级法师训练营"
shownTitle: "超级法师训练营"
description: "看起来像是超级法师的训练营，但接连不断的爆炸吓得大家都不敢靠近。"
module: upgrade-capital
imgFolder: capital_buildings/2345
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Barracks#Super_Wizard_Barracks
canonical: /upgrade/2345-Super-Wizard-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Wizard_Barracks5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Barracks_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Super_Wizard_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Super_Wizard_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Super_Wizard_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Super_Wizard_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Super_Wizard_Barracks5.png" />
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
    <UnitProperty pKey="可训练的兵种" pValue="<a href='/upgrade/2005-Super-Wizard'>超级法师</a>" />
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
|   1  |  1200 |    10k  |    25    |         3        |         1         |
|   2  |  1400 |    25k  |    30    |         4        |         2         |
|   3  |  1600 |   100k  |    35    |         6        |         3         |
|   4  |  1800 |   250k  |    40    |         8        |         4         |
|   5  |  2000 |   500k  |    45    |        10        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级法师训练营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>