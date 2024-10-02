---
title: "部落冲突 coc 电击车升级数据"
navTitle: "电击车"
shownTitle: "电击车"
description: "电击车永远充满能量，随时做好防御准备！谁要敢来破坏哨站，它们会立马释放能量发动电击！"
module: upgrade-bh
imgFolder: bh_buildings/1241
wiki: https://clashofclans.fandom.com/wiki/Zappy
canonical: /upgrade/1241-Zappy
---

- 如想查看夜世界的另一个大本营，请访问：[建筑大师大本营](/upgrade/1200-Builder-Hall)。
- 如想查看奥仔哨站被摧毁后释放的电击车，请访问：[夜世界电击车](/upgrade/1241-Zappy)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Zappy_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Zappy1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当奥仔哨站被摧毁后，它会释放电击车。
2. 电击车的等级和奥仔哨站的等级同步。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻速" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |所需奥仔<br>哨站等级|所需夜世界<br>大本营等级|
|  --- |   ---   |   ---   |   ---  |        ---       |         ---          |
|  1   |    42   |    42   |   330  |         1        |           6          |
|  2   |    46   |    46   |   350  |         2        |           6          |
|  3   |    50   |    50   |   369  |         3        |           6          |
|  4   |    55   |    55   |   389  |         4        |           6          |
|  5   |    59   |    59   |   408  |         5        |           6          |
|  6   |    63   |    63   |   428  |         6        |           6          |
|  7   |    67   |    67   |   447  |         7        |           7          |
|  8   |    71   |    71   |   467  |         8        |           8          |
|  9   |    76   |    76   |   486  |         9        |           9          |
| 10   |    80   |    80   |   518  |        10        |          10          |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，现在当你升到 6 本后即可直接解锁奥仔哨站，电击车是奥仔哨站的派生单位。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>