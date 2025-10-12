---
title: "部落冲突 coc 隐形弹簧升级数据"
navTitle: "隐形弹簧"
shownTitle: "隐形弹簧"
description: "曾经有一个精妙的弹簧摆在我的面前，我没有看见，然后，就没有然后了！"
module: upgrade-home
imgFolder: home_buildings/0381
wiki: https://clashofclans.fandom.com/wiki/Spring_Trap
canonical: /upgrade/0381-Spring-Trap
---

- 如想查看夜世界的隐形弹簧，请访问：[夜世界隐形弹簧](/upgrade/1181-Spring-Trap)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spring_Trap_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="常规模型" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Spring_Trap1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Spring_Trap3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Spring_Trap5.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Spring_Trap7.png" />
        <UnitImg imgTitle="9 - 10 级" imgSrc="Spring_Trap9.png" />
        <UnitImg imgTitle="11 - 12 级" imgSrc="Spring_Trap11.png" />
    </UnitImgGroup>
    <UnitImgGroup title="未重新布置" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Spring_Trap1_unarmed.png" />
        <UnitImg imgTitle="3 - 6 级" imgSrc="Spring_Trap3_unarmed.png" />
        <UnitImg imgTitle="7 - 12 级" imgSrc="Spring_Trap7_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4 - 5, 6 - 7, 8 - 11, 12, 13 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,     2,     4,      6,  8,       9" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

2025/10 更新后，隐形弹簧重做。当前版本隐形弹簧的机制比较复杂，具体如下：

1. 隐形弹簧只会锁定作用范围内占用人口最大的单个地面部队。
2. 隐形弹簧对部队的作用机制如下：
    - 如果部队的占用人口数**未超出**弹簧弹射能力，无论该部队的剩余生命值是多少，都会被直接弹飞；
    - 如果部队的占用人口数**超出了**弹簧弹射能力，且部队的**剩余生命值足够**，可以承受弹簧的高额伤害，则该部队会被击晕并受到高额伤害；
    - 如果部队的占用人口数**超出了**弹簧弹射能力，且部队的**剩余生命值过低**，无法承受弹簧的高额伤害，则该部队会被直接弹飞；
3. 隐形弹簧对英雄、战宠和攻城机器的作用机制与部队类似，但它们不会被弹出地图，而是会播放常规的死亡动画。
    - 隐形弹簧可以对英雄、战宠和攻城机器造成**一半伤害**。
4. 如果同一部队在同一位置多次触发隐形弹簧，伤害不会叠加。
5. [大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止小单位部队被隐形弹簧弹飞，也无法使部队免疫弹簧的击退效果，但可以免疫大单位部队受到的伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="弹飞敌军或对敌军造成高额伤害" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="1 格" />
    <UnitProperty pKey="作用半径" pValue="2 格" />
    <UnitProperty pKey="陷阱作用延时" pValue="无" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 |可弹飞的最高<br>部队人口数|对大单位<br>部队的伤害| 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需大本等级 |
| ---- |           ---          |         ---        |   ---   |     ---    |         ---        |     ---     |
|   1  |            10          |           0        |     2k  |     0      |                    |       4     |
|   2  |            12          |         250        |   130k  |     0, 2   |                    |       7     |
|   3  |            14          |         300        |   240k  |     0, 4   |                    |       8     |
|   4  |            16          |         350        |   350k  |     0, 6   |                    |       9     |
|   5  |            18          |         400        |   800k  |     0, 8   |                    |      10     |
|   6  |            18          |         500        |     1M  |     0,12   |                    |      11     |
|   7  |            18          |         600        |   1.7M  |     1      |                    |      12     |
|   8  |            18          |         750        |     2M  |     1,12   |                    |      13     |
|   9  |            18          |         900        |     3M  |     2      |                    |      14     |
|  10  |            18          |        1050        |     4M  |     2,12   |                    |      15     |
|  11  |            18          |        1200        |     6M  |     4,12   |                    |      16     |
|  12  |            18          |        1300        |    13M  |     9,12   |                    |      17     |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>隐形弹簧重做，现在弹簧有 12 个等级了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级隐形弹簧的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 4 级隐形弹簧的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>4 级隐形弹簧的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级隐形弹簧的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 5 级隐形弹簧的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>5 级隐形弹簧的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>4 ~ 5 级隐形弹簧的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级隐形弹簧的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增一个隐形弹簧。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>3 ~ 5 级隐形弹簧的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/02/28">
        <TimelineRow>隐形弹簧的触发半径由 0.7 格调整为 0.8 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>所有等级隐形弹簧可以弹飞的人口数减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>