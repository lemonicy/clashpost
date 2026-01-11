---
title: "部落冲突 coc 毒药法术（施毒法术）升级数据"
navTitle: "毒药法术"
shownTitle: "毒药法术（施毒法术）"
description: "借助危险的毒药法术，让您的部队在对抗敌军中占据上风！用毒药法术让敌军处于萦绕着的毒雾中，他们的移动和攻击速度都会变慢，并且受到的伤害会随着时间而加重。毒药法术对建筑物无效。"
module: upgrade-home
imgFolder: home_tech/0180
wiki: https://clashofclans.fandom.com/wiki/Poison_Spell
canonical: /upgrade/0180-Poison-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Poison_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="借助危险的毒药法术，让您的部队在对抗敌军中占据上风！用毒药法术让敌军处于萦绕着的毒雾中，他们的移动和攻击速度都会变慢，并且受到的伤害会随着时间而加重。毒药法术对建筑物无效。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 毒药法术对敌方英雄有效，伤害只有其他单位的 5％，但减速效果是全额的。
2. 毒药法术不能对建筑造成伤害，也不能减缓建筑的攻击速度。
3. 中毒状态下，兵种的每次伤害和非中毒状态一致，并不会因为攻速变慢而产生更高的每次伤害。
4. 毒药法术的伤害成二次函数递增，约 8 秒达到最大伤害。离开毒药范围后伤害递减，递减速度是增加的两倍。详见：[【毒药法术原理】9 项实验让你怀疑你从未用过毒药法术](/p/1505)。
5. 毒药 [法术塔](/upgrade/0311-Spell-Tower)、[猛蜥](/upgrade/0286-Poison-Lizard) 和 14 - 16 级 [大本营](/upgrade/0400-Town-Hall) 爆炸后的毒药也具有和毒药法术类似的伤害递增特性，但是这些毒药的属性和毒药法术不同。
6. [英雄猎手](/upgrade/0088-Headhunter) 的攻击也具有和毒药法术类似的减速效果，但中毒伤害不是随时间递增的，而是会立即达到最大伤害。
7. 毒药法术的毒药效果和其他具有毒药效果的单位叠加时取效果最强的那个。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="减速并掉血 (范围伤害)" />
    <UnitProperty pKey="作用目标" pValue="敌方部队和英雄" />
    <UnitProperty pKey="法术持续时间" pValue="16 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
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

| 等级 |每秒最大伤害|移动速度<br>降低幅度|攻击速度<br>降低幅度 | 升级花费| 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |    ----   |        ----      |         ----      |   ----  |   ----  |        ---      |      ----     |
|   1  |     90    |        26%       |         35%       |     \   |     \   |         1       |        8      |
|   2  |    115    |        30%       |         40%       |     5K  |   0, 6  |         6       |        8      |
|   3  |    145    |        34%       |         45%       |    10K  |   0,18  |         7       |        9      |
|   4  |    180    |        38%       |         50%       |  21.5K  |   2     |         8       |       10      |
|   5  |    220    |        40%       |         55%       |    35K  |   3     |         9       |       11      |
|   6  |    260    |        42%       |         60%       |    55K  |   4     |        10       |       12      |
|   7  |    280    |        44%       |         65%       |  77.5K  |   5     |        11       |       13      |
|   8  |    300    |        46%       |         68%       |   100K  |   6,12  |        12       |       14      |
|   9  |    320    |        48%       |         70%       |   135K  |   7     |        13       |       15      |
|  10  |    340    |        50%       |         72%       |   175K  |   8     |        14       |       16      |
|  11  |    360    |        51%       |         73%       |   230K  |   9,16  |        15       |       17      |
|  12  |    380    |        52%       |         74%       |   350K  |  14,12  |        16       |       18      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，并在 18 本新增 12 级毒药法术。</TimelineRow>
        <TimelineRow>11 级毒药法术的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>8 ~ 10 级毒药法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 3、5 ~ 10 级毒药法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 本新增 11 级毒药法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>4、6、7、9、10 级毒药法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 10 级毒药法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 9 级毒药法术的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级毒药法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 10 级毒药法术。</TimelineRow>
        <TimelineRow>5 ~ 9 级毒药法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3、8 级毒药法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>6 ~ 7 级毒药法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 9 级毒药法术。</TimelineRow>
        <TimelineRow>4 ~ 8 级毒药法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/02/15">
        <TimelineRow>“毒药法术”的简体中文名称改为“伤害药水法术”，网站仍然使用旧名称。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6 级毒药法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4 级毒药法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 8 级毒药法术。</TimelineRow>
        <TimelineRow>2 ~ 3 级毒药法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级毒药法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>13 本新增 7 级毒药法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12 本新增 6 级毒药法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>