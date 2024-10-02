---
title: "部落冲突 coc 巨型地狱之塔升级数据"
navTitle: "巨型地狱之塔"
shownTitle: "巨型地狱之塔"
description: "巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。"
module: upgrade-home
imgFolder: home_buildings/030d
wiki: https://clashofclans.fandom.com/wiki/Giga_Inferno
canonical: /upgrade/030d-Giga-Inferno
---

<script setup>
const tableExtraInfoTH13 = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfoTH14 = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 8,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfoTH15 = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>

- 如想查看大本营的相关数据，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想查看地狱之塔，请访问：[地狱之塔](/upgrade/030a-Inferno-Tower)。

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">13 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">14 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">15 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-3">16 本</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 13 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno13_5.png" imgAlt="13 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。被摧毁时，巨型地狱之塔会炸碎大本营同时引发一场冰冻，在一段时间内减速附近所有敌军。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno13_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno13_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno13_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno13_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno13_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 13 级大本营时，就拥有了一个 1 级的巨型地狱之塔。玩家可以升级这个地狱塔，达到 3 级的时候大本营自爆有冰雾效果。
2. 当玩家将 13 本的巨型地狱之塔升到 5 级后，玩家才可以升级 14 级大本营。升级大本营后，巨型地狱之塔会继续存在，并且回归到 1 级。
3. 当 13 级及以上大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="冰雾半径" pValue="5 格<sup>*</sup> (地面和空中目标)" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>

\* 这个冰雾效果与 [冰冻法术](/upgrade/0104-Freeze-Spell) 不一样，它不能把进攻方的部队完全冻住，只能减慢部队的移动速度和攻击速度。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoTH13">

| 等级 |武器的<br>每秒伤害|被摧毁后的<br>自爆伤害|被摧毁后的<br>冰雾持续时间| 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |       ---      |         ---         |            ---         |   ---   |   ---   |         ---        |      ---      |
|   1  |       140      |         500         |            无          |      \  |    \    |                    |       13      |
|   2  |       160      |         550         |            无          |   7.5M  |    3    |                    |       13      |
|   3  |       180      |         600         |           4 秒         |     9M  |    4    |                    |       13      |
|   4  |       200      |         650         |           6 秒         |    10M  |    5    |                    |       13      |
|   5  |       220      |         700         |           8 秒         |    12M  |    6    |                    |       13      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 5 级 13 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>所有等级 13 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>14 本巨型地狱之塔的自爆伤害由固定的 1000 降低至 500 ~ 700 之间的变化值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级 13 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级 13 本巨型地狱之塔的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，大本营自带巨型地狱之塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 14 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno14_5.png" imgAlt="14 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno14_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno14_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno14_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno14_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno14_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 14 级大本营时，就拥有了一个 1 级的巨型地狱之塔，升级这个巨型地狱之塔可以增加它的伤害和毒雾持续时间。
2. 从 14 本开始，巨型地狱之塔不再有冰雾效果，13 本的冰雾效果从此被毒雾取代。
3. 和 13 本类似，你把 14 本的巨型地狱之塔升到 5 级后才可以升级 15 本。
4. 表面上看，13 本的巨型地狱塔有 50% 的减速比例，14 本只一星只有 30%，但实际上因为毒雾效果的存在，实战中 14 本一星要比 13 本五星难打。
5. 当 13 级及以上大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
6. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格<sup>*</sup> (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
</UnitProperties>

\* 这个毒雾效果与 [毒药法术](/upgrade/0180-Poison-Spell) 类似，都能对部队减速效果，也有递增的伤害。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoTH14">

| 等级 |武器的<br>每秒伤害|被摧毁后的<br>自爆伤害|毒雾的<br>最大伤害|移动速度<br>降低幅度|攻击速度降低幅度| 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |       ---      |         ---         |       ---       |       ---         |      ---     |  ---   |   ---   |         ---        |      ---      |
|   1  |       220      |         700         |       100       |       30%         |      30%     |     \  |    \    |                    |       14      |
|   2  |       235      |         750         |       120       |       35%         |      35%     |  7.5M  |    5    |                    |       14      |
|   3  |       250      |         800         |       140       |       40%         |      40%     |    9M  |    6    |                    |       14      |
|   4  |       265      |         900         |       160       |       45%         |      45%     |   11M  |    7    |                    |       14      |
|   5  |       280      |        1000         |       180       |       50%         |      50%     |   12M  |    8    |                    |       14      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 14 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级 14 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>1 ~ 4 级 14 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>14 本巨型地狱之塔的自爆伤害由固定的 1000 降低至 700 ~ 1000 之间的变化值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>14 本及以上巨型地狱之塔被摧毁后毒雾的持续时间减少。</TimelineRow>
        <TimelineRow>所有等级 14 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 15 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno15_5.png" imgAlt="15 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno15_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno15_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno15_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno15_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno15_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 15 级大本营时，就拥有了一个 1 级的巨型地狱之塔，升级这个巨型地狱之塔可以增加它的伤害和爆炸范围。
2. 和 13 本和 14 本类似，你把 15 本的巨型地狱之塔升到 5 级后才可以升级 16 本。
3. 当 13 级及以上大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="被摧毁后的自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="可变 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
    <UnitProperty pKey="毒雾的最大伤害" pValue="180" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoTH15">

| 等级 |武器的<br>每秒伤害|被摧毁后的<br>爆炸伤害| 爆炸半径 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |       ---      |          ---        |   ---   |   ---   |   ---   |         ---        |      ---      |
|   1  |       280      |         1000        |   4 格  |      \  |     \   |                    |       15      |
|   2  |       290      |         1000        |   4 格  |   8.5M  |     7   |                    |       15      |
|   3  |       290      |         1100        |   4 格  |    10M  |     8   |                    |       15      |
|   4  |       300      |         1100        |   4 格  |    12M  |     9   |                    |       15      |
|   5  |       300      |         1100        |  4.5 格 |  13.5M  |    10   |                    |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 15 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级 15 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>14 本及以上巨型地狱之塔被摧毁后毒雾的持续时间减少。</TimelineRow>
        <TimelineRow>1 ~ 3 级 15 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 16 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-3" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno16.png" imgAlt="16 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno16.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 16 级大本营时，就拥有了一个 1 级的巨型地狱之塔。**16 级大本营的巨型地狱之塔只有一个等级，不能升级。**
2. 当 13 级及以上大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
3. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="武器的每秒伤害" pValue="300" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="1 100" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4.5 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
    <UnitProperty pKey="毒雾的最大伤害" pValue="180" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>
</SwitchTabGroup>