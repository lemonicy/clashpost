---
title: "部落冲突 coc 飞龙宝宝（小龙）升级数据"
navTitle: "飞龙宝宝"
shownTitle: "飞龙宝宝（小龙）"
description: "会喷火的飞龙宝宝在其他空中部队旁边时显得有些害羞，不过要是落单了，它可会大发雷霆。当周围没有其他空中部队时，飞龙宝宝会变得狂暴，攻击伤害和攻击速度都会提升。"
module: upgrade-home
imgFolder: home_tech/000a
wiki: https://clashofclans.fandom.com/wiki/Baby_Dragon
canonical: /upgrade/000a-Baby-Dragon
---

- *如想查看该兵种的强化版本，请访问：[地狱飞龙](/upgrade/0604-Inferno-Dragon)。*
- *如想查看夜世界的飞龙宝宝，请访问：[夜世界飞龙宝宝](/upgrade/1005-Baby-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Baby_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Baby_Dragon1.png" />
        <UnitImg imgTitle="3 级" imgSrc="Baby_Dragon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Baby_Dragon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Baby_Dragon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Baby_Dragon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Baby_Dragon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Baby_Dragon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Baby_Dragon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Baby_Dragon10.png" />
        <!-- <UnitImg imgTitle="11 级" imgSrc="Baby_Dragon11.png" /> -->
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

如果飞龙宝宝附近 4.5 格无空军会触发狂暴，狂暴时秒伤为原来的 3 倍，攻速为 0.67 秒/次，即每次伤害为原来的 2 倍。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.25 格" />
    <UnitProperty pKey="所需训练营等级" pValue="11" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="训练时间" pValue="90" trainingSystem="2022" />
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

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ---- |   ----  |    ----   |    ----     |   ----    |
|   1  |     75   |    75   |  1200 |      \  |       \   |      1      |     9     |
|   2  |     85   |    85   |  1300 |     2M  |    1, 6   |      7      |     9     |
|   3  |     95   |    95   |  1400 |   2.5M  |    1,18   |      8      |    10     |
|   4  |    105   |   105   |  1500 |   3.4M  |    2,12   |      8      |    10     |
|   5  |    115   |   115   |  1600 |   3.9M  |    3,12   |      9      |    11     |
|   6  |    125   |   125   |  1700 |   5.5M  |    5      |     10      |    12     |
|   7  |    135   |   135   |  1800 |   7.2M  |    6      |     11      |    13     |
|   8  |    145   |   145   |  1900 |   9.5M  |    8,12   |     12      |    14     |
|   9  |    155   |   155   |  2000 |  14.5M  |   10      |     13      |    15     |
|  10  |    165   |   165   |  2100 |    16M  |   12      |     14      |    16     |
|  11  |    175   |   175   |  2200 |  22.5M  |   15      |     15      |    17     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 11 级飞龙宝宝。</TimelineRow>
        <TimelineRow>2 ~ 10 级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>5、8 ~ 10 级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>9 级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>9 级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 10 级飞龙宝宝。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 9 级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 9 级飞龙宝宝。</TimelineRow>
        <TimelineRow>6 ~ 7 级飞龙宝宝的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>3 ~ 8 级飞龙宝宝的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5、7 级飞龙宝宝的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4、7 级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 8 级飞龙宝宝。</TimelineRow>
        <TimelineRow>2 ~ 5 级飞龙宝宝的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 3、5 ~ 6 级飞龙宝宝的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 7 级飞龙宝宝。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 4 级飞龙宝宝的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>2 ~ 6 级飞龙宝宝的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级飞龙宝宝的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>