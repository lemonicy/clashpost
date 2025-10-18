---
title: "部落冲突 coc 巨型炸弹（大炸弹、巨炸）升级数据"
navTitle: "巨型炸弹"
shownTitle: "巨型炸弹（大炸弹、巨炸）"
description: "如果你想要的是一场大爆炸，那选巨型炸弹准没错。"
module: upgrade-home
imgFolder: home_buildings/0383
wiki: https://clashofclans.fandom.com/wiki/Giant_Bomb
canonical: /upgrade/0383-Giant-Bomb
---

- 游戏中还存在另一种大炸弹，详见：[终极炸弹](/upgrade/0387-Giga-Bomb)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Bomb_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="常规模型" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Giant_Bomb1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Giant_Bomb3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Giant_Bomb5.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Giant_Bomb7.png" />
        <UnitImg imgTitle="9 - 10 级" imgSrc="Giant_Bomb9.png" />
        <UnitImg imgTitle="11 级" imgSrc="Giant_Bomb11.png" />
    </UnitImgGroup>
    <UnitImgGroup title="未重新布置" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Giant_Bomb1_unarmed.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Giant_Bomb3_unarmed.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Giant_Bomb5_unarmed.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Giant_Bomb7_unarmed.png" />
        <UnitImg imgTitle="9 - 10 级" imgSrc="Giant_Bomb9_unarmed.png" />
        <UnitImg imgTitle="11 级" imgSrc="Giant_Bomb11_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6, 7, 8, 9, 10 - 11, 12 - 13, 14 - 16, 17" />
    <BuildingNumRow title="建筑数量" num="    0, 1, 2, 3, 4,       5,       6,       7,  8" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="2 格" />
    <UnitProperty pKey="爆炸延时" pValue="1.6 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 | 爆炸伤害 | 爆炸半径 | 升级费用 |  升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |    ---  |    ---  |    ---  |    ---    |         ---        |       ---     |
|   1  |   175   |   3 格  |  12.5k  |  0        |                    |        6      |
|   2  |   200   |  3.5 格 |    75k  |  0, 1,30  |                    |        6      |
|   3  |   225   |  3.5 格 |   220k  |  0, 3     |                    |        8      |
|   4  |   250   |   4 格  |   750k  |  0, 8     |                    |       10      |
|   5  |   275   |   4 格  |   900k  |  0,10     |                    |       11      |
|   6  |   325   |   4 格  |   1.3M  |  0,11     |                    |       13      |
|   7  |   375   |   4 格  |   1.5M  |  0,12     |                    |       13      |
|   8  |   400   |   4 格  |     2M  |  1        |                    |       14      |
|   9  |   425   |   4 格  |   3.2M  |  2        |                    |       15      |
|  10  |   450   |   4 格  |   5.5M  |  4        |                    |       16      |
|  11  |   475   |   4 格  |    12M  |  9        |                    |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>8 ~ 9 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 6、8 ~ 10 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 10 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>7 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>7 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 11 级巨型炸弹和新解锁一个巨型炸弹。</TimelineRow>
        <TimelineRow>3 ~ 7、9 ~ 10 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 10 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 9 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 10 级巨型炸弹。</TimelineRow>
        <TimelineRow>2 ~ 9 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 8 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 9 级巨型炸弹。</TimelineRow>
        <TimelineRow>6 ~ 7 级巨型炸弹的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>5 ~ 8 级巨型炸弹的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 8 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>14 本新增 8 级巨型炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新解锁一个巨型炸弹。</TimelineRow>
        <TimelineRow>3 ~ 4 级巨型炸弹的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>13 本新增 7 级巨型炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 6 级巨型炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>