---
title: "部落冲突 coc 夜世界双管加农炮升级数据"
navTitle: "双管加农炮"
shownTitle: "双管加农炮"
description: "双管加农炮，每管二连发。四倍炮弹，四倍火力！"
module: upgrade-bh
imgFolder: bh_buildings/1101
wiki: https://clashofclans.fandom.com/wiki/Double_Cannon
canonical: /upgrade/1101-Double-Cannon
---

- *如想查看夜世界的加农炮，请访问：[夜世界加农炮](/upgrade/1100-Cannon)。*
- *如想查看夜世界的巨型加农炮，请访问：[夜世界巨型加农炮](/upgrade/110a-Giant-Cannon)。*
- *如想查看家乡改装后的加农炮，请访问该页面后切换为“连发模式”：[加农炮](/upgrade/0301-Cannon)。*
- *如想查看都城的多管加农炮，请访问：[都城多管加农炮](/upgrade/2204-Multi-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Double_Cannon10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Double_Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Double_Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Double_Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Double_Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Double_Cannon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Double_Cannon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Double_Cannon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Double_Cannon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Double_Cannon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Double_Cannon10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 4, 5 - 7, 8 - 10" />
    <BuildingNumRow title="建筑数量" num="0,     1,     2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="攻速" pValue="约 2.4 秒/轮<sup>*</sup>" />
</UnitProperties>

\* 双管加农炮的攻击节奏是 0.192 秒一发，4 发后冷却 1.6 秒。

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

| 等级 |每秒伤害<sup>#</sup>| 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |        ---        |   ---   |  ---   |   ---   |    ---  |         ---         |         ---        |
|   1  |         84        |    50   |   600  |    20k  |  0,0,10 |                     |          2         |
|   2  |         92        |    55   |   690  |    50k  |  0,1    |                     |          3         |
|   3  |        103        |    61   |   800  |    80k  |  0,3    |                     |          3         |
|   4  |        113        |    67   |   910  |   300k  |  0,12   |                     |          4         |
|   5  |        125        |    74   |  1050  |   900k  |  1      |                     |          5         |
|   6  |        136        |    81   |  1250  |   1.4M  |  2      |                     |          6         |
|   7  |        150        |    89   |  1450  |   2.2M  |  4      |                     |          7         |
|   8  |        165        |    98   |  1700  |   3.2M  |  6      |                     |          8         |
|   9  |        182        |   108   |  1950  |   4.2M  |  8      |                     |          9         |
|  10  |        202        |   120   |  2200  |   5.2M  | 10      |                     |         10         |

</UnitTable>

\# 这里的每秒伤害数据是游戏中显示的近似值，如果双管加农炮在攻击期间被打断，则实际的每秒伤害就会降低。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级双管加农炮的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，双管加农炮可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，双管加农炮可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>