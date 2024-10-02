---
title: "部落冲突升级数据（临时单位）"
shownTitle: "升级数据"
description: "在这里，你可以查到部落冲突的各种数据，每个兵种和建筑有哪些属性、升级要多久、多少资源这些东西写得清清楚楚。本页面是部落冲突临时兵种的数据。"
module: upgrade-temp
canonical: /upgrade/category/temp
---

<script setup>
import ListItems from '@/components/upgrade/ListItems.vue';
import ListItem from '@/components/upgrade/ListItem.vue';
</script>

如需查看其他版块（家乡、夜世界、都城）的内容，请使用左侧菜单栏。

<hr class="cp-light-row-division" />

<ListItems title="兵种" imgFolder="temp">
    <ListItem name="寒冰法师" imgSrc="0e00/Ice_Wizard_thumb.png" link="0e00-Ice-Wizard" :lazyLoading="false" />
    <ListItem name="野蛮人攻城槌" imgSrc="0e01/Battle_Ram_thumb.png" link="0e01-Battle-Ram" :lazyLoading="false" />
    <ListItem name="南瓜野蛮人" imgSrc="0e02/Pumpkin_Barbarian_thumb.png" link="0e02-Pumpkin-Barbarian" :lazyLoading="false" />
    <ListItem name="骷髅巨人" imgSrc="0e03/Giant_Skeleton_thumb.png" link="0e03-Giant-Skeleton" :lazyLoading="false" />
    <ListItem name="骷髅飞桶" imgSrc="0e04/Skeleton_Barrel_thumb.png" link="0e04-Skeleton-Barrel" :lazyLoading="false" />
    <ListItem name="艾尔普里莫" imgSrc="0e05/El_Primo_thumb.png" link="0e05-El-Primo" :lazyLoading="false" />
    <ListItem name="派对法师" imgSrc="0e06/Party_Wizard_thumb.png" link="0e06-Party-Wizard" :lazyLoading="false" />
    <ListItem name="皇家幽灵" imgSrc="0e07/Royal_Ghost_thumb.png" link="0e07-Royal-Ghost" :lazyLoading="false" />
    <ListItem name="蛮羊骑士" imgSrc="0e08/Ram_Rider_thumb.png" link="0e08-Ram-Rider" :lazyLoading="false" />
    <ListItem name="野蛮箭手" imgSrc="0e09/Barcher_thumb.png" link="0e09-Barcher" :lazyLoading="false" />
    <ListItem name="野猪法师" imgSrc="0e0a/Hog_Wizard_thumb.png" link="0e0a-Hog-Wizard" :lazyLoading="false" />
    <ListItem name="熔岩气球" imgSrc="0e0b/Lavaloon_thumb.png" link="0e0b-Lavaloon" :lazyLoading="false" />
    <ListItem name="女巫戈仑" imgSrc="0e0c/Witch_Golem_thumb.png" link="0e0c-Witch-Golem" :lazyLoading="false" />
    <ListItem name="饼干皮卡" imgSrc="0e0d/C.O.O.K.I.E_thumb.png" link="0e0d-C.O.O.K.I.E" :lazyLoading="false" />
    <ListItem name="烟花炮手" imgSrc="0e0e/Firecracker_thumb.png" link="0e0e-Firecracker" :lazyLoading="false" />
    <ListItem name="驭水青龙" imgSrc="0e0f/Azure_Dragon_thumb.png" link="0e0f-Azure-Dragon" :lazyLoading="false" />
    <ListItem name="任意球野蛮人" imgSrc="0e10/Barbarian_Kicker_thumb.png" link="0e10-Barbarian-Kicker" :lazyLoading="false" />
    <ListItem name="边线球巨人" imgSrc="0e11/Giant_Thrower_thumb.png" link="0e11-Giant-Thrower" :lazyLoading="false" />
    <ListItem name="机甲超人" imgSrc="0e12/M.E.C.H.A_thumb.png" link="0e12-M.E.C.H.A" :lazyLoading="false" />
    <ListItem name="扫帚女巫" imgSrc="0e13/Broom_Witch_thumb.png" link="0e13-Broom-Witch" :lazyLoading="false" />
</ListItems>
<ListItems title="法术" imgFolder="temp">
    <ListItem name="圣诞奇袭" imgSrc="0e80/Santas_Surprise.png" link="0e80-Santas-Surprise" :lazyLoading="false" />
    <ListItem name="生日大爆炸" imgSrc="0e81/Birthday_Boom.png" link="0e81-Birthday-Boom" :lazyLoading="false" />
    <ListItem name="袋装小冰怪" imgSrc="0e82/Bag_of_Frostmites.png" link="0e82-Bag-of-Frostmites" :lazyLoading="false" />
    <ListItem name="黄牌法术" imgSrc="0e83/Yellow_Card.png" link="0e83-Yellow-Card" :lazyLoading="false" />
</ListItems>
<ListItems title="陷阱" imgFolder="temp">
    <ListItem name="南瓜炸弹" imgSrc="0f00/Pumpkin_Bomb.png" link="0f00-Pumpkin-Bomb" />
    <ListItem name="圣诞陷阱" imgSrc="0f01/Santa_Strike.png" link="0f01-Santa-Strike" />
    <ListItem name="冰冻陷阱" imgSrc="0f02/Freeze_Trap.png" link="0f02-Freeze-Trap" />
    <ListItem name="玲珑陷阱" imgSrc="0f03/Shrink_Trap.png" link="0f03-Shrink-Trap" />
</ListItems>

<div class="cp-upgrade-index-tip">
    <SmallTitle>注意</SmallTitle>
    <ol>
        <li>由于某些兵种的年代过于久远，所以可能出现部分数据缺失的问题。如果您有详细数据，请联系作者。</li>
        <li>如果某个兵种曾经被推出过多次，则本站中的数据以最后一次出现时为准。</li>
        <li>临时兵种、法术无法升级，它的等级根据你的大本营等级自动确定。</li>
        <li>临时陷阱无法升级，不管玩家是几本，陷阱的属性都是一样的。</li>
        <li>临时兵种和法术无法捐赠给其他部落成员。</li>
    </ol>
</div>

<style>
.cp-upgrade-index-tip .cp-small-subtitle {
    margin: 0 0 1rem 0.125rem;
}
</style>