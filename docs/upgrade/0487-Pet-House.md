---
title: "部落冲突 coc 战宠小屋升级数据"
navTitle: "战宠小屋"
shownTitle: "战宠小屋"
description: "英雄配战宠，战斗如有神！建造战宠小屋，解锁强力战宠，让它们在战场上发挥各自的能力，与您的英雄并肩作战。"
module: upgrade-home
imgFolder: home_buildings/0487
wiki: https://clashofclans.fandom.com/wiki/Pet_House
canonical: /upgrade/0487-Pet-House
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Pet_House10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Pet_House1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Pet_House2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Pet_House3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Pet_House4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Pet_House5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Pet_House6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Pet_House7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Pet_House8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Pet_House9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Pet_House10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 13, 14 - 16" />
    <BuildingNumRow title="建筑数量" num="     0,       1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 战宠不在 [实验室](/upgrade/0483-Laboratory) 中升级，而是在战宠小屋中升级。战宠升级时既不占用实验室时间，也不占用建筑时间。
2. 升级战宠小屋的同时可以升级战宠，也可以使用魔法物品立即升级战宠。
3. 宝石、英雄之书、英雄药水和英雄之锤可以加速战宠升级，而研究药水和工人药水不能。
4. 战宠升级过程中无法跟随英雄出战，但战宠小屋升级过程中可以出战。
5. 防守过程中战宠不会出战。
6. 法术对战宠有效（[镜像法术](/upgrade/0105-Clone-Spell) 除外）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  生命值 | 升级费用 |  升级时间 |升级后可获<br>得的经验|所需<br>大本等级| 解锁的战宠 |
| ---- |   ---  |   ---    |   ---    |         ---        |       ---     |    ---    |
|   1  |   700  |    10M   |   7      |                    |       14      |<a href="/upgrade/0280-L.A.S.S.I">莱希</a>|
|   2  |   800  |    12M   |   7,12   |                    |       14      |<a href="/upgrade/0281-Electro-Owl">闪枭</a>|
|   3  |   900  |    13M   |   8      |                    |       14      |<a href="/upgrade/0282-Mighty-Yak">大牦</a>|
|   4  |  1000  |    15M   |   8,12   |                    |       14      |<a href="/upgrade/0283-Unicorn">独角</a>|
|   5  |  1050  |    16M   |   9      |                    |       15      |<a href="/upgrade/0284-Frosty">冰牙</a>|
|   6  |  1100  |    17M   |  10      |                    |       15      |<a href="/upgrade/0285-Diggy">地兽</a>|
|   7  |  1150  |    18M   |  11      |                    |       15      |<a href="/upgrade/0286-Poison-Lizard">猛蜥</a>|
|   8  |  1200  |    19M   |  12      |                    |       15      |<a href="/upgrade/0287-Phoenix">凤凰</a>|
|   9  |  1250  |    21M   |  15      |                    |       16      |<a href="/upgrade/0288-Spirit-Fox">灵狐</a>|
|  10  |  1300  |  21.5M   |  16      |                    |       16      |<a href="/upgrade/0289-Angry-Jelly">愤怒水母</a>|
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>1 ~ 8 级战宠小屋的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 8 级战宠小屋的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在 16 本新增 10 级战宠小屋，可解锁新战宠：愤怒水母。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增 16 本，并在 16 本新增 9 级战宠小屋，可解锁新战宠：灵狐。</TimelineRow>
        <TimelineRow>1 ~ 8 级战宠小屋的升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>战宠小屋升级时战宠可继续升级。</TimelineRow>
        <TimelineRow>1 ~ 5 级战宠小屋的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 5 ~ 8 级战宠小屋，可解锁四种新战宠。</TimelineRow>
        <TimelineRow>1 ~ 4 级战宠小屋的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>游戏新增 14 本，新建筑：战宠小屋，可解锁四种新战宠。</TimelineRow>
    </TimelineItem>  
    <TimelineItem :historyBottom="true" />
</Timeline>