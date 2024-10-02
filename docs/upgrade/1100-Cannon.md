---
title: "部落冲突 coc 夜世界加农炮升级数据"
navTitle: "加农炮"
shownTitle: "加农炮"
description: "标志性地面防御建筑，经典铸就永恒！这一经典之作让建筑大师不免心生几分感怀。"
module: upgrade-bh
imgFolder: bh_buildings/1100
wiki: https://clashofclans.fandom.com/wiki/Cannon/Builder_Base
canonical: /upgrade/1100-Cannon
---

- *如想查看夜世界的双管加农炮，请访问：[夜世界双管加农炮](/upgrade/1101-Double-Cannon)。*
- *如想查看夜世界的巨型加农炮，请访问：[夜世界巨型加农炮](/upgrade/110a-Giant-Cannon)。*
- *如想查看家乡的加农炮，请访问：[加农炮](/upgrade/0301-Cannon)。*
- *如想查看都城的加农炮，请访问：[都城加农炮](/upgrade/2201-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Cannon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Cannon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Cannon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Cannon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Cannon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Cannon10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    1,     2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="8.5 格" />
    <UnitProperty pKey="攻速" pValue="0.8 秒/次" />
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

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |  ---   |   ---   |    ---  |         ---         |         ---        |
|   1  |    70   |    56   |   500  |   10k   |  0,0,1  |                     |          1         |
|   2  |    77   |    62   |   575  |   20k   |  0,0,5  |                     |          3         |
|   3  |    85   |    68   |   660  |   50k   |  0,2    |                     |          3         |
|   4  |    93   |    74   |   760  |  200k   |  0,8    |                     |          4         |
|   5  |   102   |    82   |   875  |  600k   |  1      |                     |          5         |
|   6  |   112   |    90   |  1050  |    1M   |  2      |                     |          6         |
|   7  |   123   |    98   |  1250  |  1.8M   |  4      |                     |          7         |
|   8  |   136   |   109   |  1450  |  2.5M   |  6      |                     |          8         |
|   9  |   150   |   120   |  1650  |  3.3M   |  8      |                     |          9         |
|  10  |   165   |   132   |  1850  |    4M   |  9      |                     |         10         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级加农炮的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，加农炮可升至 10 级。</TimelineRow>
        <TimelineRow>为配合更小的地图，加农炮的射程由 9 格降低到 8.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，加农炮可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>