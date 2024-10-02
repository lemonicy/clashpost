---
title: "部落冲突 coc 都城火箭炮升级数据"
navTitle: "火箭炮"
shownTitle: "火箭炮"
description: "向空中和地面目标发射会爆炸的火箭。它百发百中，从未失手，真是令人惊叹！"
module: upgrade-capital
imgFolder: capital_buildings/220d
wiki: https://clashofclans.fandom.com/wiki/Rocket_Artillery
canonical: /upgrade/220d-Rocket-Artillery
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rocket_Artillery5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Rocket_Artillery_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Rocket_Artillery1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Rocket_Artillery2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Rocket_Artillery3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Rocket_Artillery4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Rocket_Artillery5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 7, 8 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   0   |   1   |   1   |   2   |
|   气球环礁   |   0   |   2   |   2   |   3   |   4   |
|   戈仑石场   |   1   |   2   |   2   |   3   |   3   |
|   骷髅公园   |   0   |   0   |   1   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="2 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="3 ~ 12 格" />
    <UnitProperty pKey="攻速" pValue="4 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   140   |   560   |  2400  | 12.5k   |   360   |         5         |         1        |
|   2  |   160   |   640   |  2800  |   25k   |   380   |         6         |         2        |
|   3  |   180   |   720   |  3200  |   50k   |   400   |         7         |         3        |
|   4  |   200   |   800   |  3600  |   78k   |   420   |         8         |         4        |
|   5  |   220   |   880   |  4000  |  130k   |   440   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5级火箭炮的每秒伤害降低</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/30">
        <TimelineRow>所有等级火箭炮的每秒伤害减少 10 点。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>火箭炮随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>