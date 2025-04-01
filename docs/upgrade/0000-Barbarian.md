---
title: "部落冲突 coc 野蛮人升级数据"
navTitle: "野蛮人"
shownTitle: "野蛮人"
description: "这些无畏的勇士长着引人注目的胡子，凭借一身壮硕的肌肉在敌人的村庄肆虐。训练一队野蛮人，他们将为您出生入死！"
module: upgrade-home
imgFolder: home_tech/0000
wiki: https://clashofclans.fandom.com/wiki/Barbarian
canonical: /upgrade/0000-Barbarian
---

- *如想查看该兵种的强化版本，请访问：[超级野蛮人](/upgrade/0600-Super-Barbarian)。*
- *如想查看以野蛮人为原型的英雄，请访问：[野蛮人之王（蛮王、男王）](/upgrade/0200-Barbarian-King)。*
- *如想查看夜世界的狂暴野蛮人，请访问：[夜世界狂暴野蛮人](/upgrade/1000-Raged-Barbarian)。*
- *如想查看都城的野蛮人（仅作为派生兵种），请访问：[都城野蛮人](/upgrade/20c0-Barbarian)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barbarian_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Barbarian1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Barbarian3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Barbarian5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Barbarian6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Barbarian7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Barbarian8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Barbarian9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Barbarian10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Barbarian11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Barbarian12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="1" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
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

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级花费 |  升级时间  |所需实验室等级|所需大本等级|
| ---- |  ----   |  ----   |  ----  |   ----  |    ----   |    ----     |   ----    |
|   1  |     8   |    8    |    45  |      \  |       \   |      1      |     1     |
|   2  |    11   |   11    |    54  |    10k  |   0, 0,30 |      1      |     3     |
|   3  |    14   |   14    |    65  |    50k  |   0, 1    |      3      |     5     |
|   4  |    18   |   18    |    85  |   130k  |   0, 2    |      5      |     7     |
|   5  |    23   |   23    |   105  |   300k  |   0, 4    |      6      |     8     |
|   6  |    26   |   26    |   125  |   800k  |   0, 8    |      7      |     9     |
|   7  |    30   |   30    |   160  |     1M  |   0,12    |      8      |    10     |
|   8  |    34   |   34    |   205  |   1.5M  |   1       |      9      |    11     |
|   9  |    38   |   38    |   230  |   2.5M  |   2       |     10      |    12     |
|  10  |    42   |   42    |   250  |   4.3M  |   3, 4    |     12      |    14     |
|  11  |    45   |   45    |   270  |     6M  |   4       |     13      |    15     |
|  12  |    48   |   48    |   290  |     8M  |   5       |     14      |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 12 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 9、12 级野蛮人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>2 级野蛮人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>3 ~ 7、9 ~ 12 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 12 级野蛮人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>7 ~ 11 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级野蛮人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 12 级野蛮人。</TimelineRow>
        <TimelineRow>7 ~ 11 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 10 级野蛮人的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>9 级野蛮人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级野蛮人。</TimelineRow>
        <TimelineRow>7 ~ 10 级野蛮人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 9 级野蛮人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 9 级野蛮人的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 7 级野蛮人的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本新增 10 级野蛮人。</TimelineRow>
        <TimelineRow>1 ~ 2 级野蛮人的训练费用：25/40 圣水 → 15/30 圣水</TimelineRow>
        <TimelineRow>2 ~ 9 级野蛮人的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 8 级野蛮人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 ~ 8 级野蛮人的升级费用降低。</TimelineRow>
        <TimelineRow>12 本新增 9 级野蛮人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 5 ~ 8 级野蛮人的升级时间下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/02/22">
        <TimelineRow>7 ~ 8 级野蛮人的生命值提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>