---
title: "部落冲突 coc 法术工厂升级数据"
navTitle: "法术工厂"
shownTitle: "法术工厂"
description: "法术工厂是资深法师的家，比起在前线战斗，他们更适合去创造各种魔力武器。使用强大的法术，在战斗中扭转乾坤吧！"
module: upgrade-home
imgFolder: home_buildings/0484
wiki: https://clashofclans.fandom.com/wiki/Spell_Factory
canonical: /upgrade/0484-Spell-Factory
---

- *如想查看配置暗黑法术的法术工厂，请访问：[暗黑法术工厂](/upgrade/0485-Dark-Spell-Factory)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spell_Factory8.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="闲置状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Spell_Factory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spell_Factory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spell_Factory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Spell_Factory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Spell_Factory5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Spell_Factory6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Spell_Factory7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Spell_Factory8.png" />
    </UnitImgGroup>
    <UnitImgGroup title="法术配置中" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Spell_Factory1_Active.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spell_Factory2_Active.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spell_Factory3_Active.png" />
        <UnitImg imgTitle="4 级" imgSrc="Spell_Factory4_Active.png" />
        <UnitImg imgTitle="5 级" imgSrc="Spell_Factory5_Active.png" />
        <UnitImg imgTitle="6 级" imgSrc="Spell_Factory6_Active.png" />
        <UnitImg imgTitle="7 级" imgSrc="Spell_Factory7_Active.png" />
        <UnitImg imgTitle="8 级" imgSrc="Spell_Factory8_Active.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
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

| 等级 |可容纳的<br>法术空间| 生命值 | 升级费用 | 升级时间 |升级后可获<br>得的经验|所需<br>大本等级| 解锁的法术 |
| ---- |        ---       |   ---  |   ---   |   ---   |         ---         |      ---      |    ---    |
|   1  |         2        |   425  |  150k   |   0, 6  |                     |       5       |<a href="/upgrade/0100-Lightning-Spell">雷电法术</a>|
|   2  |         4        |   470  |  300k   |   0,12  |                     |       6       |<a href="/upgrade/0101-Healing-Spell">疗伤法术</a>|
|   3  |         6        |   520  |  600k   |   1     |                     |       7       |<a href="/upgrade/0102-Rage-Spell">狂暴法术</a>|
|   4  |         8        |   600  |  1.2M   |   2     |                     |       9       |<a href="/upgrade/0103-Jump-Spell">弹跳法术</a><br><a href="/upgrade/0104-Freeze-Spell">冰冻法术</a>|
|   5  |        10        |   720  |    2M   |   3     |                     |      10       |<a href="/upgrade/0105-Clone-Spell">镜像法术</a>|
|   6  |        10        |   840  |  3.5M   |   5     |                     |      11       |<a href="/upgrade/0106-Invisibility-Spell">隐形法术</a>|
|   7  |        10        |   960  |    9M   |   7     |                     |      13       |<a href="/upgrade/0107-Recall-Spell">回溯法术</a>|
|   8  |        10        |  1080  |   14M   |   8     |                     |      15       |<a href="/upgrade/0108-Revive-Spell">复苏法术</a>|
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 5、7 ~ 8 级法术工厂的升级时间减少。</TimelineRow>
        <TimelineRow>8 级法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem> 
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 15 本新增 8 级法术工厂。</TimelineRow>    
        <TimelineRow>4 ~ 5、7 级法术工厂的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>7 级法术工厂的升级时间 9 天减少至 8 天。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>法术工厂升级时兵种可继续配置法术，但配置速度减半（配置时间翻倍）。</TimelineRow>
        <TimelineRow>15 本推出，并在 13 本新增 7 级法术工厂，可解锁新法术：回溯法术（召回法术）。</TimelineRow>
        <TimelineRow>5 ~ 7 级法术工厂的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 3 级法术工厂的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>4 ~ 5 级法术工厂的升级费用降低。</TimelineRow>
        <TimelineRow>5 级法术工厂的升级时间减少。</TimelineRow>
    </TimelineItem> 
    <TimelineItem date="2020/12/07">
        <TimelineRow>11 本新增 6 级法术工厂，新法术：隐形法术。</TimelineRow>   
    </TimelineItem> 
        <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 1 ~ 3 级法术工厂的升级时间减少。</TimelineRow>     
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>