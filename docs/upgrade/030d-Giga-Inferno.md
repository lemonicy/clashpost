---
title: "部落冲突 coc 巨型地狱之塔升级数据"
navTitle: "巨型地狱之塔"
shownTitle: "巨型地狱之塔"
description: "巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。"
module: upgrade-home
imgFolder: home_buildings/030d
wiki: https://clashofclans.fandom.com/wiki/Town_Hall/Giga_Inferno
canonical: /upgrade/030d-Giga-Inferno
---

- 如想查看大本营的相关数据，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想查看地狱之塔，请访问：[地狱之塔](/upgrade/030a-Inferno-Tower)。

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">13 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">14 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">15 本</SwitchTab>
    <SwitchTab tabId="cp-unit-item-3">16 本</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 13 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno13_5.png" imgAlt="13 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。被摧毁时，巨型地狱之塔会炸碎大本营同时引发一场冰冻，在一段时间内减速附近所有敌军。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="老版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno13_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno13_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno13_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno13_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno13_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 13 级大本营时，就拥有了一个巨型地狱之塔，而 [巨型特斯拉电磁塔](/upgrade/030c-Giga-Tesla) 会消失。如果玩家继续升级大本营，巨型地狱之塔的属性会有变化。
2. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。
3. 当 13 到 16 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 13 级大本营的巨型地狱之塔被摧毁后有冰雾效果，可减慢部队的移动速度和攻击速度。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="武器的每秒伤害" pValue="220" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="700" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="冰雾半径" pValue="5 格<sup>*</sup> (地面和空中目标)" />
    <UnitProperty pKey="冰雾持续时间" pValue="8 秒 (地面和空中目标)" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>

\* 这个冰雾效果与 [冰冻法术](/upgrade/0104-Freeze-Spell) 不一样，它不能把进攻方的部队完全冻住，只能减慢部队的移动速度和攻击速度。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>取消巨型地狱之塔的等级，更新后的数据等于更新前的满级数据。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 5 级 13 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>所有等级 13 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>14 本巨型地狱之塔的自爆伤害由固定的 1000 降低至 500 ~ 700 之间的变化值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级 13 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级 13 本巨型地狱之塔的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级 13 本巨型地狱之塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，大本营自带巨型地狱之塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 14 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno14_5.png" imgAlt="14 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="老版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno14_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno14_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno14_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno14_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno14_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 14 级大本营时，就拥有了一个巨型地狱之塔。如果玩家继续升级大本营，巨型地狱之塔的属性会有变化。
2. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。
3. 当 13 到 16 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 从 14 本开始，巨型地狱之塔不再有冰雾效果，13 本的冰雾效果从此被毒雾取代。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="武器的每秒伤害" pValue="280" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="1 000" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格<sup>*</sup> (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
    <UnitProperty pKey="毒雾的最大伤害" pValue="180" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>

\* 这个毒雾效果与 [毒药法术](/upgrade/0180-Poison-Spell) 类似，都能对部队减速效果，也有递增的伤害。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>取消巨型地狱之塔的等级，更新后的数据等于更新前的满级数据。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级 14 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 4 级 14 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级 14 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 14 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>1 ~ 4 级 14 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>14 本巨型地狱之塔的自爆伤害由固定的 1000 降低至 700 ~ 1000 之间的变化值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>14 本及以上巨型地狱之塔被摧毁后毒雾的持续时间减少。</TimelineRow>
        <TimelineRow>所有等级 14 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 15 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno15_5.png" imgAlt="15 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="当前版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno15.png" />
    </UnitImgGroup>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="老版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno15_1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Inferno15_2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Inferno15_3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Inferno15_4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Inferno15_5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 15 级大本营时，就拥有了一个巨型地狱之塔。如果玩家继续升级大本营，巨型地狱之塔的属性会有变化。
2. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。
3. 当 13 到 16 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 从 14 本开始，巨型地狱之塔不再有冰雾效果，13 本的冰雾效果从此被毒雾取代。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="武器的每秒伤害" pValue="300" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="1 000" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4.5 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
    <UnitProperty pKey="毒雾的最大伤害" pValue="180" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>取消巨型地狱之塔的等级，更新后的数据等于更新前的满级数据。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 级 15 本巨型地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级 15 本巨型地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级 15 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级 15 本巨型地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>14 本及以上巨型地狱之塔被摧毁后毒雾的持续时间减少。</TimelineRow>
        <TimelineRow>1 ~ 3 级 15 本巨型地狱之塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
</SwitchTabGroup>

<!-- ↓↓↓ 16 本 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-3" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Inferno16.png" imgAlt="16 本巨型地狱之塔"
    description="巨型地狱之塔会让敌军觉得自己就是一团向篝火发动攻击的棉花糖。经过技术升级后，它现在变得更加强大，被摧毁时会释放毒雾，对附近敌军造成伤害并使其减速。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Inferno16.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 16 级大本营时，就拥有了一个巨型地狱之塔。如果玩家将大本营升到 17 级，则巨型地狱之塔会被 [地狱火炮](/upgrade/0315-Inferno-Artillery) 和 [终极炸弹](/upgrade/0387-Giga-Bomb) 取代。
2. 巨型地狱之塔不是独立的防御建筑，它附属于大本营。
3. 当 13 到 16 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型地狱之塔会启动。
4. 从 14 本开始，巨型地狱之塔不再有冰雾效果，13 本的冰雾效果从此被毒雾取代。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="武器的每秒伤害" pValue="300" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="1 100" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
    <UnitProperty pKey="自爆半径" pValue="4.5 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="毒雾持续时间" pValue="12 秒" />
    <UnitProperty pKey="毒雾的最大伤害" pValue="180" />
    <UnitProperty pKey="移动速度降低" pValue="50%" />
    <UnitProperty pKey="攻击速度降低" pValue="50%" />
</UnitProperties>
</SwitchTabGroup>