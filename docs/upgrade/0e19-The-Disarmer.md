---
title: "部落冲突 coc 铁臂终结者升级数据"
navTitle: "铁臂终结者"
shownTitle: "铁臂终结者"
description: "她就是那个狠角色！铁臂终结者挥舞球棒，狠狠砸向防御建筑，毫不留情！城墙？对她来说根本不是问题，一跃而过轻松突破！她必须被击倒三次才会彻底倒下，这才叫硬茬！"
module: upgrade-temp
imgFolder: temp/0e19
wiki: https://clashofclans.fandom.com/wiki/The_Disarmer
canonical: /upgrade/0e19-The-Disarmer
---

- *如想查看铁臂终结者的设计原型，请访问：[瓦基丽武神](/upgrade/0082-Valkyrie)。*
- *如想查看瓦基丽武神的强化版本，请访问：[超级瓦基丽武神](/upgrade/0607-Super-Valkyrie)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Disarmer_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Disarmer1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 铁臂终结者在 2025 年 4 月的是敌是友活动中作为临时兵种推出，玩家获得 2 500 活动门票（任务点数）后即可解锁。
2. 铁臂终结者的攻击机制类似于瓦基丽武神，但却拥有与 [野猪骑士](/upgrade/0081-Hog-Rider) 相同的寻路 AI.
3. 铁臂终结者可以跳过城墙并造成溅射伤害，而且铁臂终结者还可以攻击空中目标，这是瓦基丽武神和野猪骑士无法同时做到的。
4. 铁臂终结者部署后的前 20 秒有狂暴效果，这个机制类似于 [超级野蛮人](/upgrade/0600-Super-Barbarian)。
5. 当铁臂终结者被击倒大约 4 秒后就会复活，最多复活两次。你可以理解为铁臂终结者有三条命。下方的升级数据表中显示的是一条命的数据。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="2.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="60" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.2 秒/次" />
    <UnitProperty pKey="首次攻击时机" pValue="到达目标后 0.6 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="狂暴效果持续时间" pValue="20 秒" />
    <UnitProperty pKey="狂暴状态下伤害增加" pValue="100%" />
    <UnitProperty pKey="狂暴状态下移动速度增加" pValue="1.75 格/秒" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |   ---   |   ---   |   ---  |       ---      |
|   1  |   100   |   220   |  1300  |        6       |
|   2  |   125   |   275   |  1700  |        7       |
|   3  |   150   |   330   |  2200  |        8       |
|   4  |   175   |   385   |  2900  |        9       |
|   5  |   200   |   440   |  3600  |       10       |
|   6  |   225   |   495   |  4400  |       11       |
|   7  |   250   |   550   |  4850  |       12       |
|   8  |   300   |   660   |  5300  |       13       |
|   9  |   325   |   715   |  5900  |       14       |
|  10  |   350   |   770   |  6500  |       15       |
|  11  |   375   |   825   |  7100  |       16       |
|  12  |   415   |   913   |  7800  |       17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/04/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2025/04/29.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>