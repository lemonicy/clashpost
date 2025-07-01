---
title: "部落冲突 coc 冰障法术升级数据"
navTitle: "冰障法术"
shownTitle: "冰障法术"
description: "冻得结结实实，绝对安全！<br>利用此冷冻合剂将您的地面与空中部队包裹在冰块中，几乎可以抵挡所有伤害，但同时会冻结他们的移动与攻击！"
module: upgrade-home
imgFolder: home_tech/0186
wiki: https://clashofclans.fandom.com/wiki/Ice_Block_Spell
canonical: /upgrade/0186-Ice-Block-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Block_Spell.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 冰障法术会暂时冰冻部队，让部队无法攻击和移动。被冰冻的部队会在冰冻期间获得减伤效果。
2. 冰障法术的定身及减伤效果只能在施放时赋予给在法术范围内的部队，之后进入法术范围的部队无法获得效果。
3. 冰障法术的减伤与[巨型手套](/upgrade/0704-Giant-Gauntlet)、[永恒书卷](/upgrade/0780-Eternal-Tome)等的减伤效果同时生效时，只能生效最高的减伤效果，不能叠加。
4. 被冰冻的部队会受[空气炮](/upgrade/0306-Air-Sweeper)、[飓风陷阱](/upgrade/0386-Tornado-Trap)等的位移效果影响，会被带着移动。
5. 冰障法术对攻城机器及在施放法术时位于地下的部队（例如[矿工](/upgrade/000b-Miner)）无效。


<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="冷冻我方部队" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 所受伤害减少 | 法术持续时间 | 升级花费    | 升级时间 | 所需实验室等级 | 所需大本等级 |
| ---- |    -----    |     ---     |    ----    |   ----  |      ----     |     ----    |
|   1  |     86%     |      7s     |    \       |   \     |       1       |      14     |
|   2  |     88%     |      7s     |   140,000  |    10   |      12       |      14     |
|   3  |     90%     |      7s     |   200,000  |    11   |      13       |      15     |
|   4  |     92%     |      7s     |   280,000  |    14   |      14       |      16     |
|   5  |     94%     |      7s     |   320,000  |    16   |      15       |      17     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/19">
        <TimelineRow>新法术：冰障法术，14 本可解锁，共推出 5 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>