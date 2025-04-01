---
title: "部落冲突 coc 隐秘哥布林（超级哥布林、超哥）升级数据"
navTitle: "隐秘哥布林"
shownTitle: "隐秘哥布林（超级哥布林、超哥）"
description: "隐秘哥布林身怀绝技，能在部署后隐形一段时间，但是他们获取资源时会弄出巨大的响动，很容易暴露行踪。"
module: upgrade-home
imgFolder: home_tech/0601
wiki: https://clashofclans.fandom.com/wiki/Sneaky_Goblin
canonical: /upgrade/0601-Sneaky-Goblin
---

- *如想查看该兵种的普通版本，请访问：[哥布林](/upgrade/0003-Goblin)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sneaky_Goblin_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Sneaky_Goblin7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 隐秘哥布林的技能（隐形披风）：在部署后的 5 秒内隐身，不会被锁定为攻击目标。
2. 隐秘哥布林不能把援兵引出来，但是可以触发陷阱。触发 [骷髅陷阱](/upgrade/0385-Skeleton-Trap) 后，骷髅会站在原地，等到隐身效果消失之后才去追击隐秘哥布林。
3. 隐秘哥布林隐身时并非无敌，仅仅是不会被锁定为目标，还是会受到伤害的。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="资源建筑 (2 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="3" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="最低哥布林等级" pValue="7" />
    <UnitProperty pKey="最低大本等级" pValue="11" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害 | 每次伤害 |对资源建筑的<br>每次伤害| 生命值 |所需大本等级|
| ---- |   ----   |   ----  |          ----        |  ---- |    ----   |
|   7  |    155   |   155   |          310         |   270 |     11    |
|   8  |    170   |   170   |          340         |   320 |     12    |
|   9  |    180   |   180   |          360         |   350 |     15    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 9 级哥布林，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>7 ~ 8 级隐秘哥布林的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>部落冲突新增“超级兵种”玩法，隐秘哥布林是首批推出的超级兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>