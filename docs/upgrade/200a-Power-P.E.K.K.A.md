---
title: "部落冲突 coc 都城雷霆皮卡（威能皮卡、超级皮卡）升级数据"
navTitle: "雷霆皮卡"
shownTitle: "雷霆皮卡（威能皮卡、超级皮卡）"
description: "这件强大的暗黑盔甲不断辐射出不稳定的能量，这些能量随时都可能挣脱盔甲的束缚！"
module: upgrade-capital
imgFolder: capital_tech/200a
wiki: https://clashofclans.fandom.com/wiki/Power_P.E.K.K.A/Clan_Capital
canonical: /upgrade/200a-Power-P.E.K.K.A
---

- *如想查看夜世界的雷霆皮卡（原超级皮卡），请访问：[夜世界雷霆皮卡](/upgrade/1009-Power-P.E.K.K.A)。*
- *如想查看家乡的皮卡超人，请访问：[皮卡超人](/upgrade/0009-P.E.K.K.A)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Power_P.E.K.K.A_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Power_P.E.K.K.A1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 雷霆皮卡的解锁条件是建造 [雷霆皮卡训练营](/upgrade/234a-Power-P.E.K.K.A-Barracks)，而这需要部落将建筑工人工坊这个子城的大本营升到 2 级，并且 [都城大本营](/upgrade/2400-Capital-Hall) 需要达到 6 级。
2. 雷霆皮卡的技能（能量过载）：在死亡时产生巨大的爆炸。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="配兵人口" pValue="40" />
    <UnitProperty pKey="防守人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 死亡爆炸伤害 | 生命值 |
| ---- |  ----   |   ---   |     ----    |   ---- |
|   1  |   680   |   1224  |     1000    |   6800 |
|   2  |   760   |   1368  |     1200    |   7600 |
|   3  |   840   |   1512  |     1400    |   8500 |
|   4  |   920   |   1656  |     1600    |   9400 |
|   5  |  1000   |   1800  |     1800    |  10300 |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>3 ~ 5 级雷霆皮卡的生命值由 8400/9200/10000 增加到 8500/9300/10300.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>“超级皮卡”更名为“雷霆皮卡”.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级皮卡随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>