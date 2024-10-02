---
title: "部落冲突 coc 黄牌法术升级数据"
navTitle: "黄牌法术"
shownTitle: "黄牌法术"
description: "阻挡您的进攻是缺乏竞技精神的无礼行为，理应受到惩罚，因此目标防御建筑或英雄将被临时禁赛。禁赛期间，这些防御建筑或英雄无法发动攻击，也无法被攻击。"
module: upgrade-temp
imgFolder: temp/0e83
wiki: https://clashofclans.fandom.com/wiki/Yellow_Card
canonical: /upgrade/0e83-Yellow-Card
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Yellow_Card.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 黄牌法术可以暂时禁赛最近的一个防御建筑或敌方英雄，被禁赛的单位不能攻击，也不会被锁定。
   - 非防御建筑与 [部落城堡](/upgrade/0407-Clan-Castle) 内的援军不能被禁赛。
   - 被禁赛的单位并非无敌，只是不会被锁定，比如说 [雷电法术](/upgrade/0100-Lightning-Spell) 和 [地震法术](/upgrade/0181-Earthquake-Spell) 可以对被禁赛的建筑造成伤害。
   - 被禁赛的单位被摧毁后，其死亡效果会正常触发，比如说被禁赛的 [炸弹塔](/upgrade/0308-Bomb-Tower) 被摧毁后仍然会爆炸。
   - [大本营](/upgrade/0400-Town-Hall) 和 [建筑工人小屋](/upgrade/0500-Builders-Hut) 需要有武器才能被禁赛（武器没有被触发也行），[特斯拉电磁塔](/upgrade/0307-Hidden-Tesla) 如果没有跳出来则不能被禁赛。
2. 根据部落驿站团队的测试，黄牌法术锁定目标的距离上限约为 2.3 格<sup>\*</sup>，如果法术落点 2.3 格内没有防御建筑或英雄，那么法术就放空了。
   - \* 指的是法术落点到目标边缘的距离。
3. 对同一单位重复使用黄牌法术后，该单位的禁赛时间不会叠加，只会被重置为 15 秒。
4. 对同一单位重复使用两次黄牌法术后，游戏会播放一个红牌效果，这个红牌效果只是一个动画，并不能把目标驱逐离场。
5. 黄牌法术只有一个等级。

<SmallTitle>基本属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用目标" pValue="防御建筑和敌方英雄" />
    <UnitProperty pKey="作用时间" pValue="15 秒" />
    <UnitProperty pKey="攻击类型" pValue="单个目标" />
    <UnitProperty pKey="所需空间" pValue="1" />
    <UnitProperty pKey="所需法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="法术配置时间" pValue="180" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/5/7">
        <TimelineRow>该法术在并肩哈兰德活动中首次推出，在奖励之路中达到 3 000 足球（任务点数）即可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
