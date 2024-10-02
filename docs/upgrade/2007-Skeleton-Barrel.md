---
title: "部落冲突 coc 都城骷髅飞桶升级数据"
navTitle: "骷髅飞桶"
shownTitle: "骷髅飞桶"
description: "是谁说飞桶嘉年华来着？这本来是一场空中骷髅派对，直到飞桶上的气球都破了......然后就变成了地上的骷髅派对！"
module: upgrade-capital
imgFolder: capital_tech/2007
wiki: https://clashofclans.fandom.com/wiki/Skeleton_Barrel/Clan_Capital
canonical: /upgrade/2007-Skeleton-Barrels
---

- *如想查看家乡的同名临时兵种，请访问：[骷髅飞桶](/upgrade/0e04-Skeleton-Barrel)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Barrel_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton_Barrel1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 骷髅飞桶的解锁条件是建造 [骷髅飞桶训练营](/upgrade/2347-Skeleton-Barrel-Barracks)，而这需要部落解锁气球环礁，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 4 级。
2. 骷髅飞桶攻击一次后会爆出 [骷髅](/upgrade/20c1-Skeleton)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="每组兵的配兵人口" pValue="15" />
    <UnitProperty pKey="每组兵的部队数量" pValue="3" />
    <UnitProperty pKey="每个兵的防守人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1 格/秒" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 1 秒" />
    <UnitProperty pKey="攻击距离" pValue="0 (建筑头顶)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 爆炸伤害 | 分裂的骷髅数量 | 生命值 |
| ---- |  ----   |     ----     |  ----  |
|   1  |   324   |       8      |   700  |
|   2  |   486   |       9      |   800  |
|   3  |   594   |      10      |   850  |
|   4  |   708   |      11      |  1050  |
|   5  |   768   |      12      |  1200  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/12/12">
        <TimelineRow>所有等级骷髅飞桶的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>骷髅飞桶随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>