---
title: "部落冲突 coc 法师升级数据"
navTitle: "法师"
shownTitle: "法师"
description: "法师的出现为战场蒙上了一层恐怖色彩。集结一群法师，他们将摧毁各种陆空目标！"
module: upgrade-home
imgFolder: home_tech/0006
wiki: https://clashofclans.fandom.com/wiki/Wizard
canonical: /upgrade/0006-Wizard
---

- *如想查看该兵种的强化版本，请访问：[超级法师（超法）](/upgrade/0609-Super-Wizard)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Wizard1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Wizard3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wizard5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Wizard6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Wizard7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Wizard8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Wizard9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Wizard10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Wizard11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Wizard12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Wizard13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Wizard14.png" imgHd="Wizard14_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="2,2,6000,Elixir" :isDonationCost="true" />
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

| 等级 |  每秒伤害 | 每次伤害 | 生命值| 升级花费 |  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ---- |   ----  |    ----   |    ----     |   ----    |
|   1  |     50   |    75   |   75  |      \  |       \   |      1      |     5     |
|   2  |     70   |   105   |   90  |   120k  |    0, 4   |      3      |     5     |
|   3  |     90   |   135   |  108  |   300k  |    0, 5   |      4      |     6     |
|   4  |    125   |   187.5 |  135  |   600k  |    0,12   |      5      |     7     |
|   5  |    170   |   255   |  165  |   1.2M  |    0,18   |      6      |     8     |
|   6  |    185   |   277.5 |  180  |     2M  |    1,12   |      7      |     9     |
|   7  |    200   |   300   |  195  |   2.5M  |    2      |      8      |    10     |
|   8  |    215   |   322.5 |  210  |   3.1M  |    2, 6   |      9      |    11     |
|   9  |    230   |   345   |  230  |     4M  |    2,12   |     10      |    12     |
|  10  |    245   |   367.5 |  250  |   5.5M  |    3,12   |     11      |    13     |
|  11  |    260   |   390   |  270  |    10M  |    5,12   |     13      |    15     |
|  12  |    275   |   412.5 |  290  |  11.5M  |    7      |     14      |    16     |
|  13  |    290   |   435   |  310  |    16M  |   10,12   |     15      |    17     |
|  14  |    310   |   465   |  330  |    27M  |   14      |     16      |    18     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，并在 18 本新增 14 级法师。</TimelineRow>
        <TimelineRow>13 级法师的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>8 ~ 11 级法师的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5、8 ~ 12 级法师的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 4、6 ~ 12 级法师的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级法师。</TimelineRow>
        <TimelineRow>3 ~ 4、6 ~ 7、9 ~ 12 级法师的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 12 级法师的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>11 级法师的升级时间减少。</TimelineRow>
        <TimelineRow>11 级法师的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 12 级法师。</TimelineRow>
        <TimelineRow>7 ~ 11 级法师的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 ~ 10 级法师的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级法师。</TimelineRow>
        <TimelineRow>7 ~ 10 级法师的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 10 级法师的升级费用和升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 7 级法师的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>3 ~ 9 级法师的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 6、8 ~ 9 级法师的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本新增 10 级法师。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 ~ 7 级法师的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>5 ~ 8 级法师的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级法师的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>