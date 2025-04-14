---
title: "部落冲突 coc 扫帚女巫升级数据"
navTitle: "扫帚女巫"
shownTitle: "扫帚女巫"
description: "一名见习女巫，她会在战场上飞来飞去，召唤女巫精灵。她特别不喜欢那些站在塔上的傲慢法师。"
module: upgrade-temp
imgFolder: temp/0e13
wiki: https://clashofclans.fandom.com/wiki/Broom_Witch
canonical: /upgrade/0e13-Broom-Witch
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">女巫</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">精灵</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 女巫 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Broom_Witch_info.png" :imgAlt="$frontmatter.navTitle"
    description="一名见习女巫，她会在战场上飞来飞去，召唤女巫精灵。她特别不喜欢那些站在塔上的傲慢法师。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Broom_Witch1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 扫帚女巫是动漫与部落活动中的两个临时兵种之一，在活动的奖励之路中达到 3 000 魔法水晶（任务点数）即可解锁该兵种。
2. 与大雪怪类似，扫帚女巫在受到伤害时可分裂出女巫精灵。
3. 与熔岩猎犬类似，扫帚女巫有三段攻击偏好。当场上有法师塔时优先攻击法师塔，没有法师塔时优先攻击防御建筑，没有防御建筑时才攻击其他建筑、敌方英雄和援军。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="法师塔" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="可分裂的女巫精灵数量" pValue="24" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />  
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="150" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |  生命值 | 对应的<br>大本等级|
| ---- |   ---   |   ---   |   ---   |        ----     |
|   1  |    80   |    80   |   600   |         6       |
|   2  |   110   |   110   |  1000   |         7       |
|   3  |   140   |   140   |  1400   |         8       |
|   4  |   170   |   170   |  1800   |         9       |
|   5  |   200   |   200   |  2200   |        10       |
|   6  |   230   |   230   |  2600   |        11       |
|   7  |   260   |   260   |  3000   |        12       |
|   8  |   290   |   290   |  3400   |        13       |
|   9  |   320   |   320   |  3800   |        14       |
|  10  |   350   |   350   |  4200   |        15       |
|  11  |   380   |   380   |  4600   |        16       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 精灵 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Witch_Spirit.png" imgAlt="扫帚女巫召唤的精灵"
    description="这些淘气的小火花看起来很可爱，但可以对附近的防御造成大量伤害。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Witch_Spirit1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (伤害 ×4)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
</UnitProperties>

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Witch_Spirit1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |  生命值 |
| ---- |   ---  |    ---   |   ---   | 
|   1  |    5   |     5    |   300   | 
|   2  |   10   |    10    |   325   | 
|   3  |   15   |    15    |   350   | 
|   4  |   20   |    20    |   375   | 
|   5  |   25   |    25    |   400   | 
|   6  |   30   |    30    |   425   | 
|   7  |   35   |    35    |   450   | 
|   8  |   40   |    40    |   475   | 
|   9  |   45   |    45    |   500   | 
|  10  |   50   |    50    |   525   | 
|  11  |   55   |    55    |   550   |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/08/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/08/31.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>