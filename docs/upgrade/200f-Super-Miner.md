---
title: "部落冲突 coc 都城超级矿工升级数据"
navTitle: "超级矿工"
shownTitle: "超级矿工"
description: "拿着大钻机，留着拉风的胡子，这位超级矿工随时准备暗中破坏敌方防御！"
module: upgrade-capital
imgFolder: capital_tech/200f
wiki: https://clashofclans.fandom.com/wiki/Super_Miner/Clan_Capital
canonical: /upgrade/200f-Super-Miner
---

- *如想查看家乡的超级矿工，请访问：[超级矿工](/upgrade/060e-Super-Miner)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Miner_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Miner1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级矿工的解锁条件是建造 [超级矿工训练营](/upgrade/234f-Super-Miner-Barracks)，而这需要部落解锁哥布林矿井，且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 9 级。
2. 超级矿工可以绕过水和悬崖。
3. 超级矿工专注于一个目标的时间越长，他的钻头每秒造成的伤害就越高，这个机制与 [地狱之塔](/upgrade/030a-Inferno-Tower) 和 [地狱飞龙](/upgrade/0604-Inferno-Dragon) 类似。
4. 超级矿工的技能（终极大爆炸）：超级矿工死亡后会对一个区域内的所有地面单位造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="配兵人口" pValue="25" />
    <UnitProperty pKey="防守人口" pValue="25" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.25 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.45 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 初始秒伤 | 1.5 秒后秒伤 | 3 秒后秒伤 | 死亡伤害 |  生命值 |
| ---- |  ----   |     ----    |     ----   |   ----  |  ----  |
|   1  |   160   |      340    |     630    |   1400  |  3300  |
|   2  |   170   |      370    |     660    |   1700  |  3500  |
|   3  |   180   |      400    |     690    |   2000  |  3700  |
|   4  |   190   |      430    |     720    |   2300  |  3900  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/27">
        <TimelineRow>所有等级超级矿工的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/11/27">
        <TimelineRow>1 级超级矿工的秒伤由 170-340-510 减少到 160-340-630.</TimelineRow>
        <TimelineRow>2 级超级矿工的秒伤由 190-380-570 减少到 170-370-660.</TimelineRow>
        <TimelineRow>3 级超级矿工的秒伤由 210-420-630 减少到 180-400-690.</TimelineRow>
        <TimelineRow>4 级超级矿工的秒伤由 230-460-690 减少到 190-430-720.</TimelineRow>
        <TimelineRow>2 ~ 4级超级矿工的生命值由 4000/4300/4600 减少到 3900/4100/4300.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/09">
        <TimelineRow>都城新增超级矿工，推出 4 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>