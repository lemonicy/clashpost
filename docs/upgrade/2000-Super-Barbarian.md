---
title: "部落冲突 coc 都城超级野蛮人升级数据"
navTitle: "超级野蛮人"
shownTitle: "超级野蛮人"
description: "生命值更高、力量更强、速度更快，最重要的是秀发更浓密。成为超级野蛮人是每个普通野蛮人的梦想！"
module: upgrade-capital
imgFolder: capital_tech/2000
wiki: https://clashofclans.fandom.com/wiki/Super_Barbarian/Clan_Capital
canonical: /upgrade/2000-Super-Barbarian
---

- *如想查看家乡的超级野蛮人，请访问：[超级野蛮人](/upgrade/0600-Super-Barbarian)。*
- *如想查看夜世界的狂暴野蛮人，请访问：[夜世界狂暴野蛮人](/upgrade/1000-Raged-Barbarian)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Barbarian_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Barbarian1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当部落解锁野蛮人兵营时，系统会自动建造 [超级野蛮人训练营](/upgrade/2340-Super-Barbarian-Barracks)，也就是说超级野蛮人在 [都城大本营](/upgrade/2400-Capital-Hall) 达到 2 级后可解锁。
2. 超级野蛮人的技能（狂暴）：部署 8 秒内狂暴。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="配兵人口" pValue="5" />
    <UnitProperty pKey="防守人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.8 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.7 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.45 格" />
    <UnitProperty pKey="特殊效果" pValue="狂暴" />
    <UnitProperty pKey="狂暴时速度提升" pValue="16" />
    <UnitProperty pKey="狂暴时伤害提升" pValue="70%" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |   120   |    96   |   800  |
|   2  |   140   |   112   |   900  |
|   3  |   160   |   128   |  1000  |
|   4  |   180   |   144   |  1120  |
|   5  |   200   |   160   |  1240  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>4 ~ 5 级超级野蛮人的生命值由 1100/1200 增加到 1120/1240.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级野蛮人随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>