---
title: "部落冲突 coc 大守护者（咏王）升级数据"
navTitle: "大守护者"
shownTitle: "大守护者（咏王）"
description: "大守护者是一位强大的魔法大师，他会用手中的法杖支援进攻部队。他可以跳过城墙或和空中部队一样飞翔，因此可以为任何进攻部队提供帮助。防守时，他将变成一座强大的防御塔。"
module: upgrade-home
imgFolder: home_heroes/0202
wiki: https://clashofclans.fandom.com/wiki/Grand_Warden
canonical: /upgrade/0202-Grand-Warden
---

- *如想查看守护者学徒，请访问：[守护者学徒](/upgrade/0089-Apprentice-Warden)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Grand_Warden_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 无论你使用了地面还是飞行模式，大守护者都可以无视城墙。
2. 防守时，大守护者类似于一座雕像，不会移动。
3. 防守时，大守护者算防御建筑，会被巨人、气球等兵种优先攻击。
4. 防守时，进攻方的英雄猎手不会优先攻击大守护者。
5. 即日起英雄皮肤不再集成在英雄页面，近期网站会单独出一个英雄皮肤的页面，到时候放链接。
6. 2023 年 12 月更新后，游戏推出英雄装备。你可以选择两件装备，这两件装备会在英雄攻击时启用。防守时，英雄不使用任何装备。
7. 2023 年 12 月后，所有英雄开启技能后都会回血了，这个回血是基础属性，无需装备。

<SmallTitle>大守护者的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="7 格<sup>①</sup>" />
    <UnitProperty pKey="所需大本等级" pValue="11" />
    <UnitProperty pKey="警戒半径" pValue="无 (防守时是雕像)<sup>②</sup>" />
    <UnitProperty pKey="搜索半径" pValue="9 格<sup>③</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="3 格<sup>④</sup>" />
    <UnitProperty pKey="技能持续时间" pValue="与具体装备有关" />
    <UnitProperty pKey="光环半径" pValue="9 格<sup>⑤</sup>" />
</UnitProperties>

① 地面模式进攻时为 7 格，空中模式进攻时约 6.6 格，防守时为 9 格。注意：6.6 这个数据是玩家自行测试得到的，并非官方数据。<br>
② 防守时，如果敌军进入这个范围，英雄会准备反击（具体表现为头上顶个问号）。<br>
③ 如果敌军进入这个范围，英雄会奔向敌军，并进行反击。<br>
④ 在没有敌人的情况下，英雄也会走动，而这个走动的范围叫巡逻半径。<br>
⑤ 这个光环半径是诸多装备的有效范围。

<SmallTitle>大守护者王座的属性</SmallTitle>

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
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "dailyCost",
        "icon": "Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每秒伤害|每次伤害|恢复时间|生命值 |升级费用|升级时间|日均消耗|所需<br>大本等级|
| ---  |  ---  |  ---  |  ---  |  ---  | ---   |  ---  |   ---  |      ---      |
|   1  |   43  |  77.4 |   20  |   850 |    1M |    \  |        |       11      |
|   2  |   44  |  79.2 |   20  |   868 |    1M |  0, 2 |        |       11      |
|   3  |   46  |  82.8 |   20  |   886 |  1.1M |  0, 4 |        |       11      |
|   4  |   48  |  86.4 |   20  |   904 |  1.2M |  0, 8 |        |       11      |
|   5  |   49  |  88.2 |   22  |   923 |  1.4M |  0,10 |        |       11      |
|   6  |   51  |  91.8 |   22  |   942 |  1.5M |  0,12 |        |       11      |
|   7  |   54  |  97.2 |   22  |   961 |  1.7M |  0,14 |        |       11      |
|   8  |   56  | 100.8 |   22  |   982 |  1.8M |  0,16 |        |       11      |
|   9  |   59  | 106.2 |   22  |  1003 |    2M |  0,18 |        |       11      |
|  10  |   61  | 109.8 |   24  |  1025 |  2.3M |  1 |        |       11      |
|  11  |   64  | 115.2 |   24  |  1048 |  2.7M |  1,12 |        |       11      |
|  12  |   66  | 118.8 |   24  |  1072 |    3M |  1,12 |        |       11      |
|  13  |   70  | 126   |   24  |  1097 |  3.4M |  1,12 |        |       11      |
|  14  |   73  | 131.4 |   24  |  1122 |  3.7M |  1,12 |        |       11      |
|  15  |   77  | 138.6 |   26  |  1148 |  4.1M |  1,12 |        |       11      |
|  16  |   80  | 144   |   26  |  1173 |  4.4M |  2    |        |       11      |
|  17  |   83  | 149.4 |   26  |  1199 |  4.8M |  2    |        |       11      |
|  18  |   87  | 156.6 |   26  |  1224 |  5.1M |  2    |        |       11      |
|  19  |   90  | 162   |   26  |  1250 |  5.5M |  2    |        |       11      |
|  20  |   94  | 169.2 |   28  |  1275 |    6M |  2    |        |       11      |
|  21  |   98  | 176.4 |   28  |  1301 |  6.5M |  2,12 |        |       12      |
|  22  |  102  | 183.6 |   28  |  1327 |  6.6M |  2,12 |        |       12      |
|  23  |  106  | 190.8 |   28  |  1354 |  6.7M |  2,12 |        |       12      |
|  24  |  111  | 199.8 |   28  |  1381 |  6.8M |  2,12 |        |       12      |
|  25  |  116  | 208.8 |   30  |  1409 |  6.9M |  2,12 |        |       12      |
|  26  |  121  | 217.8 |   30  |  1438 |    7M |  3    |        |       12      |
|  27  |  126  | 226.8 |   30  |  1467 |  7.1M |  3    |        |       12      |
|  28  |  131  | 235.8 |   30  |  1497 |  7.2M |  3    |        |       12      |
|  29  |  137  | 246.6 |   30  |  1527 |  7.3M |  3    |        |       12      |
|  30  |  143  | 257.4 |   32  |  1558 |  7.4M |  3    |        |       12      |
|  31  |  149  | 268.2 |   32  |  1590 |  7.5M |  4    |        |       12      |
|  32  |  155  | 279   |   32  |  1622 |  7.6M |  4    |        |       12      |
|  33  |  162  | 291.6 |   32  |  1655 |  7.7M |  4    |        |       12      |
|  34  |  168  | 302.4 |   32  |  1688 |  7.8M |  4    |        |       12      |
|  35  |  175  | 315   |   34  |  1722 |  7.9M |  4    |        |       12      |
|  36  |  183  | 329.4 |   34  |  1757 |    8M |  5    |        |       12      |
|  37  |  190  | 342   |   34  |  1793 |  8.1M |  5    |        |       12      |
|  38  |  198  | 356.4 |   34  |  1829 |  8.2M |  5    |        |       12      |
|  39  |  207  | 372.6 |   34  |  1867 |  8.3M |  5    |        |       12      |
|  40  |  215  | 387   |   36  |  1904 |  8.4M |  5    |        |       12      |
|  41  |  221  | 397.8 |   36  |  1921 |  8.5M |  6    |        |       13      |
|  42  |  226  | 406.8 |   36  |  1938 |  8.8M |  6    |        |       13      |
|  43  |  230  | 414   |   36  |  1955 |  9.1M |  6    |        |       13      |
|  44  |  234  | 421.2 |   36  |  1972 |  9.4M |  6    |        |       13      |
|  45  |  237  | 426.6 |   38  |  1989 |  9.7M |  6    |        |       13      |
|  46  |  241  | 433.8 |   38  |  2006 |   10M |  6, 6 |        |       13      |
|  47  |  244  | 439.2 |   38  |  2023 | 10.3M |  6, 6 |        |       13      |
|  48  |  247  | 444.6 |   38  |  2040 | 10.6M |  6, 6 |        |       13      |
|  49  |  251  | 451.8 |   38  |  2057 |   11M |  6, 6 |        |       13      |
|  50  |  254  | 457.2 |   40  |  2074 | 11.5M |  6, 6 |        |       13      |
|  51  |  258  | 464.4 |   40  |  2091 |   12M |  6,18 |        |       14      |
|  52  |  261  | 469.8 |   40  |  2108 | 12.5M |  6,18 |        |       14      |
|  53  |  264  | 475.2 |   40  |  2125 |   13M |  6,18 |        |       14      |
|  54  |  268  | 482.4 |   40  |  2142 | 13.5M |  6,18 |        |       14      |
|  55  |  271  | 487.8 |   42  |  2159 |   14M |  6,18 |        |       14      |
|  56  |  274  | 493.2 |   42  |  2176 | 14.5M |  8    |        |       15      |
|  57  |  276  | 496.8 |   42  |  2193 |   15M |  8    |        |       15      |
|  58  |  279  | 502.2 |   42  |  2210 | 15.5M |  8    |        |       15      |
|  59  |  281  | 505.8 |   42  |  2227 |   16M |  8    |        |       15      |
|  60  |  284  | 511.2 |   44  |  2244 | 16.2M |  8    |        |       15      |
|  61  |  286  | 514.8 |   44  |  2261 | 16.7M |  8    |        |       15      |
|  62  |  289  | 520.2 |   44  |  2278 | 16.9M |  8    |        |       15      |
|  63  |  292  | 525.6 |   44  |  2295 | 17.1M |  8    |        |       15      |
|  64  |  294  | 529.2 |   44  |  2312 | 17.3M |  8    |        |       15      |
|  65  |  297  | 534.6 |   46  |  2329 | 17.5M |  8    |        |       15      |
|  66  |  299  | 538.2 |   46  |  2346 |   18M |  8    |        |       16      |
|  67  |  302  | 543.6 |   46  |  2363 | 18.5M |  8    |        |       16      |
|  68  |  304  | 547.2 |   46  |  2380 |   19M |  8    |        |       16      |
|  69  |  307  | 552.6 |   46  |  2397 | 19.5M |  8    |        |       16      |
|  70  |  309  | 556.2 |   48  |  2414 |   20M |  8    |        |       16      |
</UnitTable>

<SmallTitle>技能相关的数据</SmallTitle>

<Table maxWidth="25rem">

| 大守护者等级 | 开启技能后生命值恢复 |
|     ---     |         ---        |
|    1 - 4    |          90        |
|    5 - 9    |          97        |
|   10 - 14   |         109        |
|   15 - 19   |         122        |
|   20 - 24   |         135        |
|   25 - 29   |         149        |
|   30 - 34   |         165        |
|   35 - 39   |         182        |
|   40 - 44   |         202        |
|   45 - 49   |         211        |
|   50 - 54   |         220        |
|   55 - 59   |         229        |
|   60 - 64   |         238        |
|   65 - 69   |         247        |
|      70     |         256        |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 ~ 10、12 ~ 55 级大守护者的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 66 ~ 70 级大守护者。</TimelineRow>
        <TimelineRow>所有等级大守护者的每秒伤害和生命值降低。</TimelineRow>
        <TimelineRow>所有等级的升级时间和升级成本降低。</TimelineRow>
        <TimelineRow>废除原来的技能系统，用装备系统代替。</TimelineRow>
        <TimelineRow>现在所有英雄开启技能后都会回血了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 61 ~ 65 级大守护者。</TimelineRow>
        <TimelineRow>大守护者现在不太会跟随野蛮人和弓箭手了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>在重新部署召回的大守护者时，大守护者将重新计算跟随军队。</TimelineRow>
        <TimelineRow>增加雷霆泰坦的「大守护者权重」，让大守护者更有可能跟随他们。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 56 ~ 60 级大守护者。</TimelineRow>
        <TimelineRow>2 ~ 55 级大守护者的升级费用减少。</TimelineRow>
        <TimelineRow>6 ~ 50 级大守护者的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/02/15">
        <TimelineRow>英雄引入额外生命值概念，战斗时先消耗额外生命值再消耗本身的生命值，也就是说你可以连续打两场。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 20，22 ~ 40 级大守护者的升级花费降低。</TimelineRow>
        <TimelineRow>2 ~ 15 级大守护者的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/29">
        <TimelineRow>降低了大守护者跟随战宠的几率。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>现在英雄可以搭配战宠了。</TimelineRow>
        <TimelineRow>游戏新增 14 本，并在 14 本新增 51 ~ 55 级大守护者。</TimelineRow>
        <TimelineRow>修复了其他友军都没攻打城墙的情况下，大守护者会去攻打城墙的问题。</TimelineRow>
        <TimelineRow>如果在大守护者受到伤害的同时激活永恒书卷技能，他可以免疫伤害，不会再出现一个黑雷把血炸空的同时开大的情况了。</TimelineRow>
        <TimelineRow>1 ~ 10 级大守护者的升级花费降低。</TimelineRow>
        <TimelineRow>2 ~ 8 级大守护者的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/01/20">
        <TimelineRow>大守护者降低跟随攻城滚木车和攻城飞艇的优先级，以减少他跟随这两种攻城机器冲向敌方大本营并陷入危险的几率。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>战斗结束时，如果英雄的技能尚未使用，英雄会自动恢复一部分生命值（数值等于他们使用技能时可恢复的生命值）。这样就缩短了英雄的冷却时间，让他们可以更快投入下一场战斗！</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>更新后，英雄会一直处于防御状态，而且在进行防御后会自动恢复为满血状态。“正在防御”和“正在休息”两种模式间的切换功能已被移除。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>所有等级大守护者的恢复时间减少。</TimelineRow>
        <TimelineRow>优化了大守护者的机制，现在他在空中模式时能更有效地跟随部队，不会那么容易分心。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/05/20">
        <TimelineRow>调整大守护者的 AI，降低跟随飞龙和皮卡超人的优先级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>调整了大守护者 AI，让他在友军被冻住时反应更合理；如果没有跟随任何友军，他会更频繁地重新选择目标。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 41 ~ 50 级大守护者。</TimelineRow>
        <TimelineRow>进攻时，如果英雄技能一直没有被手动开启，英雄在即将被击败时会自动开启英雄技能进行自救。该功能可以在“设置>更多设置”中关闭。</TimelineRow>
        <TimelineRow>如果大守护者在攻击城墙，而他附近的友军全部阵亡，系统将强制他更换目标。</TimelineRow>
        <TimelineRow>略微降低大守护者跟随熔岩猎犬的倾向。</TimelineRow>
        <TimelineRow>大守护者攻击时发射的光束将更像是从法杖射出的，而不是腹部。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12 本新增 31 ~ 40 级大守护者。</TimelineRow>
        <TimelineRow>为了让英雄可以穿上皮肤，继蛮王和女王之后，本次更新之后大守护者也改成了 3D 模型。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>