---
title: "部落冲突 coc 巨型特斯拉电磁塔升级数据"
navTitle: "巨型特斯拉电磁塔"
shownTitle: "巨型特斯拉电磁塔"
description: "只要敌方敢碰大本营，作为特斯拉家族中的暴脾气老大哥，巨型特斯拉电磁塔定会让他们好看。它会发射出超强电流击退敌方，你或许还能闻到空气中弥漫着一股......椰子和金属的气味。"
module: upgrade-home
imgFolder: home_buildings/030c
wiki: https://clashofclans.fandom.com/wiki/Town_Hall/Giga_Tesla
canonical: /upgrade/030c-Giga-Tesla
---

- 如想查看大本营的相关数据，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想查看特斯拉电磁塔，请访问：[特斯拉电磁塔](/upgrade/0307-Hidden-Tesla)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Tesla.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="当前版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Tesla.png" />
    </UnitImgGroup>
    <UnitImgGroup :folder="$frontmatter.imgFolder" title="老版本使用的模型">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Tesla5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 12 级大本营时，就拥有了一个巨型特斯拉电磁塔。如果玩家将大本营升到 13 级，则巨型地狱之塔会被 [巨型地狱之塔](/upgrade/030d-Giga-Inferno) 取代。
2. 巨型特斯拉电磁塔不是独立的防御建筑，它附属于大本营。
3. 当 12 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型特斯拉电磁塔会启动，激活延迟 0.5 秒。
4. 巨型特斯拉电磁塔被摧毁后会自爆。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="目标数量" pValue="4 (地面和空中目标)" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.5 秒/次" />
    <UnitProperty pKey="触发后的激活延迟" pValue="0.5 秒" />
    <UnitProperty pKey="武器的每秒伤害" pValue="140" />
    <UnitProperty pKey="被摧毁后的自爆伤害" pValue="500" />
    <UnitProperty pKey="自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>取消巨型特斯拉电磁塔的等级，更新后的数据等于更新前的满级数据。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>所有等级巨型特斯拉电磁塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>5 级巨型特斯拉电磁塔的爆炸伤害由 1000 降低到 500.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级巨型特斯拉电磁塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>