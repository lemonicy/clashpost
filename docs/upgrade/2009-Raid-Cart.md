---
title: "部落冲突 coc 都城突袭炮车升级数据"
navTitle: "突袭炮车"
shownTitle: "突袭炮车"
description: "又是一个带轮子的加农炮？可能没什么新意，但一些大块头的加入弥补了这点遗憾。现在它火力更强，还有不好惹的野蛮人一路护送！"
module: upgrade-capital
imgFolder: capital_tech/2009
wiki: https://clashofclans.fandom.com/wiki/Raid_Cart
canonical: /upgrade/2009-Raid-Cart
---

- *如想查看夜世界的加农炮战车，请访问：[夜世界加农炮战车](/upgrade/1006-Cannon-Cart)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Raid_Cart_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="攻城炮车" imgSrc="Cannon_Cart1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 突袭炮车的解锁条件是建造 [突袭炮车训练营](/upgrade/2349-Raid-Cart-Barracks)，而这需要部落解锁建筑工人工坊，并且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 5 级。
2. 攻城炮车类似于夜世界的 [加农炮战车](/upgrade/1006-Cannon-Cart)，只不过血量更高，攻速更慢。
3. 加农炮战车还可以作为防守部队驻扎在 [突袭炮车岗哨](/upgrade/2211-Raid-Cart-Post) 附近。
4. 加农炮战车的技能（奋战到底）：被摧毁后获得一些临时生命值。
5. 突袭炮车在部署之前是一个整体，你不能把攻城炮车和 [野蛮人](/upgrade/20c0-Barbarian) 分开部署。

<SmallTitle>突袭炮车的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="突袭炮车的配兵人口" pValue="30" />
    <UnitProperty pKey="突袭炮车含有" pValue="攻城炮车 ×1<br>野蛮人 ×4" />
    <UnitProperty pKey="攻城炮车的防守人口" pValue="25" />
    <UnitProperty pKey="每个野蛮人的防守人口" pValue="1.25" />
</UnitProperties>

<SmallTitle>攻城炮车的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="1.1 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 1.8 秒" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
</UnitProperties>

<SmallTitle>突袭炮车的升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 奋战到底技能的额外生命值 | 生命值 |
| ---- |  ----   |  ----   |          ----          |  ---- |
|   1  |   240   |   600   |          1200          |  2800 |
|   2  |   280   |   700   |          1400          |  3100 |
|   3  |   320   |   800   |          1600          |  3400 |
|   4  |   360   |   900   |          1800          |  3700 |
|   5  |   400   |  1000   |          2000          |  4000 |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>攻击新目标的速度加快了 0.2 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/30">
        <TimelineRow>将突袭炮车的第一次攻击减慢 0.7 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>更新后，疗伤法术对被摧毁的攻城炮车无效。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>突袭炮车随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>