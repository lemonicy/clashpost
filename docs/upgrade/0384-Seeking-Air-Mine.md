---
title: "部落冲突 coc 搜空地雷（黑炸）升级数据"
navTitle: "搜空地雷"
shownTitle: "搜空地雷（黑炸）"
description: "鸟儿？飞机？不管是什么，反正搜空地雷会把它炸飞。这类陷阱会对单个空中部队造成毁灭性打击。"
module: upgrade-home
imgFolder: home_buildings/0384
wiki: https://clashofclans.fandom.com/wiki/Seeking_Air_Mine
canonical: /upgrade/0384-Seeking-Air-Mine
---

- *本页内容不是空中炸弹，如想查看空中炸弹的数据，请访问：[空中炸弹](/upgrade/0382-Air-Bomb)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Seeking_Air_Mine_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Seeking_Air_Mine1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Seeking_Air_Mine3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Seeking_Air_Mine5.png" />
        <UnitImg imgTitle="7 级" imgSrc="Seeking_Air_Mine7.png" />
        <UnitImg imgTitle="未重新布置" imgSrc="Seeking_Air_Mine_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7, 8, 9, 10 - 11, 12, 13, 14 - 16, 17" />
    <BuildingNumRow title="建筑数量" num="    0, 1, 2, 4,       5,  6,  7,       8,  9" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="作用目标" pValue="仅空中目标" />
    <UnitProperty pKey="触发半径" pValue="4 格" />
    <UnitProperty pKey="触发后的飞行速度" pValue="3.5 格/秒" />
    <UnitProperty pKey="爆炸延时" pValue="0.75 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 爆炸伤害 | 升级费用 |  升级时间  |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |    ---  |   ---   |    ---    |         ---         |       ---     |
|   1  |   1500  |    12k  |    0      |                     |        7      |
|   2  |   1800  |   600k  |    0,12   |                     |        9      |
|   3  |   2100  |   1.2M  |    1      |                     |       10      |
|   4  |   2500  |   2.5M  |    2      |                     |       13      |
|   5  |   2800  |     5M  |    4      |                     |       15      |
|   6  |   3000  |   6.5M  |    5      |                     |       16      |
|   7  |   3200  |    14M  |   10      |                     |       17      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>4 ~ 6 级搜空地雷的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 7 级搜空地雷。</TimelineRow>
        <TimelineRow>17 本可以新解锁一个搜空地雷。</TimelineRow>
        <TimelineRow>5 ~ 6 级搜空地雷的升级费用和时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级搜空地雷的升级时间减少。</TimelineRow>
        <TimelineRow>5 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 6 级搜空地雷。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级搜空地雷的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 4 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 5 级搜空地雷。</TimelineRow>
        <TimelineRow>4 级搜空地雷的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>4 级搜空地雷的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 4 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>4 级搜空地雷的伤害从 2400 提升至 2500。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/08/12">
        <TimelineRow>搜空地雷的飞行速度从每秒 2.5 格提升至每秒 3.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新解锁一个搜空地雷。</TimelineRow>
        <TimelineRow>2 ~ 3 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>如果触发了搜空地雷的敌方单位在被地雷炸中之前就被消灭，搜空地雷不会再去追踪地图另一边的飞行单位。</TimelineRow>
        <TimelineRow>现在搜空地雷的最大追踪半径为其触发半径的 2 倍。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 3 级搜空地雷的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 4 级搜空地雷。</TimelineRow>
        <TimelineRow>13 本新解锁一个搜空地雷。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>