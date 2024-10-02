---
title: "部落冲突 coc 夜世界守卫岗哨升级数据"
navTitle: "守卫岗哨"
shownTitle: "守卫岗哨"
description: "部队驻扎于此，协助守卫村庄！这些士气高昂的部队肯定能延缓敌军进攻。"
module: upgrade-bh
imgFolder: bh_buildings/1106
wiki: https://clashofclans.fandom.com/wiki/Guard_Post
canonical: /upgrade/1106-Guard-Post
---

- *如需查看都城的那几个岗哨，请自行前往相关页面。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Guard_Post10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Guard_Post1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Guard_Post2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Guard_Post3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Guard_Post4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Guard_Post5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Guard_Post6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Guard_Post7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Guard_Post8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Guard_Post9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Guard_Post10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="追击距离" pValue="7 格<sup>①</sup>" />
    <UnitProperty pKey="巡逻距离" pValue="3 格<sup>②</sup>" />
    <UnitProperty pKey="防守的部队" pValue="<div style='line-height: 2'><a href='/upgrade/1000-Raged-Barbarian'>狂暴野蛮人</a> ×1<br><a href='/upgrade/1001-Sneaky-Archer'>隐秘弓箭手</a> ×1</div>" />
</UnitProperties>

① 当敌军进入这个范围时，守卫岗哨中的部队会追击敌军。<br>
② 当部队未进入追击距离时，守卫岗哨中的兵种会在建筑周围 3 格行走。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 部队等级 | 生命值 | 升级费用 | 升级时间 |升级后可获<br/>得的经验|所需夜世界<br/>大本营等级|
|  --- |   ---   |   --- |   ---    |   ---   |          ---        |          ---          |
|   1  |     2   |  300  |   200K   |   0, 4  |                     |           4           |
|   2  |     4   |  350  |   240K   |   0, 8  |                     |           4           |
|   3  |     6   |  400  |   280K   |   0,12  |                     |           4           |
|   4  |     8   |  460  |   320K   |   1     |                     |           4           |
|   5  |    10   |  550  |     1M   |   2     |                     |           5           |
|   6  |    12   |  650  |   1.4M   |   4     |                     |           6           |
|   7  |    14   |  750  |   2.3M   |   6     |                     |           7           |
|   8  |    16   |  850  |   3.2M   |   8     |                     |           8           |
|   9  |    18   | 1000  |   4.1M   |  10     |                     |           9           |
|  10  |    20   | 1150  |   5.1M   |  12     |                     |          10           |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级守卫岗哨的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，守卫岗哨可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，守卫岗哨可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>