---
title: "部落冲突 coc 骷髅飞桶升级数据"
navTitle: "骷髅飞桶"
shownTitle: "骷髅飞桶"
description: "鸟儿？飞机？都不是，这是坐在骷髅桶里的哈里、拉里、特里还有几个朋友，他们正飞向最近的建筑！"
module: upgrade-temp
imgFolder: temp/0e04
wiki: https://clashofclans.fandom.com/wiki/Skeleton_Barrel/Home_Village
canonical: /upgrade/0e04-Skeleton-Barrel
---

- *如想查看都城的同名临时兵种，请访问：[都城骷髅飞桶](/upgrade/2007-Skeleton-Barrel)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Barrel_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton_Barrel1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1.3 格/秒" />
    <UnitProperty pKey="骷髅投放频率" pValue="1 秒/次" />
    <UnitProperty pKey="首次投放时机" pValue="到达目标后 2.25 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="4" />
    <UnitProperty pKey="特殊技能" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="30" trainingSystem="legacy" />
</UnitProperties>

\* 部署骷髅飞桶后，它会走向最近的建筑并释放骷髅。如果在死亡前未成功释放骷髅，则在死亡时释放。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "trainingCost",
        "icon": "Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

|等级<sup>①</sup>| 伤害 |分裂出的<br>骷髅数量|训练费用<sup>②</sup>| 生命值|对应的<br>大本等级|
|       ---      |  --- |       ----       |        ---        |  ---  |      ----      |
|        1       |   96 |         8        |        2500       |  180  |        4       |
|        2       |  144 |         9        |        3000       |  216  |        6       |
|        3       |  216 |        10        |        3500       |  280  |        7       |
|        4       |  324 |        11        |        4000       |  390  |        8       |
|        5       |  486 |        12        |        4500       |  505  |        9       |
|        6       |  594 |        13        |        5000       |  690  |       10       |
|        7       |  708 |        14        |        5500       |  840  |       11       |
|        8       |  768 |        15        |        6000       |  940  |       12       |
</UnitTable>

① 表格中的“等级”对应游戏内显示的等级，骷髅飞桶没有 1 级。<br>
② 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。<br>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2020/10">
        <TimelineRow>该兵种第 2 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2018/10">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>