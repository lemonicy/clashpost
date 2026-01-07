---
title: "部落冲突 coc 寒冰亡灵升级数据"
navTitle: "寒冰亡灵"
shownTitle: "寒冰亡灵"
description: "寒冰亡灵兼具亡灵的凶猛和戈仑冰人的冷酷，会锁定防御建筑并减缓其攻击速度。但它像雪花一样脆弱！"
module: upgrade-temp
imgFolder: temp/0e14
wiki: https://clashofclans.fandom.com/wiki/Ice_Minion
canonical: /upgrade/0e14-Ice-Minion
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Minion_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Ice_Minion1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 寒冰亡灵在 2024 年 10 月的合体狂热活动中首次推出，在活动中获取 1 000 酸腐圣水（任务点数）即可解锁。
2. 和 [戈仑冰人](/upgrade/0087-Ice-Golem) 类似，寒冰亡灵对目标有减速效果，且死亡后可以冻住建筑物。
3. 和普通的 [亡灵](/upgrade/0080-Minion) 不同，[搜空地雷](/upgrade/0384-Seeking-Air-Mine) 可以锁定寒冰亡灵。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.5 格" />
    <UnitProperty pKey="攻击减速效果" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="减速持续时间" pValue="2 秒" />
    <UnitProperty pKey="死亡冰冻半径" pValue="4.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />  
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |死亡后<br>冰冻时间|  生命值 | 对应的<br>大本等级|
| ---- |   ---   |   ---   |       ---       |   ---   |        ----     |
|   1  |    63   |    63   |      1.5 秒     |   264   |         6       |
|   2  |    68   |    68   |      1.5 秒     |   286   |         7       |
|   3  |    73   |    73   |      1.5 秒     |   308   |         8       |
|   4  |    78   |    78   |      1.5 秒     |   330   |         9       |
|   5  |    83   |    83   |      1.5 秒     |   352   |        10       |
|   6  |    89   |    89   |      2.7 秒     |   374   |        11       |
|   7  |    96   |    96   |      2.7 秒     |   396   |        12       |
|   8  |   102   |   102   |      2.7 秒     |   418   |        13       |
|   9  |   109   |   109   |      2.7 秒     |   440   |        14       |
|  10  |   116   |   116   |      2.7 秒     |   462   |        15       |
|  11  |   122   |   122   |      2.7 秒     |   484   |        16       |
|  12  |   129   |   129   |      2.7 秒     |   506   |        17       |
|  13  |   135   |   135   |      2.7 秒     |   528   |        18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/12/08">
        <TimelineRow>该兵种第 3 次推出，有效期至 2026/01/01.</TimelineRow>
        <TimelineRow>与上次推出时相比，寒冰亡灵的每秒伤害和生命值略有提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/10">
        <TimelineRow>该兵种第 2 次推出，有效期至 2025/11/01.</TimelineRow>
        <TimelineRow>11 ~ 17 级大本营寒冰亡灵死亡后的冰冻时间由 2.5 秒调整为 2.7 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/10/11">
        <TimelineRow>该兵种第 1 次推出，是 2024 年合体狂热活动中的五个临时兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>