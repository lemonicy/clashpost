---
title: "部落冲突 coc 夜世界野猪飞骑（飞猪骑士）升级数据"
navTitle: "野猪飞骑"
shownTitle: "野猪飞骑（飞猪骑士）"
description: "当之无愧的空中骑士！他们是翻越城墙的专家，但不太擅长平稳着陆，容易撞上建筑。"
module: upgrade-bh
imgFolder: bh_tech/100a
wiki: https://clashofclans.fandom.com/wiki/Hog_Glider
canonical: /upgrade/100a-Hog-Glider
---

<script setup>
const tableExtraGliderInfo = [
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
];
</script>

- *如想查看家乡的野猪骑士，请访问：[野猪骑士](/upgrade/0081-Hog-Rider)。*
- *如想查看都城的野猪突袭队，请访问：[都城野猪突袭队](/upgrade/200b-Hog-Raiders)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">野猪飞骑</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">野猪骑士</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 野猪飞骑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Glider_info.png" imgAlt="野猪飞骑"
    description="当之无愧的空中骑士！他们是翻越城墙的专家，但不太擅长平稳着陆，容易撞上建筑。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="15 - 16 级" imgSrc="Hog_Glider15.png" />
        <UnitImg imgTitle="17 级" imgSrc="Hog_Glider17.png" />
        <UnitImg imgTitle="18 级" imgSrc="Hog_Glider18.png" />
        <UnitImg imgTitle="19 级" imgSrc="Hog_Glider19.png" />
        <UnitImg imgTitle="20 级" imgSrc="Hog_Glider20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>野猪飞骑的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" /> 
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="撞击时机" pValue="到达目标后 0.2 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="2" />
    <UnitProperty pKey="所需训练营等级" pValue="11" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="9" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="奇袭俯冲" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="撞击目标后可让其瘫痪几秒" />
</UnitProperties> 

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraGliderInfo">

| 等级 | 撞击伤害 | 击晕时长|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |   ---   |   ---   |    ---   |           ---          |
|  15  |   180   |   5 秒 |    600  |     \   |     \    |            9           |
|  16  |   220   |   5 秒 |    650  |     4M  |  5,12    |            9           |
|  17  |   220   |   5 秒 |    650  |   4.2M  |  6       |            9           |
|  18  |   220   |   6 秒 |    650  |   4.4M  |  6       |            9           |
|  19  |   220   |   6 秒 |    650  |   5.4M  |  6,12    |           10           |
|  20  |   260   |   6 秒 |    700  |   5.8M  |  6,12    |           10           |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 野猪骑士 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Rider_info.png" imgAlt="野猪骑士"
    description="滑翔翼被摧毁后，战场上将出现一人一猪两位勇士，他们可以轻松跃过城墙，继续为您战斗。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="15 - 16 级" imgSrc="Hog_Rider15.png" />
        <UnitImg imgTitle="17 级" imgSrc="Hog_Rider17.png" />
        <UnitImg imgTitle="18 级" imgSrc="Hog_Rider18.png" />
        <UnitImg imgTitle="19 级" imgSrc="Hog_Rider19.png" />
        <UnitImg imgTitle="20 级" imgSrc="Hog_Rider20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>野猪骑士的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="兵种重量" pValue="12" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" /> 
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<Table>

| 等级 | 每秒伤害 | 每次伤害|  生命值  |
| ---- |   ---   |   ---  |   ---   |
|  15  |   112   |   112  |   1267  |
|  16  |   112   |   112  |   1267  |
|  17  |   125   |   125  |   1393  |
|  18  |   125   |   125  |   1393  |
|  19  |   139   |   139  |   1533  |
|  20  |   139   |   139  |   1533  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级野猪飞骑。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>现在野猪飞骑一解锁就是 15 级，你不需要从 1 级开始升了。如果更新前部队高于 15 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>夜世界所有空军的攻击距离减少 0.5 格（蝙蝠除外）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>18 级野猪飞骑分裂后的野猪骑士的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，新兵种：野猪飞骑。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>