---
title: "部落冲突 coc 饼干皮卡升级数据"
navTitle: "饼干皮卡"
shownTitle: "饼干皮卡"
description: "身为饼干战士，饼干皮卡战力满满，甜翻全场。它能使用椒盐卷饼进行回旋攻击，造成溅射伤害。它可能会带来毁灭性的破坏，但这就是饼干碎裂的方式。"
module: upgrade-temp
imgFolder: temp/0e0d
wiki: https://clashofclans.fandom.com/wiki/C.O.O.K.I.E
canonical: /upgrade/0e0d-C.O.O.K.I.E
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="C.O.O.K.I.E_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="C.O.O.K.I.E1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

饼干皮卡是饼干大作战活动中的两个临时兵种之一，在活动中获取 3 000 香甜圣水（任务点数）即可解锁该兵种。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="60" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 对应的大本等级 |
| ---- |   ---   |   ---   |   ---  |      ----    |
|   1  |   8200  |  12300  |   400  |       6      |
|   2  |   8400  |  12600  |   600  |       7      |
|   3  |   8600  |  12900  |   800  |       8      |
|   4  |   8800  |  13200  |  1000  |       9      |
|   5  |   9000  |  13500  |  1100  |      10      |
|   6  |   9200  |  13800  |  1350  |      11      |
|   7  |   9400  |  14100  |  1550  |      12      |
|   8  |   9600  |  14400  |  1700  |      13      |
|   9  |   9800  |  14700  |  1900  |      14      |
|  10  |  10000  |  15000  |  2200  |      15      |
|  11  |  10200  |  15300  |  2400  |      16      |
|  12  |  10400  |  15600  |  2600  |      17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/12/11">
        <TimelineRow>该兵种第 2 次推出，有效期至 2025/1/1.</TimelineRow>
        <TimelineRow>这次推出时，现在饼干皮卡只需 6 本即可解锁（之前是 8 本）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>该兵种第 1 次推出，有效期至 2023/12/29.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>