---
title: "部落冲突 coc 袋装小冰怪升级数据"
navTitle: "袋装小冰怪"
shownTitle: "袋装小冰怪"
description: "短暂冰冻目标区域，并缓慢召唤活蹦乱跳的小冰怪，来吸引附近防御设施的火力，并减缓其速度。"
module: upgrade-temp
imgFolder: temp_others/0e82
wiki: https://clashofclans.fandom.com/wiki/Bag_of_Frostmites
canonical: /upgrade/0e82-Bag-of-Frostmites
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bag_of_Frostmites.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 使用该法术后，法术会冻结受影响的区域，类似于 [冰冻法术](/upgrade/0104-Freeze-Spell)。
2. 冻结之后，冻结区域内会生成小冰怪，这些小冰怪可以分散敌人的注意力，被小冰怪击中的防御攻击速度会变慢。
   - 这个小冰怪的属性和 [冰牙](/upgrade/0284-Frosty) 召唤的小冰怪基本相同，不过减速比例不同。
3. 小冰怪攻击一次后就会死亡，[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备也无法阻止。

<SmallTitle>袋装小冰怪的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="影响区域的半径" pValue="1.75 格" />
    <UnitProperty pKey="占据的法术空间" pValue="1" />
    <UnitProperty pKey="所需法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="法术配置时间" pValue="180" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>小冰怪的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击时机" pValue="到达目标后 0.5 秒<sup>*</sup>" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
    <UnitProperty pKey="每秒伤害" pValue="15" />
    <UnitProperty pKey="每次伤害" pValue="15" />
    <UnitProperty pKey="生命值" pValue="450" />
    <UnitProperty pKey="攻击减速持续时间" pValue="4 秒" />
    <UnitProperty pKey="减速比例" pValue="30% 攻速<br>30% 移速" />
</UnitProperties>

\* 根据解析安装包的结果，小冰怪的攻击速度是一秒一次，但实际上小冰怪的首次攻击时机为到达目标后 0.5 秒，且攻击一次后就会死亡，因此其攻速值无意义。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 冰冻时间 |生成的<br>小冰怪数量|对应的<br>大本等级|
|  --- |   ---   |        ---        |       ----     |
|   3  |  1.5 秒 |          8        |        6       |
|   3  |  1.7 秒 |          9        |        7       |
|   3  |  1.9 秒 |         10        |        8       |
|   4  |  2.1 秒 |         11        |        9       |
|   5  |  2.3 秒 |         12        |       10       |
|   6  |  2.5 秒 |         13        |       11       |
|   7  |  2.7 秒 |         14        |       12       |
|   8  |  2.9 秒 |         15        |       13       |
|   9  |  3.1 秒 |         16        |       14       |
|  10  |  3.3 秒 |         16        |       15       |
|  11  |  3.5 秒 |         17        |       16       |
|  12  |  3.7 秒 |         17        |       17       |
|  13  |  3.9 秒 |         18        |       18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/12/08">
        <TimelineRow>该兵种第 2 次推出，有效期至 2026/01/01.</TimelineRow>
        <TimelineRow>这次推出后，该法术改为 6 本解锁，而不是 8 本。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/21">
        <TimelineRow>10 ~ 11 级袋装小冰怪可生成的小冰怪数量由 17/18 减少到 16/16.</TimelineRow>
        <TimelineRow>袋装小冰怪生成小冰怪的间隔时间缩短。</TimelineRow>
        <TimelineRow>袋装小冰怪的持续时间整体缩短 1 秒，减速比例由 50% 降低至 30%.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/18">
        <TimelineRow>该法术在饼干大作战活动中首次推出，在活动中获取 5 500 香甜圣水（任务点数）即可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>