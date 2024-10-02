---
title: "部落冲突 coc 都城雷电法术工厂升级数据"
navTitle: "雷电法术工厂"
shownTitle: "雷电法术工厂"
description: "配制一桶桶雷电法术。别靠近它，否则头发会炸，运气会差。"
module: upgrade-capital
imgFolder: capital_buildings/2382
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Spell_Factories#Lightning_Spell_Factory
canonical: /upgrade/2382-Lightning-Spell-Factory
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lightning_Spell_Factory5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spell_Factory_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Lightning_Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Lightning_Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Lightning_Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Lightning_Spell_Factory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Lightning_Spell_Factory5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   气球环礁   |   0   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可配置的法术" pValue="<a href='/upgrade/2102-Lightning-Spell'>雷电法术</a>" />
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
|   1  |  1000 |   10k   |    25    |         3        |         2         |
|   2  |  1150 |   20k   |    30    |         3        |         2         |
|   3  |  1300 |   40k   |    35    |         5        |         3         |
|   4  |  1450 |   80k   |    40    |         7        |         4         |
|   5  |  1600 |  160k   |    45    |         9        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>雷电法术工厂随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>