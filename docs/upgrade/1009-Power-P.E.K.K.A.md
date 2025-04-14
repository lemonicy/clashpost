---
title: "部落冲突 coc 夜世界雷霆皮卡（威能皮卡、超级皮卡）升级数据"
navTitle: "雷霆皮卡"
shownTitle: "雷霆皮卡（威能皮卡、超级皮卡）"
description: "这件强大的暗黑盔甲不断辐射出不稳定的能量，这些能量随时都可能挣脱盔甲的束缚！"
module: upgrade-bh
imgFolder: bh_tech/1009
wiki: https://clashofclans.fandom.com/wiki/Power_P.E.K.K.A
canonical: /upgrade/1009-Power-P.E.K.K.A
---

- *如想查看都城的雷霆皮卡（原超级皮卡），请访问：[都城雷霆皮卡](/upgrade/200a-Power-P.E.K.K.A)。*
- *如想查看家乡的皮卡超人，请访问：[皮卡超人](/upgrade/0009-P.E.K.K.A)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Power_P.E.K.K.A_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="13 - 15 级" imgSrc="Power_P.E.K.K.A13.png" />
        <UnitImg imgTitle="16 - 17 级" imgSrc="Power_P.E.K.K.A16.png" />
        <UnitImg imgTitle="18 - 19 级" imgSrc="Power_P.E.K.K.A18.png" />
        <UnitImg imgTitle="20 级" imgSrc="Power_P.E.K.K.A20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>雷霆皮卡的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" /> 
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="部队重量" pValue="22" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="10" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="8" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="能量过载" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="爆炸半径" pValue="2.5 格" />
    <UnitProperty pKey="击晕建筑的时间" pValue="0.1 秒" /> 
</UnitProperties> 

\* 能量过载：激活时会造成大爆炸，造成一定伤害。这个技能可以由玩家手动触发，如果手动触发了，死亡时就不会再有爆炸效果。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害|技能爆炸伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |    ---    |   ---   |   ---   |    ---   |           ---          |
|  13  |   420   |   756  |     920   |   3900  |    \    |     \    |            8           |
|  14  |   420   |   756  |    1060   |   3900  |   3.6M  |  4,12    |            8           |
|  15  |   460   |   828  |    1060   |   4290  |   3.8M  |  5,12    |            8           |
|  16  |   460   |   828  |    1200   |   4290  |     4M  |  5,12    |            8           |
|  17  |   500   |   900  |    1200   |   4719  |   4.6M  |  6       |            9           |
|  18  |   500   |   900  |    1350   |   4719  |   4.8M  |  6       |            9           |
|  19  |   560   |  1008  |    1350   |   5191  |   5.6M  |  6,12    |           10           |
|  20  |   560   |  1008  |    1500   |   5191  |   5.8M  |  6,12    |           10           |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>“超级皮卡”更名为“雷霆皮卡”。</TimelineRow>
        <TimelineRow>新增 19 - 20 级雷霆皮卡。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>现在雷霆皮卡的“能量过载”技能可以由玩家手动触发了，不过手动触发的话死亡时就没有爆炸效果了。</TimelineRow>
        <TimelineRow>雷霆皮卡的兵种重量由 25 减少到 22。</TimelineRow>
        <TimelineRow>雷霆皮卡的移动速度由 19（2.375 格/秒） 减少到 16（2 格/秒）。</TimelineRow>
        <TimelineRow>现在雷霆皮卡一解锁就是 13 级，你不需要从 1 级开始升了。如果更新前部队高于 13 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>