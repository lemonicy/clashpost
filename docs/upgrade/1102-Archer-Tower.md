---
title: "部落冲突 coc 夜世界箭塔升级数据"
navTitle: "箭塔"
shownTitle: "箭塔"
description: "没人能逃过弓箭手的箭。这种箭塔有一个特殊开关，可在远程攻击和快速攻击两种模式间切换！"
module: upgrade-bh
imgFolder: bh_buildings/1102
wiki: https://clashofclans.fandom.com/wiki/Archer_Tower/Builder_Base
canonical: /upgrade/1102-Archer-Tower
---

<script setup>
const tableExtraInfoStandardMode = [
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
    }
];
const tableExtraInfoFastAttackMode = tableExtraInfoStandardMode;
</script>

- *如想查看家乡的箭塔，请访问：[箭塔](/upgrade/0302-Archer-Tower)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">标准模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">快速模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 标准模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_Tower10.png" imgAlt="箭塔（标准模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Archer_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Archer_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Archer_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Archer_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Archer_Tower5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Archer_Tower6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Archer_Tower7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Archer_Tower8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Archer_Tower9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Archer_Tower10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 3, 4 - 5, 6 - 10" />
    <BuildingNumRow title="建筑数量" num="0,     2,     2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="1 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStandardMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |  ---   |   ---   |    ---  |         ---         |         ---        |
|   1  |    40   |    40   |   500  |    12K  |  0,0,5  |                     |          2         |
|   2  |    44   |    44   |   575  |    30K  |  0,0,15 |                     |          3         |
|   3  |    48   |    48   |   660  |    60K  |  0,2    |                     |          3         |
|   4  |    53   |    53   |   760  |   250K  |  0,8    |                     |          4         |
|   5  |    59   |    59   |   875  |   800K  |  1      |                     |          5         |
|   6  |    64   |    64   |  1050  |   1.2M  |  2      |                     |          6         |
|   7  |    71   |    71   |  1250  |     2M  |  4      |                     |          7         |
|   8  |    78   |    78   |  1450  |   2.8M  |  6      |                     |          8         |
|   9  |    86   |    86   |  1650  |   3.6M  |  8      |                     |          9         |
|  10  |    94   |    94   |  1850  |   4.6M  |  9      |                     |         10         |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 快速模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_Tower10B.png" imgAlt="箭塔（快速模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Archer_Tower1B.png" />
        <UnitImg imgTitle="2 级" imgSrc="Archer_Tower2B.png" />
        <UnitImg imgTitle="3 级" imgSrc="Archer_Tower3B.png" />
        <UnitImg imgTitle="4 级" imgSrc="Archer_Tower4B.png" />
        <UnitImg imgTitle="5 级" imgSrc="Archer_Tower5B.png" />
        <UnitImg imgTitle="6 级" imgSrc="Archer_Tower6B.png" />
        <UnitImg imgTitle="7 级" imgSrc="Archer_Tower7B.png" />
        <UnitImg imgTitle="8 级" imgSrc="Archer_Tower8B.png" />
        <UnitImg imgTitle="9 级" imgSrc="Archer_Tower9B.png" />
        <UnitImg imgTitle="10 级" imgSrc="Archer_Tower10B.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 3, 4 - 5, 6 - 10" />
    <BuildingNumRow title="建筑数量" num="0,     2,     2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="攻速" pValue="0.45 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoFastAttackMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |  ---   |   ---   |    ---  |         ---         |         ---        |
|   1  |    89   |    40   |   500  |    12K  |  0,0,5  |                     |          2         |
|   2  |    98   |    44   |   575  |    30K  |  0,0,15 |                     |          3         |
|   3  |   107   |    48   |   660  |    60K  |  0,2    |                     |          3         |
|   4  |   118   |    53   |   760  |   250K  |  0,8    |                     |          4         |
|   5  |   131   |    59   |   875  |   800K  |  1      |                     |          5         |
|   6  |   142   |    64   |  1050  |   1.2M  |  2      |                     |          6         |
|   7  |   185   |    71   |  1250  |     2M  |  4      |                     |          7         |
|   8  |   173   |    78   |  1450  |   2.8M  |  6      |                     |          8         |
|   9  |   191   |    86   |  1650  |   3.6M  |  8      |                     |          9         |
|  10  |   209   |    94   |  1850  |   4.6M  |  9      |                     |         10         |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级箭塔的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，箭塔可升至 10 级。</TimelineRow>
        <TimelineRow>为配合更小的地图，箭塔在标准模式下的射程由 11 格降低到 10 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，箭塔可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>