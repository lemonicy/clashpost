---
title: "部落冲突 coc 烟花炮手升级数据"
navTitle: "烟花炮手"
shownTitle: "烟花炮手"
description: "这位粉头发的前弓箭手超爱玩火，她卖掉了自己的弓，换上了火力更凶猛的武器。烟花炮手会向离她最近的目标发射威力巨大、效果华丽的烟花，但每次攻击的后坐力会使她略微后退。她可以让农历新年的夜空变得绚丽多彩，但要记得别在她周围留下任何可燃物。"
module: upgrade-temp
imgFolder: temp/0e0e
wiki: https://clashofclans.fandom.com/wiki/Firecracker
canonical: /upgrade/0e0e-Firecracker
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Firecracker_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Firecracker1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 烟花炮手首次推出时是作为 2024 年龙年佳节活动中的两个临时兵种之一，在活动中获取 1 000 任务点数（红包）即可解锁该兵种。她在 2025 年的春节活动中回归，同样是需要 1 000 任务点数（红灯笼）。
2. 烟花炮手其实就是一名弓箭手扛着火箭炮。
3. 火箭炮可以对目标后面的扇形区域造成溅射伤害。
   - 这个溅射伤害类似于 [投石炮](/upgrade/030e-Scattershot)，离中心区域越远，溅射造成的伤害越小。
   - 这个溅射伤害最多影响到距离中心区域 5 格的目标。
4. 射击会产生后坐力，每次射击都会将她向后推一格左右。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="炮弹的伤害半径" pValue="5 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="6 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="训练时间" pValue="60" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次<br>射击伤害 | 生命值 |对应的<br>大本等级|
| ---- |   ---   |        ---      |   ---  |        ----     |
|   1  |    50   |      20 - 90    |   100  |         6       |
|   2  |    65   |     26 - 117    |   140  |         7       |
|   3  |    80   |     32 - 144    |   180  |         8       |
|   4  |    95   |     38 - 171    |   220  |         9       |
|   5  |   110   |     44 - 198    |   260  |        10       |
|   6  |   125   |     50 - 225    |   300  |        11       |
|   7  |   145   |     58 - 261    |   340  |        12       |
|   8  |   155   |     62 - 279    |   360  |        13       |
|   9  |   170   |     68 - 306    |   380  |        14       |
|  10  |   190   |     76 - 342    |   400  |        15       |
|  11  |   220   |     80 - 396    |   430  |        16       |
|  12  |   260   |     84 - 468    |   470  |        17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/07">
        <TimelineRow>该兵种第 2 次推出，是 2025 年灵蛇庆典活动中的两个临时兵种之一。</TimelineRow>
        <TimelineRow>此次活动给烟花炮手新增了几个等级（1、2 和 12）。</TimelineRow>
        <TimelineRow>现在 6 本即可解锁烟花炮手（之前是 8 本）。</TimelineRow>
        <TimelineRow>11 级烟花炮手的生命值、每次伤害增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/02/22.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>