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
        <UnitImg imgTitle="5 级" imgSrc="Spring_Trap5.png" />
    </UnitImgGroup>
    <UnitImgGroup title="未重新布置" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Spring_Trap1_unarmed.png" />
        <UnitImg imgTitle="3 - 5 级" imgSrc="Spring_Trap3_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4 - 5, 6 - 7, 8 - 11, 12, 13 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,     2,     4,      6,  8,       9" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="弹飞敌军" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="0.8 格" />
    <UnitProperty pKey="陷阱作用延时" pValue="0.42 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 |可被弹飞的<br>人口数| 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需大本等级 |
| ---- |        ---       |   ---   |    ---     |         ---        |     ---     |
|   1  |         10       |     2k  |    0       |                    |      4      |
|   2  |         12       |   130k  |    0, 2    |                    |      7      |
|   3  |         14       |   240k  |    0, 4    |                    |      8      |
|   4  |         16       |   350k  |    0, 6    |                    |      9      |
|   5  |         18       |   800k  |    0,12    |                    |     10      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
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