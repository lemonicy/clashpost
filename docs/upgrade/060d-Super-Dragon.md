---
title: "部落冲突 coc 超级飞龙（金龙）升级数据"
navTitle: "超级飞龙"
shownTitle: "超级飞龙（金龙）"
description: "体内有火不算什么，超级飞龙内外都冒火！只要开始战斗，他全身每一处都能迸发出熊熊烈焰。"
module: upgrade-home
imgFolder: home_tech/060d
wiki: https://clashofclans.fandom.com/wiki/Super_Dragon
canonical: /upgrade/060d-Super-Dragon
---

- *如想查看该兵种的普通版本，请访问：[飞龙](/upgrade/0008-Dragon)。*
- *如想查看都城的超级飞龙，请访问：[都城超级飞龙](/upgrade/200c-Super-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Dragon7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级飞龙的技能（炙热龙息）：超级飞龙攻击时可以溅射至周围目标，对它们造成持续伤害。
2. 超级飞龙的攻击机制：先以极快的速度（0.192 秒/次）打完 10 发子弹，休息 1.8 秒后再发射 10 发子弹。超级飞龙的溅射是带有一定随机性的，每次溅射到的建筑不一定相同。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无<sup>*</sup>" />
    <UnitProperty pKey="伤害类型" pValue="溅射伤害" />
    <UnitProperty pKey="溅射半径" pValue="1.6 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.75 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.192 秒/次" />
    <UnitProperty pKey="每轮攻击的弹药数量" pValue="10" />
    <UnitProperty pKey="一轮攻击后歇息" pValue="1.8 秒" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="最低飞龙等级" pValue="7" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="360" :isTrainingTime="true" />
</UnitProperties>

\* 超级飞龙在攻击时没有首选目标，但如果自己被敌方援军、英雄或骷髅攻击，或附近的友军被这些单位攻击，超级飞龙都会转移目标去攻击这些单位。当这些单位都消灭干净之后才会继续攻击附近建筑。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  平均每秒伤害  | 每次伤害 | 生命值 |所需大本等级|
| ---- |      ----     |  ----   |  ---- |    ----   |
|   7  |      381      |   144   |  6100 |     12    |
|   8  |      405      |   153   |  6400 |     13    |
|   9  |      429      |   162   |  6700 |     14    |
|  10  |      452      |   171   |  7200 |     15    |
|  11  |      471      |   178.2 |  7600 |     16    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/27">
        <TimelineRow>10 ~ 11 级超级飞龙的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增 16 本，并在 16 本新增 11 级飞龙，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 10 级飞龙，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>8/9 级超级飞龙的每秒伤害值从 414/448 降低至 405/429。</TimelineRow>
        <TimelineRow>超级飞龙的射程降低 1 格（官方写的削 0.5 格，实际上就是削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/01/20">
        <TimelineRow>所有等级超级飞龙的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>新超级兵：超级飞龙。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>