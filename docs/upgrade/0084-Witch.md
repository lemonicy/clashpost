---
title: "部落冲突 coc 女巫升级数据"
navTitle: "女巫"
shownTitle: "女巫"
description: "女巫从来不是一个人在战斗，她能不断召唤骷髅兵发起攻击。升级您的女巫，让她每次可以召唤更多骷髅兵。"
module: upgrade-home
imgFolder: home_tech/0084
wiki: https://clashofclans.fandom.com/wiki/Witch
canonical: /upgrade/0084-Witch
---

- *如想查看该兵种的强化版本，请访问：[超级女巫](/upgrade/0605-Super-Witch)。*
- *如想查看夜世界的暗夜女巫，请访问：[夜世界暗夜女巫](/upgrade/1007-Night-Witch)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">女巫</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">骷髅</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 女巫 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Witch_info.png" imgAlt="女巫"
    description="女巫从来不是一个人在战斗，她能不断召唤骷髅兵发起攻击。升级您的女巫，让她每次可以召唤更多骷髅兵。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Witch1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Witch3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Witch5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Witch6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Witch7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Witch8.png" imgHd="Witch8_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.7 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4 格" />
    <UnitProperty pKey="召唤骷髅的冷却时间" pValue="7 秒" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,270,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 7,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 8,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每秒伤害| 每次伤害 |每次召唤<br>数量<sup>*</sup>|召唤的<br>骷髅等级|最大召唤<br>数量| 生命值 |升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| --- |   ---  |   ----  |            ---            |        ---      |      ---     |  ---- |  ----  |    ---    |       ----      |      ----     |
|  1  |   100  |   70    |             4             |         1       |       6      |  300  |    \   |     \     |        1        |       9       |
|  2  |   110  |   77    |             4             |         1       |       8      |  320  |    20K |    2      |        7        |       9       |
|  3  |   140  |   98    |             4             |         1       |      10      |  400  |    29K |    3      |        8        |      10       |
|  4  |   165  |  115.5  |             4             |         1       |      12      |  470  |    45K |    3,12   |        9        |      11       |
|  5  |   185  |  129.5  |             4             |         1       |      14      |  520  |  62.5K |    4      |       10        |      12       |
|  6  |   200  |  140    |             4             |         1       |      15      |  540  |   150K |    5,12   |       13        |      15       |
|  7  |   220  |  154    |             5             |         1       |      16      |  560  |   180K |    7, 6   |       14        |      16       |
|  8  |   260  |  182    |             5             |         2       |      16      |  650  |   355K |    15, 12 |       16        |      18       |
</UnitTable>

\* 女巫并不是每次召唤都可以召唤出这么多骷髅，当一只女巫召唤的骷髅达到上表的限制时，除非骷髅兵死亡，否则女巫不会继续召唤。这个上限指的是每只女巫召唤的骷髅，如果有两只女巫，那么场上的最大骷髅数量为 2 倍上限。
</SwitchTabGroup>

<!-- ↓↓↓ 骷髅 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_info.png" imgAlt="女巫召唤的骷髅"
    description="这些不死生物本身不构成太大的威胁，但它们从来不单独作战，因为女巫会不断召唤成群的骷髅兵来对抗您的敌人！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| --- |    ---   |   ----  |  ---  |
|  1  |     25   |   25    |   30  |
|  2  |     30   |   30    |   45  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>在 18 本添加了 8 级女巫。</TimelineRow>
        <TimelineRow>添加了 2 级骷髅。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>4 ~ 7 级女巫的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 7 级女巫的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>女巫的训练时间由 2:00 改为 1:40</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 7 级女巫的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 级女巫的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>4 ~ 5 级女巫的每秒伤害提升。</TimelineRow>
        <TimelineRow>4 ~ 6 级女巫的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>新增 16 本，并在 16 本新增 7 级女巫。</TimelineRow>
        <TimelineRow>5 ~ 6 级女巫的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3 级女巫的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>5 级女巫的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>新增 15 本，并在 15 本新增 6 级女巫。</TimelineRow>
        <TimelineRow>3 ~ 5 级女巫的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 3 级女巫的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>女巫的训练时间由 360 秒减少到 240 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 4 级女巫的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>2 ~ 4 级女巫的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 4 级女巫的训练费用降低。</TimelineRow>
        <TimelineRow>3 ~ 4 级女巫的升级费用降低。</TimelineRow>
        <TimelineRow>12 本新增 5 级女巫，4 级女巫下放到 11 本，3 级下放到 10 本。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>