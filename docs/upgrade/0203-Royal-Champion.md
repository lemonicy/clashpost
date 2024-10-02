---
title: "部落冲突 coc 飞盾战神（神盾勇者、闰土）升级数据"
navTitle: "飞盾战神"
shownTitle: "飞盾战神（神盾勇者、闰土）"
description: "翻越城墙，无往不利！飞盾战神一生只怕四件事，但敌军不在其列。她的近距离攻击非常适合用来摧毁近处的防御建筑。"
module: upgrade-home
imgFolder: home_heroes/0203
wiki: https://clashofclans.fandom.com/wiki/Royal_Champion
canonical: /upgrade/0203-Royal-Champion
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Royal_Champion_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 即日起英雄皮肤不再集成在英雄页面，近期网站会单独出一个英雄皮肤的页面，到时候放链接。
2. 2023 年 12 月更新后，游戏推出英雄装备。你可以选择两件装备，这两件装备会在英雄攻击时启用。防守时，英雄不使用任何装备。
3. 2023 年 12 月后，所有英雄开启技能后都会回血了，这个回血是基础属性，无需装备。

<SmallTitle>飞盾战神的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
    <UnitProperty pKey="警戒半径" pValue="12 格<sup>①</sup>" />
    <UnitProperty pKey="搜索半径" pValue="9 格<sup>②</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="3 格<sup>③</sup>" />
</UnitProperties>

① 防守时，如果敌军进入这个范围，英雄会准备反击（具体表现为头上顶个问号）。<br>
② 如果敌军进入这个范围，英雄会奔向敌军，并进行反击。<br>
③ 在没有敌人的情况下，英雄也会走动，而这个走动的范围叫巡逻半径。

<SmallTitle>飞盾战神王座的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="250" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "regen",
        "gpClass": "training"
    },
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每秒伤害|每次伤害|恢复时间|生命值 |升级费用|升级时间|日均消耗|所需<br>大本等级|
| ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |   ---  |      ---      |
|   1  |  340  | 408   |   30  |  2508 |   60k |   \   |        |       13      |
|   2  |  350  | 420   |   30  |  2550 |   70k |  0, 8 |        |       13      |
|   3  |  360  | 432   |   30  |  2593 |   75k |  0,12 |        |       13      |
|   4  |  370  | 444   |   30  |  2635 |   80k |  0,16 |        |       13      |
|   5  |  375  | 450   |   32  |  2678 |   90k |  0,20 |        |       13      |
|   6  |  380  | 456   |   32  |  2720 |  100k |  1,12 |        |       13      |
|   7  |  385  | 462   |   32  |  2763 |  110k |  2    |        |       13      |
|   8  |  390  | 468   |   32  |  2805 |  120k |  2,12 |        |       13      |
|   9  |  396  | 475.2 |   32  |  2848 |  130k |  3    |        |       13      |
|  10  |  402  | 482.4 |   34  |  2890 |  140k |  3    |        |       13      |
|  11  |  408  | 489.6 |   34  |  2933 |  150k |  3    |        |       13      |
|  12  |  414  | 496.8 |   34  |  2975 |  160k |  3    |        |       13      |
|  13  |  420  | 504   |   34  |  3018 |  165k |  4    |        |       13      |
|  14  |  426  | 511.2 |   34  |  3060 |  170k |  4    |        |       13      |
|  15  |  432  | 518.4 |   36  |  3103 |  175k |  4    |        |       13      |
|  16  |  438  | 525.6 |   36  |  3145 |  180k |  5    |        |       13      |
|  17  |  444  | 532.8 |   36  |  3188 |  185k |  5    |        |       13      |
|  18  |  448  | 537.6 |   36  |  3230 |  190k |  5    |        |       13      |
|  19  |  452  | 542.4 |   36  |  3273 |  195k |  5    |        |       13      |
|  20  |  456  | 547.2 |   38  |  3315 |  200k |  5    |        |       13      |
|  21  |  460  | 552   |   38  |  3349 |  205k |  6    |        |       13      |
|  22  |  465  | 558   |   38  |  3383 |  210k |  6    |        |       13      |
|  23  |  470  | 564   |   38  |  3417 |  215k |  6    |        |       13      |
|  24  |  474  | 568.8 |   38  |  3451 |  220k |  6    |        |       13      |
|  25  |  477  | 572.4 |   40  |  3485 |  225k |  6    |        |       13      |
|  26  |  480  | 576   |   40  |  3519 |  230k |  6,12 |        |       14      |
|  27  |  483  | 579.6 |   40  |  3553 |  235k |  6,12 |        |       14      |
|  28  |  486  | 583.2 |   40  |  3587 |  240k |  6,12 |        |       14      |
|  29  |  489  | 586.8 |   40  |  3621 |  245k |  6,12 |        |       14      |
|  30  |  492  | 590.4 |   42  |  3655 |  250k |  6,12 |        |       14      |
|  31  |  495  | 594   |   42  |  3681 |  260k |  7    |        |       15      |
|  32  |  498  | 597.6 |   42  |  3706 |  265k |  7    |        |       15      |
|  33  |  502  | 602.4 |   42  |  3732 |  270k |  7    |        |       15      |
|  34  |  506  | 607.2 |   42  |  3757 |  275k |  7    |        |       15      |
|  35  |  510  | 612   |   44  |  3783 |  280k |  7    |        |       15      |
|  36  |  514  | 616.8 |   44  |  3808 |  285k |  7,12 |        |       15      |
|  37  |  518  | 621.6 |   44  |  3834 |  290k |  7,12 |        |       15      |
|  38  |  522  | 626.4 |   44  |  3859 |  295k |  7,12 |        |       15      |
|  39  |  526  | 631.2 |   44  |  3885 |  300k |  7,12 |        |       15      |
|  40  |  530  | 636   |   46  |  3910 |  305k |  7,12 |        |       15      |
|  41  |  533  | 639.6 |   46  |  3936 |  315k |  8    |        |       16      |
|  42  |  536  | 643.2 |   46  |  3961 |  325k |  8    |        |       16      |
|  43  |  539  | 646.8 |   46  |  3987 |  335k |  8    |        |       16      |
|  44  |  542  | 650.4 |   46  |  4012 |  345k |  8    |        |       16      |
|  45  |  545  | 654   |   48  |  4038 |  355k |  8    |        |       16      |
</UnitTable>

<SmallTitle>技能相关的数据</SmallTitle>

<Table maxWidth="25rem">

| 飞盾战神等级 | 开启技能后生命值恢复 |
|     ---     |         ---        |
|    1 - 4    |         400        |
|    5 - 9    |         500        |
|   10 - 14   |         600        |
|   15 - 19   |         700        |
|   20 - 24   |         800        |
|   25 - 29   |         900        |
|   30 - 34   |        1000        |
|   35 - 39   |        1100        |
|   40 - 44   |        1200        |
|      45     |        1300        |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 40 级飞盾战神的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 41 ~ 45 级飞盾战神。</TimelineRow>
        <TimelineRow>所有等级飞盾战神的每秒伤害和生命值降低。</TimelineRow>
        <TimelineRow>所有等级的升级时间和升级成本降低。</TimelineRow>
        <TimelineRow>废除原来的技能系统，用装备系统代替。</TimelineRow>
        <TimelineRow>现在所有英雄开启技能后都会回血了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 36 ~ 40 级飞盾战神。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 31 ~ 35 级飞盾战神。</TimelineRow>
        <TimelineRow>2 ~ 30 级飞盾战神的升级费用降低。</TimelineRow>
        <TimelineRow>4 ~ 25 级飞盾战神的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/09/13">
        <TimelineRow>从 25 级开始，飞盾战神开技能之后恢复的血量减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/02/15">
        <TimelineRow>英雄引入额外生命值概念，战斗时先消耗额外生命值再消耗本身的生命值，也就是说你可以连续打两场。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 6 级飞盾战神的升级花费降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级飞盾战神的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>现在英雄可以搭配战宠了。</TimelineRow>
        <TimelineRow>游戏新增 14 本，并在 14 本新增 26 ~ 30 级飞盾战神。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>战斗结束时，如果英雄的技能尚未使用，英雄会自动恢复一部分生命值（数值等于他们使用技能时可恢复的生命值）。这样就缩短了英雄的冷却时间，让他们可以更快投入下一场战斗！</TimelineRow>
        <TimelineRow>13 本新增 21 ~ 25 级飞盾战神。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>更新后，英雄会一直处于防御状态，而且在进行防御后会自动恢复为满血状态。“正在防御”和“正在休息”两种模式间的切换功能已被移除。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>所有等级飞盾战神的恢复时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>新增 13 级大本营，新英雄：飞盾战神。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>