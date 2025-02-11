---
title: "部落冲突 coc 空中炸弹（红炸）升级数据"
navTitle: "空中炸弹"
shownTitle: "空中炸弹（红炸）"
description: "作为防空领域的一大革新之作，这种陷阱可以对小范围内的多个空中目标造成伤害。"
module: upgrade-home
imgFolder: home_buildings/0382
wiki: https://clashofclans.fandom.com/wiki/Air_Bomb
canonical: /upgrade/0382-Air-Bomb
---

- 本页内容不是搜空地雷，如想查看搜空地雷的数据，请访问：[搜空地雷](/upgrade/0384-Seeking-Air-Mine)。
- 如想查看夜世界的空中炸弹发射器，请访问：[夜世界空中炸弹发射器](/upgrade/1107-Air-Bombs)。
- 如想查看都城的空中炸弹发射器，请访问：[都城空中炸弹发射器](/upgrade/2208-Air-Bombs)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Air_Bomb_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Air_Bomb1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Air_Bomb3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Air_Bomb5.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Air_Bomb7.png" />
        <UnitImg imgTitle="9 - 10 级" imgSrc="Air_Bomb9.png" />
        <UnitImg imgTitle="11 - 12 级" imgSrc="Air_Bomb11.png" />
        <UnitImg imgTitle="未重新布置" imgSrc="Air_Bomb_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 7, 8 - 9, 10 - 11, 12 - 13, 14 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,     2,     4,       5,       6,       7" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="作用目标" pValue="仅空中目标" />
    <UnitProperty pKey="触发半径" pValue="4 格" />
    <UnitProperty pKey="伤害半径" pValue="3 格" />
    <UnitProperty pKey="爆炸延时" pValue="0.3 秒" />
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

| 等级 | 爆炸伤害 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需大本等级  |
| ---- |    ---  |   ---   |    ---    |         ---         |     ---     |
|   1  |   100   |     4k  |    0      |                     |      5      |
|   2  |   120   |    20k  |    0, 1   |                     |      5      |
|   3  |   144   |   150k  |    0, 2   |                     |      7      |
|   4  |   173   |   540k  |    0, 8   |                     |      9      |
|   5  |   208   |   1.1M  |    0,12   |                     |     11      |
|   6  |   232   |   1.9M  |    1      |                     |     12      |
|   7  |   252   |     2M  |    2      |                     |     13      |
|   8  |   280   |   1.5M  |    1      |                     |     13      |
|   9  |   325   |     4M  |    3      |                     |     14      |
|  10  |   350   |     5M  |    4      |                     |     15      |
|  11  |   375   |   7.5M  |    7      |                     |     16      |
|  12  |   400   |    11M  |    8,12   |                     |     17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>8 级空中炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>8 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 12 级空中炸弹。</TimelineRow>
        <TimelineRow>4 ~ 11 级空中炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 11 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 10 级空中炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>10 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级空中炸弹。</TimelineRow>
        <TimelineRow>2 ~ 9 级空中炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 5、7 ~ 9 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>6 ~ 8 级空中炸弹的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 10 级空中炸弹。</TimelineRow>
        <TimelineRow>7 ~ 9 级空中炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>5 ~ 9 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>5 ~ 9 级空中炸弹的伤害提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>4 ~ 5 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>14 本新增 9 级空中炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新解锁一个空中炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>13 本新增 8 级空中炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>4 级空中炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 7 级空中炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>