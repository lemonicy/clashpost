---
title: "部落冲突 coc 龙骑士升级数据"
navTitle: "龙骑士"
shownTitle: "龙骑士"
description: "这台热衷破坏的飞行机器很乐意，甚至是非常兴奋能够摧毁范围内的任何防御建筑。坐在里面的骷髅兵发誓说他绝不会碰那些控制装置。"
module: upgrade-home
imgFolder: home_tech/000e
wiki: https://clashofclans.fandom.com/wiki/Dragon_Rider
canonical: /upgrade/000e-Dragon-Rider
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dragon_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dragon_Rider1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dragon_Rider2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dragon_Rider3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dragon_Rider4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dragon_Rider5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dragon_Rider6.png" imgHd="Dragon_Rider6_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="25" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="死亡伤害半径" pValue="2 格" />
    <UnitProperty pKey="死亡伤害延时" pValue="0.6 秒" />
    <UnitProperty pKey="所需训练营等级" pValue="15" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="13,13,39000,Elixir" :isDonationCost="true" />
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

| 等级 |  每秒伤害 | 每次伤害 | 死亡伤害 | 生命值 | 升级花费| 升级时间 |所需实验室<br>等级|所需<br>大本等级|
| ---- |   ----   |   ----  |   ----   |  ---- |   ----  |   ----  |       ----      |     ----      |
|   1  |    340   |    408  |    700   |  4100 |      \  |   \     |         1       |      13       |
|   2  |    370   |    444  |    800   |  4400 |   7.5M  |   6     |        11       |      13       |
|   3  |    400   |    480  |    900   |  4700 |    12M  |   8     |        12       |      14       |
|   4  |    430   |    516  |   1000   |  5100 |  14.5M  |   9     |        14       |      16       |
|   5  |    470   |    564  |   1100   |  5600 |   19M  |  10,6   |        15       |      17       |
|   6  |    520   |    624  |   1200   |  6200 |  29.5M  |  15,12  |        16       |      18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，并在 18 本新增 6 级龙骑士。</TimelineRow>
        <TimelineRow>5 级龙骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>2 ~ 3 级龙骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/30">
        <TimelineRow>4 ~ 5 级龙骑士的生命值增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 4 级龙骑士的升级时间减少。</TimelineRow>
        <TimelineRow>4 级龙骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>龙骑士的训练时间由 4:10 改为 3:30</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 5 级龙骑士。</TimelineRow>
        <TimelineRow>2 ~ 4 级龙骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 4 级龙骑士。</TimelineRow>
        <TimelineRow>3 级龙骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>2 级龙骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 3 级龙骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/01/20">
        <TimelineRow>2 ~ 3 级龙骑士的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>龙骑士的射程降低 0.5 格。射程的降低意味着龙骑士需要更加靠近攻击目标才能发起远程攻击。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>13 本可解锁新兵种：龙骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>