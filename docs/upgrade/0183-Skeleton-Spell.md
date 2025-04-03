---
title: "部落冲突 coc 骷髅法术升级数据"
navTitle: "骷髅法术"
shownTitle: "骷髅法术"
description: "在战场任意位置召唤一群骷髅兵！必要的时候，在关键位置召唤出一群骷髅兵补上那么几刀可解燃眉之急。骷髅兵不会触发陷阱。"
module: upgrade-home
imgFolder: home_tech/0183
wiki: https://clashofclans.fandom.com/wiki/Skeleton_Spell
canonical: /upgrade/0183-Skeleton-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Spell.png" :imgAlt="$frontmatter.navTitle" 
    description="在战场任意位置召唤一群骷髅兵！<br>必要的时候，在关键位置召唤出一群骷髅兵补上那么几刀可解燃眉之急。骷髅兵不会触发陷阱。"
    :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="带盾牌的骷髅" imgSrc="Skeleton_Shielded.png" />
        <UnitImg imgTitle="不带盾牌的骷髅" imgSrc="Skeleton.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 骷髅法术召唤出的骷髅兵会带有盔甲。也就是说，兵种至少需要攻击两次才能击杀骷髅兵（第一次打掉盔甲，第二次打死没有盔甲的骷髅兵）。
2. 骷髅对 [大本营](/upgrade/0400-Town-Hall) 和资源罐的伤害为对其他建筑的 15%.
3. 骷髅无法触发城堡内的援兵。
4. 虽然骷髅本身无法触发陷阱，但是被其他地面单位触发的陷阱还是有可能攻击骷髅。

<SmallTitle>骷髅法术的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="2.25 格" />
    <UnitProperty pKey="作用类型" pValue="在指定范围内召唤骷髅" />
    <UnitProperty pKey="骷髅生成速度" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 第一次生成 4 个骷髅，之后每秒生成一个。

<SmallTitle>骷髅的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="每秒伤害" pValue="25" />
    <UnitProperty pKey="每次伤害" pValue="25" />
    <UnitProperty pKey="生命值" pValue="30" />
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

| 等级 |召唤的<br>骷髅数量| 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |       ----     |   ----   |  ----   |       ----      |      ----     |
|   1  |        12      |     \    |    \    |         1       |        9      |
|   2  |        13      |    11K   |   1     |         8       |       10      |
|   3  |        14      |    17K   |   1,12  |         8       |       10      |
|   4  |        15      |    25K   |   2, 6  |         9       |       11      |
|   5  |        16      |    40K   |   3     |        10       |       12      |
|   6  |        17      |    50K   |   4     |        10       |       12      |
|   7  |        18      |    75K   |   5     |        11       |       13      |
|   8  |        19      |   135K   |   7, 4  |        13       |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 5、8 级骷髅法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 8 级骷髅法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 级骷髅法术的升级时间减少。</TimelineRow>
        <TimelineRow>8 级骷髅法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 8 级骷髅法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 8 级骷髅法术。</TimelineRow>
        <TimelineRow>5 ~ 7 级骷髅法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 7 级骷髅法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>1 ~ 6 级骷髅法术可召唤的骷髅数量增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级骷髅法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级骷髅法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 6 级骷髅法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>所有等级的骷髅法术可召唤的骷髅兵数量增加 1 个。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/05/20">
        <TimelineRow>7 级骷髅法术召唤的骷髅兵数量从 16 个增加至 17 个。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 3 级骷髅法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本新增 7 级骷髅法术。</TimelineRow>
        <TimelineRow>骷髅生成频率改为每秒 1 个（经测试，这是平均值）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12 本新增 6 级骷髅法术。</TimelineRow>
        <TimelineRow>更新后，骷髅法术召唤出的骷髅兵会带有盔甲。也就是说，兵种至少需要攻击两次才能击杀骷髅兵。（第一次打掉盔甲，第二次打死没有盔甲的骷髅兵）</TimelineRow>
        <TimelineRow>骷髅法术召唤出的骷髅兵数量减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>