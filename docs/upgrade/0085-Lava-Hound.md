---
title: "部落冲突 coc 熔岩猎犬（狗）升级数据"
navTitle: "熔岩猎犬"
shownTitle: "熔岩猎犬（狗）"
description: "这些暴躁的猛兽会不由自主地寻找防空火箭，为其他部队提供绝佳的保护。被摧毁后，它们会分裂成多个体型和威胁都更小的迷你熔岩犬。"
module: upgrade-home
imgFolder: home_tech/0085
wiki: https://clashofclans.fandom.com/wiki/Lava_Hound
canonical: /upgrade/0085-Lava-Hound
---

- *如想查看该兵种的强化版本，请访问：[寒冰猎犬](/upgrade/060a-Ice-Hound)。*
- *游戏中有一个战宠也常常被玩家称作狗，详见：[莱希](/upgrade/0280-L.A.S.S.I)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Lava_Hound_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Lava_Hound1.png" />
        <UnitImg imgTitle="3 级" imgSrc="Lava_Hound3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Lava_Hound4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Lava_Hound5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Lava_Hound6.png" />
        <UnitImg imgTitle="迷你熔岩猎犬" imgSrc="Lava_Pup.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 熔岩猎犬死亡后可以分裂出若干迷你熔岩犬（小狗）。
2. 小狗可以攻击空中目标，但分裂之前的大狗不行。

<SmallTitle>熔岩猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防空火箭<sup>*</sup>" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="30" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.25 格" />
    <UnitProperty pKey="死亡爆炸半径" pValue="3.5 格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="训练时间" pValue="300" :isTrainingTime="true" />
</UnitProperties>

\* 熔岩猎犬有三段攻击偏好。场上有防空火箭时攻击 [防空火箭](/upgrade/0304-Air-Defense)，没有防空火箭时攻击其他防御建筑，没有防御建筑时攻击非防御建筑。

<SmallTitle>迷你熔岩猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="每秒伤害" pValue="35" />
    <UnitProperty pKey="每次伤害" pValue="35" />
    <UnitProperty pKey="生命值" pValue="50" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级|每秒伤害|每次伤害|死亡溅射<br>伤害|死后分裂的小狗<br>数量 (进攻/防守)| 生命值 | 升级花费 | 升级时间|所需<br>实验室等级|所需<br>大本等级|
| --- |  ---  |   --  |       ---     |               ---              |  ---- |  ----   |  ----   |       ----     |      ----     |
|  1  |   10  |   20  |       100     |             8 / 8              |  6100 |    \    |    \    |        1       |       9       |
|  2  |   12  |   24  |       150     |            10 / 9              |  6500 |    14K  |   2     |        7       |       9       |
|  3  |   14  |   28  |       200     |            12 / 10             |  6800 |  21.5K  |   3     |        8       |      10       |
|  4  |   16  |   32  |       250     |            14 / 11             |  7200 |  42.5K  |   4,12  |        9       |      11       |
|  5  |   18  |   36  |       300     |            16 / 12             |  7600 |    60K  |   5     |       10       |      12       |
|  6  |   20  |   40  |       350     |            18 / 13             |  8000 |    80K  |   8     |       11       |      13       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级熔岩猎犬的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6 级熔岩猎犬的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>3 ~ 4 级熔岩猎犬的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3、5 ~ 6 级熔岩猎犬的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3 级熔岩猎犬的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 6 级熔岩猎犬防守时分裂出的小狗数量减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>5 ~ 6 级熔岩猎犬的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>修复远程地面部队在试图瞄准防御中且飞出游戏地图的迷你熔岩猎犬时，偶尔会卡住的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>3 ~ 6 级熔岩猎犬的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>如果熔岩猎犬和寒冰猎犬在选择目标时，场上剩余的防空火箭都被隐形了，它们不会忘记锁定之前没有看到的防空火箭。</TimelineRow>
        <TimelineRow>2 ~ 5 级熔岩猎犬的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 3 级熔岩猎犬的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 4 级熔岩猎犬的升级时间减少。</TimelineRow>
        <TimelineRow>2 级和 4 级熔岩猎犬的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 6 级熔岩猎犬。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>熔岩猎犬死亡后的爆炸半径从 5 格减少到 3.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>