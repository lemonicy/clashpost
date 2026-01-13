---
title: "部落冲突 coc 边线球巨人（界外球巨人）升级数据"
navTitle: "边线球巨人"
shownTitle: "边线球巨人（界外球巨人）"
description: "这名新秀运动员又高又壮，他会向最近的建筑投掷一个威力巨大的弹跳足球。随后他会回归巨人的招牌动作——重拳锤击！"
module: upgrade-temp
imgFolder: temp_troops/0e11
wiki: https://clashofclans.fandom.com/wiki/Giant_Thrower
canonical: /upgrade/0e11-Giant-Thrower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Thrower_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Giant_Thrower1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 边线球巨人是 2024 年 5 月的并肩哈兰德活动中引入的临时兵种。
2. 部署时，边线球巨人会朝防御建筑移动，把球扔到建筑上。足球会沿直线弹跳三次（包括击中建筑的那一下），每次弹跳都能对建筑、防守方部队和城墙造成**溅射伤害**，且对城墙有 **15 倍** 伤害。
   - 和其他优先攻击防御建筑的兵种一样，边线球巨人优先攻击防御建筑，当场上没有防御时，他们也会瞄准非防御建筑和防守方部队。
3. 首次攻击过后，边线球巨人会变成近战单位。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位 (首次攻击时)<br>地面近战单位 (首次攻击后)" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面目标" />
    <UnitProperty pKey="占据人口" pValue="15" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.7 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="120" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 弹射伤害 | 生命值 | 对应的大本等级 |
| ---- |   ---   |   ---   |    ---  |   ---  |       ---     |
|   1  |   100   |   180   |    150  |   500  |        6      |
|   2  |   110   |   198   |    300  |   750  |        7      |
|   3  |   120   |   216   |    450  |  1400  |        8      |
|   4  |   130   |   234   |    600  |  1700  |        9      |
|   5  |   140   |   252   |    780  |  1900  |       10      |
|   6  |   150   |   270   |    975  |  2200  |       11      |
|   7  |   160   |   288   |   1080  |  2500  |       12      |
|   8  |   170   |   306   |   1200  |  2800  |       13      |
|   9  |   180   |   324   |   1350  |  3100  |       14      |
|  10  |   190   |   342   |   1500  |  3400  |       15      |
|  11  |   200   |   360   |   1650  |  3600  |       16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/05/07">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/05/24.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
