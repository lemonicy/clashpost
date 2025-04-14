---
title: "部落冲突 coc 都城超级巨人升级数据"
navTitle: "超级巨人"
shownTitle: "超级巨人"
description: "身为普通巨人的大表哥，超级巨人体型更庞大，且擅长砸开城墙，为自己开路。他们的腰带是在村庄每年的大胃王比赛中赢得的。"
module: upgrade-capital
imgFolder: capital_tech/2002
wiki: https://clashofclans.fandom.com/wiki/Super_Giant/Clan_Capital
canonical: /upgrade/2002-Super-Giant
---

- *如想查看家乡的超级巨人，请访问：[超级巨人](/upgrade/0602-Super-Giant)。*
- *如想查看夜世界的巨人拳击手，请访问：[夜世界巨人拳击手](/upgrade/1002-Boxer-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Giant1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级巨人的解锁条件是建造 [超级巨人训练营](/upgrade/2342-Super-Giant-Barracks)，而这需要部落解锁野蛮人兵营，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 2 级。
2. 超级巨人的技能（城墙克星）：对 [城墙](/upgrade/2200-Walls) 造成 5 倍伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="配兵人口" pValue="10" />
    <UnitProperty pKey="防守人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="1.1 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.75 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 对墙每次伤害 | 生命值 |
| ---- |  ----   |  ----   |     ----    |  ----  |
|   1  |   100   |   200   |     1000    |  3000  |
|   2  |   110   |   220   |     1100    |  3300  |
|   3  |   120   |   240   |     1200    |  3600  |
|   4  |   130   |   260   |     1300    |  4000  |
|   5  |   140   |   280   |     1400    |  4400  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>4 ~ 5 级超级巨人的生命值由 3900/4200 增加到 4000/4400.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级巨人随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>