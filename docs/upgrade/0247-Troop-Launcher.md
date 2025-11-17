---
title: "部落冲突 coc 部队发射器升级数据"
navTitle: "部队发射器"
shownTitle: "部队发射器"
description: "这是一台无法移动的机器，它会向友军发射装满部队和部落城堡援军的飞桶，为他们提供支援。每个飞桶可容纳多个单位，包括一个部落城堡援军。飞桶数量有限，一定要充分发挥它们的作用！"
module: upgrade-home
imgFolder: home_tech/0247
wiki: https://clashofclans.fandom.com/wiki/Troop_Launcher
canonical: /upgrade/0247-Troop-Launcher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Troop_Launcher_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Troop_Launcher1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Troop_Launcher2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Troop_Launcher3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Troop_Launcher4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 部队发射器部署后会向我方部队发射一桶一桶的部队。
    - 部队发射器发射部队时会同时发射自带部队和城堡内的援军，每次发射的配置为 [巨人](/upgrade/0002-Giant)、[野蛮人](/upgrade/0000-Barbarian)、[弓箭手](/upgrade/0001-Archer)、[炸弹人](/upgrade/0004-Wall-Breaker) 和 一个 [部落城堡](/upgrade/0407-Clan-Castle) 内的部队，其中巨人最先出来。
    - 城堡内部队的出现顺序与这篇文章所述相同：[援军的出现顺序](/p/593)。
3. 部队发射器部署后不能移动，即使没有受到伤害也会自动掉血。[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止部队发射器自身掉血。
5. 部队发射器中的部队等级取决于部队发射器的等级，而非玩家在 [实验室](/upgrade/0483-Laboratory) 中的部队等级。
6. 当部队发射器的血量清零，或发射完所有自带部队时，部队发射器就会自动解体并释放部落城堡内的部队。部队发射器解体后，只有尚未发射的自带部队会消失，援军会正常出来。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用方式" pValue="给进攻方投放增援部队" />
    <UnitProperty pKey="作用目标" pValue="最近的进攻方部队" />
    <UnitProperty pKey="占据人口" pValue="30" />
    <UnitProperty pKey="最远投放距离" pValue="未知" />
    <UnitProperty pKey="投放速度" pValue="6 秒/次" />
    <UnitProperty pKey="移动速度" pValue="0 (无法移动)" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="8" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 9,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 10,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |最长<br>存活时间|桶的<br>数量|野蛮人<br>数量|弓箭手<br>数量|巨人<br>数量|炸弹人<br>数量|部队<br>等级| 生命值|升级花费| 升级时间|所需<br>实验室等级|所需<br>大本等级|
|  --- |      ---      |    ---    |     ---     |     ---     |    ---     |     ---     |    ---    | ---- |  ----  |  ----  |       ---       |      ---      |
|   1  |     80 秒     |     5     |      2      |      3      |     1      |      1      |      9    | 2000 |     \  |    \   |          1      |       16      |
|   2  |     88 秒     |     5     |      2      |      3      |     1      |      2      |     10    | 2200 |  8.5M  |    6   |         14      |       16      |
|   3  |     96 秒     |     6     |      2      |      4      |     1      |      2      |     11    | 2400 |   10M  |    9   |         14      |       16      |
|   4  |    104 秒     |     7     |      2      |      4      |     1      |      2      |     12    | 2600 |   17M  |    9   |         15      |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>4 级部队发射器的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>攻城机器的建造时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>在 16 本新增攻城机器：部队发射器。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>