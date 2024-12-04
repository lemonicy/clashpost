---
title: "部落冲突 coc 灵狐（狐狸）升级数据"
navTitle: "灵狐"
shownTitle: "灵狐（狐狸）"
description: "灵狐生性极其害羞，最喜欢独自待在村庄外的树林里。被召唤到战场时，灵狐会与它的英雄并肩作战，并帮助其隐身。"
module: upgrade-home
imgFolder: home_heroes/0288
wiki: https://clashofclans.fandom.com/wiki/Spirit_Fox
canonical: /upgrade/0288-Spirit-Fox
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spirit_Fox_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Spirit_Fox_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 灵狐的技能（灵隐诡步）：每隔一段时间使自己和跟随的英雄隐身。
2. 只有当灵狐在场上时，隐形效果才会生效，如果灵狐死亡或被 [回溯法术](/upgrade/0107-Recall-Spell) 召回，则英雄无法隐身。如果灵狐跟随的英雄阵亡，则它只能让自己隐形。
3. 如果主人被召回或者阵亡，灵狐会变成一个自由单位，此时没有偏好。
4. 灵狐的隐形效果激活时可重置单头 [地狱塔](/upgrade/030a-Inferno-Tower) 和防守方 [地狱飞龙](/upgrade/0604-Inferno-Dragon) 的伤害。
5. 灵狐的移动速度较快，很容易跑在英雄前面导致过早死亡，因此灵狐很适合搭配移动速度同样较快的 [飞盾战神](/upgrade/0203-Royal-Champion)。另外，灵狐也可以搭配 [蛮王](/upgrade/0200-Barbarian-King)，延长蛮王的存活时间，让蛮王的坦克潜力充分发挥。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="距离英雄不超过 4.5 格的目标" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.6 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="隐身效果冷却时间" pValue="6 秒" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    },
    {
        "column": 7,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |隐身秒数| 生命值| 升级花费| 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |   ---   |  ---  |  ---  |  ----  |   ---   |   ---   |        ---       |      ---      |
|   1  |   108   |  172.8  |   3   |  1900 |     \  |   \     |         |         9        |      16       |
|   2  |   116   |  185.6  |   3   |  2000 | 168.75k|   3     |         |         9        |      16       |
|   3  |   124   |  198.8  |   3   |  2100 | 176.25k|   4     |         |         9        |      16       |
|   4  |   132   |  211.2  |   3   |  2200 | 183.75k|   5     |         |         9        |      16       |
|   5  |   140   |   224   |  3.5  |  2300 | 191.25k|   5,12  |         |         9        |      16       |
|   6  |   148   |  236.8  |  3.5  |  2400 | 198.75k|   6     |         |         9        |      16       |
|   7  |   156   |  249.6  |  3.5  |  2500 | 206.25k|   6,12  |         |         9        |      16       |
|   8  |   164   |  262.4  |  3.5  |  2600 | 213.75k|   7     |         |         9        |      16       |
|   9  |   172   |  275.6  |  3.5  |  2700 | 221.25k|   7,12  |         |         9        |      16       |
|  10  |   180   |   288   |   4   |  2800 | 236.25k|   8     |         |         9        |      16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10 级灵狐的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/03/26">
        <TimelineRow>1 ~ 10 级灵狐的隐身效果冷却时间由 5 秒增加到 6 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>移除了灵狐进行攻击时的冰霜视觉效果。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增 16 本，可解锁一个新宠物：灵狐。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>