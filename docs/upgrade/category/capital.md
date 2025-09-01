---
title: "部落冲突升级数据（都城）"
shownTitle: "升级数据"
description: "在这里，你可以查到部落冲突的各种数据，每个兵种和建筑有哪些属性、升级要多久、多少资源这些东西写得清清楚楚。本页面是部落都城（部落首都）的数据。"
module: upgrade-capital
canonical: /upgrade/category/capital
---

<script setup>
import ListItems from "@/customized/upgrade/ListItems.vue";
import ListItem from "@/customized/upgrade/ListItem.vue";
import { getCookie } from "@/assets/global/utils.js";

let activeTabIndex = 0;
const activeTabCookieValue = getCookie("cp-upgrade-active-tab");
if (activeTabCookieValue === "capital-buildings") {
    activeTabIndex = 1;
}
</script>

如需查看其他村庄（家乡、夜世界）的内容，请使用左侧菜单栏。

<SwitchTabs contentClass="cp-upgrade-item" :stickyTabs="true" :averageTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-upgrade-techniques"
        :activeTab="activeTabIndex === 0"
        upgradeCookieValue="capital-techniques">科技</SwitchTab>
    <SwitchTab tabId="cp-upgrade-buildings"
        :activeTab="activeTabIndex === 1"
        upgradeCookieValue="capital-buildings">建筑</SwitchTab>
</SwitchTabs>

<SwitchTabGroup id="cp-upgrade-techniques" class="cp-upgrade-item">
    <ListItems title="兵种" imgFolder="capital_tech">
        <ListItem name="超级野蛮人" imgSrc="2000/Super_Barbarian_thumb.png" link="2000-Super-Barbarian" :lazyLoading="false" />
        <ListItem name="隐秘弓箭手" imgSrc="2001/Sneaky_Archer_thumb.png" link="2001-Sneaky-Archer" :lazyLoading="false" />
        <ListItem name="超级巨人" imgSrc="2002/Super_Giant_thumb.png" link="2002-Super-Giant" :lazyLoading="false" />
        <ListItem name="野蛮人攻城槌" imgSrc="2003/Battle_Ram_thumb.png" link="2003-Battle-Ram" :lazyLoading="false" />
        <ListItem name="亡灵大军" imgSrc="2004/Minion_Horde_thumb.png" link="2004-Minion-Horde" :lazyLoading="false" />
        <ListItem name="超级法师" imgSrc="2005/Super_Wizard_thumb.png" link="2005-Super-Wizard" :lazyLoading="false" />
        <ListItem name="火箭气球兵" imgSrc="2006/Rocket_Balloon_thumb.png" link="2006-Rocket-Balloon" :lazyLoading="false" />
        <ListItem name="骷髅飞桶" imgSrc="2007/Skeleton_Barrel_thumb.png" link="2007-Skeleton-Barrel" :lazyLoading="false" />
        <ListItem name="飞行堡垒" imgSrc="2008/Flying_Fortress_thumb.png" link="2008-Flying-Fortress" :lazyLoading="false" />
        <ListItem name="突袭炮车" imgSrc="2009/Raid_Cart_thumb.png" link="2009-Raid-Cart" :lazyLoading="false" />
        <ListItem name="雷霆皮卡" imgSrc="200a/Power_P.E.K.K.A_thumb.png" link="200a-Power-P.E.K.K.A" :lazyLoading="false" />
        <ListItem name="野猪突袭队" imgSrc="200b/Hog_Raiders_thumb.png" link="200b-Hog-Raiders" :lazyLoading="false" />
        <ListItem name="超级飞龙" imgSrc="200c/Super_Dragon_thumb.png" link="200c-Super-Dragon" :lazyLoading="false" />
        <ListItem name="高山戈仑" imgSrc="200d/Mountain_Golem_thumb.png" link="200d-Mountain-Golem" :lazyLoading="false" />
        <ListItem name="地狱飞龙" imgSrc="200e/Inferno_Dragon_thumb.png" link="200e-Inferno-Dragon" :lazyLoading="false" />
        <ListItem name="超级矿工" imgSrc="200f/Super_Miner_thumb.png" link="200f-Super-Miner" :lazyLoading="false" />
        <ListItem name="超级电磁炮" imgSrc="2010/Mega_Sparky_thumb.png" link="2010-Mega-Sparky" :lazyLoading="false" />
    </ListItems>
    <ListItems title="派生兵种" imgFolder="capital_tech">
        <ListItem name="野蛮人" imgSrc="20c0/Barbarian_thumb.png" link="20c0-Barbarian" :lazyLoading="false" />
        <ListItem name="骷髅" imgSrc="20c1/Skeleton_thumb.png" link="20c1-Skeleton" :lazyLoading="false" />
    </ListItems>
    <ListItems title="法术" imgFolder="capital_tech">
        <ListItem name="疗伤法术" imgSrc="2100/Healing_Spell_thumb.png" link="2100-Healing-Spell" :lazyLoading="false" />
        <ListItem name="弹跳法术" imgSrc="2101/Jump_Spell_thumb.png" link="2101-Jump-Spell" :lazyLoading="false" />
        <ListItem name="雷电法术" imgSrc="2102/Lightning_Spell_thumb.png" link="2102-Lightning-Spell" :lazyLoading="false" />
        <ListItem name="冰霜法术" imgSrc="2103/Frost_Spell_thumb.png" link="2103-Frost-Spell" :lazyLoading="false" />
        <ListItem name="狂暴法术" imgSrc="2104/Rage_Spell_thumb.png" link="2104-Rage-Spell" :lazyLoading="false" />
        <ListItem name="骷髅召唤法术" imgSrc="2105/Graveyard_Spell_thumb.png" link="2105-Graveyard-Spell" :lazyLoading="false" />
        <ListItem name="永恒急速法术" imgSrc="2106/Endless_Haste_Spell_thumb.png" link="2106-Endless-Haste-Spell" :lazyLoading="false" />
    </ListItems>
</SwitchTabGroup>

<SwitchTabGroup id="cp-upgrade-buildings" class="cp-upgrade-item">
    <ListItems title="大本营" imgFolder="capital_buildings">
        <ListItem name="都城大本营" imgSrc="2400/Capital_Hall10.png" link="2400-Capital-Hall" />
        <ListItem name="子城大本营" imgSrc="2401/District_Hall5.png" link="2401-District-Hall" />
    </ListItems>
    <ListItems title="防御建筑" imgFolder="capital_buildings">
        <ListItem name="城墙" imgSrc="2200/Wall5.png" link="2200-Walls" />
        <ListItem name="加农炮" imgSrc="2201/Cannon5.png" link="2201-Cannon" />
        <ListItem name="投矛器" imgSrc="2202/Spear_Thrower5.png" link="2202-Spear-Thrower" />
        <ListItem name="防空火箭" imgSrc="2203/Air_Defense5.png" link="2203-Air-Defense" />
        <ListItem name="多管加农炮" imgSrc="2204/Multi_Cannon5.png" link="2204-Multi-Cannon" />
        <ListItem name="炸弹塔" imgSrc="2205/Bomb_Tower5.png" link="2205-Bomb-Tower" />
        <ListItem name="多管迫击炮" imgSrc="2206/Multi_Mortar5.png" link="2206-Multi-Mortar" />
        <ListItem name="超级法师塔" imgSrc="2207/Super_Wizard_Tower5.png" link="2207-Super-Wizard-Tower" />
        <ListItem name="空中炸弹发射器" imgSrc="2208/Air_Bombs5.png" link="2208-Air-Bombs" />
        <ListItem name="疾速火箭" imgSrc="2209/Rapid_Rockets5.png" link="2209-Rapid-Rockets" />
        <ListItem name="撼地巨石" imgSrc="220a/Crusher5.png" link="220a-Crusher" />
        <ListItem name="超级特斯拉电磁塔" imgSrc="220b/Hidden_Mega_Tesla5.png" link="220b-Hidden-Mega-Tesla" />
        <ListItem name="巨型加农炮" imgSrc="220c/Giant_Cannon5.png" link="220c-Giant-Cannon" />
        <ListItem name="火箭炮" imgSrc="220d/Rocket_Artillery5.png" link="220d-Rocket-Artillery" />
        <ListItem name="地狱之塔" imgSrc="220e/Inferno_Tower5_thumb.png" link="220e-Inferno-Tower" />
        <ListItem name="爆炸强弩" imgSrc="220f/Blast_Bow5_thumb.png" link="220f-Blast-Bow" />
        <ListItem name="迷你亡灵巢" imgSrc="2213/Mini-Minion_Hive4.png" link="2213-Mini-Minion-Hive" />
        <ListItem name="反弹机" imgSrc="2214/Reflector4.png" link="2214-Reflector" />
        <ListItem name="哥布林发射器" imgSrc="2215/Goblin_Thrower4.png" link="2215-Goblin-Thrower" />
        <ListItem name="超级巨人岗哨" imgSrc="2210/Super_Giant_Post5.png" link="2210-Super-Giant-Post" />
        <ListItem name="突袭炮车岗哨" imgSrc="2211/Raid_Cart_Post5.png" link="2211-Raid-Cart-Post" />
        <ListItem name="超级飞龙岗哨" imgSrc="2212/Super_Dragon_Post4.png" link="2212-Super-Dragon-Post" />
    </ListItems>
    <ListItems title="陷阱" imgFolder="capital_buildings">
        <ListItem name="地雷" imgSrc="2280/Mine5.png" link="2280-Mine" />
        <ListItem name="巨型地雷" imgSrc="2281/Mega_Mine5.png" link="2281-Mega-Mine" />
        <ListItem name="滚木陷阱" imgSrc="2282/Log_Trap5.png" link="2282-Log-Trap" />
        <ListItem name="电击陷阱" imgSrc="2283/Zap_Trap5.png" link="2283-Zap-Trap" />
        <ListItem name="投矛陷阱" imgSrc="2284/Spear_Trap4.png" link="2284-Spear-Trap" />
    </ListItems>
    <ListItems title="军事建筑" imgFolder="capital_buildings">
        <ListItem name="兵营" imgSrc="2300/Army_Camp5.png" link="2300-Army-Camp" />
        <ListItem name="法术仓库" imgSrc="2301/Spell_Storage5.png" link="2301-Spell-Storage" />
        <ListItem name="超级野蛮人训练营" imgSrc="2340/Super_Barbarian_Barracks5.png" link="2340-Super-Barbarian-Barracks" />
        <ListItem name="隐秘弓箭手训练营" imgSrc="2341/Sneaky_Archer_Barracks5.png" link="2341-Sneaky-Archer-Barracks" />
        <ListItem name="超级巨人训练营" imgSrc="2342/Super_Giant_Barracks5.png" link="2342-Super-Giant-Barracks" />
        <ListItem name="野蛮人攻城槌训练营" imgSrc="2343/Battle_Ram_Barracks5.png" link="2343-Battle-Ram-Barracks" />
        <ListItem name="亡灵训练营" imgSrc="2344/Minion_Barracks5.png" link="2344-Minion-Barracks" />
        <ListItem name="超级法师训练营" imgSrc="2345/Super_Wizard_Barracks5.png" link="2345-Super-Wizard-Barracks" />
        <ListItem name="火箭气球兵训练营" imgSrc="2346/Rocket_Balloon_Barracks5.png" link="2346-Rocket-Balloon-Barracks" />
        <ListItem name="骷髅飞桶训练营" imgSrc="2347/Skeleton_Barrel_Barracks5.png" link="2347-Skeleton-Barrel-Barracks" />
        <ListItem name="飞行堡垒工坊" imgSrc="2348/Flying_Fortress_Yard5.png" link="2348-Flying-Fortress-Yard" />
        <ListItem name="突袭炮车训练营" imgSrc="2349/Raid_Cart_Barracks5.png" link="2349-Raid-Cart-Barracks" />
        <ListItem name="雷霆皮卡训练营" imgSrc="234a/Power_P.E.K.K.A_Barracks5.png" link="234a-Power-P.E.K.K.A-Barracks" />
        <ListItem name="野猪突袭队训练营" imgSrc="234b/Hog_Raider_Barracks5.png" link="234b-Hog-Raider-Barracks" />
        <ListItem name="超级飞龙训练营" imgSrc="234c/Super_Dragon_Barracks5.png" link="234c-Super-Dragon-Barracks" />
        <ListItem name="高山戈仑石场" imgSrc="234d/Mountain_Golem_Quarry5.png" link="234d-Mountain-Golem-Quarry" />
        <ListItem name="地狱飞龙训练营" imgSrc="234e/Inferno_Dragon_Barracks4.png" link="234e-Inferno-Dragon-Barracks" />
        <ListItem name="超级矿工训练营" imgSrc="234f/Super_Miner_Barracks4.png" link="234f-Super-Miner-Barracks" />
        <ListItem name="超级电磁炮工坊" imgSrc="2350/Mega_Sparky_Workshop4.png" link="2350-Mega-Sparky-Workshop" />
        <ListItem name="疗伤法术工厂" imgSrc="2380/Heal_Spell_Factory5.png" link="2380-Heal-Spell-Factory" />
        <ListItem name="弹跳法术工厂" imgSrc="2381/Jump_Spell_Factory5.png" link="2381-Jump-Spell-Factory" />
        <ListItem name="雷电法术工厂" imgSrc="2382/Lightning_Spell_Factory5.png" link="2382-Lightning-Spell-Factory" />
        <ListItem name="冰霜法术工厂" imgSrc="2383/Frost_Spell_Factory5.png" link="2383-Frost-Spell-Factory" />
        <ListItem name="狂暴法术工厂" imgSrc="2384/Rage_Spell_Factory5.png" link="2384-Rage-Spell-Factory" />
        <ListItem name="骷髅召唤法术工厂" imgSrc="2385/Graveyard_Spell_Factory4.png" link="2385-Graveyard-Spell-Factory" />
        <ListItem name="永恒急速法术工厂" imgSrc="2386/Endless_Haste_Spell_Factory4.png" link="2386-Endless-Haste-Spell-Factory" />
    </ListItems>
    <ListItems title="用来凑摧毁率的房屋" imgFolder="capital_buildings">
        <ListItem name="平顶屋" imgSrc="2501/Small_Cabin.png" link="2501-Small-Cabin" />
        <ListItem name="稻草屋" imgSrc="2502/Thatched_Hut.png" link="2502-Thatched-Hut" />
        <ListItem name="小屋" imgSrc="2503/Small_Hut.png" link="2503-Small-Hut" />
        <ListItem name="木屋" imgSrc="2504/Wooden_House.png" link="2504-Wooden-House" />
        <ListItem name="平顶木屋" imgSrc="2505/Wooden_Cabin.png" link="2505-Wooden-Cabin" />
        <ListItem name="斜顶屋" imgSrc="2506/Slanted_House.png" link="2506-Slanted-House" />
        <ListItem name="哥布林前哨基地" imgSrc="2507/Goblin_Outpost.png" link="2507-Goblin-Outpost" />
        <ListItem name="哥布林小屋" imgSrc="2508/Goblin_Hut.png" link="2508-Goblin-Hut" />
        <ListItem name="哥布林大本营" imgSrc="2509/Goblin_Hall.png" link="2509-Goblin-Hall" />
    </ListItems>
</SwitchTabGroup>

<div class="cp-upgrade-index-tip">
    <SmallTitle>注意</SmallTitle>
    <ol>
        <li>黄金令牌不能减少都城的升级费用和升级时间。</li>
        <li>部落营房的相关内容单独开了一篇文章，不在升级数据板块。文章链接：<a href="/p/6637">都城部落营房组件一览</a>。</li>
    </ol>
</div>

<style lang="scss">
.cp-upgrade-index-tip .cp-small-subtitle {
    margin: 0 0 1rem 0.125rem;
}
</style>