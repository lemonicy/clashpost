---
title: "部落冲突 coc 暗黑重油钻井（黑水采集器）升级数据"
navTitle: "暗黑重油钻井"
shownTitle: "暗黑重油钻井（黑水采集器）"
description: "建筑工人们终于找到了提炼纯净暗黑重油的方法，这是一种非常稀有的魔法物质。"
module: upgrade-home
imgFolder: home_buildings/0403
wiki: https://clashofclans.fandom.com/wiki/Dark_Elixir_Drill
canonical: /upgrade/0403-Dark-Elixir-Drill
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Elixir_Drill11.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dark_Elixir_Drill1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dark_Elixir_Drill2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dark_Elixir_Drill3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dark_Elixir_Drill4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dark_Elixir_Drill5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dark_Elixir_Drill6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dark_Elixir_Drill7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Dark_Elixir_Drill8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Dark_Elixir_Drill9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Dark_Elixir_Drill10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Dark_Elixir_Drill11.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7, 8, 9 - 18" />
    <BuildingNumRow title="建筑数量" num="    0, 1, 2,      3" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="掠夺比例" pValue="75% (无上限)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "number",
        "icon": "Dark_Elixir",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 8,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 9,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每小时产量|采集器<br>容量<sup>*</sup>|填满容量<br>所需时间|出现收集标志<br>时的储量|每个采集器<br>提速所需宝石|  生命值  | 升级费用  | 升级时间|升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |  ----   |           ---           |        ---       |          ---          |          ---           |    ---  |   ---    | ------  |        ---         |        ---      |
|   1  |    20   |           160           |    0, 8          |            1          |            7           |    800  |   180k   |   0, 4  |                    |         7       |
|   2  |    30   |           300           |    0,10          |            1          |           10           |    860  |   270k   |   0, 6  |                    |         7       |
|   3  |    45   |           540           |    0,12          |            1          |           15           |    920  |   540k   |   0,12  |                    |         7       |
|   4  |    60   |           840           |    0,14          |            2          |           20           |    980  |   900k   |   0,18  |                    |         9       |
|   5  |    80   |          1280           |    0,16          |            2          |           25           |   1060  |   1.2M   |   1     |                    |         9       |
|   6  |   100   |          1800           |    0,18          |            3          |           30           |   1160  |   1.8M   |   1,12  |                    |         9       |
|   7  |   120   |          2400           |    0,20          |            4          |           35           |   1280  |   2.1M   |   1,18  |                    |        10       |
|   8  |   140   |          3000           |    0,21,25,43    |            5          |           40           |   1380  |   2.4M   |   2     |                    |        11       |
|   9  |   160   |          3600           |    0,22,30       |            6          |           45           |   1480  |   3.7M   |   2,12  |                    |        12       |
|  10  |   180   |          4200           |    0,23,20       |            7          |           50           |   1550  |   5.3M   |   3     |                    |        14       |
|  11  |   200   |          4600           |    0,23           |           8          |           55           |   1600  |   12M    |   6     |                    |        16       |
| ⚡1  |   209   |          4807           |    0,23          |            8          |           55           |   1600  |   5.1M   |   3     |                    |        18       |
| ⚡2  |   218   |          5014           |    0,23          |            8          |           55           |   1600  |   4.5M   |   4     |                    |        18       |
| ⚡3  |   218   |          5014           |    0,23          |            8          |           55           |   1650  |   3.9M   |   5     |                    |        18       |
</UnitTable>

\* 采集器容量满后将停止工作，直到玩家收集采集器内的资源。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>新增 11 级暗黑重油钻井，16 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>9 ~ 10 级暗黑重油钻井的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 5、7 ~ 10 级暗黑重油钻井的升级费用降低。</TimelineRow>
        <TimelineRow>7 ~ 10 级暗黑重油钻井的升级时间减少。</TimelineRow>       
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>1 ~ 6、9 级暗黑重油钻井的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>超级充能推出，暗黑重油钻井是第一批可以充能的建筑之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>新增 10 级暗黑重油钻井，14 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>新增 9 级暗黑重油钻井，12 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>所有等级暗黑重油钻井的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>新增 8 级暗黑重油钻井，11 本可解锁。</TimelineRow>
        <TimelineRow>9 本（之前是 10 本）即可建造第 3 个暗黑重油钻井。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>2 ~ 7 级暗黑重油钻井的升级费用降低。</TimelineRow>
        <TimelineRow>所有等级暗黑重油钻井的升级时间减少。</TimelineRow>       
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>