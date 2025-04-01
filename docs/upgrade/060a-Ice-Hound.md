---
title: "部落冲突 coc 寒冰猎犬（冰狗）升级数据"
navTitle: "寒冰猎犬"
shownTitle: "寒冰猎犬（冰狗）"
description: "摆脱了熔岩引起的消化不良后，寒冰猎犬准备冻结敌军村庄。冷静点，否则......"
module: upgrade-home
imgFolder: home_tech/060a
wiki: https://clashofclans.fandom.com/wiki/Ice_Hound
canonical: /upgrade/060a-Ice-Hound
---

- *如想查看该兵种的普通版本，请访问：[熔岩猎犬](/upgrade/0085-Lava-Hound)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Hound.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Ice_Hound5.png" />
        <UnitImg imgTitle="迷你寒冰猎犬" imgSrc="Ice_Pup.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 寒冰猎犬的技能（奇冰制胜）：寒冰猎犬和迷你寒冰猎犬的攻击会让敌军和防御减速，寒冰猎犬被消灭后会冻结附近的一切。
2. 寒冰猎犬和迷你寒冰猎犬的普通攻击与 [冰冻法术](/upgrade/0104-Freeze-Spell) 不同，不能把敌方部队和建筑完全冻住，只是有一个减速效果。
3. 寒冰猎犬死亡后的冰冻效果与冰冻法术类似，可以把敌方部队和建筑完全冻住。
4. 寒冰猎犬的普通攻击和死亡冰冻效果和 [戈仑冰人](/upgrade/0087-Ice-Golem) 相同，只是冰冻时间不一样。

<SmallTitle>寒冰猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防空火箭<sup>*</sup>" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.25 格" />
    <UnitProperty pKey="死亡爆炸半径" pValue="3.5 格" />
    <UnitProperty pKey="攻击后的减速效果" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="减速持续时间" pValue="2 秒" />
    <UnitProperty pKey="最低熔岩猎犬等级" pValue="5" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

\* 寒冰猎犬有三段攻击偏好。场上有防空火箭时攻击 [防空火箭](/upgrade/0304-Air-Defense)，没有防空火箭时攻击其他防御建筑，没有防御建筑时攻击非防御建筑。

<SmallTitle>迷你寒冰猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="每秒伤害" pValue="35" />
    <UnitProperty pKey="每次伤害" pValue="35" />
    <UnitProperty pKey="生命值" pValue="50" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 |死亡后<br>冰冻时间|死亡后分裂的迷你寒冰<br>猎犬数量 (进攻/防守)| 生命值 |所需<br>大本等级|
| ---- |   ----  |   ----  |       ----      |                   ----                  |  ---- |      ----     |
|   5  |    10   |    20   |      3.5 秒     |                 10 / 10                 |  9500 |       12      |
|   6  |    15   |    30   |      4.25 秒    |                 12 / 11                 | 10000 |       13      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>寒冰猎犬的训练时间由 6:40 改为 5:47</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 级寒冰猎犬防守时分裂出的迷你寒冰猎犬的数量减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>如果熔岩猎犬和寒冰猎犬在选择目标时，场上剩余的防空火箭都被隐形了，它们不会忘记锁定之前没有看到的防空火箭。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>新超级兵：寒冰猎犬。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>