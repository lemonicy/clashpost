---
title: "部落冲突 coc 英雄警钟升级数据"
navTitle: "英雄警钟"
shownTitle: "英雄警钟"
description: "警钟鸣响时会激发防守方英雄的斗志，提升其攻击力与生命值。警钟被摧毁后，英雄们便会恢复常态。真没劲！"
module: upgrade-temp
imgFolder: temp_crafted/0903
wiki: https://clashofclans.fandom.com/wiki/Hero_Bell
canonical: /upgrade/0903-Hero-Bell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hero_Bell4_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Hero_Bell1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Hero_Bell2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Hero_Bell3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Hero_Bell4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 英雄警钟可以强化范围内的防守方英雄，提高它们的伤害和生命值。
2. 战斗加载完成几秒后，英雄警钟的强化效果就会激活，激活时有钟声音效。
3. 如果防守方的英雄距离英雄警钟超过 50 格，强化效果会失效，不过这种情况极少发生，除非防守方把建筑和英雄放到两个对角。
4. 英雄警钟的强化效果可以与困难模式叠加，但不能与其他防御的增益效果（如 [狂暴法术塔](/upgrade/0311-Spell-Tower) 中的狂暴法术）叠加。
5. 英雄警钟不能强化 [部落城堡](/upgrade/0407-Clan-Castle) 内的部队，也不能强化守卫。
6. 使用 [冰冻法术](/upgrade/0104-Freeze-Spell) 等方式冻结英雄警钟不影响其强化效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="作用类型" pValue="强化防守方的英雄" />
    <UnitProperty pKey="作用半径" pValue="50 格" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="18" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |   ---  |   ---   |   ---   |         ---        |
|   1  |   400  |     \   |    \    |                    |
|   2  |   900  |    4M   |   1     |                    |
|   3  |  1400  |    5M   |   1, 6  |                    |
|   4  |  1900  |    6M   |   1,12  |                    |
|   5  |  2400  |    7M   |   1,18  |                    |
|   6  |  2900  |    8M   |   2     |                    |
|   7  |  3400  |    9M   |   2, 6  |                    |
|   8  |  3900  |   10M   |   2,12  |                    |
|   9  |  4400  |   11M   |   2,18  |                    |
|  10  |  4900  |   12M   |   3     |                    |
</UnitTable>

<SmallTitle>可升级模组 2：提升英雄的伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 英雄每秒<br>伤害提升 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |         ---        |    ---  |   ---    |         ---        |
|   1  |          4%        |      \  |    \     |                    |
|   2  |          5%        |     5M  |   0,12   |                    |
|   3  |          7%        |   6.5M  |   0,16   |                    |
|   4  |          8%        |     8M  |   0,20   |                    |
|   5  |         10%        |   9.5M  |   1      |                    |
|   6  |         11%        |    10M  |   1, 6   |                    |
|   7  |         13%        |  10.5M  |   1,12   |                    |
|   8  |         14%        |    11M  |   2      |                    |
|   9  |         16%        |  11.5M  |   2,12   |                    |
|  10  |         17%        |    12M  |   3      |                    |
</UnitTable>

<SmallTitle>可升级模组 3：提升英雄的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 英雄<br>生命值提升 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| ---- |       ---         |   ---   |   ---   |         ---        |
|   1  |        8%         |     \   |    \    |                    |
|   2  |       11%         |   25k   |   1,12  |                    |
|   3  |       14%         |   30k   |   2     |                    |
|   4  |       17%         |   35k   |   2,12  |                    |
|   5  |       20%         |   40k   |   2,14  |                    |
|   6  |       23%         |   55k   |   2,16  |                    |
|   7  |       26%         |   70k   |   2,18  |                    |
|   8  |       29%         |   85k   |   2,20  |                    |
|   9  |       32%         |  100k   |   2,22  |                    |
|  10  |       35%         |  115k   |   3     |                    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>新精工防御：英雄警钟。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>

<script setup>
const tableExtraInfo1 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfo2 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
const tableExtraInfo3 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>