---
title: "部落冲突 coc 都城超级飞龙升级数据"
navTitle: "超级飞龙"
shownTitle: "超级飞龙"
description: "体内有火不算什么，超级飞龙内外都冒火！只要开始战斗，他全身每一处都能迸发出熊熊烈焰。"
module: upgrade-capital
imgFolder: capital_tech/200c
wiki: https://clashofclans.fandom.com/wiki/Super_Dragon/Clan_Capital
canonical: /upgrade/200c-Super-Dragon
---

- *如想查看家乡的超级飞龙，请访问：[超级飞龙](/upgrade/060d-Super-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Dragon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级飞龙的解锁条件是建造 [超级飞龙训练营](/upgrade/234c-Super-Dragon-Barracks)，而这需要部落将飞龙悬崖这个子城的大本营升到 2 级，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 7 级。
2. 超级飞龙的技能（炙热龙息）：超级飞龙攻击时可以溅射至周围目标，对它们造成持续伤害。
3. 超级飞龙的攻击机制：先以极快的速度（0.192 秒/次）打完 10 发子弹，休息 1.8 秒后再发射 10 发子弹。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="配兵人口" pValue="40" />
    <UnitProperty pKey="防守人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.192 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.25 格" />
    <UnitProperty pKey="每轮攻击的弹药数量" pValue="10" />
    <UnitProperty pKey="一轮攻击后歇息" pValue="1.8 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |   400   |  151.2  |  5800  |
|   2  |   438   |  165.6  |  6300  |
|   3  |   476   |  180    |  6800  |
|   4  |   514   |  194.4  |  7200  |
|   5  |   552   |  208.8  |  7600  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级超级飞龙的生命值由 6100/6400/6700/7000 增加到 6300/6800/7200/7600.</TimelineRow>
        <TimelineRow>超级龙选择攻击位置的随机性被删除（使其路径更加一致）.</TimelineRow>
        <TimelineRow>防守方的超级飞龙没有应用上述改动，取而代之的是首次攻击的时机比原来慢了 1 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级飞龙随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>