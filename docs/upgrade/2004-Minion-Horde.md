---
title: "部落冲突 coc 都城亡灵大军升级数据"
navTitle: "亡灵大军"
shownTitle: "亡灵大军"
description: "六个行动迅速、无护甲保护的飞行战士。三人为伍，六人成军！"
module: upgrade-capital
imgFolder: capital_tech/2004
wiki: https://clashofclans.fandom.com/wiki/Minion_Horde
canonical: /upgrade/2004-Minion-Horder
---

- *如想查看家乡的亡灵，请访问：[亡灵](/upgrade/0080-Minion)。*
- *如想查看夜世界的异变亡灵，请访问：[夜世界异变亡灵](/upgrade/1003-Beta-Minion)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Minion_Horde_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="亡灵" imgSrc="Minion1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 亡灵大军的解锁条件是建造 [亡灵训练营](/upgrade/2344-Minion-Barracks)，而这需要野蛮人兵营这个子城升到 2 本，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 3 级。
2. 在都城中，亡灵只能以 6 个一组的形式部署。

<SmallTitle>都城亡灵的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="每组兵的配兵人口" pValue="10" />
    <UnitProperty pKey="每组兵的部队数量" pValue="6" />
    <UnitProperty pKey="每个兵的防守人口" pValue="1.67" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.5 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----  |   ----   |  ---- |
|   1  |   56   |    56    |   60  |
|   2  |   62   |    62    |   70  |
|   3  |   68   |    68    |   80  |
|   4  |   74   |    74    |   90  |
|   5  |   80   |    80    |  100  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/06/30">
        <TimelineRow>亡灵的每秒伤害从 38/46/54/62/70 提升到 56/62/68/74/80</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>亡灵大军随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>