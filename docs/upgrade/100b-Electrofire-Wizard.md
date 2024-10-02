---
title: "部落冲突 coc 夜世界电火法师升级数据"
navTitle: "电火法师"
shownTitle: "电火法师"
description: "作为精通魔法的时尚达人，电火法师既可释放烈火焚烧单一目标，也可使用超强电流电击多重目标。"
module: upgrade-bh
imgFolder: bh_tech/100b
wiki: https://clashofclans.fandom.com/wiki/Electrofire_Wizard
canonical: /upgrade/100b-Electrofire-Wizard
---

<script setup>
const tableExtraInfoFireMode = [
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
const tableExtraInfoElectroMode = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];;
</script>

- *如想查看家乡的超级法师，请访问：[超级法师](/upgrade/0609-Super-Wizard)。*
- *如想查看都城的超级法师，请访问：[都城超级法师](/upgrade/2005-Super-Wizard)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">烈火模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">电击模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 烈火模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electrofire_Wizard_Fire_info.png" imgAlt="电火法师（烈火模式）" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="17 - 18 级" imgSrc="Electrofire_Wizard17_Fire.png" />
        <UnitImg imgTitle="19 - 20 级" imgSrc="Electrofire_Wizard19_Fire.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>电火法师的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2.8 格/秒" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="12" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="10" />
    <UnitProperty pKey="技能冷却时间" pValue="1.5 秒" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击速度" pValue="0.128 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="电击模式" />
    <UnitProperty pKey="技能类型" pValue="模式切换技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 烈火模式（默认）：射出随时间增加伤害的烈焰射线。电击模式：发射蓄能缓慢但可在多个目标间弹跳的雷电攻击。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoFireMode">

| 等级 | 初始伤害 |1.5 秒后伤害| 3 秒后伤害 |  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |     ---   |     ---   |    ---   |   ---   |    ---   |           ---         |
|  17  |   220   |     330   |     440   |   1100   |     \   |     \    |           10          |
|  18  |   220   |     330   |     440   |   1100   |   4.4M  |  6       |           10          |
|  19  |   253   |     380   |     506   |   1210   |   5.4M  |  6,12    |           10          |
|  20  |   253   |     380   |     506   |   1210   |   5.8M  |  6,12    |           10          |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 电击模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electrofire_Wizard_Electro_info.png" imgAlt="电火法师（电击模式）" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="17 - 18 级" imgSrc="Electrofire_Wizard17_Electro.png" />
        <UnitImg imgTitle="19 - 20 级" imgSrc="Electrofire_Wizard19_Electro.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>电火法师的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2.8 格/秒" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="12" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="10" />
    <UnitProperty pKey="技能冷却时间" pValue="1.5 秒" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="攻击速度" pValue="3.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="连锁距离" pValue="3 格" />
    <UnitProperty pKey="最大目标数" pValue="4" />
    <UnitProperty pKey="连锁延迟" pValue="0.416 秒" />
    <UnitProperty pKey="连锁衰减" pValue="20%" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="电击模式" />
    <UnitProperty pKey="技能类型" pValue="模式切换技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 烈火模式（默认）：射出随时间增加伤害的烈焰射线。电击模式：发射蓄能缓慢但可在多个目标间弹跳的雷电攻击。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoElectroMode">

| 等级 |第一个目标的<br>每秒伤害|第一个目标的<br>每次伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |         ---          |          ---         |    ---  |   ---   |    ---   |           ---         |
|  17  |         200          |          700         |   1100  |     \   |     \    |           10          |
|  18  |         218          |          763         |   1100  |   4.4M  |   6      |           10          |
|  19  |         218          |          763         |   1210  |   5.4M  |   6,12   |           10          |
|  20  |         234          |          819         |   1210  |   5.8M  |   6,12   |           10          |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界 10 本新兵种：电火法师。该兵种一解锁就是 17 级，你不需要从 1 级开始升。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>