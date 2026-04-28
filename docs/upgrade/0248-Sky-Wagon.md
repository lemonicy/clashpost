---
title: "部落冲突 coc 空中战车（Sky Wagon）升级数据"
navTitle: "空中战车"
shownTitle: "空中战车"
description: "空中战车会在空中投放装有援军的木桶，木桶落地后会造成少量伤害并放出部队。它能飞行、会自己解体，而且法术对它无效。"
module: upgrade-home
imgFolder: home_tech/0248
wiki: https://clashofclans.fandom.com/wiki/Sky_Wagon
canonical: /upgrade/0248-Sky-Wagon
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sky_Wagon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Sky_Wagon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Sky_Wagon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Sky_Wagon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Sky_Wagon4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 空中战车是第 9 种、也是目前最后一种可以解锁的 [攻城机器](/upgrade/category/home#cp-upgrade-techniques)，需要 [攻城机器工坊](/upgrade/0486-Workshop) 9 级，也就是 17 本。
3. 空中战车会在空中飞行，并把装有援军的木桶投向目标。每个木桶落地时都会造成少量伤害，同时放出 [亡灵](/upgrade/0005-Minions)、[气球兵](/upgrade/0003-Balloon)、[飞龙宝宝](/upgrade/000a-Baby-Dragon) 和 1 个部落城堡援军（如果可能）。
   - 空中战车的运作方式和 [部队发射器](/upgrade/0247-Troop-Launcher) 类似，但它可以独立移动并自行寻找目标，而不是只对某一区域投放援军。
4. 木桶里的部队部署顺序遵循常规规则：先按人口从低到高，再按内部顺序；同类兵种则按等级从低到高部署。
5. 空中战车内放出的部队等级取决于空中战车自身等级，而不是实验室里已经研究到的等级。
6. 空中战车的木桶数量有限，投完后会自动解体；如果它在投完前被摧毁，剩余木桶会失效，但它携带的部落城堡援军仍会在其被摧毁的位置释放出来。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="发射木桶" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="16 格/秒<sup>①</sup>" />
    <UnitProperty pKey="攻击速度" pValue="8 秒/次" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="17" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
</UnitProperties>

① 上表中的 16 点移动速度代表 1 格/秒。

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

| 等级 | 平均每秒伤害* | 每次伤害* | 生命值 | 木桶数量 | 升级花费 | 升级时间 | 所需实验室等级 | 所需大本等级 |
| ---- | ------------- | --------- | ------ | -------- | -------- | -------- | -------------- | ----------- |
|   1  |       1       |     8     |  3600  |    5     |     \    |    \     |       1        |     17      |
|   2  |       2       |    16     |  3800  |    5     |  22M     |    10    |      15        |     17      |
|   3  |       3       |    24     |  4000  |    6     |  26M     |  13,12   |      16        |     17      |
|   4  |       4       |    32     |  4200  |    6     |  29M     |    16    |      16        |     17      |
</UnitTable>

* 空中战车的面板里不会直接显示平均每秒伤害，这个数值与等级相同。

<SmallTitle>木桶中的部队</SmallTitle>

<UnitTable>

| 等级 | 亡灵数量 | 气球兵数量 | 飞龙宝宝数量 | 亡灵等级 | 气球兵等级 | 飞龙宝宝等级 |
| ---- | ------- | --------- | ----------- | ------- |  -------- | ----------  |
|  1   |    3    |     1     |      1      |   11    |     10    |      9      |
|  2   |    4    |     1     |      1      |   12    |     11    |     10      |
|  3   |    5    |     1     |      1      |   13    |     12    |     11      |
|  4   |    5    |     1     |      1      |   14    |     13    |     12      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/27">
        <TimelineRow>新增攻城机器：空中战车。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/04/26">
        <TimelineRow>抢先预览空中战车，共有 4 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
