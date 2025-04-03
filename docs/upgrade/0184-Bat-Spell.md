---
title: "部落冲突 coc 蝙蝠法术升级数据"
navTitle: "蝙蝠法术"
shownTitle: "蝙蝠法术"
description: "在战场上任意地点召唤一群蝙蝠大军！在您最需要空中支援时施放蝙蝠法术。蝙蝠不会触发陷阱。"
module: upgrade-home
imgFolder: home_tech/0184
wiki: https://clashofclans.fandom.com/wiki/Bat_Spell
canonical: /upgrade/0184-Bat-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bat_Spell.png" :imgAlt="$frontmatter.navTitle" 
    description="在战场上任意地点召唤一群蝙蝠大军！<br>在您最需要空中支援时施放蝙蝠法术。蝙蝠不会触发陷阱。"
    :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="法术生成的蝙蝠" imgSrc="Spell_Bat.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 蝙蝠的第一次出手在到达防御建筑之后的 1.5 秒，而 [法师塔](/upgrade/0305-Wizard-Tower) 的攻速为 1.3 秒/次，故蝙蝠怕法师塔。
2. 蝙蝠对 [大本营](/upgrade/0400-Town-Hall) 和资源罐的伤害为对其他建筑的 15%.
3. 蝙蝠无法触发城堡内的援兵。
4. 虽然蝙蝠本身无法触发陷阱，但是被其他空军触发的陷阱还是有可能攻击蝙蝠。

<SmallTitle>蝙蝠法术的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="2.25 格" />
    <UnitProperty pKey="作用类型" pValue="在指定范围内召唤蝙蝠" />
    <UnitProperty pKey="蝙蝠生成速度" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 第一次生成 2 个蝙蝠，之后每 0.6 秒生成一个。

<SmallTitle>蝙蝠的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="7 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 1.5 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.3 格" />
    <UnitProperty pKey="每秒伤害" pValue="30" />
    <UnitProperty pKey="每次伤害" pValue="60" />
    <UnitProperty pKey="生命值" pValue="20" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |召唤的<br>蝙蝠数量| 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |        ----     |   ----  |  ----   |       ----      |      ----     |
|   1  |          7      |     \   |    \    |         1       |       10      |
|   2  |          9      |    13K  |   1     |         8       |       10      |
|   3  |         11      |  25.5K  |   2     |         8       |       10      |
|   4  |         16      |    35K  |   2, 6  |         9       |       11      |
|   5  |         21      |  47.5K  |   4     |        10       |       12      |
|   6  |         22      |   140K  |   7, 4  |        13       |       15      |
|   7  |         23      |   260K  |  13     |        15       |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>17 本新增 7 级蝙蝠法术。</TimelineRow>
        <TimelineRow>2 ~ 6 级蝙蝠法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 6 级蝙蝠法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>3 级和 6 级蝙蝠法术的升级时间减少。</TimelineRow>
        <TimelineRow>6 级蝙蝠法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 级蝙蝠法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>5 级蝙蝠法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 6 级蝙蝠法术。</TimelineRow>
        <TimelineRow>2 ~ 5 级蝙蝠法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>4 ~ 5 级蝙蝠法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 3 级蝙蝠法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 3 级蝙蝠法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4 级蝙蝠法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>