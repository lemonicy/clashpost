---
title: "部落冲突 coc 猛蜥（猛毒蜥）升级数据"
navTitle: "猛蜥"
shownTitle: "猛蜥（猛毒蜥）"
description: "论速度，猛蜥称第二，没人敢称第一。它可以向敌人喷吐减速毒素。猛蜥真的有毒吗？可能吧，但谁又有那么大的胆子去验明真假呢？"
module: upgrade-home
imgFolder: home_heroes/0286
wiki: https://clashofclans.fandom.com/wiki/Poison_Lizard
canonical: /upgrade/0286-Poison-Lizard
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Poison_Lizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Poison_Lizard_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 猛蜥的技能（腐坏吐息）：猛蜥可以朝敌人喷吐一团团毒素。
2. 当主人附近约 7 格内出现敌方英雄或部队时，猛蜥会朝他们喷吐毒雾，对他们造成中毒效果，中毒效果类似于 [毒药法术](/upgrade/0180-Poison-Spell)，但与毒药法术不同的是，只要敌人挨上一次猛蜥的普攻，伤害就会达到最大值，不像毒药法术一样有个递增的过程。当猛蜥不再进攻敌方部队时，敌方部队的掉血和减速效果还将持续 6 秒，减速效果全额，掉血速度递减。
3. 猛蜥的毒药效果和其他具有毒药效果的单位（如 [毒药法术](/upgrade/0180-Poison-Spell)、[英雄猎手](/upgrade/0088-Headhunter)）叠加时取效果最强的那个。另外，猛蜥的毒药效果对英雄没有衰减。
4. 当主人在场上时，猛蜥的偏好是距离主人约 7 格内的英雄和部队。注意，这个距离是以主人为圆心来算的，而不是猛蜥自己。
5. 当主人不在场时，无论是主人被召回还是阵亡，猛蜥都需要摧毁当前建筑才会转移目标，而不是立即跑去打援军或英雄。当主人在场时，如果范围内出现了敌方部队，猛蜥会第一时间跑过去，不需要摧毁当前建筑。
6. 当猛蜥附近没有部队和英雄时，猛蜥会攻击建筑，但它无法减缓防御建筑的攻速。
7. 猛蜥自身不触发陷阱，但其他部队触发的陷阱可能会误伤到它。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="离英雄不超过 7 格的部队和英雄" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="4.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.35 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4.5 格" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    },
    {
        "column": 8,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 |毒雾<br>最高伤害|移动速度<br>降低|攻击速度<br>降低| 生命值 | 升级花费 | 升级时间| 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |      ---      |      ---      |      ---      |  ---  |  ----   |   ---   |   ---   |        ---        |     ----     |
|   1  |   181   |       80      |      26%      |      35%      |  1400 |     \   |   \     |         |         7         |      15      |
|   2  |   192   |       80      |      26%      |      35%      |  1450 |    60k  |   1     |         |         7         |      15      |
|   3  |   203   |       80      |      26%      |      35%      |  1500 |    75k  |   1,12  |         |         7         |      15      |
|   4  |   214   |       80      |      26%      |      35%      |  1550 |    90k  |   2     |         |         7         |      15      |
|   5  |   225   |      100      |      34%      |      45%      |  1600 |   100k  |   2,12  |         |         7         |      15      |
|   6  |   236   |      100      |      34%      |      45%      |  1650 |   110k  |   3     |         |         7         |      15      |
|   7  |   247   |      100      |      34%      |      45%      |  1700 |   120k  |   3,12  |         |         7         |      15      |
|   8  |   258   |      100      |      34%      |      45%      |  1800 |   130k  |   4     |         |         7         |      15      |
|   9  |   269   |      100      |      34%      |      45%      |  1900 |   140k  |   4,12  |         |         7         |      15      |
|  10  |   280   |      120      |      38%      |      50%      |  2050 |   150k  |   5     |         |         7         |      15      |
|  11  |   291   |      120      |      38%      |      50%      |  2100 |   180k  |   6     |         |        11         |      17      |
|  12  |   302   |      120      |      38%      |      50%      |  2150 |   200k  |   7     |         |        11         |      17      |
|  13  |   313   |      120      |      38%      |      50%      |  2200 |   220k  |   8     |         |        11         |      17      |
|  14  |   324   |      120      |      38%      |      50%      |  2250 |   240k  |   8     |         |        11         |      17      |
|  15  |   335   |      140      |      42%      |      55%      |  2300 |   260k  |   8     |         |        11         |      17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/28">
        <TimelineRow>猛蜥的攻击距离由 3.5 格提升到 4.5 格。</TimelineRow>
        <TimelineRow>所有等级猛蜥的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/17">
        <TimelineRow>17 本新增 11 ~ 15 级猛蜥。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 9 级猛蜥的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10 级猛蜥的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 10 级猛蜥的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 10 级猛蜥的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>猛蜥寻找目标的范围增加 0.5 格，让它比较不会忽略附近的单位和英雄。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，可解锁四个新宠物，猛蜥是其中之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>