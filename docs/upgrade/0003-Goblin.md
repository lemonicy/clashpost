---
title: "部落冲突 coc 哥布林升级数据"
navTitle: "哥布林"
shownTitle: "哥布林"
description: "这些麻烦的小家伙眼里只有一件事：资源！他们的反应比隐形弹簧更快，会无休止地取得资源。"
module: upgrade-home
imgFolder: home_tech/0003
wiki: https://clashofclans.fandom.com/wiki/Goblin
canonical: /upgrade/0003-Goblin
---

- *如想查看该兵种的强化版本，请访问：[隐秘哥布林（超哥）](/upgrade/0601-Sneaky-Goblin)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Goblin_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Goblin1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Goblin3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Goblin5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Goblin6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Goblin7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Goblin8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Goblin9.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

哥布林攻击资源类建筑时，其伤害翻倍。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="资源类建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="所需训练营等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="2" />
    <UnitProperty pKey="训练时间" pValue="7" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |对资源建筑的<br>每次伤害|生命值| 升级花费 |  升级时间  |所需实验室<br>等级|所需大本等级|
| ---- |  ----   |  ----   |        ----        |  ----  |   ----  |    ----   |      ----       |   ----   |
|   1  |    11   |    11   |         22         |   25   |      \  |       \   |        1        |     2    |
|   2  |    14   |    14   |         28         |   30   |    45k  |    0, 4   |        1        |     3    |
|   3  |    19   |    19   |         38         |   36   |   100k  |    0, 6   |        3        |     5    |
|   4  |    24   |    24   |         48         |   50   |   500k  |    0,12   |        5        |     7    |
|   5  |    32   |    32   |         64         |   65   |   1.2M  |    1      |        6        |     8    |
|   6  |    42   |    42   |         84         |   80   |     2M  |    1, 6   |        7        |     9    |
|   7  |    52   |    52   |        104         |  105   |     3M  |    2      |        8        |    10    |
|   8  |    62   |    62   |        124         |  126   |   4.2M  |    3,12   |       10        |    12    |
|   9  |    72   |    72   |        144         |  146   |    10M  |    6      |       13        |    15    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 3、6 ~ 9 级哥布林的升级时间减少。</TimelineRow>
        <TimelineRow>3、8、9 级哥布林的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>7 ~ 9 级哥布林的升级时间减少。</TimelineRow>
        <TimelineRow>9 级哥布林的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>7 ~ 9 级哥布林的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 9 级哥布林。</TimelineRow>
    <TimelineRow>8 级哥布林的升级时间减少。</TimelineRow>
        <TimelineRow>8 级哥布林的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>7 ~ 8 级哥布林的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4，6 ~ 8 级哥布林的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 7 级哥布林的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 7 级哥布林的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>3 ~ 8 级的哥布林的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 7 级哥布林的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020-03-30">
        <TimelineRow>5 ~ 7 级哥布林的升级费用降低。</TimelineRow>
    <TimelineRow>12 本新增 8 级哥布林。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-04-02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 5 ~ 7 级哥布林的升级时间下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-02-22">
        <TimelineRow>4 ~ 7 级哥布林的生命值提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>