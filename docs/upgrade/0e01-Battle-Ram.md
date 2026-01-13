---
title: "部落冲突 coc 野蛮人攻城槌升级数据"
navTitle: "野蛮人攻城槌"
shownTitle: "野蛮人攻城槌"
description: "四名野蛮人在前方进行一场大型圆木竞赛，以击倒目标，如果他们连接起来，会造成大量额外伤害；然后他们用剑继续战斗！"
module: upgrade-temp
imgFolder: temp_troops/0e01
wiki: https://clashofclans.fandom.com/wiki/Battle_Ram
canonical: /upgrade/0e01-Battle-Ram
---

- *如想查看都城的同名兵种，请访问：[野蛮人攻城槌](/upgrade/2003-Battle-Ram)*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">野蛮人攻城槌</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">野蛮人</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 图片是公共部分 ↓↓↓ -->
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Ram_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Battle_Ram1.png" />
    </UnitImgGroup>
</Panel>

<!-- ↓↓↓ 野蛮人攻城槌 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="城墙 (40 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="3.75 格/秒" />
    <UnitProperty pKey="首次出手时机" pValue="到达目标后 0.1 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />  
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="特殊技能" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="爆出的野蛮人数量" pValue="4" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

\* 野蛮人攻城锤攻击后会分裂为 4 个野蛮人。因为它攻击一次之后就会分裂，所以该兵种没有攻速和每秒伤害的概念。<br>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每次伤害 |对墙<br>每次伤害| 生命值 |对应的<br>大本等级|
| ---- |  ----   |      ----     |   ---  |       ----     |
|   1  |   125   |      5000     |   300  |        6       |
|   2  |   150   |      6000     |   325  |        7       |
|   3  |   175   |      7000     |   350  |        8       |
|   4  |   200   |      8000     |   375  |        9       |
|   5  |   225   |      9000     |   400  |       10       |
|   6  |   250   |     10000     |   425  |       11       |
|   7  |   275   |     11000     |   450  |       12       |
|   8  |   300   |     12000     |   475  |       13       |
|   9  |   325   |     13000     |   500  |       14       |
|  10  |   350   |     14000     |   525  |       15       |
|  11  |   375   |     15000     |   550  |       16       |
|  12  |   400   |     16000     |   575  |       17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 野蛮人 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2.2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |   ---   |   ---   |   ---  |       ---      |
|   1  |    10   |    10   |    65  |        6       |
|   2  |    15   |    15   |    85  |        7       |
|   3  |    20   |    20   |   105  |        8       |
|   4  |    25   |    25   |   125  |        9       |
|   5  |    30   |    30   |   160  |       10       |
|   6  |    35   |    35   |   205  |       11       |
|   7  |    40   |    40   |   230  |       12       |
|   8  |    45   |    45   |   250  |       13       |
|   9  |    50   |    50   |   270  |       14       |
|  10  |    55   |    55   |   290  |       15       |
|  11  |    60   |    60   |   310  |       16       |
|  12  |    65   |    65   |   330  |       17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 更新历史也是公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/08/11">
        <TimelineRow>该兵种第 3 次推出，有效期至 2025/08/19.</TimelineRow>
        <TimelineRow>与 2017 版相比，野蛮人攻城锤对城墙的伤害由 4 倍改为 40 倍。</TimelineRow>
        <TimelineRow>与 2017 版相比，野蛮人攻城锤及其分裂出的野蛮人的面板伤害降低，但生命值得到提升。</TimelineRow>
        <TimelineRow>与 2017 版相比，这次推出新增了 12 - 17 本的数据（毕竟当年最高也就 11 本）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/08/31">
        <TimelineRow>该兵种第 2 次推出，有效期至 2017/09/07.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/08/04">
        <TimelineRow>该兵种第 1 次推出，有效期至 2017/08/11.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>