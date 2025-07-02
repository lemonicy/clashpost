---
title: "部落冲突 coc 暗黑皇冠装备升级数据"
navTitle: "暗黑皇冠"
shownTitle: "暗黑皇冠"
description: "暗黑皇冠是亡灵王子的一件史诗装备。"
module: upgrade-home
imgFolder: home_heroes/0724
wiki: https://clashofclans.fandom.com/wiki/Dark_Crown
canonical: /upgrade/0724-Dark-Crown
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Crown.png" :imgAlt="$frontmatter.navTitle" description="当友军被击倒时，提升生命值和伤害，共计 3 次。" :isSmallImg="true"  />

<SmallTitle>说明</SmallTitle>

1. 暗黑皇冠是 [亡灵王子](/upgrade/0204-Minion-Prince) 的第一件史诗装备，它在 2025 年 6 月的黑暗交易活动中首次开放购买。
2. 当亡灵王子带上暗黑皇冠并在场时，每累计 60 人口的攻击方部队被击败，亡灵王子就可以获得一层生命值和伤害增益，最多 3 层，共需 180 人口。
    - 除亡灵王子外的英雄均计入总人口，每个英雄为 25 人口。如果英雄被 [复苏法术](/upgrade/0108-Revive-Spell) 复苏后再次被击败，可重复计算人口。
    - 战宠视为 20 人口。
    - 召唤出来的部队会被计算在内，例如 [女巫](/upgrade/0084-Witch) 的骷髅兵、[攻城训练营](/upgrade/0243-Siege-Barracks) 召唤的皮卡等等。
    - 在攻击过程中自杀的部队也会被计算在内，如 [炸弹人](/upgrade/0004-Wall-Breaker)、[小雪怪](/upgrade/000d-Yeti)。
    - 法术不是部队，不会计入总人口。
    - 攻城机器、[镜像法术](/upgrade/0105-Clone-Spell) 复制的部队不会被计算在内。
    - 当 [德鲁伊](/upgrade/008a-Druid) 由人类形态转变为巨熊形态时，不会被计入总人口。当巨熊形态的德鲁伊因耗尽生命值死亡，或者德鲁伊直接被隐形弹簧弹飞，才会被计入总人口。
    - 在王子被召回期间，死亡的部队不能被计入总人口。
    - 即使亡灵王子被击败，暗黑皇冠仍会计算死亡部队。在亡灵王子复苏后，亡灵王子可直接享有被击败期间叠加的增益。
3. 暗黑皇冠的增益效果不能与 [狂暴法术](/upgrade/0102-Rage-Spell)、[守护者学徒](/upgrade/0089-Apprentice-Warden) 等单位的增益效果直接叠加，只能取其最高的增益效果。
4. 此外，暗黑皇冠装备还可以提高亡灵王子的生命值和攻击速度。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 在 2025 年 6 月的黑暗交易活动中积攒 3 100 恶作剧奖章（活动货币）后去商人那里购买即可解锁。

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

| 等级 |最大<br>生命值提升|最大<br>伤害提升| 英雄生命值<br>增加 | 英雄攻击<br>速度增加 | 升级费用  | 升级费用 | 升级费用 | 所需<br>铁匠铺等级 | 所需<br>大本等级 |
| ---- |        ---     |       ---     |        ---        |         ---         |   ----   |   ----   |   ----  |        ---        |      -----      |
|   1  |        3%      |       3%      |         50        |          1%         |     \    |     \    |    \    |          1        |        9        |
|   2  |        3%      |       3%      |         75        |          2%         |    120   |    -     |    -    |          1        |        9        |
|   3  |        6%      |       6%      |        100        |          2%         |    240   |    20    |    -    |          1        |        9        |
|   4  |        6%      |       6%      |        125        |          3%         |    400   |    -     |    -    |           1       |        9        |
|   5  |        6%      |       6%      |        150        |          3%         |    600   |    -     |    -    |           1       |        9        |
|   6  |        9%      |       9%      |        175        |          3%         |    840   |   100    |    -    |           1       |        9        |
|   7  |        9%      |       9%      |        200        |          4%         |   1120   |    -     |    -    |           1       |        9        |
|   8  |        9%      |       9%      |        225        |          4%         |   1440   |    -     |    -    |           1       |        9        |
|   9  |       12%      |      12%      |        250        |          4%         |   1800   |   200    |   10    |           1       |        9        |
|  10  |       12%      |      12%      |        275        |          5%         |   1900   |    -     |    -    |           1       |        9        |
|  11  |       12%      |      12%      |        300        |          5%         |   2000   |    -     |    -    |           1       |        9        |
|  12  |       15%      |      15%      |        325        |          5%         |   2100   |   400    |   20    |           1       |        9        |
|  13  |       15%      |      15%      |        350        |          6%         |   2200   |    -     |    -    |           3       |       10        |
|  14  |       15%      |      15%      |        375        |          6%         |   2300   |    -     |    -    |           3       |       10        |
|  15  |       18%      |      18%      |        400        |          6%         |   2400   |   600    |   30    |           3       |       10        |
|  16  |       18%      |      18%      |        425        |          7%         |   2500   |    -     |    -    |           5       |       12        |
|  17  |       18%      |      18%      |        450        |          7%         |   2600   |    -     |    -    |           5       |       12        |
|  18  |       21%      |      21%      |        475        |          7%         |   2700   |   600    |   50    |           5       |       12        |
|  19  |       21%      |      21%      |        500        |          8%         |   2800   |    -     |    -    |           7       |       14        |
|  20  |       21%      |      21%      |        525        |          8%         |   2900   |    -     |    -    |           7       |       14        |
|  21  |       24%      |      24%      |        550        |          8%         |   3000   |   600    |   100   |           7       |       14        |
|  22  |       24%      |      24%      |        575        |          9%         |   3100   |    -     |    -    |           8       |       15        |
|  23  |       24%      |      24%      |        600        |          9%         |   3200   |    -     |    -    |           8       |       15        |
|  24  |       27%      |      27%      |        625        |          9%         |   3300   |   600    |   120   |           8       |       15        |
|  25  |       27%      |      27%      |        650        |         10%         |   3400   |    -     |    -    |           9       |       16        |
|  26  |       27%      |      27%      |        675        |         10%         |   3500   |    -     |    -    |           9       |       16        |
|  27  |       30%      |      30%      |        700        |         11%         |   3600   |   600    |   150   |           9       |       16        |

</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/10">
        <TimelineRow>新装备：暗黑皇冠。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>