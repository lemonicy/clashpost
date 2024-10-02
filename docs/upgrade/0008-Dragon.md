---
title: "部落冲突 coc 飞龙（大龙、火龙）升级数据"
navTitle: "飞龙"
shownTitle: "飞龙（大龙、火龙）"
description: "飞龙喷出的烈焰让人胆寒，这种恐怖的空中生物面对敌军毫不留情，任何人都难以逃出它的魔掌。"
module: upgrade-home
imgFolder: home_tech/0008
wiki: https://clashofclans.fandom.com/wiki/Dragon
canonical: /upgrade/0008-Dragon
---

- *如想查看该兵种的强化版本，请访问：[超级飞龙](/upgrade/060d-Super-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dragon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dragon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dragon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dragon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dragon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dragon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dragon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Dragon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Dragon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Dragon10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Dragon11.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.25 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="7" />
    <UnitProperty pKey="训练时间" pValue="180" :isTrainingTime="true" />
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

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费 |  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ----  |   ----  |    ----   |     ---     |   ----    |
|   1  |    140   |   175   |  1900  |      \  |       \   |      1      |     7     |
|   2  |    160   |   200   |  2100  |     1M  |    0,18   |      5      |     7     |
|   3  |    180   |   225   |  2300  |     2M  |    1,12   |      6      |     8     |
|   4  |    210   |   262.5 |  2700  |     3M  |    3      |      7      |     9     |
|   5  |    240   |   300   |  3100  |   3.8M  |    4      |      8      |    10     |
|   6  |    270   |   337.5 |  3400  |   4.9M  |    5,6    |      9      |    11     |
|   7  |    310   |   387.5 |  3900  |   6.3M  |    5,12   |     10      |    12     |
|   8  |    330   |   412.5 |  4200  |   8.8M  |    7      |     11      |    13     |
|   9  |    350   |   437.5 |  4500  |  17.5M  |   12      |     12      |    14     |
|  10  |    370   |   462.5 |  4900  |  19.5M  |   14      |     13      |    15     |
|  11  |    390   |   487.5 |  5300  |  21.5M  |   16      |     14      |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/27">
        <TimelineRow>11 级飞龙的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 11 级飞龙。</TimelineRow>
        <TimelineRow>5 ~ 10 级飞龙的升级时间减少。</TimelineRow>
        <TimelineRow>9 级飞龙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 10 级飞龙。</TimelineRow>
        <TimelineRow>7 ~ 8 级飞龙的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>5 ~ 9 级飞龙的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6 级飞龙的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/08/12">
        <TimelineRow>4 级飞龙的生命值从 2600 提升至 2700。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>14 本新增 9 级飞龙。。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 7 级飞龙的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 6 级飞龙的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>3 ~ 5 级飞龙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，新增 8 级飞龙。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>5 ~ 7 级飞龙的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>2 ~ 6 级飞龙的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级飞龙的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>