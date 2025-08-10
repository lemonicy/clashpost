---
title: "部落冲突 coc 狂暴法术升级数据"
navTitle: "狂暴法术"
shownTitle: "狂暴法术"
description: "让部队士气飙涨，变得更快、更强！施放狂暴法术会产生一个狂暴效果光环！在此光环中的部队速度增快，攻击力增强。"
module: upgrade-home
imgFolder: home_tech/0102
wiki: https://clashofclans.fandom.com/wiki/Rage_Spell
canonical: /upgrade/0102-Rage-Spell
---

- *如想查看都城的狂暴法术，请访问：[都城狂暴法术](/upgrade/2104-Rage-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rage_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="让部队士气飙涨，变得更快、更强！<br>施放狂暴法术会产生一个狂暴效果光环！在此光环中的部队速度增快，攻击力增强。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

2. 狂暴法术可以增加兵种的移动速度和伤害，但不能增加兵种的攻击速度。
3. 狂暴法术对我方英雄的效果减半，对攻城机器无效。
4. 狂暴法术并不能提高所有类型的伤害。举个例子，狂暴法术只能提升 [超级炸弹人](/upgrade/0603-Super-Wall-Breaker) 的主动伤害，不能提升其死亡伤害。
5. 与其他具有狂暴效果的单位（如 [阿啾](/upgrade/028a-Sneezy) 的愤怒状态、[暗黑皇冠](/upgrade/0724-Dark-Crown) 的伤害增益）叠加时，通常取效果最强的，详见：[【硬核实验】为什么我扔下了两瓶狂暴法术，效果却比一瓶还低？](/p/1362)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="作用目标" pValue="我方部队和英雄" />
    <UnitProperty pKey="脉冲次数" pValue="60<sup>*</sup>" />
    <UnitProperty pKey="两次脉冲的间隔时间" pValue="0.3 秒" />
    <UnitProperty pKey="每次脉冲的作用时间" pValue="1 秒" />
    <UnitProperty pKey="法术持续时间" pValue="18 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="7" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,18000,Elixir" :isDonationCost="true" />
</UnitProperties>

\* 脉冲次数指狂暴法术给兵提供效果的次数，不可叠加。增益时间指受到脉冲效果后的持续时间。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |伤害增加<sup>①</sup>|速度增加<sup>②</sup>|  升级花费 |  升级时间  |所需实验室等级<sup>③</sup>|所需大本等级|
| ---- |        ----       |         ----      |    ----  |    ----    |           ----         |    ----   |
|   1  |        130%       |          20       |      \   |     \      |            3           |     7     |
|   2  |        140%       |          22       |    400K  |     0, 6   |            3           |     7     |
|   3  |        150%       |          24       |    800K  |     0,12   |            4           |     7     |
|   4  |        160%       |          26       |      1M  |     1      |            5           |     7     |
|   5  |        170%       |          28       |      2M  |     2      |            6           |     8     |
|   6  |        180%       |          30       |      5M  |     4      |           10           |    12     |
</UnitTable>

① 伤害增加 170% 的意思是兵种的伤害是原来的 1 + 170% = 2.7 倍，其它同理。<br>
② 这里的速度增加值和游戏内兵种移动速度的显示是一个意思，移动速度 8 等于实际的 1 格/秒。<br>
③ 如果玩家升级到 7 级大本营并且解锁了狂暴法术，即使玩家没有立即升实验室也可以升级狂暴法术。 

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 6 级狂暴法术的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 5 级狂暴法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>6 级狂暴法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 级狂暴法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>6 级狂暴法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>6 级狂暴法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级狂暴法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级狂暴法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12 本新增 6 级狂暴法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>4 ~ 5 级狂暴法术的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级狂暴法术的配置费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>