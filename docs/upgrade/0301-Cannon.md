---
title: "部落冲突 coc 加农炮升级数据"
navTitle: "加农炮"
shownTitle: "加农炮"
description: "加农炮很适合防御单个目标。升级加农炮可以增强火力。注意！防御建筑在升级时不能开火！"
module: upgrade-home
imgFolder: home_buildings/0301
wiki: https://clashofclans.fandom.com/wiki/Cannon
canonical: /upgrade/0301-Cannon
---

<script setup>
const tableExtraInfoStandardMode = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
const tableExtraInfoGearUpMode = tableExtraInfoStandardMode;
</script>

- *如想查看由两个加农炮合成的跳弹加农炮，请访问 [跳弹加农炮](/upgrade/0313-Ricochet-Cannon)。*
- *如想查看由一个加农炮和一个箭塔合成的建筑，请访问：[复合机械塔](/upgrade/0317-Multi-Gear-Tower)。*
- *如想查看夜世界的加农炮和双管加农炮，请访问：[夜世界加农炮](/upgrade/1100-Cannon)、[夜世界双管加农炮](/upgrade/1101-Double-Cannon)。*
- *如想查看都城的加农炮，请访问：[都城加农炮](/upgrade/2201-Cannon)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">标准模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">连发模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 标准模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon21.png" imgAlt="加农炮（标准模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="未改装" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Cannon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Cannon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Cannon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Cannon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Cannon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Cannon10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Cannon11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Cannon12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Cannon13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Cannon14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Cannon15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Cannon16.png" />
        <UnitImg imgTitle="17 级" imgSrc="Cannon17.png" />
        <UnitImg imgTitle="18 级" imgSrc="Cannon18.png" />
        <UnitImg imgTitle="19 级" imgSrc="Cannon19.png" />
        <UnitImg imgTitle="20 级" imgSrc="Cannon20.png" />
        <UnitImg imgTitle="21 级" imgSrc="Cannon21.png" />
    </UnitImgGroup>
    <UnitImgGroup title="已改装，处于标准模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="7 级" imgSrc="Cannon7A.png" />
        <UnitImg imgTitle="8 级" imgSrc="Cannon8A.png" />
        <UnitImg imgTitle="9 级" imgSrc="Cannon9A.png" />
        <UnitImg imgTitle="10 级" imgSrc="Cannon10A.png" />
        <UnitImg imgTitle="11 级" imgSrc="Cannon11A.png" />
        <UnitImg imgTitle="12 级" imgSrc="Cannon12A.png" />
        <UnitImg imgTitle="13 级" imgSrc="Cannon13A.png" />
        <UnitImg imgTitle="14 级" imgSrc="Cannon14A.png" />
        <UnitImg imgTitle="15 级" imgSrc="Cannon15A.png" />
        <UnitImg imgTitle="16 级" imgSrc="Cannon16A.png" />
        <UnitImg imgTitle="17 级" imgSrc="Cannon17A.png" />
        <UnitImg imgTitle="18 级" imgSrc="Cannon18A.png" />
        <UnitImg imgTitle="19 级" imgSrc="Cannon19A.png" />
        <UnitImg imgTitle="20 级" imgSrc="Cannon20A.png" />
        <UnitImg imgTitle="21 级" imgSrc="Cannon21A.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的加农炮数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 4, 5 - 6,  7 - 9, 10, 11 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="1,     2,     3,      5,  6,       7,  3,  0" />
</BuildingNum>

在 16 级大本营，游戏引入合并建筑功能，这里的建筑数量指的是将所有可合并的建筑都合并后的数量。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="0.8 秒 1 发<sup>*</sup>" />
    <UnitProperty pKey="改装所需加农炮等级" pValue="7" />
    <UnitProperty pKey="改装所需夜世界双管加农炮等级" pValue="4" />
    <UnitProperty pKey="改装数量" pValue="仅限一个" />
    <UnitProperty pKey="改装时间" pValue="2" :isUpgradeTime="true" gpClass="building" />
    <UnitProperty pKey="改装费用" pValue="1M" :isUpgradeCost="true" resourceType="Gold" gpClass="building" />
</UnitProperties>

\* 加农炮改装前（标准模式）的攻速是 0.8 秒一次，改装后（连发模式）是 2.3 秒一轮。在连发模式下，4 连发期间每发 0.192 秒，之后停顿 1.76 秒。如果目标在加农炮还没打完 4 连发之前死亡， 导致加农炮没有发射全部 4 发炮弹时，每发没有射出去的炮弹会减少 0.2 秒攻击间隔。这里的 2.3 是这么算的：0.192 * (4 - 1) + 1.76 = 2.336 (秒) ≈ 2.3 (秒)。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStandardMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |   升级时间   |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |     ---     |        ---          |       ---      |
|   1  |     9   |    7.2  |   420  |   250   |  0, 0, 0, 5 |                     |        1       |
|   2  |    11   |    8.8  |   470  |    1k   |  0, 0, 0,30 |                     |        1       |
|   3  |    15   |   12    |   520  |    4k   |  0, 0, 2    |                     |        2       |
|   4  |    19   |   15.2  |   570  |   16k   |  0, 0,20    |                     |        3       |
|   5  |    25   |   20    |   620  |   50k   |  0, 0,30    |                     |        4       |
|   6  |    31   |   24.8  |   670  |   60k   |  0, 1       |                     |        5       |
|   7  |    40   |   32    |   730  |  100k   |  0, 2       |                     |        6       |
|   8  |    48   |   38.4  |   800  |  160k   |  0, 3       |                     |        7       |
|   9  |    56   |   44.8  |   880  |  250k   |  0, 3,30    |                     |        8       |
|  10  |    64   |   51.2  |   960  |  330k   |  0, 4       |                     |        8       |
|  11  |    74   |   59.2  |  1060  |  500k   |  0, 4,30    |                     |        9       |
|  12  |    85   |   68    |  1160  |  600k   |  0, 5       |                     |       10       |
|  13  |    95   |   76    |  1260  |  660k   |  0, 6       |                     |       10       |
|  14  |   100   |   80    |  1380  |    1M   |  0, 8       |                     |       11       |
|  15  |   105   |   84    |  1500  |  1.2M   |  0,10       |                     |       11       |
|  16  |   110   |   88    |  1620  |  1.3M   |  0,11       |                     |       12       |
|  17  |   115   |   92    |  1740  |  1.5M   |  0,12       |                     |       12       |
|  18  |   125   |  100    |  1870  |  1.8M   |  0,20       |                     |       13       |
|  19  |   135   |  108    |  2000  |    2M   |  1          |                     |       13       |
|  20  |   150   |  120    |  2150  |  2.6M   |  1,12       |                     |       14       |
|  21  |   160   |  128    |  2250  |    3M   |  2          |                     |       15       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 连发模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon21B.png" imgAlt="加农炮（连发模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="已改装，处于连发模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="7 级" imgSrc="Cannon7B.png" />
        <UnitImg imgTitle="8 级" imgSrc="Cannon8B.png" />
        <UnitImg imgTitle="9 级" imgSrc="Cannon9B.png" />
        <UnitImg imgTitle="10 级" imgSrc="Cannon10B.png" />
        <UnitImg imgTitle="11 级" imgSrc="Cannon11B.png" />
        <UnitImg imgTitle="12 级" imgSrc="Cannon12B.png" />
        <UnitImg imgTitle="13 级" imgSrc="Cannon13B.png" />
        <UnitImg imgTitle="14 级" imgSrc="Cannon14B.png" />
        <UnitImg imgTitle="15 级" imgSrc="Cannon15B.png" />
        <UnitImg imgTitle="16 级" imgSrc="Cannon16B.png" />
        <UnitImg imgTitle="17 级" imgSrc="Cannon17B.png" />
        <UnitImg imgTitle="18 级" imgSrc="Cannon18B.png" />
        <UnitImg imgTitle="19 级" imgSrc="Cannon19B.png" />
        <UnitImg imgTitle="20 级" imgSrc="Cannon20B.png" />
        <UnitImg imgTitle="21 级" imgSrc="Cannon21B.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的加农炮数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 4, 5 - 6,  7 - 9, 10, 11 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="1,     2,     3,      5,  6,       7,  3,  0" />
</BuildingNum>

在 16 级大本营，游戏引入合并建筑功能，这里的建筑数量指的是将所有可合并的建筑都合并后的数量。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="7 格 " />
    <UnitProperty pKey="攻速" pValue="2.3 秒 4 发<sup>*</sup>" />
    <UnitProperty pKey="改装所需加农炮等级" pValue="7" />
    <UnitProperty pKey="改装所需夜世界双管加农炮等级" pValue="4" />
    <UnitProperty pKey="改装数量" pValue="仅限一个" />
    <UnitProperty pKey="改装时间" pValue="2" :isUpgradeTime="true" gpClass="building" />
    <UnitProperty pKey="改装费用" pValue="1M" :isUpgradeCost="true" resourceType="Gold" gpClass="building" />
</UnitProperties>

\* 加农炮改装前（标准模式）的攻速是 0.8 秒一次，改装后（连发模式）是 2.3 秒一轮。在连发模式下，4 连发期间每发 0.192 秒，之后停顿 1.76 秒。如果目标在加农炮还没打完 4 连发之前死亡， 导致加农炮没有发射全部 4 发炮弹时，每发没有射出去的炮弹会减少 0.2 秒攻击间隔。这里的 2.3 是这么算的：0.192 * (4 - 1) + 1.76 = 2.336 (秒) ≈ 2.3 (秒)。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoGearUpMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |    ---    |        ---          |       ---      |
|   7  |    54   |   32    |   730  |  100k   |   0, 2    |                     |        6       |
|   8  |    64   |   38.4  |   800  |  160k   |   0, 3    |                     |        7       |
|   9  |    75   |   44.8  |   880  |  250k   |   0, 3,30 |                     |        8       |
|  10  |    86   |   51.2  |   960  |  330k   |   0, 4    |                     |        8       |
|  11  |   100   |   59.2  |  1060  |  500k   |   0, 4,30 |                     |        9       |
|  12  |   116   |   68    |  1160  |  600k   |   0, 5    |                     |       10       |
|  13  |   129   |   76    |  1260  |  660k   |   0, 6    |                     |       10       |
|  14  |   143   |   84    |  1380  |    1M   |   0, 8    |                     |       11       |
|  15  |   156   |   92    |  1500  |  1.2M   |   0,10    |                     |       11       |
|  16  |   162   |   96    |  1620  |  1.3M   |   0,11    |                     |       12       |
|  17  |   170   |  100    |  1740  |  1.5M   |   0,12    |                     |       12       |
|  18  |   175   |  104    |  1870  |  1.8M   |   0,20    |                     |       13       |
|  19  |   189   |  112    |  2000  |    2M   |   1       |                     |       13       |
|  20  |   202   |  120    |  2150  |  2.6M   |   1,12    |                     |       14       |
|  21  |   216   |  128    |  2250  |    3M   |   2       |                     |       15       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 9、11 ~ 12、14 ~ 16、18、20 ~ 21 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>6 ~ 16、18、20 ~ 21 级加农炮的升级费用降低。</TimelineRow>
        <TimelineRow>加农炮的改装费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>2、3、10、13、15、17、19 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>13、15、17、19 级加农炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，其中 2 个加农炮可以被合并为 1 个跳弹加农炮。</TimelineRow>
        <TimelineRow>8 ~ 9、12 ~ 21 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>15 ~ 21 级加农炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>14 ~ 21 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>16 ~ 21 级加农炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>14 ~ 19 级加农炮的每秒伤害降低。</TimelineRow>
        <TimelineRow>自本次更新后，连发模式秒伤 = 1.35 倍快速模式秒伤，标准模式次伤 = 连发模式次伤这两个规律不再成立。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，其中 4 个加农炮可以被合并为 2 个跳弹加农炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>12 ~ 20 级加农炮的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>16 ~ 19 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>16 ~ 19 级加农炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 21 级加农炮。</TimelineRow>
        <TimelineRow>12 ~ 20 级加农炮的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>8 ~ 19 级加农炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 20 级加农炮。</TimelineRow>
        <TimelineRow>2 ~ 14 级加农炮的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 19 级加农炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>18 级加农炮的生命值由 1860 调整到 1870。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 18 级加农炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>10 ~ 16 级加农炮的升级费用降低。</TimelineRow>
        <TimelineRow>7 ~ 13、16 级加农炮的升级时间减少。</TimelineRow>
        <TimelineRow>12 级大本营新增 17 级加农炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/02/22">
        <TimelineRow>10 ~ 16 级加农炮的伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>