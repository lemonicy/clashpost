---
title: "部落冲突 coc 都城反弹机升级数据"
navTitle: "反弹机"
shownTitle: "反弹机"
description: "会旋转、带护盾、还能反弹敌人的进攻？这种奇特的装置想都没想过......但反弹机全都做到了！"
module: upgrade-capital
imgFolder: capital_buildings/2214
wiki: https://clashofclans.fandom.com/wiki/Reflector
canonical: /upgrade/2214-Reflector
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Reflector4.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Reflector_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Reflector1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Reflector2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Reflector3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Reflector4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   骷髅公园   |   2   |   3   |   5   |   6   |   \   |
|  哥布林矿井  |   0   |   1   |   2   |   4   |   \   |

</DistrictTable>

<SmallTitle>重要说明</SmallTitle>

1. 反弹机不会主动寻找单位进行攻击，只会反击对其造成伤害的单位。
2. 当部队的攻速慢于反弹机的最快攻速时，反弹机会以和部队相同的攻速进行反击；当部队的攻速快于或等于反弹机的最快攻速时，反弹机会以最快攻速进行反击。
3. 反弹机会反击隐形的单位，如隐秘弓箭手。
4. 反弹机会对间接伤害进行反击，比如说如果它被超级飞龙溅射到，那么也会进行反击。但是这里有一个例外，反弹机不会反击超级法师的链式伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="最快攻速" pValue="0.575 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 最快攻速下<br>的每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需子城<br>大本等级|
| ---- |   ---   |          ---           |   ---  |   ---   |   ---   |        ---       |
|   1  |   260   |          149.5         |  3300  |  7.5k   |   160   |         1        |
|   2  |   290   |          166.75        |  3600  |   15k   |   170   |         2        |
|   3  |   320   |          184           |  3900  |   30k   |   180   |         3        |
|   4  |   350   |          201.25        |  4200  |   48k   |   190   |         4        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/10/09">
        <TimelineRow>都城新防御：反弹机。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>