---
title: "部落冲突 coc 地狱火炮升级数据"
navTitle: "地狱火炮"
shownTitle: "地狱火炮"
description: "火力全开！地狱火炮会发射 4 枚追踪敌人的炮弹，而且会在落点处留下燃烧的弹坑。如果射程内的敌人少于 4 个，则会多次攻击同一目标，那叫一个劲爆！"
module: upgrade-home
imgFolder: home_buildings/0315
wiki: https://clashofclans.fandom.com/wiki/Town_Hall/Inferno_Artillery
canonical: /upgrade/0315-Inferno-Artillery
---

- 如想查看大本营的相关数据，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想合并前的建筑，请访问：[天鹰火炮](/upgrade/030b-Eagle-Artillery)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Artillery5_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Artillery1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Artillery2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Artillery3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Artillery4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Artillery5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 升级 17 级 [大本营](/upgrade/0400-Town-Hall) 时，[天鹰火炮](/upgrade/030b-Eagle-Artillery) 会与大本营合并为地狱火炮，此时天鹰火炮不再是独立建筑，而是作为大本附带的武器存在。
    - 升级 17 级大本营时要求天鹰火炮达到 7 级，升级完成后天鹰火炮会被移除。
    - 合并建筑的操作是永久性的，一旦合并就无法拆开。
2. 当玩家升到完成后，就拥有了一个 1 级的地狱火炮，这个新武器可以升到 5 级。
3. 和 16 本及以下的大本营武器不同，地狱火炮在战斗一开始就会出现，而不会等到被攻击或达到 51% 摧毁率，这一点类似于 [都城大本营](/upgrade/2400-Capital-Hall)。
4. 与天鹰火炮不同，地狱火炮没有攻击盲区。
5. 地狱火炮自身发射的火球只能对单个目标造成伤害，火球留下的灼烧区域可以对一个范围内的目标造成持续伤害，其原理类似于 [熔岩发射器](/upgrade/110d-Lava-Launcher)。
    - 如果多个火球击中同一区域，该区域的灼烧伤害不能叠加，但可以更快达到最高伤害，这一点类似于 [毒药法术](/upgrade/0180-Poison-Spell)。
    - 灼烧区域没有减速效果，这一点又和毒药法术不同。
    - 狂暴 [法术塔](/upgrade/0311-Spell-Tower) 和困难模式只能提升火球本身的伤害，不能提高灼烧区域的伤害。
6. 地狱火炮可以同时瞄准多个目标，也可以多发弹药同时打击一个目标，这一点类似于 [多人箭塔](/upgrade/0314-Multi-Archer-Tower)。举几个例子：
    - 如果地狱火炮的射程内有 5 个目标，则 4 个火球分别打击一个目标，剩余一个目标躲过一劫；
    - 如果射程内只有 3 个目标，则其中一个目标会被打击两次，剩余目标各被打击一次；
    - 如果射程内只有一个目标，则 4 个火球会全部打击这唯一的目标。
7. 如果当前打击的目标死亡、隐身或走出攻击范围，地狱火炮的炮弹会转向打击其他目标，看起来像制导导弹。
8. 和其他的大本营武器不同，地狱火炮被摧毁后没有爆炸伤害，也不会释放毒雾。
    - 根据游戏设定，大本营附带的炸弹被拆分成了一个单独的陷阱：[终极炸弹](/upgrade/0387-Giga-Bomb)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="混合 (详见上方描述)" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="12 格" />
    <UnitProperty pKey="攻速" pValue="3.5 秒一轮" />
    <UnitProperty pKey="目标数量" pValue="4" />
    <UnitProperty pKey="每秒最大灼烧伤害" pValue="75" />
    <UnitProperty pKey="灼烧持续时间" pValue="6.8 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每个目标的<br>平均每秒伤害|每次攻击<br>伤害| 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |           ---          |      ---     |   ---   |   ---    |         ---        |      ---      |
|   1  |            40          |      140     |      \  |     \    |                    |       17      |
|   2  |            45          |      157.5   |    10M  |     9    |                    |       17      |
|   3  |            50          |      175     |    14M  |    11    |                    |       17      |
|   4  |            55          |      192.5   |    18M  |    13    |                    |       17      |
|   5  |            60          |      210     |    22M  |    15    |                    |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，大本营自带地狱火炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>