---
title: "部落冲突 coc 陨石戈仑（临时兵种）升级数据"
navTitle: "陨石戈仑"
shownTitle: "陨石戈仑（临时兵种）"
description: "来自宇宙的它们，将加入您的军队！这对热衷投掷的组合，会将自己扔向任何目标，造成近战伤害。当它们分开时，小陨石戈仑会攻击附近目标，或者寻找同伴重新合体变成陨石戈仑！"
module: upgrade-temp
imgFolder: temp/0e1b
wiki: https://clashofclans.fandom.com/wiki/Meteor_Golem
canonical: /upgrade/0e1b-Meteor-Golem
---

- *如想查看陨石戈仑的设计原型，请访问：[戈仑石人](/upgrade/0083-Golem)。*
- *如想查看作为永久兵种的陨石戈仑数据，请访问：[陨石戈仑](/upgrade/0012-Meteor-Golem)。*

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
        <UnitImg imgTitle="所有等级" imgSrc="Meteor_Golem1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 陨石戈仑最初在 2025/10 的宇宙摇滚活动中作为临时兵种推出，在 2025/11 的 18 本版本更新后成为永久兵种。
2. 陨石戈仑和小陨石戈仑的机制已在 [陨石戈仑（永久兵种）](/upgrade/0012-Meteor-Golem) 页面中写出，这里不再重复。

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
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  投掷伤害 | 生命值 | 所需大本等级 |
| ---- |   ----   |  ---- |    ----     |
|   1  |    160   |  4000 |      6      |
|   2  |    185   |  5000 |      7      |
|   3  |    210   |  6000 |      8      |
|   4  |    235   |  7000 |      9      |
|   5  |    260   |  8000 |     10      |
|   6  |    285   |  9000 |     11      |
|   7  |    310   | 10000 |     12      |
|   8  |    335   | 11000 |     13      |
|   9  |    360   | 12000 |     14      |
|  10  |    400   | 13000 |     15      |
|  11  |    450   | 14000 |     16      |
|  12  |    500   | 15000 |     17      |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 小陨石戈仑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Meteormite_info.png" imgAlt="小陨石戈仑"
    description="分开的小陨石戈仑会对一个附近的目标进行攻击，或者寻找它的同伴重新合体。即便在分开后，这些顽皮的小石头也能翻越城墙。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Meteormite1.png" />
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
|   1  |    80   |  120    |  2000  |
|   2  |    93   |  139.5  |  2500  |
|   3  |   105   |  157.5  |  3000  |
|   4  |   118   |  177    |  3500  |
|   5  |   130   |  195    |  4000  |
|   6  |   143   |  214.5  |  4500  |
|   7  |   155   |  232.5  |  5000  |
|   8  |   168   |  252    |  5500  |
|   9  |   180   |  270    |  6000  |
|  10  |   193   |  289.5  |  6500  |
|  11  |   205   |  307.5  |  7000  |
|  12  |   218   |  327    |  7500  |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17（推测）">
        <TimelineRow>18 本推出，陨石戈仑成为永久兵种，共推出 3 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/10">
        <TimelineRow>推出临时兵种：陨石戈仑，有效期至 2025/11/01.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>