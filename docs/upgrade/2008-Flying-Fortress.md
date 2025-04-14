---
title: "部落冲突 coc 都城飞行堡垒（空中堡垒）升级数据"
navTitle: "飞行堡垒"
shownTitle: "飞行堡垒（空中堡垒）"
description: "你可能觉得堡垒插上翅膀会很危险，但飞行堡垒不存在这个问题。搭载着骷髅飞骑的飞行堡垒能对敌方实施可怕的轰炸。"
module: upgrade-capital
imgFolder: capital_tech/2008
wiki: https://clashofclans.fandom.com/wiki/Flying_Fortress
canonical: /upgrade/2008-Flying-Fortress
---

- *如想查看攻击方式与飞行堡垒类似的都城兵种，请访问该页面后切换到野猪飞骑：[都城野猪突袭队](/upgrade/200b-Hog-Raiders)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">飞行堡垒</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">骷髅飞骑</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 飞行堡垒 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flying_Fortress_info.png" imgAlt="飞行堡垒"
    description="你可能觉得堡垒插上翅膀会很危险，但飞行堡垒不存在这个问题。搭载着骷髅飞骑的飞行堡垒能对敌方实施可怕的轰炸。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Flying_Fortress1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 飞行堡垒的解锁条件是建造 [飞行堡垒工坊](/upgrade/2348-Flying-Fortress-Yard)，而这需要气球环礁这个子城升到 2 本，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 4 级。
2. 飞行堡垒的技能（空降骷髅）：受到伤害后生成骷髅飞骑，骷髅飞骑死亡后生成大量 [骷髅](/upgrade/20c1-Skeleton)。

<SmallTitle>飞行堡垒的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="配兵人口" pValue="100" />
    <UnitProperty pKey="防守人口" pValue="100" />
    <UnitProperty pKey="移动速度" pValue="1.1 格/秒" />
    <UnitProperty pKey="攻击距离" pValue="4.5 格" />
</UnitProperties>

<SmallTitle>飞行堡垒的升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |可分裂的<br>骷髅飞骑数量|死亡后分裂的<br>骷髅数量|  生命值 |
| ---- |  ----   |  ----   |         ----         |         ----          |   ---- |
|   1  |   300   |   600   |           10         |           22          |  12000 |
|   2  |   325   |   650   |           12         |           24          |  13500 |
|   3  |   350   |   700   |           14         |           26          |  15000 |
|   4  |   375   |   750   |           16         |           28          |  16500 |
|   5  |   400   |   800   |           18         |           30          |  18000 |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 骷髅飞骑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Glider_info.png" imgAlt="骷髅飞骑"
    description="骷髅兵身材矮小，很难越过城墙。好在骨头和滑翔翼足够轻巧，让它能轻松飞过去！" />

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton_Glider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 飞行堡垒的解锁条件是建造 [飞行堡垒工坊](/upgrade/2348-Flying-Fortress-Yard)，而这需要气球环礁这个子城升到 2 本，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 4 级。
2. 飞行堡垒的技能（空降骷髅）：受到伤害后生成骷髅飞骑，骷髅飞骑死亡后生成大量 [骷髅](/upgrade/20c1-Skeleton)。

<SmallTitle>骷髅飞骑的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="攻击方式" pValue="攻击一次后爆出骷髅" />
    <UnitProperty pKey="爆出的骷髅数量" pValue="3" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="防守人口" pValue="0" />
    <UnitProperty pKey="移动速度" pValue="2.3 格/秒" />
    <UnitProperty pKey="攻击距离" pValue="0 (建筑头顶)" />
</UnitProperties>

<SmallTitle>骷髅飞骑的升级数据</SmallTitle>

<UnitTable>

| 等级 |  伤害  |  生命值 |
| ---- |  ---  |  ----   |
|   1  |  130  |   200   |
|   2  |  140  |   250   |
|   3  |  150  |   300   |
|   4  |  160  |   350   |
|   5  |  170  |   400   |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/06/12">
        <TimelineRow>移除飞行堡垒选择目标时的随机性。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/09">
        <TimelineRow>1 ~ 4 级飞行堡垒的生命值从 10000/12000/14000/16000 提高到 12000/13500/15000/16500.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>飞行堡垒随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>