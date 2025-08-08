---
title: "部落冲突 coc 女巫戈仑升级数据"
navTitle: "女巫戈仑"
shownTitle: "女巫戈仑"
description: "戈仑坚如磐石加上女巫神奇的暗黑魔法，这个可怕的合体兵种能轻松摧毁敌方防御！"
module: upgrade-temp
imgFolder: temp/0e0c
wiki: https://clashofclans.fandom.com/wiki/Witch_Golem
canonical: /upgrade/0e0c-Witch-Golem
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">女巫戈仑</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">骷髅</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">大宝宝</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 女巫戈仑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Witch_Golem_info.png" imgAlt="女巫戈仑"
    description="戈仑坚如磐石加上女巫神奇的暗黑魔法，这个可怕的合体兵种能轻松摧毁敌方防御！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Witch_Golem1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

女巫戈仑在 2023 年 10 月的合体狂潮活动中首次推出，在活动中获取 55 000 酸腐圣水（任务点数）即可解锁，并在 2024 年 10 月的合体狂热活动中返场，这次只需 3 000 酸腐圣水即可解锁。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="41" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="特殊技能" pValue="骷髅灾难<sup>*</sup>" />
    <UnitProperty pKey="召唤骷髅的冷却时间" pValue="7 秒" />
    <UnitProperty pKey="训练时间" pValue="300" trainingSystem="2022" />
</UnitProperties>

\* 每隔几秒会召唤骷髅军团。被击倒时还会召唤多个大宝宝。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 死亡伤害 | 生命值 |每次召唤的<br>骷髅数量<sup>#</sup>|最大<br>召唤数量|死亡后生成的<br>大宝宝数量|对应的<br>大本等级|
| ---- |  ----   |  ----   |   ---   |  ----  |              ---               |      ---      |           ---          |      ----       |
|   1  |   130   |  312    |   150   |  3200  |                8               |       14      |            1           |        6        |
|   2  |   143   |  343.2  |   200   |  4500  |                8               |       16      |            1           |        7        |
|   3  |   156   |  374.4  |   250   |  5400  |                9               |       18      |            2           |        8        |
|   4  |   169   |  405.6  |   350   |  6200  |                9               |       20      |            2           |        9        |
|   5  |   182   |  436.8  |   550   |  6700  |               10               |       22      |            2           |       10        |
|   6  |   195   |  468    |   650   |  7100  |               10               |       24      |            2           |       11        |
|   7  |   208   |  499.2  |   750   |  7500  |               11               |       26      |            3           |       12        |
|   8  |   221   |  530.4  |   800   |  8000  |               11               |       28      |            3           |       13        |
|   9  |   234   |  561.6  |   850   |  8400  |               12               |       30      |            3           |       14        |
|  10  |   247   |  592.8  |   900   |  8800  |               12               |       32      |            3           |       15        |
|  11  |   260   |  624    |   950   |  9200  |               13               |       34      |            4           |       16        |
</UnitTable>

\# 女巫戈仑并不是每次召唤都可以召唤出这么多骷髅，当一只女巫戈仑召唤的骷髅达到上表的限制时，除非骷髅兵死亡，否则女巫戈仑不会继续召唤。这个上限指的是每只女巫戈仑召唤的骷髅，如果有两只女巫戈仑，那么场上的最大骷髅数量为 2 倍上限。
</SwitchTabGroup>

<!-- ↓↓↓ 骷髅 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Witch_Golem_info.png" imgAlt="女巫戈仑召唤的骷髅"
    description="这个不死生物本身并不可怕，但它从不单独作战，因为女巫戈仑可以召唤无数骷髅兵来对付敌人！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

这个骷髅兵的属性与 [女巫](/upgrade/0084-Witch) 召唤出来的骷髅相同，至少女巫戈仑最后一次推出时是相同的。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="每秒伤害" pValue="25" />
    <UnitProperty pKey="每次伤害" pValue="25" />
    <UnitProperty pKey="生命值" pValue="30" />
</UnitProperties>
</SwitchTabGroup>

<!-- ↓↓↓ 大宝宝 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Big_Boy_Witch_Golem.png" imgAlt="女巫戈仑召唤的大宝宝"
    description="每天一桶奶，养成大骷髅。大宝宝绝对是史上最大的骷髅兵，但别看他样子吓人，其实他还是个离不开妈妈的宝宝。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Big_Boy.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

这个骷髅兵的属性与 [超级女巫](/upgrade/0605-Super-Witch) 召唤出来的大宝宝不同，不可套用超级女巫的那个大宝宝的数据。

<SmallTitle>大宝宝的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |   210   |   420   |  1300  |
|   2  |   234   |   468   |  2000  |
|   3  |   258   |   516   |  2500  |
|   4  |   282   |   564   |  2900  |
|   5  |   306   |   612   |  3350  |
|   6  |   330   |   660   |  3550  |
|   7  |   354   |   708   |  3750  |
|   8  |   378   |   756   |  4000  |
|   9  |   402   |   804   |  4200  |
|  10  |   426   |   852   |  4400  |
|  11  |   450   |   900   |  5000  |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/10/11">
        <TimelineRow>该兵种第 2 次推出，是 2024 年合体狂热活动中的五个临时兵种之一。</TimelineRow>
        <TimelineRow>与 2023 版相比，该兵种新增了第 11 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/20">
        <TimelineRow>所有等级的大宝宝的每秒伤害增加 20%.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/13">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>