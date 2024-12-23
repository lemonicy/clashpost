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
2. 近几年官方对英雄系统进行了多次改动，为了让回归玩家更好适应，我们准备了这篇文章：[目前 coc 的英雄系统是什么样的？](/p/6827)

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
    <UnitProperty pKey="搜索半径" pValue="10 格<sup>②</sup>" />
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

| 等级 |每秒伤害|每次伤害|恢复时间|生命值 |升级费用|升级时间|日均消耗|所需英雄<br>殿堂等级|所需<br>大本等级|
| ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |   ---  |       ---        |      ---      |
|   1  |  340  | 408   |   30  |  2508 |     0 |  0    |        |         7        |       13      |
|   2  |  350  | 420   |   30  |  2550 |   50k |  0, 8 |        |         7        |       13      |
|   3  |  360  | 432   |   30  |  2593 |   55k |  0,12 |        |         7        |       13      |
|   4  |  370  | 444   |   30  |  2635 |   60k |  0,16 |        |         7        |       13      |
|   5  |  375  | 450   |   32  |  2678 |   65k |  0,20 |        |         7        |       13      |
|   6  |  380  | 456   |   32  |  2720 |   70k |  1,12 |        |         7        |       13      |
|   7  |  385  | 462   |   32  |  2763 |   75k |  2    |        |         7        |       13      |
|   8  |  390  | 468   |   32  |  2805 |   80k |  2    |        |         7        |       13      |
|   9  |  396  | 475.2 |   32  |  2848 |   85k |  2    |        |         7        |       13      |
|  10  |  402  | 482.4 |   34  |  2890 |   90k |  2    |        |         7        |       13      |
|  11  |  408  | 489.6 |   34  |  2933 |   95k |  2    |        |         7        |       13      |
|  12  |  414  | 496.8 |   34  |  2975 |  100k |  2    |        |         7        |       13      |
|  13  |  420  | 504   |   34  |  3018 |  104k |  3    |        |         7        |       13      |
|  14  |  426  | 511.2 |   34  |  3060 |  108k |  3    |        |         7        |       13      |
|  15  |  432  | 518.4 |   36  |  3103 |  112k |  3    |        |         7        |       13      |
|  16  |  438  | 525.6 |   36  |  3145 |  116k |  4    |        |         7        |       13      |
|  17  |  444  | 532.8 |   36  |  3188 |  120k |  4    |        |         7        |       13      |
|  18  |  448  | 537.6 |   36  |  3230 |  124k |  4    |        |         7        |       13      |
|  19  |  452  | 542.4 |   36  |  3273 |  128k |  4    |        |         7        |       13      |
|  20  |  456  | 547.2 |   38  |  3315 |  132k |  4    |        |         7        |       13      |
|  21  |  460  | 552   |   38  |  3349 |  136k |  5    |        |         7        |       13      |
|  22  |  465  | 558   |   38  |  3383 |  140k |  5    |        |         7        |       13      |
|  23  |  470  | 564   |   38  |  3417 |  144k |  5    |        |         7        |       13      |
|  24  |  474  | 568.8 |   38  |  3451 |  148k |  5    |        |         7        |       13      |
|  25  |  477  | 572.4 |   40  |  3485 |  152k |  5    |        |         7        |       13      |
|  26  |  480  | 576   |   40  |  3519 |  156k |  6    |        |         8        |       14      |
|  27  |  483  | 579.6 |   40  |  3553 |  160k |  6    |        |         8        |       14      |
|  28  |  486  | 583.2 |   40  |  3587 |  165k |  6    |        |         8        |       14      |
|  29  |  489  | 586.8 |   40  |  3621 |  170k |  6    |        |         8        |       14      |
|  30  |  492  | 590.4 |   42  |  3655 |  180k |  6    |        |         8        |       14      |
|  31  |  495  | 594   |   42  |  3681 |  190k |  7    |        |         9        |       15      |
|  32  |  498  | 597.6 |   42  |  3706 |  200k |  7    |        |         9        |       15      |
|  33  |  502  | 602.4 |   42  |  3732 |  210k |  7    |        |         9        |       15      |
|  34  |  506  | 607.2 |   42  |  3757 |  220k |  7    |        |         9        |       15      |
|  35  |  510  | 612   |   44  |  3783 |  230k |  7    |        |         9        |       15      |
|  36  |  514  | 616.8 |   44  |  3808 |  240k |  7,12 |        |         9        |       15      |
|  37  |  518  | 621.6 |   44  |  3834 |  250k |  7,12 |        |         9        |       15      |
|  38  |  522  | 626.4 |   44  |  3859 |  260k |  7,12 |        |         9        |       15      |
|  39  |  526  | 631.2 |   44  |  3885 |  270k |  7,12 |        |         9        |       15      |
|  40  |  530  | 636   |   46  |  3910 |  280k |  7,12 |        |         9        |       15      |
|  41  |  533  | 639.6 |   46  |  3936 |  290k |  8    |        |        10        |       16      |
|  42  |  536  | 643.2 |   46  |  3961 |  300k |  8    |        |        10        |       16      |
|  43  |  539  | 646.8 |   46  |  3987 |  310k |  8    |        |        10        |       16      |
|  44  |  542  | 650.4 |   46  |  4012 |  320k |  8    |        |        10        |       16      |
|  45  |  545  | 654   |   48  |  4038 |  330k |  8    |        |        10        |       16      |
|  46  |  548  | 657.6 |   48  |  4064 |  340k |  8    |        |        11        |       17      |
|  47  |  551  | 661.2 |   48  |  4090 |  350k |  8    |        |        11        |       17      |
|  48  |  554  | 664.8 |   48  |  4116 |  360k |  8    |        |        11        |       17      |
|  49  |  557  | 668.4 |   48  |  4142 |  370k |  8    |        |        11        |       17      |
|  50  |  560  | 672   |   48  |  4168 |  380k |  8    |        |        11        |       17      |
</UnitTable>

<SmallTitle>技能回血数据</SmallTitle>

下表中的生命值恢复量是基础属性，与装备无关。即使没有装备，开技能也会回血。

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
|   45 - 49   |        1300        |
|      50     |        1400        |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>英雄的升级操作被整合进英雄殿堂，同时引入英雄栏位和战旗的概念。</TimelineRow>
        <TimelineRow>在 17 本新增 46 - 50 级飞盾战神。</TimelineRow>
        <TimelineRow>8 ~ 30 级飞盾战神的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 45 级飞盾战神的升级费用降低。</TimelineRow>
    </TimelineItem>
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
        <TimelineRow>15 本推出，并在 15 本新增 31 ~ 35 级飞盾战神。</TimelineRow>
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
        <TimelineRow>14 本推出，并在 14 本新增 26 ~ 30 级飞盾战神。</TimelineRow>
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
