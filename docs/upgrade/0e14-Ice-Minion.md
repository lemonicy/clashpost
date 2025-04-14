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

1. 寒冰亡灵在 2024 年 10 月的合体狂热活动中首次推出，在奖励之路中达到 1 000 酸腐圣水（任务点数）即可解锁。
2. 和 [戈仑冰人](/upgrade/0087-Ice-Golem) 类似，寒冰亡灵对目标有减速效果，且死亡后可以冻住建筑物。
3. 和普通的 [亡灵](/upgrade/0080-Minion) 不同，[搜空地雷](/upgrade/0384-Seeking-Air-Mine) 可以锁定寒冰亡灵。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
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
    <UnitProperty pKey="训练时间" pValue="18" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |死亡后<br>冰冻时间|  生命值 | 对应的<br>大本等级|
| ---- |   ---   |   ---   |       ---       |   ---   |        ----     |
|   1  |    57   |    57   |      1.5 秒     |   240   |         6       |
|   2  |    62   |    62   |      1.5 秒     |   260   |         7       |
|   3  |    66   |    66   |      1.5 秒     |   280   |         8       |
|   4  |    71   |    71   |      1.5 秒     |   300   |         9       |
|   5  |    75   |    75   |      1.5 秒     |   320   |        10       |
|   6  |    81   |    81   |      2.5 秒     |   340   |        11       |
|   7  |    87   |    87   |      2.5 秒     |   360   |        12       |
|   8  |    93   |    93   |      2.5 秒     |   380   |        13       |
|   9  |    99   |    99   |      2.5 秒     |   400   |        14       |
|  10  |   105   |   105   |      2.5 秒     |   420   |        15       |
|  11  |   111   |   111   |      2.5 秒     |   440   |        16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/10/11">
        <TimelineRow>该兵种第 1 次推出，是 2024 年合体狂热活动中的五个临时兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>