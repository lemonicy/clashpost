---
title: "部落冲突 coc 飞龙公爵升级数据"
navTitle: "飞龙公爵"
shownTitle: "飞龙公爵"
description: "这名坦克型飞行英雄因为情绪管理问题被关了起来，一旦远离友方飞行单位，他就会变得更加愤怒与强大！进入皇室狂暴状态后，他的伤害会提升 100、攻击速度提升 50%，同时使自身受到的陷阱伤害减半。在防守时，他只能被敌方的对空单位攻击。"
module: upgrade-home
imgFolder: home_heroes/0205
wiki: https://clashofclans.fandom.com/wiki/Dragon_Duke
canonical: /upgrade/0205-Dragon-Duke
---

- *如想查看飞龙公爵的创作原型，请访问：[飞龙](/upgrade/0008-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dragon_Duke_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 如想查看英雄皮肤，请移步这篇文章：[部落冲突英雄皮肤（造型）一览](/p/6540)。
2. 近几年官方对英雄系统进行了多次改动，为了让回归玩家更好适应，我们准备了这篇文章：[目前 coc 的英雄系统是什么样的？](/p/6827)
3. 下方的数据均为不含装备的数据。
4. 英雄在防守时没有装备。

<SmallTitle>飞龙公爵的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="英雄类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="周围有空中单位时单体伤害，否则范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="25" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.25 格" />
    <UnitProperty pKey="所需英雄殿堂等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
    <UnitProperty pKey="搜索半径" pValue="10 格<sup>①</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="3 格<sup>②</sup>" />
    <UnitProperty pKey="落单时伤害提升" pValue="100%" />
    <UnitProperty pKey="落单时攻击速度提升" pValue="50%" />
</UnitProperties>

① 如果敌军进入这个范围，英雄会奔向敌军，并进行反击。<br>
② 在没有敌人的情况下，英雄也会走动，而这个走动的范围叫巡逻半径。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每秒伤害|每次伤害| 生命值 |升级费用|升级时间|日均消耗|所需英雄<br>殿堂等级|所需<br>大本等级|
| ---  |  ---  |  ---  |  ---  |  ---  |  ---   |   ---  |        ---       |      ---      |
|   1  |  304  | 364.8 |  9100 |     0 |  0, 0  |        |         9        |       15      |
|   2  |  308  | 369.6 |  9175 |   50k |  0, 6  |        |         9        |       15      |
|   3  |  312  | 374.4 |  9250 |   60k |  0,12  |        |         9        |       15      |
|   4  |  316  | 379.2 |  9325 |   70k |  1     |        |         9        |       15      |
|   5  |  320  | 384   |  9400 |   80k |  1     |        |         9        |       15      |
|   6  |  324  | 388.8 |  9475 |   90k |  2     |        |         9        |       15      |
|   7  |  328  | 393.6 |  9550 |  100k |  2     |        |         9        |       15      |
|   8  |  332  | 398.4 |  9625 |  110k |  2     |        |         9        |       15      |
|   9  |  336  | 403.2 |  9700 |  120k |  3     |        |         9        |       15      |
|  10  |  340  | 408   |  9775 |  130k |  3     |        |         9        |       15      |
|  11  |  344  | 412.8 |  9850 |  150k |  4     |        |        10        |       16      |
|  12  |  348  | 417.6 |  9925 |  175k |  5     |        |        10        |       16      |
|  13  |  352  | 422.4 | 10000 |  200k |  5     |        |        10        |       16      |
|  14  |  356  | 427.2 | 10075 |  225k |  6     |        |        10        |       16      |
|  15  |  360  | 432   | 10150 |  250k |  6     |        |        10        |       16      |
|  16  |  364  | 436.8 | 10225 |  275k |  7     |        |        11        |       17      |
|  17  |  368  | 441.6 | 10300 |  300k |  7     |        |        11        |       17      |
|  18  |  372  | 446.4 | 10375 |  325k |  8     |        |        11        |       17      |
|  19  |  376  | 451.2 | 10450 |  350k |  8     |        |        11        |       17      |
|  20  |  380  | 456   | 10525 |  375k |  8     |        |        11        |       17      |
|  21  |  384  | 460.8 | 10600 |  400k |  8     |        |        12        |       18      |
|  22  |  388  | 465.6 | 10675 |  420k |  8     |        |        12        |       18      |
|  23  |  392  | 470.4 | 10750 |  440k |  8     |        |        12        |       18      |
|  24  |  396  | 475.2 | 10825 |  460k |  8     |        |        12        |       18      |
|  25  |  400  | 480   | 10900 |  480k |  8     |        |        12        |       18      |

</UnitTable>

<SmallTitle>技能回血数据</SmallTitle>

下表中的生命值恢复量是基础属性，与装备无关。即使没有装备，开技能也会回血。

<Table maxWidth="25rem">

| 飞龙公爵等级 | 开启技能后生命值恢复 |
|     ---     |         ---        |
|    1 - 4    |         3500       |
|    5 - 9    |         3750       |
|   10 - 14   |         4000       |
|   15 - 19   |         4250       |
|   20 - 24   |         4500       |
|      25     |         4750       |

</Table>


<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/03/01">
        <TimelineRow>飞龙公爵正式推出，15 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/02/23">
        <TimelineRow>飞龙公爵已经添加到游戏中，但需要通过活动获取。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>