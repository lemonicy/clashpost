---
title: "部落冲突 coc 地兽（挖挖）升级数据"
navTitle: "地兽"
shownTitle: "地兽（挖挖）"
description: "地兽生性腼腆，大部分时候都躲在地下。但在战斗中，它还是会做好自己分内的事：破土而出攻击建筑，助英雄一臂之力。地兽跟随的英雄被击倒后，它会寻找另一位英雄为其提供帮助。"
module: upgrade-home
imgFolder: home_heroes/0285
wiki: https://clashofclans.fandom.com/wiki/Diggy
canonical: /upgrade/0285-Diggy
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Diggy_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Diggy_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 地兽的技能（地下惊喜）：虽然大部分时间都躲在地底，但地兽也会钻出地面瘫痪并摧毁敌方防御建筑。
2. 地兽只能瘫痪防御建筑，不能瘫痪部队和英雄。
3. 只有当前主人阵亡时，地兽才会变更主人。跟随新主人的机制与跟随原主人的机制相同。如果没有找到新主人，地兽也会变成独立单位。
4. 如果地兽当前主人或新主人被召回，地兽会认为主人并未阵亡，因此不寻找新主人，而是暂时变成自由单位。
5. 当主人阵亡时，地兽会寻找场上最近的英雄作为新主人。地兽并不能看见被召回的英雄。
6. 在地兽没有主人时，正常部署或使用 [回溯法术](/upgrade/0107-Recall-Spell) 部署一个英雄，地兽会立即以该英雄作为新主人。
7. 地兽能免疫 [飓风陷阱](/upgrade/0386-Tornado-Trap) 的转圈效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="英雄的目标" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
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

| 等级 | 每秒伤害 |每次伤害|瘫痪秒数| 生命值 | 升级花费 | 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |  ---  |  ---  |  ---   |   ----  |   ---   |   ---   |        ---        |      ----     |
|   1  |   105   | 115.5 |   2   |  3650  |      \  |   \     |         |         6         |       15      |
|   2  |   110   |  121  |   2   |  3800  |    90k  |   1,12  |         |         6         |       15      |
|   3  |   115   | 126.5 |   2   |  3950  |   105k  |   2     |         |         6         |       15      |
|   4  |   120   |  132  |   2   |  4100  |   120k  |   3     |         |         6         |       15      |
|   5  |   125   | 137.5 |  2.5  |  4250  |   130k  |   4     |         |         6         |       15      |
|   6  |   130   |  143  |  2.5  |  4400  |   140k  |   4,12  |         |         6         |       15      |
|   7  |   135   | 148.5 |  2.5  |  4550  |   150k  |   5     |         |         6         |       15      |
|   8  |   140   |  154  |  2.5  |  4700  |   160k  |   5,22  |         |         6         |       15      |
|   9  |   145   | 159.5 |  2.5  |  4850  |   170k  |   6     |         |         6         |       15      |
|  10  |   150   |  165  |   3   |  5000  |   180k  |   6,12  |         |         6         |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 10 级地兽的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10 级地兽的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 10 级地兽的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，可解锁四个新宠物，地兽是其中之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>