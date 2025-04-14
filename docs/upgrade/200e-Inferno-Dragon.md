---
title: "部落冲突 coc 都城地狱飞龙升级数据"
navTitle: "地狱飞龙"
shownTitle: "地狱飞龙"
description: "地狱飞龙不会因为落单而狂暴，因为它学会了将怒火转化为一道烈焰射线，而且射线造成的伤害会随着时间递增！"
module: upgrade-capital
imgFolder: capital_tech/200e
wiki: https://clashofclans.fandom.com/wiki/Inferno_Dragon/Clan_Capital
canonical: /upgrade/200e-Inferno-Dragon
---

- *如想查看家乡的地狱飞龙，请访问：[地狱飞龙](/upgrade/0604-Inferno-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Inferno_Dragon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 地狱飞龙的解锁条件是建造 [ 地狱飞龙训练营](/upgrade/234e-Inferno-Dragon-Barracks)，而这需要部落解锁骷髅乐园，且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 8 级。
2. 地狱飞龙的技能（地狱烈焰）：持续攻击同一目标时，地狱飞龙的攻击伤害会随着时间递增。初始伤害切换二段伤害需要 1.7 秒，二段到三段需要 1.5 秒。也就是说从初始伤害到最高伤害需要 3.2 秒。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="配兵人口" pValue="15" />
    <UnitProperty pKey="防守人口" pValue="15" />
    <UnitProperty pKey="移动速度" pValue="1.6 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.128 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 初始秒伤 | 1.7秒后秒伤 | 3.2秒后秒伤 | 生命值 |
| ---- |  ----   |    ----    |    ----    |  ----  |
|   1  |    65   |     130    |    1300    |  1700  |
|   2  |    70   |     140    |    1400    |  1900  |
|   3  |    75   |     150    |    1500    |  2100  |
|   4  |    80   |     160    |    1600    |  2300  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>攻击距离增加至 3 格（原为 2.75 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>都城新增地狱飞龙，推出 4 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>