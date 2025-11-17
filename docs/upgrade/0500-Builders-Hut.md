---
title: "部落冲突 coc 建筑工人小屋升级数据"
navTitle: "建筑工人小屋"
shownTitle: "建筑工人小屋"
description: "没有建筑工人一切都免谈！您可以雇佣多个建筑工人同时开始多个项目的建造或升级，或者使用宝石加快施工速度。"
module: upgrade-home
imgFolder: home_buildings/0500
wiki: https://clashofclans.fandom.com/wiki/Builder%27s_Hut
canonical: /upgrade/0500-Builders-Hut
---

- *如想查看村庄内类似于建筑工人小屋的另一种建筑，请访问：[小博木屋（巴布小屋）](/upgrade/0501-B.O.Bs-Hut)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Builders_Hut7_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="日常状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Builders_Hut1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Builders_Hut2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Builders_Hut3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Builders_Hut4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Builders_Hut5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Builders_Hut6.png" imgHd="Builders_Hut6_hd.png" />
        <UnitImg imgTitle="7 级" imgSrc="Builders_Hut7.png" imgHd="Builders_Hut7_hd.png" />
    </UnitImgGroup>
    <UnitImgGroup title="激活状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Builders_Hut1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Builders_Hut2_Active.png" />
        <UnitImg imgTitle="3 级" imgSrc="Builders_Hut3_Active.png" />
        <UnitImg imgTitle="4 级" imgSrc="Builders_Hut4_Active.png" />
        <UnitImg imgTitle="5 级" imgSrc="Builders_Hut5_Active.png" />
        <UnitImg imgTitle="6 级" imgSrc="Builders_Hut6_Active.png" />
        <UnitImg imgTitle="7 级" imgSrc="Builders_Hut7_Active.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2 - 17" />
    <BuildingNumRow title="建筑数量" num="2,      5" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 建筑工人小屋的建造不限制大本营等级，也就是说你可以在刚注册游戏账号时就买够 5 个建筑工人。
2. 2021 年 4 月更新后，建筑工人小屋可以升级了。升级后，建筑工人小屋自带武器，可以反击了，同时建筑工人会在战斗过程中围绕受损的建筑敲敲打打，尽力修复建筑。
3. **激活后的建筑工人小屋属于防御建筑**，[气球兵](/upgrade/0005-Balloon)、[野猪骑士](/upgrade/0081-Hog-Rider) 等兵种会优先攻击它。
4. 尽管建筑工人在战场上不会有生命危险，也不能被进攻方的部队锁定为目标，但是**法术可以对他造成影响。**[毒药法术](/upgrade/0180-Poison-Spell) 会减缓他修复建筑的速度，[冰冻法术](/upgrade/0104-Freeze-Spell)
   会暂停他的修复行为。[雷电法术](/upgrade/0100-Lightning-Spell) 会让他重置修复的目标。
5. 建筑工人小屋被摧毁后，建筑工人将停止修复建筑。
6. **多个建筑工人可以同时修复一个建筑**，同时修复时效率会降低，衰减机制同 [治疗单位的衰减](/p/6925)。
7. 建筑工人会优先修复自己的小屋，其次修复离自己最近的建筑。如果你想玩闪震，但是你要打的建筑旁边有工人小屋，那么你需要先放 [地震](/upgrade/0181-Earthquake-Spell)
   再放闪电。因为放了地震之后工人小屋残血了，建筑工人会先修自己的房子，这时候你就有充足的时间放闪电了。
8. 即使工人正在升级建筑，战斗过程中他仍然会修复建筑。
9. 当你解锁第 6 个工人后，村庄内会多出一个类似于建筑工人小屋的建筑，但那实际上是 [小博木屋](/upgrade/0501-B.O.Bs-Hut)。战斗过程中，小博**不会**像其他建筑工人一样修复建筑。关于第 6 个工人的解锁条件，请参考 [这篇文章](/p/977)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="建筑工人小屋的最大数量" pValue="5" />
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="工人小屋的攻速" pValue="0.4 秒/次" />
    <UnitProperty pKey="防守时工人的移动速度" pValue="3.5 秒/格" />
    <UnitProperty pKey="工人的修复速度" pValue="0.75 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 8,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |每秒<br>修复值|每次敲锤子<br>的修复值| 生命值 | 升级费用 | 升级时间|升级后可<br>获得的经验|所需<br>大本等级|
| ---- |  ----   |   ---   |     ---     |         ---         |  ---  |   ---   |   ---   |         ---        |      ---      |
|   1  |     0   |     0   |       0     |         0           |   250 |  见下方  |   0     |                    |      1        |
|   2  |    80   |    32   |      50     |        37.5         |  1000 |     3M  |   2     |                    |      14       |
|   3  |   100   |    40   |      60     |        45           |  1300 |     4M  |   3     |                    |      14       |
|   4  |   120   |    48   |      70     |        52.5         |  1600 |     6M  |   4     |                    |      14       |
|   5  |   135   |    54   |      80     |        60           |  1800 |     7M  |   5     |                    |      15       |
|   6  |   150   |    60   |      85     |        63.75        |  1900 |     8M  |   5,12  |                    |      16       |
|   7  |   165   |    66   |      90     |        67.5         |  2000 |  15.5M  |   9,12  |                    |      17       |
| ⚡1  |   172   |   68.8  |      90     |        67.5         |  2000 |    10M  |   4     |                    |      17       |
| ⚡2  |   172   |   68.8  |      90     |        67.5         |  2050 |     5M  |   6     |                    |      17       |
</UnitTable>

<SmallTitle>新建费用</SmallTitle>

<Table>

| 建筑工人小屋数量 |           建造所需宝石             |
|      ----       |              ----                |
|     第 1 个     |      无（玩家注册账号后有一个）     |
|     第 2 个     | 250（新手教程中要求玩家必须购买一个）|
|     第 3 个     |              500                  |
|     第 4 个     |             1000                  |
|     第 5 个     |             2000                  |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>7 级建筑工人小屋的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>2 ~ 6 级建筑工人小屋的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6 级建筑工人小屋的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>17 本新增 7 级建筑工人小屋。</TimelineRow>
        <TimelineRow>2 ~ 6 级建筑工人小屋的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>建筑工人小屋的充能时间和充能费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 6 级建筑工人小屋的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>超级充能推出，建筑工人小屋是第一批可以充能的建筑之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级建筑工人小屋的升级时间减少。</TimelineRow>
        <TimelineRow>5 级建筑工人小屋的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>16 本新增 6 级建筑工人小屋。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级建筑工人小屋的升级费用减少。</TimelineRow>
        <TimelineRow>5 级建筑工人小屋的升级时间 14 天 12 小时 减少至 14 天 6 小时。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 5 级建筑工人小屋。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级建筑工人小屋的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>3/4 级的建筑工人小屋加入防守时，建筑工人的每秒修复值从 55/60 提升至 60/70。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/29">
        <TimelineRow>建筑工人小屋的攻击半径从 6 格增加到 7 格。</TimelineRow>
        <TimelineRow>防守状态下，建筑工人的移动速度从 24 提升到 28。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>从 14 本开始，建筑工人小屋可以升级了，升级后建筑工人会在战斗时修复建筑。此外，升级后建筑工人小屋将变成防御建筑，气球兵、野猪骑士等兵种会优先攻击它。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>