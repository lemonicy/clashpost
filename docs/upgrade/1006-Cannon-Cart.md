---
title: "部落冲突 coc 夜世界加农炮战车升级数据"
navTitle: "加农炮战车"
shownTitle: "加农炮战车"
description: "带轮子的加农炮？等等！它怎么又变成了迫击炮？敌军肯定想不到！它不仅威力巨大而且功能全面！"
module: upgrade-bh
imgFolder: bh_tech/1006
wiki: https://clashofclans.fandom.com/wiki/Cannon_Cart
canonical: /upgrade/1006-Cannon-Cart
---

<script setup>
const tableExtraInfoStandardMode = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
const tableExtraInfoMortarMode = tableExtraInfoStandardMode;
</script>

- *如想查看都城的突袭炮车，请访问：[都城突袭炮车](/upgrade/2009-Raid-Cart)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">加农炮模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">迫击炮模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 加农炮模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon_Cart_info.png" imgAlt="加农炮战车（加农炮模式）" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="7 - 11 级" imgSrc="Cannon_Cart7.png" />
        <UnitImg imgTitle="12 - 15 级" imgSrc="Cannon_Cart12.png" />
        <UnitImg imgTitle="16 - 17 级" imgSrc="Cannon_Cart16.png" />
        <UnitImg imgTitle="18 - 20 级" imgSrc="Cannon_Cart18.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>加农炮战车的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="2.4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="5" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="迫击炮模式" />
    <UnitProperty pKey="技能类型" pValue="模式切换技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 加农炮战车可以在 2 种模式间快速切换，能移动的短程攻击模式（默认的加农炮模式）平均每秒伤害较高，不能移动的远程攻击模式（迫击炮模式）平均每秒伤害较低。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStandardMode">

| 等级 | 每秒伤害 | 每次伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |    ---   |   ---   |    ---   |           ---         |
|   7  |   115   |   138  |    666   |    \    |     \    |            5          |
|   8  |   115   |   138  |    666   |     1M  |  1       |            5          |
|   9  |   130   |   156  |    732   |   1.1M  |  1,12    |            5          |
|  10  |   130   |   156  |    732   |   1.2M  |  2       |            5          |
|  11  |   150   |   180  |    805   |   1.4M  |  2       |            6          |
|  12  |   150   |   180  |    805   |   1.6M  |  2,12    |            6          |
|  13  |   170   |   204  |    886   |   2.4M  |  3,12    |            7          |
|  14  |   170   |   204  |    886   |   2.6M  |  4,12    |            7          |
|  15  |   190   |   228  |    974   |   3.4M  |  5,12    |            8          |
|  16  |   190   |   228  |    974   |   3.6M  |  5,12    |            8          |
|  17  |   215   |   258  |   1072   |   4.1M  |  6       |            9          |
|  18  |   215   |   258  |   1072   |   4.3M  |  6       |            9          |
|  19  |   240   |   288  |   1179   |   5.3M  |  6,12    |           10          |
|  20  |   240   |   288  |   1179   |   5.7M  |  6,12    |           10          |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 迫击炮模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mortar_Cart_info.png" imgAlt="加农炮战车（迫击炮模式）" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="7 - 11 级" imgSrc="Mortar_Cart7.png" />
        <UnitImg imgTitle="12 - 15 级" imgSrc="Mortar_Cart12.png" />
        <UnitImg imgTitle="16 - 17 级" imgSrc="Mortar_Cart16.png" />
        <UnitImg imgTitle="18 - 20 级" imgSrc="Mortar_Cart18.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>迫击炮战车的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="0" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="8.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="5" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="迫击炮模式" />
    <UnitProperty pKey="技能类型" pValue="模式切换技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 加农炮战车可以在 2 种模式间快速切换，能移动的短程攻击模式（默认的加农炮模式）平均每秒伤害较高，不能移动的远程攻击模式（迫击炮模式）平均每秒伤害较低。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoMortarMode">

| 等级 | 每秒伤害 | 每次伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |    ---   |   ---   |    ---   |           ---         |
|   7  |    60   |   150  |    666   |    \    |     \    |            5          |
|   8  |    68   |   170  |    666   |     1M  |  1       |            5          |
|   9  |    68   |   170  |    732   |   1.1M  |  1,12    |            5          |
|  10  |    78   |   195  |    732   |   1.2M  |  2       |            5          |
|  11  |    78   |   195  |    805   |   1.4M  |  2       |            6          |
|  12  |    90   |   225  |    805   |   1.6M  |  2,12    |            6          |
|  13  |    90   |   225  |    886   |   2.4M  |  3,12    |            7          |
|  14  |   102   |   255  |    886   |   2.6M  |  4,12    |            7          |
|  15  |   102   |   255  |    974   |   3.4M  |  5,12    |            8          |
|  16  |   114   |   285  |    974   |   3.6M  |  5,12    |            8          |
|  17  |   114   |   285  |   1072   |   4.1M  |  6       |            9          |
|  18  |   130   |   325  |   1072   |   4.3M  |  6       |            9          |
|  19  |   130   |   325  |   1179   |   5.3M  |  6,12    |           10          |
|  20  |   144   |   360  |   1179   |   5.7M  |  6,12    |           10          |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级加农炮战车。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>废除以前的“奋战到底”技能，改为两种模式切换的技能。</TimelineRow>
        <TimelineRow>加农炮战车的移动速度由 16（2 格/秒）提升至 19.2（2.4 格/秒）。</TimelineRow>
        <TimelineRow>加农炮战车的兵种重量从 8 提升至 16。</TimelineRow>
        <TimelineRow>现在加农炮战车一解锁就是 7 级，你不需要从 1 级开始升了。如果更新前部队高于 7 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>加农炮战车的兵种重量从 5 提升至 8。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>