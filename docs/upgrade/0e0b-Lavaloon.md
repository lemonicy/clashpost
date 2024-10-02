---
title: "部落冲突 coc 熔岩气球升级数据"
navTitle: "熔岩气球"
shownTitle: "熔岩气球"
description: "兼具气球兵的强力炸弹和熔岩猎犬的坚硬外壳，熔岩气球能轻松摧毁基地，一炸一个坑！"
module: upgrade-temp
imgFolder: temp/0e0b
wiki: https://clashofclans.fandom.com/wiki/Lavaloon
canonical: /upgrade/0e0b-Lavaloon
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">熔岩气球</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">迷你熔岩气球犬</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 熔岩气球 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lavaloon_info.png" imgAlt="熔岩气球"
    description="兼具气球兵的强力炸弹和熔岩猎犬的坚硬外壳，熔岩气球能轻松摧毁基地，一炸一个坑！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Lavaloon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 熔岩气球是合体狂潮活动中的四个临时兵种之一，在活动中的奖励之路中达到 35 000 酸腐圣水（任务点数）即可解锁该兵种。
2. 熔岩气球的 AI 类似于 [熔岩猎犬](/upgrade/0085-Lava-Hound) 和 [寒冰猎犬](/upgrade/060a-Ice-Hound)，同样以防空火箭为优先攻击目标，同样有分裂功能。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防空火箭" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="23" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0 格 (建筑头顶)" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="特殊技能" pValue="爆炸分裂<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="90" :isTrainingTime="true" />
</UnitProperties>

\* 熔岩气球在到达目标的途中会释放炸弹，每次炸弹爆炸时都会分裂出一只迷你熔岩气球犬。另外，熔岩气球死亡时会额外分裂一些迷你熔岩气球犬。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |死亡伤害|死亡后分裂的<br>派生兵种数量| 生命值 | 对应的大本等级 |
| ---- |  ----   |  ----   |  ----  |           ---           |  ----  |      ----    |
|   1  |    50   |   125   |   200  |            2            |  1080  |       6      |
|   2  |    70   |   175   |   450  |            3            |  1575  |       7      |
|   3  |    90   |   225   |   500  |            3            |  2070  |       8      |
|   4  |   110   |   275   |   600  |            4            |  2565  |       9      |
|   5  |   130   |   325   |   720  |            4            |  3060  |      10      |
|   6  |   150   |   375   |   840  |            5            |  3555  |      11      |
|   7  |   170   |   425   |   960  |            5            |  4050  |      12      |
|   8  |   190   |   475   |  1000  |            6            |  4455  |      13      |
|   9  |   210   |   525   |  1050  |            6            |  4860  |      14      |
|  10  |   230   |   575   |  1100  |            6            |  5265  |      15      |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 迷你熔岩气球犬 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lavaloon_Pup_info.png" imgAlt="迷你熔岩气球犬"
    description="这些调皮的绿色小怪物就是为战斗而生的，无论什么情况他们都会接着战斗。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Lavaloon_Pup1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |    10   |    10   |    10  |
|   2  |    13   |    13   |    15  |
|   3  |    16   |    16   |    20  |
|   4  |    19   |    19   |    25  |
|   5  |    22   |    22   |    30  |
|   6  |    25   |    25   |    35  |
|   7  |    28   |    28   |    40  |
|   8  |    31   |    31   |    45  |
|   9  |    34   |    34   |    50  |
|  10  |    37   |    37   |    55  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/20">
        <TimelineRow>所有等级的熔岩气球的生命值减少 10%.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/13">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>