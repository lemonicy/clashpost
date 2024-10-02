---
title: "部落冲突 coc 瓦基丽武神升级数据"
navTitle: "瓦基丽武神"
shownTitle: "瓦基丽武神"
description: "这位光荣的勇士擅长使用双手斧，她在相邻的建筑物之间跑动，能够通过狂暴旋风将多个敌人或建筑一同粉碎！"
module: upgrade-home
imgFolder: home_tech/0082
wiki: https://clashofclans.fandom.com/wiki/Valkyrie
canonical: /upgrade/0082-Valkyrie
---

- *如想查看该兵种的强化版本，请访问：[超级瓦基丽武神](/upgrade/0607-Super-Valkyrie)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Valkyrie_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Valkyrie1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Valkyrie3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Valkyrie5.png" />
        <UnitImg imgTitle="6 - 7 级" imgSrc="Valkyrie6.png" />
        <UnitImg imgTitle="8 级" imgSrc="Valkyrie8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Valkyrie9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Valkyrie10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Valkyrie11.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围攻击" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="8" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.8 秒" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="训练时间" pValue="90" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ---- |   ----  |    ----   |    ----    |   ----    |
|   1  |     94   |  169.2  |  750  |      \  |     \     |      1     |     8     |
|   2  |    106   |  190.8  |  850  |     6K  |     1     |      6     |     8     |
|   3  |    119   |  214.2  |  950  |    10K  |     2     |      7     |     9     |
|   4  |    133   |  239.4  | 1050  |    20K  |     3     |      7     |     9     |
|   5  |    148   |  266.4  | 1300  |    32K  |     4     |      8     |    10     |
|   6  |    167   |  300.6  | 1500  |    63K  |     4,6   |      9     |    11     |
|   7  |    185   |  333    | 1650  |   110K  |     5,6   |     10     |    12     |
|   8  |    196   |  352.8  | 1800  |   155K  |     7     |     11     |    13     |
|   9  |    208   |  374.4  | 2000  |   215K  |    11     |     12     |    14     |
|  10  |    223   |  401.4  | 2400  |   240K  |    12     |     13     |    15     |
|  11  |    238   |  428.4  | 2600  |   340K  |    15     |     14     |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>11 级瓦基丽武神的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>9 ~ 10 级瓦基丽武神的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 10 级瓦基丽武神的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>6 ~ 8 级瓦基丽武神的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级瓦基丽武神。</TimelineRow>
        <TimelineRow>5 ~ 10 级瓦基丽武神的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5、9 级瓦基丽武神的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 10 级瓦基丽武神。</TimelineRow>
        <TimelineRow>7 ~ 8 级瓦基丽武神的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>5 ~ 9 级瓦基丽武神的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>5 ~ 9 级瓦基丽武神的生命值增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 7 级瓦基丽武神的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6 级瓦基丽武神的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/08/12">
        <TimelineRow>9 级瓦基丽武神的生命值从 1850 提升至 1900。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 9 级瓦基丽武神。</TimelineRow>
        <TimelineRow>2 ~ 7 级瓦基丽武神的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4、7 级瓦基丽武神的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 6 级瓦基丽武神的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 5 级瓦基丽武神的升级费用降低。</TimelineRow>
        <TimelineRow>13 本新增 8 级瓦基丽武神。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，7 级瓦基丽武神的生命值由 1400 提高到 1450。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>7 级瓦基丽武神的生命值由 1300 提高到 1400。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>