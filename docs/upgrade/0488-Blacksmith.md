---
title: "部落冲突 coc 铁匠铺升级数据"
navTitle: "铁匠铺"
shownTitle: "铁匠铺"
description: "把合适的魔法矿石带到这来，升级英雄的装备，让他们变得更加强大！熔炉冒出的烟可用于熏制美味的牛腩，虽然这并不健康。"
module: upgrade-home
imgFolder: home_buildings/0488
wiki: https://clashofclans.fandom.com/wiki/Blacksmith
canonical: /upgrade/0488-Blacksmith
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Blacksmith9.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Blacksmith1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Blacksmith3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Blacksmith5.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Blacksmith7.png" />
        <UnitImg imgTitle="9 级" imgSrc="Blacksmith9.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 升级铁匠铺可以使英雄装备升级到更高的等级，并解锁新的装备，也可以增加矿石的最大储量。
2. 所谓的矿石指闪亮矿石（蓝矿）、璀璨矿石（紫矿）、星辉矿石（黄矿）这三种资源，这三种资源只在升级装备时使用，其中蓝矿最常见，黄矿最稀缺。
3. 英雄装备可以赋予英雄一定的技能，详情请前往对应的装备页面查看。
4. 升级装备不需要时间，只需花费矿石。
5. 升级装备不占用 [建筑工人](/upgrade/0500-Builders-Hut)，也不占用 [实验室](/upgrade/0483-Laboratory)。
6. 铁匠铺免疫 [雷电法术](/upgrade/0100-Lightning-Spell) 伤害，理论上属于资源类建筑，但不被 [哥布林](/upgrade/0003-Goblin) 优先攻击。

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
        "type": "number",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "number",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    },
    {
        "column": 4,
        "type": "number",
        "icon": "Starry_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  生命值 |蓝矿的<br>最大储量|紫矿的<br>最大储量|黄矿的<br>最大储量|  升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级| 解锁的装备 |
| ---- |   ---- |        ---      |        ---      |       ---      |    ---   |   ---   |         ---         |      ---      |    ---    |
|   1  |   700  |        10k      |       1000      |       200      |   750k   |    1    |                     |        8      |<a href="/upgrade/0702-Earthquake-Boots">地震金靴</a>|
|   2  |   800  |        15k      |       1500      |       300      |   1.7M   |    2    |                     |        9      |<a href="/upgrade/0742-Giant-Arrow">巨型箭矢</a>|
|   3  |   900  |        20k      |       2000      |       400      |   2.3M   |    3    |                     |       10      |<a href="/upgrade/0703-Vampstache">嗜血胡须</a>|
|   4  |  1000  |        25k      |       2500      |       500      |     3M   |    4    |                     |       11      |<a href="/upgrade/0782-Rage-Gem">狂暴宝石</a>|
|   5  |  1100  |        30k      |       3000      |       600      |   5.5M   |    5    |                     |       12      |<a href="/upgrade/0743-Healer-Puppet">天使木偶</a>|
|   6  |  1200  |        35k      |       3500      |       700      |   8.5M   |    6    |                     |       13      |<a href="/upgrade/0783-Healing-Tome">治疗书卷</a>|
|   7  |  1300  |        40k      |       4000      |       800      |    12M   |    7    |                     |       14      |<a href="/upgrade/07c2-Hog-Rider-Puppet">野猪骑士木偶</a>|
|   8  |  1400  |        45k      |       4500      |       900      |  12.6M   |    8    |                     |       15      |<a href="/upgrade/07c3-Haste-Vial">急速药水瓶</a>|
|   9  |  1500  |        50k      |       5000      |      1000      |    16M   |    9    |                     |       16      |     无    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">  
        <TimelineRow>8 级铁匠铺的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>铁匠铺改为使用圣水升级。</TimelineRow>
        <TimelineRow>现在 7 ~ 8 级铁匠铺可以解锁新装备了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增 16 本，新建筑：铁匠铺，共设 9 个等级。其中前 6 个等级可解锁新装备，后 3 个等级不解锁任何装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>