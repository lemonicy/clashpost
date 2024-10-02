---
title: "部落冲突 coc 都城狂暴法术升级数据"
navTitle: "狂暴法术"
shownTitle: "狂暴法术"
description: "让部队士气飙涨，变得更快、更强！施放狂暴法术会产生一个狂暴效果光环！在此光环中的部队速度增快，攻击力增强。"
module: upgrade-capital
imgFolder: capital_tech/2104
wiki: https://clashofclans.fandom.com/wiki/Rage_Spell/Clan_Capital
canonical: /upgrade/2104-Rage-Spell
---

- *如想查看家乡的狂暴法术，请访问：[狂暴法术](/upgrade/0102-Rage-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rage_Spell_info.png" :imgAlt="$frontmatter.navTitle"
    description="让部队士气飙涨，变得更快、更强！<br>施放狂暴法术会产生一个狂暴效果光环！在此光环中的部队速度增快，攻击力增强。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

当都城之巅的大本营升到 6 级，并且解锁飞龙悬崖后，系统会自动建造 [狂暴法术工厂](/upgrade/2384-Rage-Spell-Factory)，建造完成后即解锁狂暴法术。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用方式" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="作用半径" pValue="4.5 格" />
    <UnitProperty pKey="脉冲间隔时间" pValue="0.3 秒" />
    <UnitProperty pKey="有效时间" pValue="两次进攻" />
    <UnitProperty pKey="占用的法术空间" pValue="3" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 伤害提升 |移动速度提升<sup>*</sup>|
| ---- |  ----   |          ---          |
|   1  |   70%   |           10          |
|   2  |   80%   |           12          |
|   3  |   90%   |           14          |
|   4  |  100%   |           16          |
|   5  |  110%   |           18          |
</UnitTable>

\* 这里的 8 点移动速度代表 1 格/秒。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/06/30">
        <TimelineRow>将狂暴法术的“伤害提升”属性降低 20%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>狂暴法术随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>