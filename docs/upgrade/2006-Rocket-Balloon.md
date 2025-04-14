---
title: "部落冲突 coc 都城火箭气球兵（超球）升级数据"
navTitle: "火箭气球兵"
shownTitle: "火箭气球兵（超球）"
description: "地面进攻受阻怎么办？一排火箭气球兵应该能帮你搞定......如果它们的助推器还有燃料。"
module: upgrade-capital
imgFolder: capital_tech/2006
wiki: https://clashofclans.fandom.com/wiki/Rocket_Balloon/Clan_Capital
canonical: /upgrade/2006-Rocket-Balloon
---

- *如想查看家乡的火箭气球兵，请访问：[火箭气球兵](/upgrade/060b-Rocket-Balloon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rocket_Balloon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Rocket_Balloon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 火箭气球兵的解锁条件是建造 [火箭气球兵训练营](/upgrade/2346-Rocket-Balloon-Barracks)，而这需要部落解锁气球环礁，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 4 级。
2. 火箭气球兵的技能（急速飞行）：在部署后的 4 秒内提升移动速度。加速状态下火箭气球兵的移动速度是 60.8，即 7.6 格/秒。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="每组兵的配兵人口" pValue="15" />
    <UnitProperty pKey="每组兵的部队数量" pValue="2" />
    <UnitProperty pKey="每个兵的防守人口" pValue="7.5" />
    <UnitProperty pKey="移动速度" pValue="1.1 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="3 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.75 秒" />
    <UnitProperty pKey="攻击距离" pValue="0 (建筑头顶)" />
    <UnitProperty pKey="死亡伤害半径" pValue="1 格" />
    <UnitProperty pKey="死亡伤害延时" pValue="0.416 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 直接伤害 | 死亡伤害 | 生命值 |
| ---- |  ----   |  ----   |   ----  |  ----  |
|   1  |   175   |   525   |    400  |   720  |
|   2  |   200   |   600   |    450  |   800  |
|   3  |   225   |   675   |    500  |   880  |
|   4  |   250   |   750   |    550  |   960  |
|   5  |   275   |   825   |    600  |  1040  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>火箭气球兵随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>