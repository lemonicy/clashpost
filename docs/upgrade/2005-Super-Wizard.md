---
title: "部落冲突 coc 都城超级法师升级数据"
navTitle: "超级法师"
shownTitle: "超级法师"
description: "超级法师全身充满了魔法能量！他可能是实验室里最聪明的人，但也有可能会把实验室炸上天。"
module: upgrade-capital
imgFolder: capital_tech/2005
wiki: https://clashofclans.fandom.com/wiki/Super_Wizard/Clan_Capital
canonical: /upgrade/2005-Super-Wizard
---

- *如想查看家乡的超级法师，请访问：[超级法师](/upgrade/0609-Super-Wizard)。*
- *如想查看夜世界的电火法师，请访问：[夜世界电火法师](/upgrade/100b-Electrofire-Wizard)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Wizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Wizard1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级法师的解锁条件是建造 [超级法师训练营](/upgrade/2345-Super-Wizard-Barracks)，而这需要部落解锁法师山谷，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 3 级。
2. 超级法师的技能（链式魔法）：超级法师的链式魔法攻击可以弹射伤害多个目标，只要这些目标在他初始目标的溅射范围内。它就可以同时对多个目标造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="配兵人口" pValue="10" />
    <UnitProperty pKey="防守人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="1.6 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="连锁距离" pValue="2.25 格" />
    <UnitProperty pKey="最大目标数" pValue="10" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="连锁后保留的伤害" pValue="40%" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 直接伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |   ----  |  ----  |
|   1  |   160   |   320   |    128  |   600  |
|   2  |   180   |   360   |    144  |   700  |
|   3  |   200   |   400   |    160  |   800  |
|   4  |   220   |   440   |    176  |   900  |
|   5  |   240   |   480   |    192  |  1000  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/06/30">
        <TimelineRow>所有等级超级法师的生命值增加 200 点.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级法师随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>