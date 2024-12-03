---
title: "部落冲突 coc 暗黑重油罐升级数据"
navTitle: "暗黑重油罐"
shownTitle: "暗黑重油罐"
description: "暗黑重油蕴藏的巨大能量是圣水的三倍，无法存储在普通的圣水瓶中，所以我们得建造一个立方体的暗黑重油罐来存储它。"
module: upgrade-home
imgFolder: home_buildings/0406
wiki: https://clashofclans.fandom.com/wiki/Dark_Elixir_Storage
canonical: /upgrade/0406-Dark-Elixir-Storage
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Elixir_Storage12.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dark_Elixir_Storage1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dark_Elixir_Storage2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dark_Elixir_Storage3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dark_Elixir_Storage4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dark_Elixir_Storage5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dark_Elixir_Storage6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dark_Elixir_Storage7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Dark_Elixir_Storage8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Dark_Elixir_Storage9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Dark_Elixir_Storage10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Dark_Elixir_Storage11.png" imgHd="Dark_Elixir_Storage11_hd.png" />
        <UnitImg imgTitle="12 级" imgSrc="Dark_Elixir_Storage12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7 - 17" />
    <BuildingNumRow title="建筑数量" num="     0,     1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="掠夺比例" pValue="点击查看" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "number",
        "icon": "Dark_Elixir",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
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

| 等级 | 最大储量 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需<br>大本等级 |
| ---- |  ----   |  ---- |    ---   |   ---   |         ---          |       ---       |
|   1  |   10k   |  2000 |    250k  |   0, 8  |                      |         7       |
|   2  | 17.5k   |  2200 |    500k  |   0,16  |                      |         7       |
|   3  |   40k   |  2400 |    1.0M  |   1     |                      |         8       |
|   4  |   75k   |  2600 |    1.5M  |   1,12  |                      |         8       |
|   5  |  140k   |  2900 |    2.0M  |   1,16  |                      |         9       |
|   6  |  180k   |  3200 |    3.0M  |   2     |                      |         9       |
|   7  |  220k   |  3500 |    3.8M  |   3,12  |                      |        12       |
|   8  |  280k   |  3800 |    5.4M  |   5     |                      |        13       |
|   9  |  330k   |  4100 |      7M  |   6     |                      |        14       |
|  10  |  350k   |  4300 |     10M  |   8     |                      |        15       |
|  11  |  360k   |  4500 |   13.5M  |  11,12  |                      |        16       |
|  12  |  370k   |  4700 |     16M  |  15     |                      |        17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 12 级暗黑重油罐。</TimelineRow>
        <TimelineRow>5、10 ~ 11 级暗黑重油罐的升级时间减少。</TimelineRow>
        <TimelineRow>10 级暗黑重油罐的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 10 级暗黑重油罐的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 10 级暗黑重油罐的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>新增 10 级暗黑重油罐，16 级大本营可解锁。</TimelineRow>
        <TimelineRow>9 级暗黑重油罐的升级费用 11.5M 降低 8.1M。</TimelineRow>
        <TimelineRow>6, 8 ~ 10 级暗黑重油罐的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 级暗黑重油罐的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 8 级暗黑重油罐的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 10 级暗黑重油罐。</TimelineRow>
        <TimelineRow>7 ~ 9 级暗黑重油罐的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>游戏新增 14 本，并在 14 本新增 9 级暗黑重油罐。</TimelineRow>
        <TimelineRow>1 ~ 2 级暗黑重油罐的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>新增 14 级暗黑重油罐，8 级大本营可解锁。</TimelineRow>
        <TimelineRow>12 级大本营可掠夺的黑油增加至 4000（不含采集器和城堡）。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 6 级暗黑重油罐的升级费用降低，7 级暗黑重油罐的升级费用提升。</TimelineRow>
        <TimelineRow>所有等级暗黑重油罐的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>