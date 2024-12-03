---
title: "部落冲突 coc 箭塔升级数据"
navTitle: "箭塔"
shownTitle: "箭塔"
description: "箭塔范围比加农炮远，而且还可以攻击空中目标。"
module: upgrade-home
imgFolder: home_buildings/0302
wiki: https://clashofclans.fandom.com/wiki/Archer_Tower
canonical: /upgrade/0302-Archer-Tower
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
const tableExtraInfoFastAttackMode = tableExtraInfoStandardMode;
</script>

- *如想查看由两个箭塔合成的多人箭塔，请访问 [多人箭塔](/upgrade/0314-Multi-Archer-Tower)。*
- *如想查看夜世界的箭塔，请访问：[夜世界箭塔](/upgrade/1102-Archer-Tower)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">标准模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">快速模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 标准模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_Tower21.png" imgAlt="箭塔（标准模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="未改装" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Archer_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Archer_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Archer_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Archer_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Archer_Tower5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Archer_Tower6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Archer_Tower7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Archer_Tower8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Archer_Tower9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Archer_Tower10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Archer_Tower11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Archer_Tower12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Archer_Tower13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Archer_Tower14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Archer_Tower15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Archer_Tower16.png" />
        <UnitImg imgTitle="17 级" imgSrc="Archer_Tower17.png" />
        <UnitImg imgTitle="18 级" imgSrc="Archer_Tower18.png" />
        <UnitImg imgTitle="19 级" imgSrc="Archer_Tower19.png" />
        <UnitImg imgTitle="20 级" imgSrc="Archer_Tower20.png" />
        <UnitImg imgTitle="21 级" imgSrc="Archer_Tower21.png" />
    </UnitImgGroup>
    <UnitImgGroup title="已改装，处于标准模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="10 级" imgSrc="Archer_Tower10A.png" />
        <UnitImg imgTitle="11 级" imgSrc="Archer_Tower11A.png" />
        <UnitImg imgTitle="12 级" imgSrc="Archer_Tower12A.png" />
        <UnitImg imgTitle="13 级" imgSrc="Archer_Tower13A.png" />
        <UnitImg imgTitle="14 级" imgSrc="Archer_Tower14A.png" />
        <UnitImg imgTitle="15 级" imgSrc="Archer_Tower15A.png" />
        <UnitImg imgTitle="16 级" imgSrc="Archer_Tower16A.png" />
        <UnitImg imgTitle="17 级" imgSrc="Archer_Tower17A.png" />
        <UnitImg imgTitle="18 级" imgSrc="Archer_Tower18A.png" />
        <UnitImg imgTitle="19 级" imgSrc="Archer_Tower19A.png" />
        <UnitImg imgTitle="20 级" imgSrc="Archer_Tower20A.png" />
        <UnitImg imgTitle="21 级" imgSrc="Archer_Tower21A.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的箭塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 3, 4, 5 - 6,  7, 8, 9, 10, 11 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="0,     1, 2,     3,  4, 5, 6,  7,       8,  4,  3" />
</BuildingNum>

在 16 级大本营，游戏引入合并建筑功能，这里的建筑数量指的是将所有可合并的建筑都合并后的数量。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.5 秒/次" />
    <UnitProperty pKey="改装所需箭塔等级" pValue="10" />
    <UnitProperty pKey="改装所需夜世界箭塔等级" pValue="6" />
    <UnitProperty pKey="改装数量" pValue="仅限一个" />
    <UnitProperty pKey="改装时间" pValue="7" :isUpgradeTime="true" gpClass="building" />
    <UnitProperty pKey="改装费用" pValue="4M" :isUpgradeCost="true" resourceType="Gold" gpClass="building" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStandardMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |    ---    |        ---          |       ---      |
|   1  |    11   |    5.5  |   380  |     1k  |   0, 0, 1 |                     |        2       |
|   2  |    15   |    7.5  |   420  |     2k  |   0, 0,15 |                     |        2       |
|   3  |    19   |    9.5  |   460  |     5k  |   0, 0,45 |                     |        3       |
|   4  |    25   |   12.5  |   500  |    20k  |   0, 3    |                     |        4       |
|   5  |    30   |   15    |   540  |    80k  |   0, 4    |                     |        5       |
|   6  |    35   |   17.5  |   580  |   150k  |   0, 5    |                     |        5       |
|   7  |    42   |   21    |   630  |   300k  |   0, 6    |                     |        6       |
|   8  |    48   |   24    |   690  |   480k  |   0, 8    |                     |        7       |
|   9  |    56   |   28    |   750  |   580k  |   0,10    |                     |        8       |
|  10  |    63   |   31.5  |   810  |   760k  |   0,12    |                     |        8       |
|  11  |    70   |   35    |   890  |     1M  |   0,14    |                     |        9       |
|  12  |    74   |   37    |   970  |   1.1M  |   0,16    |                     |       10       |
|  13  |    78   |   39    |  1050  |     2M  |   0,18    |                     |       10       |
|  14  |    82   |   41    |  1130  |   2.2M  |   0,20    |                     |       11       |
|  15  |    85   |   42.5  |  1230  |   2.5M  |   1       |                     |       11       |
|  16  |    90   |   45    |  1310  |     3M  |   1,12    |                     |       12       |
|  17  |   100   |   50    |  1390  |   3.5M  |   2       |                     |       12       |
|  18  |   110   |   55    |  1510  |     4M  |   2,12    |                     |       13       |
|  19  |   120   |   60    |  1600  |   4.5M  |   3       |                     |       13       |
|  20  |   135   |   67.5  |  1700  |     6M  |   3,12    |                     |       14       |
|  21  |   145   |   72.5  |  1800  |     8M  |   4       |                     |       15       |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 快速模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_Tower21B.png" imgAlt="箭塔（快速模式）"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="已改装，处于快速模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="10 级" imgSrc="Archer_Tower10B.png" />
        <UnitImg imgTitle="11 级" imgSrc="Archer_Tower11B.png" />
        <UnitImg imgTitle="12 级" imgSrc="Archer_Tower12B.png" />
        <UnitImg imgTitle="13 级" imgSrc="Archer_Tower13B.png" />
        <UnitImg imgTitle="14 级" imgSrc="Archer_Tower14B.png" />
        <UnitImg imgTitle="15 级" imgSrc="Archer_Tower15B.png" />
        <UnitImg imgTitle="16 级" imgSrc="Archer_Tower16B.png" />
        <UnitImg imgTitle="17 级" imgSrc="Archer_Tower17B.png" />
        <UnitImg imgTitle="18 级" imgSrc="Archer_Tower18B.png" />
        <UnitImg imgTitle="19 级" imgSrc="Archer_Tower19B.png" />
        <UnitImg imgTitle="20 级" imgSrc="Archer_Tower20B.png" />
        <UnitImg imgTitle="21 级" imgSrc="Archer_Tower21B.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的箭塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 3, 4, 5 - 6,  7, 8, 9, 10, 11 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="0,     1, 2,     3,  4, 5, 6,  7,       8,  4,  3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="攻速" pValue="0.25 秒/次" />
    <UnitProperty pKey="改装所需箭塔等级" pValue="10" />
    <UnitProperty pKey="改装所需夜世界箭塔等级" pValue="6" />
    <UnitProperty pKey="改装数量" pValue="仅限一个" />
    <UnitProperty pKey="改装时间" pValue="7" :isUpgradeTime="true" gpClass="building" />
    <UnitProperty pKey="改装费用" pValue="4M" :isUpgradeCost="true" resourceType="Gold" gpClass="building" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoFastAttackMode">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |    ---    |        ---          |       ---      |
|  10  |   126   |   31.5  |   810  |   760k  |    0,12   |                     |        8       |
|  11  |   140   |   35    |   890  |     1M  |    0,14   |                     |        9       |
|  12  |   148   |   37    |   970  |   1.1M  |    0,16   |                     |       10       |
|  13  |   156   |   39    |  1050  |     2M  |    0,18   |                     |       10       |
|  14  |   164   |   41    |  1130  |   2.2M  |    0,20   |                     |       11       |
|  15  |   170   |   42.5  |  1230  |   2.5M  |    1      |                     |       11       |
|  16  |   180   |   45    |  1310  |     3M  |    1,12   |                     |       12       |
|  17  |   200   |   50    |  1390  |   3.5M  |    2      |                     |       12       |
|  18  |   220   |   55    |  1510  |     4M  |    2,12   |                     |       13       |
|  19  |   240   |   60    |  1600  |   4.5M  |    3      |                     |       13       |
|  20  |   270   |   67.5  |  1700  |     6M  |    3,12   |                     |       14       |
|  21  |   290   |   72.5  |  1800  |     8M  |    4      |                     |       15       |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
注：箭塔改装后每次伤害没变，但是每秒伤害和攻速变了。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，其中 2 个箭塔可以被合并为 1 个多人箭塔。</TimelineRow>
        <TimelineRow>17 本新解锁一个箭塔。</TimelineRow>
        <TimelineRow>7 ~ 9、12、14、16、18、20 ~ 21 级箭塔的升级时间减少。</TimelineRow>
        <TimelineRow>16 ~ 21 级箭塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>14 ~ 21 级箭塔的升级时间减少。</TimelineRow>
        <TimelineRow>16 ~ 18、20 ~ 21 级箭塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>12 ~ 20 级箭塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/09">
        <TimelineRow>16 ~ 17 级箭塔的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，其中 4 个箭塔可以被合并为 2 个多人箭塔。</TimelineRow>
        <TimelineRow>5 ~ 21 级箭塔的升级时间减少。</TimelineRow>
        <TimelineRow>6 ~ 12、14 ~ 15、20 ~ 21 级箭塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>16 ~ 19 级箭塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 21 级箭塔。</TimelineRow>
        <TimelineRow>12 ~ 20 级箭塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>16 ~ 17 级箭塔的伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>8 ~ 19 级箭塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>14 本新增 20 级箭塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>8 ~ 13 级箭塔的升级费用降低。</TimelineRow>
        <TimelineRow>2、5、7、9 ~ 16 级箭塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/01/20">
        <TimelineRow>修复了改装后的箭塔首发箭矢射出位置不合理的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本新增 19 级箭塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>13 本新增 18 级箭塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>10 ~ 16 级箭塔的升级费用降低。</TimelineRow>
        <TimelineRow>6 ~ 13、16 级箭塔的升级时间减少。</TimelineRow>
        <TimelineRow>12 级大本营新增 17 级箭塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/02/22">
        <TimelineRow>10 ~ 16 级箭塔的伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>