---
title: "部落冲突 coc 炸弹人升级数据"
navTitle: "炸弹人"
shownTitle: "炸弹人"
description: "只有轰塌一面面城墙才能让炸弹人那颗冰冷的心得到些许温暖。“砰”的一声巨响，他们为您的地面部队开道！"
module: upgrade-home
imgFolder: home_tech/0004
wiki: https://clashofclans.fandom.com/wiki/Wall_Breaker
canonical: /upgrade/0004-Wall-Breaker
---

- *如想查看该兵种的强化版本，请访问：[超级炸弹人（超炸）](/upgrade/0603-Super-Wall-Breaker)。*
- *如想查看夜世界的炸弹兵，请访问：[夜世界炸弹兵](/upgrade/1004-Bomber)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall_Breaker_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Wall_Breaker1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Wall_Breaker3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wall_Breaker5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Wall_Breaker6.png" />
        <UnitImg imgTitle="7 - 9 级" imgSrc="Wall_Breaker7.png" />
        <UnitImg imgTitle="10 级" imgSrc="Wall_Breaker10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Wall_Breaker11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Wall_Breaker12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Wall_Breaker13.png" imgHd="Wall_Breaker13.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 不要把两层墙挨着摆，炸弹人可以炸到。下图中画出来的所有城墙都可以受到伤害。

<Pic src="/upgrade/description/Breaking_Walls_2.jpg" caption="炸弹人的伤害范围" :lazyLoading="false" maxWidth="10rem" width="284" height="228" />

2. 根据解析安装包的结果，炸弹人的攻速是一秒一次，也即每秒伤害等于每次伤害。但实际上它引爆炸弹后自身也会死亡，所以这个兵种不讨论攻速。下方所说的攻击伤害均为每次伤害。
3. 2020 年 10 月更新后，炸弹人的伤害分为主动伤害和死亡伤害，和 [超级炸弹人](/upgrade/0603-Super-Wall-Breaker) 一样。如果炸弹人成功爆破，则建筑受到炸弹人的主动伤害加死亡伤害；如果在爆破之前被打死了，并且死亡伤害波及到了建筑，则建筑受到炸弹人的死亡伤害。参考：[【超级部队】超级炸弹人爆炸机制分析](/p/1279){target="_blank"}。文章是老了点，但机制没变。
4. 即使炸弹人被 [弹簧](/upgrade/0381-Spring-Trap) 弹飞，炸弹仍然会爆炸。
5. [狂暴法术](/upgrade/0102-Rage-Spell) 只会影响主动伤害，而不会影响死亡伤害。
6. [大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法让炸弹人攻击后存活。
7. 2020 年 10 月更新后，对炸弹人而言，[弹跳法术](/upgrade/0103-Jump-Spell) 覆盖的城墙，等价于城墙消失。
8. 炸弹人的寻路机制比较复杂，详情请参考：[【炸弹人机制讲解】揭示寻路和炸弹的真相](/p/1957)，文章老但结论不变。
9. 部分高本玩家会用“炸弹人”指代超级炸弹人，而非普通炸弹人，在看解说视频的时候需要注意一下。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面辅助单位" />
    <UnitProperty pKey="攻击偏好" pValue="城墙 (40 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害 (仅地面)" />
    <UnitProperty pKey="占据人口" pValue="2" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="到达目标后的停顿时间" pValue="1 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="主动伤害爆炸半径" pValue="0.8 格" />
    <UnitProperty pKey="死亡伤害爆炸半径" pValue="1.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="3" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="1,1,3000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  面板伤害 | 中途死亡<br>(对城墙)|成功爆破<br>(对城墙) | 生命值 | 升级花费 | 升级时间 |所需实验室<br>等级|所需<br>大本等级|
|  --- | -------- |         ---        |        ---        |   ---  |    ---  |    ---   |       ---      |      ---      |
|   1  |  10 / 6  |          400       |         640       |    20  |   \     |     \    |        1       |       3       |
|   2  |  20 / 9  |          800       |        1160       |    24  |    80k  |   0, 3   |        2       |       4       |
|   3  |  25 / 13 |         1000       |        1520       |    29  |   200k  |   0, 4   |        4       |       6       |
|   4  |  30 / 16 |         1200       |        1840       |    35  |   450k  |   0,12   |        5       |       7       |
|   5  |  43 / 23 |         1720       |        2640       |    53  |     1M  |   0,16   |        6       |       8       |
|   6  |  55 / 30 |         2200       |        3400       |    72  |   2.4M  |   1, 6   |        8       |      10       |
|   7  |  66 / 36 |         2640       |        4080       |    82  |   2.8M  |   2      |        9       |      11       |
|   8  |  75 / 42 |         3000       |        4680       |    92  |   3.8M  |   3      |       10       |      12       |
|   9  |  86 / 48 |         3440       |        5360       |   112  |   5.2M  |   4      |       11       |      13       |
|  10  |  94 / 54 |         3760       |        5920       |   130  |   6.5M  |   6      |       12       |      14       |
|  11  | 102 / 60 |         4080       |        6480       |   140  |   9.5M  |   6,12   |       13       |      15       |
|  12  | 110 / 66 |         4400       |        7040       |   150  |    11M  |   7      |       14       |      16       |
|  13  | 118 / 72 |         4720       |        7600       |   160  |    20M  |  14      |       15       |      17       |
</UnitTable>

1. 上方的“面板伤害”解释："10/9" 表示主动伤害为 10，死亡伤害为 9.
2. 上方的“中途死亡”指的是炸弹人中途死亡的爆炸伤害，“成功爆破”指的是炸弹人成功自爆的伤害。成功爆破的伤害是两个面板伤害加起来，再算上对城墙的 40 倍伤害。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 4 级炸弹人的主动伤害提升（死亡伤害不变）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5、9 ~ 12 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 9、11 ~ 12 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级炸弹人。</TimelineRow>
        <TimelineRow>3 ~ 7、9 ~ 12 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 12 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8、10 ~ 11 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 12 级炸弹人。</TimelineRow>
        <TimelineRow>6 ~ 11 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>10 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 ~ 9 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级炸弹人。</TimelineRow>
        <TimelineRow>6 ~ 10 级炸弹人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>4 ~ 9 级炸弹人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 9 级炸弹人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 10 级炸弹人。</TimelineRow>
        <TimelineRow>6 ~ 8 级的炸弹人的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 8 级炸弹人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/23">
        <TimelineRow>炸弹人的爆炸半径由 1.2 格提升到 1.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>炸弹人现在会使用弹跳法术跳过城墙。</TimelineRow>
        <TimelineRow>优化了炸弹人的 AI，让它们能更集中地锁定同一块城墙，降低它们被部署后分散攻击不同城墙的几率。假设你的炸弹人和城墙已升至你目前大本营所支持的最高等级：<br>
        - 1 个享受狂暴法术加成的炸弹人可以摧毁 1 块城墙。<br>
        - 9 级大本营及以下：2 个炸弹人最高可以摧毁 1 块 9 级城墙。<br>
        - 9 级大本营及以上：3 个炸弹人可以摧毁 1 块 10 级及以上的城墙。<br>
        - 9 级大本营及以上：6 个炸弹人的死亡附加伤害可以摧毁 1 块 10 级及以上的城墙。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020-03-30">
        <TimelineRow>5 ~ 6 级炸弹人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-12-09">
        <TimelineRow>13 本推出，并在 13 本新增 9 级炸弹人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-04-02">
        <TimelineRow>5 ~ 6 级炸弹人的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级炸弹人的训练费用降低。</TimelineRow>
        <TimelineRow>5 ~ 8 级炸弹人的生命值提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>