---
title: "部落冲突 coc 飓风陷阱（旋风）升级数据"
navTitle: "飓风陷阱"
shownTitle: "飓风陷阱（旋风）"
description: "飞沙走石会造成皮肉伤，而飓风陷阱还能让敌人晕头转向！把飓风陷阱埋在地下，它产生的漩涡能把敌军卷至飓风中心，阻挡他们的进攻。"
module: upgrade-home
imgFolder: home_buildings/0386
wiki: https://clashofclans.fandom.com/wiki/Tornado_Trap
canonical: /upgrade/0386-Tornado-Trap
---

- 本页内容不是空中炸弹，如想查看空中炸弹的数据，请访问：[空中炸弹](/upgrade/0382-Air-Bomb)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Tornado_Trap_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Tornado_Trap1.png" />
        <UnitImg imgTitle="2 - 3 级" imgSrc="Tornado_Trap2.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 10, 11 - 17" />
    <BuildingNumRow title="建筑数量" num="     0,       1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 飓风陷阱可以让部队转圈，也可以对部队造成少量伤害，但不能阻止部队发动攻击。
2. [掘地矿工](/upgrade/000b-Miner)、[超级矿工](/upgrade/060e-Super-Miner)、[地兽](/upgrade/0285-Diggy) 和 [攻城钻机](/upgrade/0246-Battle-Drill) 能免疫飓风陷阱的转圈效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="让范围内的部队转圈，并造成少量范围伤害" />
    <UnitProperty pKey="作用目标" pValue="地面和空中目标 (矿工除外)" />
    <UnitProperty pKey="触发半径" pValue="3 格" />
    <UnitProperty pKey="作用半径" pValue="3 格" />
    <UnitProperty pKey="每秒伤害" pValue="8 (近似值)" />
    <UnitProperty pKey="陷阱作用延时" pValue="0.4 秒" />
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

| 等级 | 总伤害 |陷阱<br>持续时间| 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |  ---  |      ---      |    ---   |  ---    |         ---        |      ---      |
|   1  |   39  |      5 秒     |   1.8M   |    0    |                    |       11      |
|   2  |   47  |      6 秒     |     2M   |    1    |                    |       11      |
|   3  |   55  |      7 秒     |   2.5M   |    2    |                    |       12      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 3 级飓风陷阱的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 3 级飓风陷阱的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 级飓风陷阱的建造费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>