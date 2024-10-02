---
title: "部落冲突 coc 夜世界熔岩发射器升级数据"
navTitle: "熔岩发射器"
shownTitle: "熔岩发射器"
description: "它向很远的地方发射熔岩团，点燃地面。让敌军地面部队尝尝灼烧的滋味！"
module: upgrade-bh
imgFolder: bh_buildings/110d
wiki: https://clashofclans.fandom.com/wiki/Lava_Launcher
canonical: /upgrade/110d-Lava-Launcher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lava_Launcher10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Lava_Launcher1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Lava_Launcher3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Lava_Launcher5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Lava_Launcher6.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Lava_Launcher7.png" />
        <UnitImg imgTitle="9 级" imgSrc="Lava_Launcher9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Lava_Launcher10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 8,9 - 10" />
    <BuildingNumRow title="建筑数量" num="0,1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

2023 年 6 月更新后，熔岩的递增伤害被取消，现在熔岩的每秒伤害是固定的。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="6 ~ 13 格" />
    <UnitProperty pKey="攻速" pValue="7 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
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
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |炮弹<br>落地伤害|熔岩的<br>每秒伤害| 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |      ---      |      ---       |   ---  |    ---  |   ---   |          ---        |         ---        |
|   1  |       50      |       15       |   500  |     3M  |    2    |                     |          9         |
|   2  |       55      |       17       |   575  |   3.1M  |    3    |                     |          9         |
|   3  |       61      |       20       |   660  |   3.2M  |    4    |                     |          9         |
|   4  |       67      |       22       |   760  |   3.4M  |    5    |                     |          9         |
|   5  |       73      |       25       |   875  |   3.7M  |    6    |                     |          9         |
|   6  |       81      |       27       |  1050  |     4M  |    7    |                     |          9         |
|   7  |       89      |       30       |  1250  |   4.3M  |    8    |                     |          9         |
|   8  |       97      |       32       |  1450  |   4.6M  |   10    |                     |          9         |
|   9  |      107      |       35       |  1650  |   4.9M  |   11    |                     |          9         |
|  10  |      118      |       37       |  1850  |   5.9M  |   12    |                     |         10         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>所有等级熔岩发射器的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，熔岩发射器可升至 10 级。</TimelineRow>
        <TimelineRow>为配合更小的地图，熔岩的射程由 10 ~ 20 格降低到 6 ~ 13 格。</TimelineRow>
        <TimelineRow>熔岩的递增伤害被取消，现在熔岩的每秒伤害是固定的。</TimelineRow>
​    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，新建筑：熔岩发射器。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>