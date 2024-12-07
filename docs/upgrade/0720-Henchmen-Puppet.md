---
title: "部落冲突 coc 护卫玩偶装备升级数据"
navTitle: "护卫玩偶"
shownTitle: "护卫玩偶"
description: "护卫玩偶是亡灵王子的两件初始装备之一，另一件是暗黑魔球。护卫玩偶装备可以让亡灵王子使用技能时召唤出两个空中护卫。激活技能后，亡灵王子会短暂隐身，此时空中护卫的作用就是替英雄扛伤害。"
module: upgrade-home
imgFolder: home_heroes/0720
wiki: https://clashofclans.fandom.com/wiki/Henchmen_Puppet
canonical: /upgrade/0720-Henchmen-Puppet
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">护卫玩偶</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">空中护卫</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 护卫玩偶 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Henchmen_Puppet_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 护卫玩偶是 [亡灵王子](/upgrade/0204-Minion-Prince) 的两件初始装备之一，另一件是 [暗黑魔球](/upgrade/0721-Dark-Orb)。
2. 护卫玩偶装备可以让亡灵王子使用技能时召唤出两个空中护卫。激活技能后，亡灵王子会短暂隐身，此时空中护卫的作用就是替英雄扛伤害。
3. 除了召唤空中护卫外，该装备还可以为亡灵王子提供额外的每秒伤害，并且增加开技能时恢复的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有亡灵王子即可" />
    <UnitProperty pKey="召唤的护卫数量" pValue="2" />
    <UnitProperty pKey="开启技能后亡灵王子的隐身时长" pValue="1 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |召唤的<br>护卫等级|英雄每秒伤害<br>增加|开启技能后<br>生命值恢复加成|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---      |         ---       |            ---           |   --- |  ---  |       ---       |       ---     |
|   1  |        1       |         33        |            176           |    \  |   \   |        1        |        9      |
|   2  |        1       |         38        |            193           |   120 |   -   |        1        |        9      |
|   3  |        2       |         46        |            209           |   240 |   20  |        1        |        9      |
|   4  |        2       |         51        |            226           |   400 |   -   |        1        |        9      |
|   5  |        2       |         56        |            242           |   600 |   -   |        1        |        9      |
|   6  |        3       |         64        |            259           |   840 |  100  |        1        |        9      |
|   7  |        3       |         71        |            275           |  1120 |   -   |        1        |        9      |
|   8  |        3       |         78        |            292           |  1440 |   -   |        1        |        9      |
|   9  |        4       |         92        |            308           |  1800 |  200  |        1        |        9      |
|  10  |        4       |        103        |            325           |  1900 |   -   |        3        |       10      |
|  11  |        4       |        114        |            341           |  2000 |   -   |        3        |       10      |
|  12  |        5       |        131        |            358           |  2100 |  400  |        3        |       10      |
|  13  |        5       |        140        |            388           |  2200 |   -   |        5        |       12      |
|  14  |        5       |        149        |            418           |  2300 |   -   |        5        |       12      |
|  15  |        6       |        162        |            448           |  2400 |  600  |        5        |       12      |
|  16  |        6       |        169        |            478           |  2500 |   -   |        7        |       14      |
|  17  |        6       |        176        |            508           |  2600 |   -   |        7        |       14      |
|  18  |        7       |        188        |            538           |  2700 |  600  |        7        |       14      |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。
2. 如果玩家升级到了 9 本并解锁了亡灵王子，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级护卫玩偶装备。
</SwitchTabGroup>

<!-- ↓↓↓ 空中护卫 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Henchmen_info.png" :imgAlt="$frontmatter.navTitle"
    description="亡灵王子可以召唤这些邪恶的兄弟姐妹与他并肩作战！他们会吸收伤害并攻击防御建筑。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Henchmen1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>说明</SmallTitle>

空中护卫不能在 [训练营](/upgrade/0481-Barracks) 或 [暗黑训练营](/upgrade/0482-Dark-Barracks) 中直接训练，只能通过亡灵王子召唤。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
|  --- |   ---   |   ---   |   ---  |
|   1  |   102   |  112.2  |  1600  |
|   2  |   110   |  121    |  1700  |
|   3  |   118   |  129.8  |  1750  |
|   4  |   126   |  138.6  |  1800  |
|   5  |   134   |  147.4  |  1950  |
|   6  |   142   |  156.2  |  2100  |
|   7  |   150   |  165    |  2500  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>亡灵王子的初始装备随英雄的推出而同步推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>