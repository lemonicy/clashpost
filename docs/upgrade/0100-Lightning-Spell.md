---
title: "部落冲突 coc 雷电法术（闪电）升级数据"
navTitle: "雷电法术"
shownTitle: "雷电法术（闪电）"
description: "放出一道闪电攻击敌军！施放雷电法术，击晕小范围内的建筑和部队，并对其造成伤害。"
module: upgrade-home
imgFolder: home_tech/0100
wiki: https://clashofclans.fandom.com/wiki/Lightning_Spell
canonical: /upgrade/0100-Lightning-Spell
---

- *如想查看都城的雷电法术，请访问：[都城雷电法术](/upgrade/2102-Lightning-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lightning_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="放出一道闪电攻击敌军！<br>施放雷电法术，击晕小范围内的建筑和部队，并对其造成伤害。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Lightning_Spell.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 对于建筑来说，雷电法术的闪电只需**蹭到建筑边缘**即可对建筑造成完整伤害，参见：[新版雷电法术攻击范围示意](/p/1663)。
2. 雷电法术对敌方英雄有效，但是要想劈到英雄最好把雷电法术扔在英雄头顶，否则可能劈不到。
3. 雷电法术不能对资源仓库、[大本营](/upgrade/0400-Town-Hall) 和 [部落城堡](/upgrade/0407-Clan-Castle) 造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="2 格" />
    <UnitProperty pKey="作用类型" pValue="造成范围伤害" />
    <UnitProperty pKey="作用目标" pValue="所有敌方目标" />
    <UnitProperty pKey="冰冻时间" pValue="0.1 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="法术配置时间" pValue="180" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  总伤害 | 升级花费 | 升级时间 |所需实验室<br>等级<sup>*</sup>|所需<br>大本等级|
| ---- |  ----  |  ----   |  ----   |            ----             |     ----      |
|   1  |   150  |     \   |   \     |              1              |       5       |
|   2  |   180  |    50K  |   0, 4  |              1              |       5       |
|   3  |   210  |   100K  |   0, 8  |              2              |       5       |
|   4  |   240  |   200K  |   0,12  |              3              |       5       |
|   5  |   270  |   600K  |   1     |              6              |       8       |
|   6  |   320  |   1.5M  |   2     |              7              |       9       |
|   7  |   400  |   2.5M  |   3     |              8              |      10       |
|   8  |   480  |   4.2M  |   5     |              9              |      11       |
|   9  |   560  |   6.3M  |   6     |             10              |      12       |
|  10  |   600  |    10M  |   9     |             13              |      15       |
|  11  |   640  |  13.5M  |  11     |             14              |      16       |
|  12  |   680  |  18.5M  |  14     |             15              |      17       |
</UnitTable>

\* 如果玩家升级到 5 级大本营并且解锁了雷电法术，即使玩家没有立即升实验室也可以升级雷电法术。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 12 级雷电法术。</TimelineRow>
        <TimelineRow>6 ~ 9、11 级雷电法术的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级雷电法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>10 级雷电法术的升级时间减少。</TimelineRow>
        <TimelineRow>10 级雷电法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级雷电法术。</TimelineRow>
        <TimelineRow>6 ~ 10 级雷电法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 级雷电法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 10 级雷电法术。</TimelineRow>
        <TimelineRow>7 ~ 9 级雷电法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 8 级雷电法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 7 级雷电法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 7 级雷电法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8 级雷电法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>雷电法术不再对部落城堡造成伤害。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>雷电法术由 2 空间改为 1 空间。</TimelineRow>
        <TimelineRow>11 本新增 8 级雷电法术，12 本新增 9 级雷电法术。</TimelineRow>
        <TimelineRow>可对目标产生短时间的击晕效果（短暂冰冻），打断目标的攻击并使其攻击重置。</TimelineRow>
        <TimelineRow>所有等级雷电法术的配置费用降低。</TimelineRow>
        <TimelineRow>所有等级雷电法术的伤害减少。</TimelineRow>
        <TimelineRow>更新后雷电的随机半径没了，伤害的范围固定。（5×5 的方格去掉四个角得到的 21 格的区域）</TimelineRow>
        <TimelineRow>更新后雷电法术对大本营无效。</TimelineRow>
        <TimelineRow>7 级雷电法术的升级时间由 10 天降为 9 天。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>6 ~ 7 级雷电法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 6 ~ 7 级雷电法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>