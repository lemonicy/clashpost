---
title: "部落冲突 coc 熔岩气球玩偶装备升级数据"
navTitle: "熔岩气球玩偶"
shownTitle: "熔岩气球玩偶"
description: "熔岩气球玩偶是大守护者的第二件史诗装备，它在 2024 年 10 月的合体狂热活动中首次开放购买。熔岩气球玩偶装备可以使大守护者在使用技能时召唤几只熔岩气球。除了召唤熔岩气球外，熔岩气球玩偶装备还可以增加大守护者的每秒伤害和生命值。"
module: upgrade-home
imgFolder: home_heroes/0785
wiki: https://clashofclans.fandom.com/wiki/Lavaloon_Puppet
canonical: /upgrade/0785-Lavaloon-Puppet
---

- *如想查看与装备的派生兵种同名的临时兵种，请访问：[熔岩气球](/upgrade/0e0b-Lavaloon)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">装备</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">熔岩气球</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">迷你熔岩气球犬</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 装备 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lavaloon_Puppet_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 熔岩气球玩偶是 [大守护者](/upgrade/0202-Grand-Warden) 的第二件史诗装备，它在 2024 年 10 月的合体狂热活动中首次开放购买。
2. 熔岩气球玩偶装备可以使大守护者在使用技能时召唤几只熔岩气球。
3. 除了召唤熔岩气球外，熔岩气球玩偶装备还可以增加大守护者的每秒伤害和生命值。

<SmallTitle>装备的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 在 2024 年 10 月的合体狂热活动中积攒 3 100 合体奖章（活动货币）后去商人那里购买即可解锁。自 2024/12/11 起，该装备有几率出现在商人那里，可花费 1 500 宝石购买。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |召唤的<br>熔岩气球数量|熔岩气球<br>等级|英雄每秒<br>伤害增加|英雄生命值<br>增加|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |         ---        |      ---      |        ---       |        ---      |   ---  |  ---  |  ---  |       ---       |      ---      |
|   1  |          1         |       1       |         10       |         50      |    \   |   \   |   \   |        1        |      11       |
|   2  |          1         |       1       |         12       |         55      |   120  |   -   |   -   |        1        |      11       |
|   3  |          1         |       2       |         13       |         57      |   240  |   20  |   -   |        1        |      11       |
|   4  |          1         |       2       |         15       |         60      |   400  |   -   |   -   |        1        |      11       |
|   5  |          1         |       2       |         16       |         65      |   600  |   -   |   -   |        1        |      11       |
|   6  |          1         |       3       |         18       |         67      |   840  |  100  |   -   |        1        |      11       |
|   7  |          1         |       3       |         20       |         70      |  1120  |   -   |   -   |        1        |      11       |
|   8  |          1         |       3       |         22       |         75      |  1440  |   -   |   -   |        1        |      11       |
|   9  |          2         |       4       |         23       |         77      |  1800  |  200  |   10  |        1        |      11       |
|  10  |          2         |       4       |         25       |         80      |  1900  |   -   |   -   |        1        |      11       |
|  11  |          2         |       4       |         28       |         85      |  2000  |   -   |   -   |        1        |      11       |
|  12  |          2         |       5       |         30       |         87      |  2100  |  400  |   20  |        1        |      11       |
|  13  |          2         |       5       |         31       |         90      |  2200  |   -   |   -   |        3        |      11       |
|  14  |          2         |       5       |         33       |         95      |  2300  |   -   |   -   |        3        |      11       |
|  15  |          2         |       6       |         35       |         97      |  2400  |  600  |   30  |        3        |      11       |
|  16  |          2         |       6       |         37       |        100      |  2500  |   -   |   -   |        5        |      12       |
|  17  |          2         |       6       |         38       |        105      |  2600  |   -   |   -   |        5        |      12       |
|  18  |          2         |       7       |         40       |        107      |  2700  |  600  |   50  |        5        |      12       |
|  19  |          2         |       7       |         41       |        110      |  2800  |   -   |   -   |        7        |      14       |
|  20  |          2         |       7       |         42       |        115      |  2900  |   -   |   -   |        7        |      14       |
|  21  |          2         |       8       |         43       |        117      |  3000  |  600  |  100  |        7        |      14       |
|  22  |          2         |       8       |         45       |        120      |  3100  |   -   |   -   |        8        |      15       |
|  23  |          2         |       9       |         46       |        125      |  3200  |   -   |   -   |        8        |      15       |
|  24  |          2         |       9       |         47       |        127      |  3300  |  600  |  120  |        8        |      15       |
|  25  |          2         |      10       |         48       |        130      |  3400  |   -   |   -   |        9        |      16       |
|  26  |          2         |      10       |         49       |        135      |  3500  |   -   |   -   |        9        |      16       |
|  27  |          2         |      11       |         50       |        150      |  3600  |  600  |  150  |        9        |      16       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。
</SwitchTabGroup>

<!-- ↓↓↓ 熔岩气球 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lavaloon_info.png" imgAlt="熔岩气球" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Lavaloon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

由装备召唤的熔岩气球与与临时兵种 [熔岩气球](/upgrade/0e0b-Lavaloon) 极为相似，比如：

- 两者都以防空火箭作为优先目标，且都有类似于 [熔岩猎犬](/upgrade/0085-Lava-Hound) 和 [寒冰猎犬](/upgrade/060a-Ice-Hound) 的三段式攻击偏好。
- 两者都有爆炸分裂的特殊技能。
- 两者的基本属性（移动速度、攻击速度等）相同，只是升级数据（各个等级的每秒伤害、生命值等）不同。

<SmallTitle>熔岩气球的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防空火箭" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="23" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0 格 (建筑头顶)" />
    <UnitProperty pKey="特殊技能" pValue="爆炸分裂<sup>*</sup>" />
</UnitProperties>

\* 熔岩气球在到达目标的途中会释放炸弹，每次炸弹爆炸时都会分裂出一只迷你熔岩气球犬。另外，熔岩气球死亡时会额外分裂一些迷你熔岩气球犬。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级  | 每秒伤害 | 每次伤害 | 生命值 | 死亡伤害 | 死亡后分裂的<br>派生兵种数量 |
|  --- |    ---   |   ---   |   ---  |   ---   |            ---             |
|   1  |     45   |  112.5  |   970  |   180   |             1              |
|   2  |     63   |  157.5  |  1420  |   405   |             2              |
|   3  |     81   |  202.5  |  1860  |   450   |             2              |
|   4  |     99   |  247.5  |  2300  |   540   |             3              |
|   5  |    117   |  292.5  |  2750  |   648   |             3              |
|   6  |    135   |  337.5  |  3200  |   756   |             4              |
|   7  |    153   |  382.5  |  3650  |   864   |             4              |
|   8  |    171   |  427.5  |  4000  |   900   |             4              |
|   9  |    189   |  472.5  |  4370  |   945   |             4              |
|  10  |    198   |  495    |  4500  |   990   |             4              |
|  11  |    202   |  505    |  4590  |  1035   |             5              |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 迷你熔岩气球犬 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lavaloon_Pup_info.png" imgAlt="迷你熔岩气球犬" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Lavaloon_Pup1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>迷你熔岩气球犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |    10   |    10   |   10   |
|   2  |    13   |    13   |   15   |
|   3  |    16   |    16   |   20   |
|   4  |    19   |    19   |   25   |
|   5  |    22   |    22   |   30   |
|   6  |    25   |    25   |   35   |
|   7  |    28   |    28   |   40   |
|   8  |    31   |    31   |   45   |
|   9  |    34   |    34   |   50   |
|  10  |    37   |    37   |   55   |
|  11  |    40   |    40   |   60   |
</UnitTable>

</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/10/11">
        <TimelineRow>新装备：熔岩气球玩偶。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
