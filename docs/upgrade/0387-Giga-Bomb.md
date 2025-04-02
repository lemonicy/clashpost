---
title: "部落冲突 coc 终极炸弹升级数据"
navTitle: "终极炸弹"
shownTitle: "终极炸弹"
description: "村民们不想把这么危险的武器放在大本营里，所以把它搬了出来！终极炸弹会将敌人击退，并造成巨大伤害。这个陷阱的威力足够大，所以没必要藏起来！"
module: upgrade-home
imgFolder: home_buildings/0387
wiki: https://clashofclans.fandom.com/wiki/Giga_Bomb
canonical: /upgrade/0387-Giga-Bomb
---

- 游戏中还存在另一种大炸弹，详见：[巨型炸弹](/upgrade/0383-Giant-Bomb)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Bomb3.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="正常情况" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Bomb1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Bomb2.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Bomb2.png" />
    </UnitImgGroup>
    <UnitImgGroup title="未重新布置" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Bomb1_unarmed.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Bomb2_unarmed.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Bomb2_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 16, 17" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 根据游戏设定，从 17 级 [大本营](/upgrade/0400-Town-Hall) 开始，大本营内的炸弹被拆分成了一个单独的陷阱：终极炸弹，因此 17 级大本营被摧毁后不再爆炸。
    - 和 16 本被摧毁后引爆的炸弹相比，终极炸弹的爆炸半径保持不变，多出了击退效果，但不再释放毒雾（无减速和持续伤害效果）。
2. 和其他陷阱不同，终极炸弹对进攻方可见。
3. 只有当触发范围内至少有 18 单位的部队时，终极炸弹才会触发。
4. 和 [隐形炸弹](/upgrade/0380-Bomb)、[巨型炸弹](/upgrade/0383-Giant-Bomb) 一样，法术和 [大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法触发终极炸弹，同时也无法延缓或阻止爆炸。
5. 终极炸弹的爆炸效果可以击退高生命值单位以及弹飞低生命值单位，它的范围伤害对空中单位也有效。
6. 被终极炸弹波及到且仍然存活的部队会重新选择进攻目标。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="3.5 格" />
    <UnitProperty pKey="触发所需人口" pValue="18" />
    <UnitProperty pKey="伤害半径" pValue="4.5 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 爆炸伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |    ---  |   ---   |   ---    |         ---        |      ---      |
|   1  |   1100  |    5M   |     \    |                    |       17      |
|   2  |   1200  |   10M   |     8    |                    |       17      |
|   3  |   1300  |   15M   |    10    |                    |       17      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，新陷阱：终极炸弹。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>