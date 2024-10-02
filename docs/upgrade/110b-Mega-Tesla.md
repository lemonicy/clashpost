---
title: "部落冲突 coc 夜世界超级特斯拉电磁塔升级数据"
navTitle: "超级特斯拉电磁塔"
shownTitle: "超级特斯拉电磁塔"
description: "如果特斯拉电磁塔变得超级庞大会怎样？即使面对最强大的敌军，它的超强力电流也能对他们造成重创！"
module: upgrade-bh
imgFolder: bh_buildings/110b
wiki: https://clashofclans.fandom.com/wiki/Mega_Tesla
canonical: /upgrade/110b-Mega-Tesla
---

- *如想查看夜世界的特斯拉电磁塔，请访问：[夜世界特斯拉电磁塔](/upgrade/1103-Hidden-Tesla)。*
- *如想查看家乡的巨型特斯拉电磁塔（12 本自带武器），请访问：[巨型特斯拉电磁塔](/upgrade/030c-Giga-Tesla)。*
- *如想查看都城的超级特斯拉电磁塔，请访问：，请访问：[超级特斯拉电磁塔](/upgrade/220b-Hidden-Mega-Tesla)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mega_Tesla10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Mega_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Mega_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Mega_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Mega_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Mega_Tesla5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Mega_Tesla6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Mega_Tesla7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Mega_Tesla8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Mega_Tesla9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Mega_Tesla10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7,8 - 10" />
    <BuildingNumRow title="建筑数量" num="0,1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="目标数量" pValue="2" />
    <UnitProperty pKey="连锁半径" pValue="4 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="7.5 格" />
    <UnitProperty pKey="攻速" pValue="4 秒/次" />
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
|  --- |   ---   |   ---   |   ---  |    ---  |   ---   |         ---         |         ---        |
|   1  |    95   |   380   |   700  |    3M   |    2    |                     |          8         |
|   2  |   104   |   416   |   800  |  3.1M   |    3    |                     |          8         |
|   3  |   115   |   460   |   950  |  3.2M   |    4    |                     |          8         |
|   4  |   126   |   504   |  1100  |  3.3M   |    5    |                     |          8         |
|   5  |   139   |   556   |  1300  |  3.4M   |    6    |                     |          8         |
|   6  |   153   |   612   |  1500  |  3.6M   |    7    |                     |          8         |
|   7  |   168   |   672   |  1700  |  3.8M   |    8    |                     |          8         |
|   8  |   185   |   740   |  1900  |    4M   |   10    |                     |          8         |
|   9  |   204   |   816   |  2150  |  4.8M   |   11    |                     |          9         |
|  10  |   224   |   896   |  2400  |  5.8M   |   12    |                     |         10         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>所有等级超级特斯拉电磁塔的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，超级特斯拉电磁塔可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，超级特斯拉电磁塔可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>