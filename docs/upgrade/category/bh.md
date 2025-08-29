---
title: "部落冲突升级数据（夜世界）"
shownTitle: "升级数据"
description: "在这里，你可以查到部落冲突的各种数据，每个兵种和建筑有哪些属性、升级要多久、多少资源这些东西写得清清楚楚。本页面是夜世界（建筑大师基地）的数据。"
module: upgrade-bh
canonical: /upgrade/category/bh
---

<script setup>
import ListItems from '@/customized/upgrade/ListItems.vue';
import ListItem from '@/customized/upgrade/ListItem.vue';
import { getCookie } from '@/assets/global/utils.js';

let activeTabIndex = 0;
const activeTabCookieValue = getCookie("cp-upgrade-active-tab");
if (activeTabCookieValue === "bh-buildings") {
    activeTabIndex = 1;
}
</script>

如需查看其他村庄（家乡、都城）的内容，请使用左侧菜单栏。

<SwitchTabs contentClass="cp-upgrade-item" :stickyTabs="true" :averageTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-upgrade-techniques"
        :activeTab="activeTabIndex === 0"
        upgradeCookieValue="bh-techniques">科技</SwitchTab>
    <SwitchTab tabId="cp-upgrade-buildings"
        :activeTab="activeTabIndex === 1"
        upgradeCookieValue="bh-buildings">建筑</SwitchTab>
</SwitchTabs>

<SwitchTabGroup id="cp-upgrade-techniques" class="cp-upgrade-item">
    <ListItems title="兵种" imgFolder="bh_tech">
        <ListItem name="狂暴野蛮人" imgSrc="1000/Raged_Barbarian_thumb.png" link="1000-Raged-Barbarian" :lazyLoading="false" />
        <ListItem name="隐秘弓箭手" imgSrc="1001/Sneaky_Archer_thumb.png" link="1001-Sneaky-Archer" :lazyLoading="false" />
        <ListItem name="巨人拳击手" imgSrc="1002/Boxer_Giant_thumb.png" link="1002-Boxer-Giant" :lazyLoading="false" />
        <ListItem name="异变亡灵" imgSrc="1003/Beta_Minion_thumb.png" link="1003-Beta-Minion" :lazyLoading="false" />
        <ListItem name="炸弹兵" imgSrc="1004/Bomber_thumb.png" link="1004-Bomber" :lazyLoading="false" />
        <ListItem name="飞龙宝宝" imgSrc="1005/Baby_Dragon_thumb.png" link="1005-Baby-Dragon" :lazyLoading="false" />
        <ListItem name="加农炮战车" imgSrc="1006/Cannon_Cart_thumb.png" link="1006-Cannon-Cart" :lazyLoading="false" />
        <ListItem name="暗夜女巫" imgSrc="1007/Night_Witch_thumb.png" link="1007-Night-Witch" :lazyLoading="false" />
        <ListItem name="骷髅气球" imgSrc="1008/Drop_Ship_thumb.png" link="1008-Drop-Ship" :lazyLoading="false" />
        <ListItem name="雷霆皮卡" imgSrc="1009/Power_P.E.K.K.A_thumb.png" link="1009-Power-P.E.K.K.A" :lazyLoading="false" />
        <ListItem name="野猪飞骑" imgSrc="100a/Hog_Glider_thumb.png" link="100a-Hog-Glider" :lazyLoading="false" />
        <ListItem name="电火法师" imgSrc="100b/Electrofire_Wizard_Fire_thumb.png" link="100b-Electrofire-Wizard" :lazyLoading="false" />
    </ListItems>
    <ListItems title="英雄" imgFolder="bh_tech">
        <ListItem name="战争机器" imgSrc="10f0/Battle_Machine_thumb.png" link="10f0-Battle-Machine" :lazyLoading="false" />
        <ListItem name="战斗直升机" imgSrc="10f1/Battle_Copter_thumb.png" link="10f1-Battle-Copter" :lazyLoading="false" />
    </ListItems>
</SwitchTabGroup>

<SwitchTabGroup id="cp-upgrade-buildings" class="cp-upgrade-item">
    <ListItems title="大本营及武器" imgFolder="bh_buildings">
        <ListItem name="建筑大师大本营" imgSrc="1200/Builder_Hall10.png" link="1200-Builder-Hall" />
        <ListItem name="奥仔哨站" imgSrc="1240/O.T.T.O's_Outpost10.png" link="1240-O.T.T.O's-Outpost" />
        <ListItem name="电击车" imgSrc="1241/Zappy_thumb.png" link="1241-Zappy" />
    </ListItems>
    <ListItems title="防御建筑" imgFolder="bh_buildings">
        <ListItem name="城墙" imgSrc="110c/Wall10.png" link="110c-Walls" />
        <ListItem name="加农炮" imgSrc="1100/Cannon10.png" link="1100-Cannon" />
        <ListItem name="双管加农炮" imgSrc="1101/Double_Cannon10.png" link="1101-Double-Cannon" />
        <ListItem name="箭塔" imgSrc="1102/Archer_Tower10.png" link="1102-Archer-Tower" />
        <ListItem name="特斯拉电磁塔" imgSrc="1103/Hidden_Tesla10.png" link="1103-Hidden-Tesla" />
        <ListItem name="防空火炮" imgSrc="1104/Firecrackers10.png" link="1104-Firecrackers" />
        <ListItem name="撼地巨石" imgSrc="1105/Crusher10.png" link="1105-Crusher" />
        <ListItem name="守卫岗哨" imgSrc="1106/Guard_Post10.png" link="1106-Guard-Post" />
        <ListItem name="空中炸弹发射器" imgSrc="1107/Air_Bombs10.png" link="1107-Air-Bombs" />
        <ListItem name="多管迫击炮" imgSrc="1108/Multi_Mortar10.png" link="1108-Multi-Mortar" />
        <ListItem name="熔岩火炮" imgSrc="1109/Roaster10.png" link="1109-Roaster" />
        <ListItem name="巨型加农炮" imgSrc="110a/Giant_Cannon10.png" link="110a-Giant-Cannon" />
        <ListItem name="超级特斯拉电磁塔" imgSrc="110b/Mega_Tesla10.png" link="110b-Mega-Tesla" />
        <ListItem name="熔岩发射器" imgSrc="110d/Lava_Launcher10.png" link="110d-Lava-Launcher" />
        <ListItem name="X连弩" imgSrc="110e/X-Bow5_Ground.png" link="110e-X-Bow" />
    </ListItems>
    <ListItems title="陷阱" imgFolder="bh_buildings">
        <ListItem name="弹射陷阱" imgSrc="1180/Push_Trap10.png" link="1180-Push-Trap" />
        <ListItem name="隐形弹簧" imgSrc="1181/Spring_Trap4.png" link="1181-Spring-Trap" />
        <ListItem name="地雷" imgSrc="1182/Mine10.png" link="1182-Mine" />
        <ListItem name="巨型地雷" imgSrc="1183/Mega_Mine10.png" link="1183-Mega-Mine" />
    </ListItems>
    <ListItems title="资源类建筑" imgFolder="bh_buildings">
        <ListItem name="金矿" imgSrc="1201/Gold_Mine10.png" link="1201-Gold-Mine" />
        <ListItem name="圣水收集器" imgSrc="1202/Elixir_Collector10.png" link="1202-Elixir-Collector" />
        <ListItem name="储金罐" imgSrc="1203/Gold_Storage10.png" link="1203-Gold-Storage" />
        <ListItem name="圣水瓶" imgSrc="1204/Elixir_Storage10.png" link="1204-Elixir-Storage" />
        <ListItem name="宝石矿井" imgSrc="1205/Gem_Mine10.png" link="1205-Gem-Mine" />
    </ListItems>
    <ListItems title="军事建筑" imgFolder="bh_buildings">
        <ListItem name="建筑大师训练营" imgSrc="1280/Builder_Barracks12.png" link="1280-Builder-Barracks" />
        <ListItem name="兵营" imgSrc="1281/Army_Camp.png" link="1281-Army-Camp" />
        <ListItem name="星空实验室" imgSrc="1282/Star_Laboratory10.png" link="1282-Star-Laboratory" />
        <ListItem name="预备营" imgSrc="1285/Reinforcement_Camp.png" link="1285-Reinforcement-Camp" />
        <ListItem name="治疗小屋" imgSrc="1286/Healing_Hut5.png" link="1286-Healing-Hut" />
    </ListItems>
    <ListItems title="其他建筑" imgFolder="bh_buildings">
        <ListItem name="时光钟楼" imgSrc="1283/Clock_Tower10.png" link="1283-Clock-Tower" />
        <ListItem name="小博实验室" imgSrc="1284/B.O.B_Control5.png" link="1284-B.O.B-Control" />
    </ListItems>
</SwitchTabGroup>