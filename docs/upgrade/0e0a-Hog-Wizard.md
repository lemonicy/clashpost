---
title: "部落冲突 coc 野猪法师升级数据"
navTitle: "野猪法师"
shownTitle: "野猪法师"
description: "这个危险的兵种拥有火爆的性格和魔法，还有野猪骑士的超强灵活性。野猪法师的到来定会让敌方闻风丧胆！"
module: upgrade-temp
imgFolder: temp_troops/0e0a
wiki: https://clashofclans.fandom.com/wiki/Hog_Wizard
canonical: /upgrade/0e0a-Hog-Wizard
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Wizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Hog_Wizard1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 野猪法师在 2023 年 10 月的合体狂潮活动中首次推出，在活动中获取 15 000 酸腐圣水（任务点数）即可解锁，并在 2024 年 10 月的合体狂热活动中返场，这次只需 4 000 酸腐圣水即可解锁。
2. 野猪法师有个微弱的光环，这个光环和 [雷霆泰坦](/upgrade/000f-Electro-Titan) 的类似，可以对敌方部队和建筑造成持续伤害，且 [狂暴法术](/upgrade/0102-Rage-Spell) 不能增加光环的伤害。

<SmallTitle>野猪法师的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="7" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="训练时间" pValue="66" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>光环的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用类型" pValue="范围伤害 (地面和空中)" />
    <UnitProperty pKey="作用的目标" pValue="敌方部队和建筑" />
    <UnitProperty pKey="光环半径" pValue="1.2 格" />
    <UnitProperty pKey="光环攻击速度" pValue="0.4 秒/次" />
    <UnitProperty pKey="每秒伤害" pValue="7.5" />
    <UnitProperty pKey="每次伤害" pValue="3" />
    <UnitProperty pKey="伤害衰减" pValue="对英雄只有 25% 伤害" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 对应的大本等级 |
|  --- |   ---   |   ---   |   ---  |      ---     |
|   1  |    57   |   45.6  |   248  |       6      |
|   2  |    85   |   68    |   375  |       7      |
|   3  |   113   |   90.4  |   501  |       8      |
|   4  |   141   |  112.8  |   628  |       9      |
|   5  |   169   |  135.2  |   754  |      10      |
|   6  |   197   |  157.6  |   881  |      11      |
|   7  |   225   |  180    |  1007  |      12      |
|   8  |   253   |  202.4  |  1134  |      13      |
|   9  |   281   |  224.8  |  1260  |      14      |
|  10  |   300   |  240    |  1387  |      15      |
|  11  |   310   |  248    |  1514  |      16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/10/11">
        <TimelineRow>该兵种第 2 次推出，是 2024 年合体狂热活动中的五个临时兵种之一。</TimelineRow>
        <TimelineRow>与 2023 版相比，该兵种新增了第 11 个等级，但 10 级的伤害降低了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/20">
        <TimelineRow>所有等级的野猪法师的生命值增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/13">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>