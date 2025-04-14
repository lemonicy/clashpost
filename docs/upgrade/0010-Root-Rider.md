---
title: "部落冲突 coc 根蔓骑士（棘木骑士、树根）升级数据"
navTitle: "根蔓骑士"
shownTitle: "根蔓骑士（棘木骑士、树根）"
description: "这位大地战士与大自然融为一体，甚至不用自己走路，而是骑在坚硬无比的根蔓上作战。她的根蔓可摧毁城墙，将防御建筑夷为平地。"
module: upgrade-home
imgFolder: home_tech/0010
wiki: https://clashofclans.fandom.com/wiki/Root_Rider
canonical: /upgrade/0010-Root-Rider
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Root_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Root_Rider1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Root_Rider2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Root_Rider3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

根蔓骑士可以将树根放在墙上，快速摧毁 [城墙](/upgrade/0300-Walls)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.2 秒/次" />
    <UnitProperty pKey="攻击速度 (对城墙)" pValue="0.4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="所需训练营等级" pValue="17" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="10,10,30000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |普攻伤害<br>(每秒/每次)|对墙伤害<br>(每秒/每次)| 生命值 | 升级花费 | 升级时间 |所需实验室<br>等级|所需<br>大本等级|
| ---- |          ---        |           ---        |  ---- |   ----  |   ----   |      ----      |     ----      |
|   1  |       95 / 209      |    10 000 / 4 000    |  6200 |      \  |     \    |        1       |      15       |
|   2  |      105 / 231      |    10 000 / 4 000    |  6350 |    15M  |    10    |       13       |      15       |
|   3  |      115 / 253      |    10 000 / 4 000    |  6500 |  17.6M  |    12    |       14       |      16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 3 级根蔓骑士的升级时间减少。</TimelineRow>
        <TimelineRow>2 级根蔓骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>根蔓骑士的训练时间由 3:40 改为 2:50</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>3 级根蔓骑士的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3 级根蔓骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>所有等级根蔓骑士的每秒伤害降低（190/210/230 => 95/105/115）。</TimelineRow>
        <TimelineRow>所有等级根蔓骑士的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/03/26">
        <TimelineRow>所有等级根蔓骑士的每秒伤害降低，生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>所有等级根蔓骑士的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 15 本新增根蔓骑士，共设 3 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
