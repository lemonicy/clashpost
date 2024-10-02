---
title: "部落冲突 coc 夜世界特斯拉电磁塔升级数据"
navTitle: "特斯拉电磁塔"
shownTitle: "特斯拉电磁塔"
description: "有点像塔，有点像陷阱，绝对震撼！用科学的力量电击敌军空中和地面部队！"
module: upgrade-bh
imgFolder: bh_buildings/1103
wiki: https://clashofclans.fandom.com/wiki/Hidden_Tesla/Builder_Base
canonical: /upgrade/1103-Hidden-Tesla
---

- *如想查看夜世界的超级特斯拉电磁塔，请访问：[夜世界超级特斯拉电磁塔](/upgrade/110b-Mega-Tesla)。*
- *如想查看家乡的特斯拉电磁塔，请访问：[特斯拉电磁塔](/upgrade/0307-Hidden-Tesla)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hidden_Tesla10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Hidden_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Hidden_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Hidden_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Hidden_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Hidden_Tesla5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Hidden_Tesla6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Hidden_Tesla7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Hidden_Tesla8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Hidden_Tesla9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Hidden_Tesla10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1, 2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="攻击距离" pValue="7 格" />
    <UnitProperty pKey="触发距离" pValue="6 格" />
    <UnitProperty pKey="攻速" pValue="0.6 秒/次" />
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

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间  |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |  ---   |   ---   |    ---   |         ---         |         ---        |
|   1  |    60   |    36   |   300  |    50K  |  0, 0,30 |                     |          3         |
|   2  |    66   |    40   |   350  |   100K  |  0, 3    |                     |          3         |
|   3  |    73   |    44   |   400  |   150K  |  0, 5    |                     |          3         |
|   4  |    80   |    48   |   460  |   280K  |  0,10    |                     |          4         |
|   5  |    88   |    53   |   550  |   700K  |  1       |                     |          5         |
|   6  |    96   |    58   |   650  |   1.3M  |  2       |                     |          6         |
|   7  |   106   |    64   |   750  |   2.1M  |  4       |                     |          7         |
|   8  |   116   |    70   |   850  |   3.1M  |  6       |                     |          8         |
|   9  |   128   |    77   |  1000  |   4.1M  |  8       |                     |          9         |
|  10  |   141   |    85   |  1150  |   5.1M  | 10       |                     |         10         |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/20">
        <TimelineRow>所有等级级特斯拉电磁塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级特斯拉电磁塔的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，特斯拉电磁塔可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，特斯拉电磁塔可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>