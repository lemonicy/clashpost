---
title: "部落冲突 coc 弹跳法术升级数据"
navTitle: "弹跳法术"
shownTitle: "弹跳法术"
description: "城墙挡了您的去路？那就开辟一条捷径吧！在敌军城墙附近施放该法术，就可以在城墙上方创建通道，方便您的大军直接跳过这段城墙，保证畅通无阻！"
module: upgrade-home
imgFolder: home_tech/0103
wiki: https://clashofclans.fandom.com/wiki/Jump_Spell
canonical: /upgrade/0103-Jump-Spell
---

- *如想查看都城的弹跳法术，请访问：[都城弹跳法术](/upgrade/2101-Jump-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Jump_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="城墙挡了您的去路？那就开辟一条捷径吧！<br>在敌军城墙附近施放该法术，就可以在城墙上方创建通道，方便您的大军直接跳过这段城墙，保证畅通无阻！"
    :isSmallImg="true" />

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="作用目标" pValue="我方地面部队<sup>①</sup>" />
    <UnitProperty pKey="两次脉冲的间隔时间" pValue="0.3 秒<sup>②</sup>" />
    <UnitProperty pKey="每次脉冲持续时间" pValue="0.4 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="法术配置时间" pValue="360" :isTrainingTime="true" />
</UnitProperties>

① 弹跳法术对我方英雄有效，对攻城机器无效。弹跳法术的弹跳能力不能与 [野猪骑士](/upgrade/0081-Hog-Rider) 这类兵种自带的跳墙能力叠加，也不能让 [掘地矿工](/upgrade/000b-Miner) 改变钻地的机制。<br>
② 脉冲效果和 [狂暴法术](/upgrade/0102-Rage-Spell) 一样是给士兵提供增益。游戏中有可能出现兵种离开弹跳法术范围，但是仍然跳过了下一堵墙的现象，这是因为兵种移动过快导致在离开法术半径的 0.1 ~ 0.4 秒内跳过了墙。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |脉冲<br>作用时间|  脉冲次数  | 升级花费 |  升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |       ----    |    ----   |   ----  |    ----   |      ----      |       ----    |
|   1  |      20 秒    |     66    |     \   |     \     |        4       |        9      |
|   2  |      40 秒    |    133    |    1M   |    1,12   |        5       |        9      |
|   3  |      60 秒    |    199    |    2M   |    2      |        8       |       10      |
|   4  |      80 秒    |    266    |    5M   |    4      |       11       |       13      |
|   5  |     100 秒    |    333    |    8M   |    6,12   |       13       |       15      |
</UnitTable>

注：实际上 3 级弹跳法术的持续时间约为 199 * 0.3 = 59.7 秒，60 秒是四舍五入的结果。把弹跳法术从 2 级升到 3 级时，游戏面板可能会显示3级弹跳的持续时间是
59 秒，这是 59.7 向下取整的结果。不管是 59 秒还是 60 秒，弹跳还是那个弹跳，并没有被暗改。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级弹跳法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级弹跳法术的升级时间减少。</TimelineRow>
        <TimelineRow>5 级弹跳法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 5 级弹跳法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>4 级弹跳法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 5 级弹跳法术。</TimelineRow>
        <TimelineRow>3 ~ 4 级弹跳法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级弹跳法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>走出弹跳法术效果范围的部队不会再重新选择目标，这是为了避免部队卡在其法术效果范围内。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>游戏新增 13 本，并在 13 本新增 4 级弹跳法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 2 级弹跳法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>