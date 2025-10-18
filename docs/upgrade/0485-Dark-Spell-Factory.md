---
title: "部落冲突 coc 暗黑法术工厂升级数据"
navTitle: "暗黑法术工厂"
shownTitle: "暗黑法术工厂"
description: "只有那些最聪明，或者最鲁莽的法术大师才敢使用暗黑重油来配制法术。要精通这些空间较小的暗黑法术需要敏锐的洞察力，不过这也能带来独一无二的战术优势。"
module: upgrade-home
imgFolder: home_buildings/0485
wiki: https://clashofclans.fandom.com/wiki/Dark_Spell_Factory
canonical: /upgrade/0485-Dark-Spell-Factory
---

- *如想查看配置圣水法术的法术工厂，请访问：[法术工厂](/upgrade/0484-Spell-Factory)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Spell_Factory7_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="闲置状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dark_Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dark_Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dark_Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dark_Spell_Factory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dark_Spell_Factory5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dark_Spell_Factory6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dark_Spell_Factory7.png" />
    </UnitImgGroup>
    <UnitImgGroup title="法术配置中" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dark_Spell_Factory1_Active.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dark_Spell_Factory2_Active.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dark_Spell_Factory3_Active.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dark_Spell_Factory4_Active.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dark_Spell_Factory5_Active.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dark_Spell_Factory6_Active.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dark_Spell_Factory7_Active.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 可容纳的<br>法术空间 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需大本等级 | 解锁的法术 |
| ---- |         ----       |   ---  |   ---   |   ---   |          ---          |     ---    |    ----    |
|   1  |          1         |   600  |  130k   |   0, 6  |                       |      8     |<a href="/upgrade/0180-Poison-Spell">毒药法术</a>|
|   2  |          1         |   660  |  260k   |   0,12  |                       |      8     |<a href="/upgrade/0181-Earthquake-Spell">地震法术</a>|
|   3  |          1         |   720  |  600k   |   2     |                       |      9     |<a href="/upgrade/0182-Haste-Spell">急速法术</a>|
|   4  |          1         |   780  |  1.2M   |   4     |                       |      9     |<a href="/upgrade/0183-Skeleton-Spell">骷髅法术</a>|
|   5  |          1         |   840  |  2.5M   |   5     |                       |     10     |<a href="/upgrade/0184-Bat-Spell">蝙蝠法术</a>|
|   6  |          1         |   950  |    4M   |   6     |                       |     12     |<a href="/upgrade/0185-Overgrowth-Spell">蔓生法术</a>|
|   7  |          1         |  1010  |   11M   |   7     |                       |     14     |<a href="/upgrade/0186-Ice-Block-Spell">冰障法术</a>|
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>7 级暗黑法术工厂的升级时间减少。</TimelineRow>
        <TimelineRow>7 级暗黑法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/19">
        <TimelineRow>新增 7 级暗黑法术工厂，14 本可解锁。新法术：冰障法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 级暗黑法术工厂的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">  
        <TimelineRow>5 ~ 6 级暗黑法术工厂的升级时间减少。</TimelineRow>
        <TimelineRow>6 级暗黑法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>新增 6 级暗黑法术工厂，12 本可解锁。新法术：蔓生法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>1 ~ 2 级暗黑法术工厂的升级费用 150k/300k 减少至 130k/260k。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>法术工厂升级时兵种可继续配置法术，但配置速度减半（配置时间翻倍）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>所有等级暗黑法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>所有等级暗黑法术工厂的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem> 
        <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 4 级暗黑法术工厂的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级暗黑法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>