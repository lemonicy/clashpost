---
title: "部落冲突 coc 任意球野蛮人（自由球野蛮人）升级数据"
navTitle: "任意球野蛮人"
shownTitle: "任意球野蛮人（自由球野蛮人）"
description: "登场时，他会冷静、精准地大脚开球，摧毁最近的防御建筑。随后会像普通野蛮人一样开始横冲直撞。"
module: upgrade-temp
imgFolder: temp/0e10
wiki: https://clashofclans.fandom.com/wiki/Barbarian_Kicker
canonical: /upgrade/0e10-Barbarian-Kicker
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barbarian_Kicker_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Barbarian_Kicker1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 任意球野蛮人是 2024 年 5 月哈兰德赛季中引入的临时兵种，并于 2025 年 8 月返场。
2. 部署时，任意球野蛮人会朝防御建筑移动，在距离防御建筑 11 格的地方把球踢向建筑。足球踢出去之后，任意球野蛮人会变成普通近战单位，用踢的方式攻击。
   - 踢球的伤害是单体伤害。
   - 任意球野蛮人从准备踢球到球踢出去有个约 3.5 秒的间隔时间。
   - 如果目标在足球踢出去之前就被摧毁了，则任意球野蛮人会重新选择踢球的目标。
   - 如果部署任意球野蛮人后阵型中没有防御建筑，或者所有防御建筑都被隐形了，则任意球野蛮人会朝非防御建筑、部队或城墙踢球。
   - 任意球野蛮人无法瞄准及命中空中部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位 (首次攻击时)<br>地面近战单位 (首次攻击后)" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面目标" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.3 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 踢球伤害 | 生命值 | 对应的大本等级 |
| ---- |   ---   |   ---   |    ---  |   ---  |       ---     |
|   1  |    70   |   91    |    652  |   450  |        6      |
|   2  |    90   |  117    |    815  |   650  |        7      |
|   3  |   110   |  143    |   1014  |  1000  |        8      |
|   4  |   125   |  162.5  |   1268  |  1200  |        9      |
|   5  |   135   |  175.5  |   1684  |  1400  |       10      |
|   6  |   145   |  188.5  |   2010  |  1600  |       11      |
|   7  |   160   |  208    |   2245  |  1900  |       12      |
|   8  |   165   |  214.5  |   2698  |  2000  |       13      |
|   9  |   170   |  221    |   2898  |  2100  |       14      |
|  10  |   180   |  234    |   3006  |  2300  |       15      |
|  11  |   190   |  247    |   3151  |  2400  |       16      |
|  12  |   200   |  260    |   3260  |  2500  |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/08/11">
        <TimelineRow>该兵种第 2 次推出，有效期至 2025/08/19.</TimelineRow>
        <TimelineRow>这次推出后，任意球野蛮人需要 6 本才能解锁（之前是 3 本）。</TimelineRow>
        <TimelineRow>与上次推出时相比，任意球野蛮人的数据变化幅度很小。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/05/01">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/06/01.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
