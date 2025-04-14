---
title: "部落冲突 coc 皇家幽灵升级数据"
navTitle: "皇家幽灵"
shownTitle: "皇家幽灵"
description: "透明的皇家幽灵很难被人注意到，他为此很苦恼，因此决心大肆破坏来找回应有的存在感。皇家幽灵实在太透明了，有时候连城墙都不会阻拦他！"
module: upgrade-temp
imgFolder: temp/0e07
wiki: https://clashofclans.fandom.com/wiki/Royal_Ghost
canonical: /upgrade/0e07-Royal-Ghost
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Royal_Ghost_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Royal_Ghost1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="8" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 2.4 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="特殊技能" pValue="匿迹隐形<sup>*</sup>" />
    <UnitProperty pKey="减速比例" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="训练时间" pValue="37" trainingSystem="2022" />
</UnitProperties>

\* 皇家幽灵在部署后的 12 秒内不能被锁定为目标，也不能被城墙阻拦。此外，被皇家幽灵命中的目标还有减速效果。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |  ----   |  ----   |  ----  |       ---      |
|   1  |   200   |   200   |   110  |        5       |
|   2  |   280   |   280   |   150  |        6       |
|   3  |   360   |   360   |   170  |        8       |
|   4  |   440   |   440   |   190  |        9       |
|   5  |   520   |   520   |   210  |       10       |
|   6  |   600   |   600   |   250  |       11       |
|   7  |   680   |   680   |   270  |       12       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/10">
        <TimelineRow>该兵种第 3 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/10">
        <TimelineRow>该兵种第 2 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/10">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>