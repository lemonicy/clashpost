---
title: "部落冲突 coc 都城超级电磁炮升级数据"
navTitle: "超级电磁炮"
shownTitle: "超级电磁炮"
description: "这台机器无所畏惧，似乎无人可挡，总是从容不迫地发射雷鸣般的电磁冲击波摧毁防御，这将是敌人永远无法摆脱的噩梦吧？"
module: upgrade-capital
imgFolder: capital_tech/2010
wiki: https://clashofclans.fandom.com/wiki/Mega_Sparky
canonical: /upgrade/2010-Mega-Sparky
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mega_Sparky_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Mega_Sparky1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级电磁炮的解锁条件是建造 [超级电磁炮工坊](/upgrade/2350-Mega-Sparky-Workshop)，而这需要部落解锁哥布林矿井这个子城升到 2 本，且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 9 级。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="溅射伤害" />
    <UnitProperty pKey="溅射半径" pValue="3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="配兵人口" pValue="100" />
    <UnitProperty pKey="防守人口" pValue="100" />
    <UnitProperty pKey="移动速度" pValue="1 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |   400   |  1600   | 10000  |
|   2  |   450   |  1800   | 11200  |
|   3  |   500   |  2000   | 12400  |
|   4  |   550   |  2200   | 13600  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新兵种：超级电磁炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>