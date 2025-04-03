---
title: "部落冲突 coc 气球兵升级数据"
navTitle: "气球兵"
shownTitle: "气球兵"
description: "这些乘着气球的高级骷髅兵对于摧毁敌人的防御乐此不疲。精心部署气球兵，他们将为您扫除各种障碍！"
module: upgrade-home
imgFolder: home_tech/0005
wiki: https://clashofclans.fandom.com/wiki/Balloon
canonical: /upgrade/0005-Balloon
---

- *如想查看该兵种的强化版本，请访问：[火箭气球兵（超球）](/upgrade/060b-Rocket-Balloon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Balloon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Balloon1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Balloon3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Balloon5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Balloon6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Balloon7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Balloon8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Balloon9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Balloon10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Balloon11.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害 (仅地面)" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1.3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="3 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.75 秒" />
    <UnitProperty pKey="攻击距离" pValue="0 格 (建筑头顶)" />
    <UnitProperty pKey="普攻伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="死亡伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="死亡伤害延时" pValue="0.146 秒" />
    <UnitProperty pKey="所需训练营等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="4" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,9000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害|死亡<br>溅射伤害|生命值 | 升级花费|  升级时间  |所需<br>实验室等级|所需大本等级|
| ---- |   ----   |   ----  |     ----    |  ---- |   ----  |    ----   |      ----       |   ----    |
|   1  |     25   |    75   |      25     |   150 |      \  |       \   |        1        |     4     |
|   2  |     32   |    96   |      32     |   180 |   100k  |    0, 4   |        2        |     4     |
|   3  |     48   |   144   |      48     |   216 |   400k  |    0, 6   |        4        |     6     |
|   4  |     72   |   216   |      72     |   280 |   720k  |    0,18   |        5        |     7     |
|   5  |    108   |   324   |     108     |   390 |   1.3M  |    1      |        6        |     8     |
|   6  |    162   |   486   |     162     |   545 |  2.75M  |    3      |        7        |     9     |
|   7  |    198   |   594   |     214     |   690 |   4.4M  |    3,12   |        9        |    11     |
|   8  |    236   |   708   |     268     |   840 |     5M  |    4      |       10        |    12     |
|   9  |    256   |   768   |     322     |   940 |     7M  |    5      |       11        |    13     |
|  10  |    276   |   828   |     352     |  1040 |    10M  |    7,12   |       12        |    14     |
|  11  |    290   |   870   |     375     |  1140 |    14M  |    8,12   |       14        |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 3、9 ~ 11 级气球兵的升级时间减少。</TimelineRow>
        <TimelineRow>2、7、9、11 级气球兵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>6 ~ 11 级气球兵的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 11 级气球兵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 11 级气球兵。</TimelineRow>
        <TimelineRow>7 ~ 10 级气球兵的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 5 级气球兵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 ~ 9 级气球兵的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级气球兵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>7 ~ 10 级气球兵的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 8 级气球兵的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8 级气球兵的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>14 本新增 10 级气球兵。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>6 级气球兵的升级费用降低。</TimelineRow>
        <TimelineRow>3、6、7 级气球兵的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，新增 9 级气球兵。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>5 ~ 7 级气球兵的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 3 级气球兵的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>