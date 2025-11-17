---
title: "部落冲突 coc 陨石戈仑升级数据"
navTitle: "陨石戈仑"
shownTitle: "陨石戈仑"
description: "来自宇宙的它们，将加入您的军队！这对热衷投掷的组合，会将自己扔向任何目标，造成近战伤害。当它们分开时，小陨石戈仑会攻击附近目标，或者寻找同伴重新合体变成陨石戈仑！"
module: upgrade-home
imgFolder: home_tech/0012
wiki: https://clashofclans.fandom.com/wiki/Meteor_Golem
canonical: /upgrade/0012-Meteor-Golem
---

- *如想查看陨石戈仑的设计原型，请访问：[戈仑石人](/upgrade/0083-Golem)。*
- *如想查看作为临时兵种的陨石戈仑数据，请访问：[陨石戈仑（临时兵种）](/upgrade/0e1b-Meteor-Golem)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">陨石戈仑</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">小陨石戈仑</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 陨石戈仑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Meteor_Golem_info.png" imgAlt="陨石戈仑"
    description="来自宇宙的它们，将加入您的军队！这对热衷投掷的组合，会将自己扔向任何目标，造成近战伤害。当它们分开时，小陨石戈仑会攻击附近目标，或者寻找同伴重新合体变成陨石戈仑！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Meteor_Golem1.png" />
        <!-- <UnitImg imgTitle="2 级" imgSrc="Meteor_Golem2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Meteor_Golem3.png" /> -->
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 陨石戈仑最初在 2025/10 的宇宙摇滚活动中作为临时兵种推出，在 2025/11 的 18 本版本更新后成为永久兵种。
2. 陨石戈仑由两只小陨石戈仑组成，其攻击方式是让其中一只小陨石戈仑将另一只投掷到目标身上，造成范围伤害。这种攻击方式会使两只小陨石戈仑分开，但只要两只小陨石戈仑相遇即可再次合体。
    - 任意两只小陨石戈仑都能合体，不需要来自同一母体。
    - 小陨石戈仑的生命值为陨石戈仑分离那一刻的一半生命值。
    - 小陨石戈仑合体后的生命值由两只小陨石戈仑的剩余生命值决定，如果其中一个或两个受到伤害，则总生命值减少。
    - [镜像法术](/upgrade/0105-Clone-Spell) 复制的陨石戈仑一旦分离就不能再合体。
3. 小陨石戈仑可以跳过 [城墙](/upgrade/0300-Walls)，但陨石戈仑不能。
4. 两只小陨石戈仑合体后有短暂的无敌状态。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害加成" pValue="对墙 10 倍伤害" />
    <UnitProperty pKey="伤害类型" pValue="投掷后造成范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="进攻时机" pValue="到达目标 1 秒后" />
    <UnitProperty pKey="最远投掷距离" pValue="5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="19" />  
    <UnitProperty pKey="所需大本等级" pValue="17" />    
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="20,20,60000,Elixir" :isDonationCost="true" />
</UnitProperties>

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

| 等级 |  投掷伤害 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |  ---- |    ---  |     ---   |     ---     |   ----    |
|   1  |    550   | 15000 |      \  |      \    |       1     |     17    |
|   2  |    600   | 17000 |    28M  |     14    |      15     |     17    |
|   3  |    650   | 19000 |    30M  |     16    |      16     |     18    |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 小陨石戈仑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Meteormite_info.png" imgAlt="小陨石戈仑"
    description="分开的小陨石戈仑会对一个附近的目标进行攻击，或者寻找它的同伴重新合体。即便在分开后，这些顽皮的小石头也能翻越城墙。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Meteormite1.png" />
        <!-- <UnitImg imgTitle="2 级" imgSrc="Meteormite2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Meteormite3.png" /> -->
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="合体时的最大距离" pValue="0.5 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |   ---   |   ---   |  ----  |
|   1  |    ?    |    ?    |  7500  |
|   2  |    ?    |    ?    |  8500  |
|   3  |    ?    |    ?    |  9500  |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，陨石戈仑成为永久兵种，共推出 3 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/10">
        <TimelineRow>推出临时兵种：陨石戈仑，有效期至 2025/11/01.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>