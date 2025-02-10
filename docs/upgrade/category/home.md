---
title: "部落冲突升级数据（家乡）"
shownTitle: "升级数据"
description: "在这里，你可以查到部落冲突的各种数据，每个兵种和建筑有哪些属性、升级要多久、多少资源这些东西写得清清楚楚。本页面是家乡村庄的数据。"
module: upgrade-home
canonical: /upgrade/category/home
---

<script setup>
import ListItems from '@/components/upgrade/ListItems.vue';
import ListItem from '@/components/upgrade/ListItem.vue';
import { getCookie } from '@/assets/global/utils.js';

let activeTabIndex = 0;
const activeTabCookieValue = getCookie("cp-upgrade-active-tab");
if (activeTabCookieValue === "home-techniques") {
    activeTabIndex = 1;
} else if (activeTabCookieValue === "home-buildings") {
    activeTabIndex = 2;
}
</script>

如需查看其他村庄（夜世界、都城）的内容，请使用左侧菜单栏。

<SwitchTabs contentClass="cp-upgrade-item" :stickyTabs="true" :averageTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-upgrade-heroes"
        :activeTab="activeTabIndex === 0"
        upgradeCookieValue="home-heroes">英雄</SwitchTab>
    <SwitchTab tabId="cp-upgrade-techniques"
        :activeTab="activeTabIndex === 1"
        upgradeCookieValue="home-techniques">科技</SwitchTab>
    <SwitchTab tabId="cp-upgrade-buildings"
        :activeTab="activeTabIndex === 2"
        upgradeCookieValue="home-buildings">建筑</SwitchTab>
</SwitchTabs>

<SwitchTabGroup id="cp-upgrade-heroes" class="cp-upgrade-item">
    <ListItems title="英雄" imgFolder="home_heroes">
        <ListItem name="野蛮人之王" imgSrc="0200/Barbarian_King_thumb.png" link="0200-Barbarian-King" :lazyLoading="false" />
        <ListItem name="弓箭女皇" imgSrc="0201/Archer_Queen_thumb.png" link="0201-Archer-Queen" :lazyLoading="false" />
        <ListItem name="亡灵王子" imgSrc="0204/Minion_Prince_thumb.png" link="0204-Minion-Prince" :lazyLoading="false" />
        <ListItem name="大守护者" imgSrc="0202/Grand_Warden_thumb.png" link="0202-Grand-Warden" :lazyLoading="false" />
        <ListItem name="飞盾战神" imgSrc="0203/Royal_Champion_thumb.png" link="0203-Royal-Champion" :lazyLoading="false" />
    </ListItems>
    <ListItems title="战宠" imgFolder="home_heroes">
        <ListItem name="莱希" imgSrc="0280/L.A.S.S.I_thumb.png" link="0280-L.A.S.S.I" :lazyLoading="false" />
        <ListItem name="闪枭" imgSrc="0281/Electro_Owl_thumb.png" link="0281-Electro-Owl" :lazyLoading="false" />
        <ListItem name="大牦" imgSrc="0282/Mighty_Yak_thumb.png" link="0282-Mighty-Yak" :lazyLoading="false" />
        <ListItem name="独角" imgSrc="0283/Unicorn_thumb.png" link="0283-Unicorn" :lazyLoading="false" />
        <ListItem name="冰牙" imgSrc="0284/Frosty_thumb.png" link="0284-Frosty" :lazyLoading="false" />
        <ListItem name="地兽" imgSrc="0285/Diggy_thumb.png" link="0285-Diggy" :lazyLoading="false" />
        <ListItem name="猛蜥" imgSrc="0286/Poison_Lizard_thumb.png" link="0286-Poison-Lizard" :lazyLoading="false" />
        <ListItem name="凤凰" imgSrc="0287/Phoenix_thumb.png" link="0287-Phoenix" :lazyLoading="false" />
        <ListItem name="灵狐" imgSrc="0288/Spirit_Fox_thumb.png" link="0288-Spirit-Fox" :lazyLoading="false" />
        <ListItem name="愤怒水母" imgSrc="0289/Angry_Jelly_thumb.png" link="0289-Angry-Jelly" :lazyLoading="false" />
    </ListItems>
    <ListItems title="装备（野蛮人之王）" imgFolder="home_heroes">
        <ListItem name="野蛮人木偶" imgSrc="0700/Barbarian_Puppet_thumb.png" link="0700-Barbarian-Puppet" :lazyLoading="false" />
        <ListItem name="狂暴药水瓶" imgSrc="0701/Rage_Vial_thumb.png" link="0701-Rage-Vial" :lazyLoading="false" />
        <ListItem name="地震金靴" imgSrc="0702/Earthquake_Boots_thumb.png" link="0702-Earthquake-Boots" :lazyLoading="false" />
        <ListItem name="嗜血胡须" imgSrc="0703/Vampstache_thumb.png" link="0703-Vampstache" :lazyLoading="false" />
        <ListItem name="巨型手套" imgSrc="0704/Giant_Gauntlet_thumb.png" link="0704-Giant-Gauntlet" :lazyLoading="false" />
        <ListItem name="尖刺足球" imgSrc="0705/Spiky_Ball_thumb.png" link="0705-Spiky-Ball" :lazyLoading="false" />
        <ListItem name="灵蛇手镯" imgSrc="0706/Snake_Bracelet_thumb.png" link="0706-Snake-Bracelet" :lazyLoading="false" />
    </ListItems>
    <ListItems title="装备（弓箭女皇）" imgFolder="home_heroes">
        <ListItem name="弓箭手木偶" imgSrc="0740/Archer_Puppet_thumb.png" link="0740-Archer-Puppet" />
        <ListItem name="隐形药水瓶" imgSrc="0741/Invisibility_Vial_thumb.png" link="0741-Invisibility-Vial" />
        <ListItem name="巨型箭矢" imgSrc="0742/Giant_Arrow_thumb.png" link="0742-Giant-Arrow" />
        <ListItem name="天使木偶" imgSrc="0743/Healer_Puppet_thumb.png" link="0743-Healer-Puppet" />
        <ListItem name="冰封箭矢" imgSrc="0744/Frozen_Arrow_thumb.png" link="0744-Frozen-Arrow" />
        <ListItem name="克隆魔镜" imgSrc="0745/Magic_Mirror_thumb.png" link="0745-Magic-Mirror" />
    </ListItems>
    <ListItems title="装备（亡灵王子）" imgFolder="home_heroes">
        <ListItem name="护卫玩偶" imgSrc="0720/Henchmen_Puppet_thumb.png" link="0720-Henchmen-Puppet" />
        <ListItem name="暗黑魔球" imgSrc="0721/Dark_Orb_thumb.png" link="0721-Dark-Orb" />
    </ListItems>
    <ListItems title="装备（大守护者）" imgFolder="home_heroes">
        <ListItem name="永恒书卷" imgSrc="0780/Eternal_Tome_thumb.png" link="0780-Eternal-Tome" />
        <ListItem name="生命宝石" imgSrc="0781/Life_Gem_thumb.png" link="0781-Life-Gem" />
        <ListItem name="狂暴宝石" imgSrc="0782/Rage_Gem_thumb.png" link="0782-Rage-Gem" />
        <ListItem name="治疗书卷" imgSrc="0783/Healing_Tome_thumb.png" link="0783-Healing-Tome" />
        <ListItem name="巨大火球" imgSrc="0784/Fireball_thumb.png" link="0784-Fireball" />
        <ListItem name="熔岩气球玩偶" imgSrc="0785/Lavaloon_Puppet_thumb.png" link="0785-Lavaloon-Puppet" />
    </ListItems>
    <ListItems title="装备（飞盾战神）" imgFolder="home_heroes">
        <ListItem name="寻踪飞盾" imgSrc="07c0/Seeking_Shield_thumb.png" link="07c0-Seeking-Shield" />
        <ListItem name="皇家宝石" imgSrc="07c1/Royal_Gem_thumb.png" link="07c1-Royal-Gem" />
        <ListItem name="野猪骑士木偶" imgSrc="07c2/Hog_Rider_Puppet_thumb.png" link="07c2-Hog-Rider-Puppet" />
        <ListItem name="急速药水瓶" imgSrc="07c3/Haste_Vial_thumb.png" link="07c3-Haste-Vial" />
        <ListItem name="火箭飞矛" imgSrc="07c4/Rocket_Spear_thumb.png" link="07c4-Rocket-Spear" />
        <ListItem name="雷电战靴" imgSrc="07c5/Electro_Boots_thumb.png" link="07c5-Electro-Boots" />
    </ListItems>
</SwitchTabGroup>

<SwitchTabGroup id="cp-upgrade-techniques" class="cp-upgrade-item">
    <ListItems title="圣水兵" imgFolder="home_tech">
        <ListItem name="野蛮人" imgSrc="0000/Barbarian_thumb.png" link="0000-Barbarian" />
        <ListItem name="弓箭手" imgSrc="0001/Archer_thumb.png" link="0001-Archer" />
        <ListItem name="巨人" imgSrc="0002/Giant_thumb.png" link="0002-Giant" />
        <ListItem name="哥布林" imgSrc="0003/Goblin_thumb.png" link="0003-Goblin" />
        <ListItem name="炸弹人" imgSrc="0004/Wall_Breaker_thumb.png" link="0004-Wall-Breaker" />
        <ListItem name="气球兵" imgSrc="0005/Balloon_thumb.png" link="0005-Balloon" />
        <ListItem name="法师" imgSrc="0006/Wizard_thumb.png" link="0006-Wizard" />
        <ListItem name="天使" imgSrc="0007/Healer_thumb.png" link="0007-Healer" />
        <ListItem name="飞龙" imgSrc="0008/Dragon_thumb.png" link="0008-Dragon" />
        <ListItem name="皮卡超人" imgSrc="0009/P.E.K.K.A_thumb.png" link="0009-P.E.K.K.A" />
        <ListItem name="飞龙宝宝" imgSrc="000a/Baby_Dragon_thumb.png" link="000a-Baby-Dragon" />
        <ListItem name="掘地矿工" imgSrc="000b/Miner_thumb.png" link="000b-Miner" />
        <ListItem name="雷电飞龙" imgSrc="000c/Electro_Dragon_thumb.png" link="000c-Electro-Dragon" />
        <ListItem name="大雪怪" imgSrc="000d/Yeti_thumb.png" link="000d-Yeti" />
        <ListItem name="龙骑士" imgSrc="000e/Dragon_Rider_thumb.png" link="000e-Dragon-Rider" />
        <ListItem name="雷霆泰坦" imgSrc="000f/Electro_Titan_thumb.png" link="000f-Electro-Titan" />
        <ListItem name="根蔓骑士" imgSrc="0010/Root_Rider_thumb.png" link="0010-Root-Rider" />
        <ListItem name="巨矛投手" imgSrc="0011/Thrower_thumb.png" link="0011-Thrower" />
    </ListItems>
    <ListItems title="黑水兵" imgFolder="home_tech">
        <ListItem name="亡灵" imgSrc="0080/Minion_thumb.png" link="0080-Minion" />
        <ListItem name="野猪骑士" imgSrc="0081/Hog_Rider_thumb.png" link="0081-Hog-Rider" />
        <ListItem name="瓦基丽武神" imgSrc="0082/Valkyrie_thumb.png" link="0082-Valkyrie" />
        <ListItem name="戈仑石人" imgSrc="0083/Golem_thumb.png" link="0083-Golem" />
        <ListItem name="女巫" imgSrc="0084/Witch_thumb.png" link="0084-Witch" />
        <ListItem name="熔岩猎犬" imgSrc="0085/Lava_Hound_thumb.png" link="0085-Lava-Hound" />
        <ListItem name="巨石投手" imgSrc="0086/Bowler_thumb.png" link="0086-Bowler" />
        <ListItem name="戈仑冰人" imgSrc="0087/Ice_Golem_thumb.png" link="0087-Ice-Golem" />
        <ListItem name="英雄猎手" imgSrc="0088/Headhunter_thumb.png" link="0088-Headhunter" />
        <ListItem name="守护者学徒" imgSrc="0089/Apprentice_Warden_thumb.png" link="0089-Apprentice-Warden" />
        <ListItem name="德鲁伊" imgSrc="008a/Druid_thumb.png" link="008a-Druid" />
    </ListItems>
    <ListItems title="超级兵" imgFolder="home_tech">
        <ListItem name="超级野蛮人" imgSrc="0600/Super_Barbarian_thumb.png" link="0600-Super-Barbarian" />
        <ListItem name="超级弓箭手" imgSrc="0606/Super_Archer_thumb.png" link="0606-Super-Archer" />
        <ListItem name="超级巨人" imgSrc="0602/Super_Giant_thumb.png" link="0602-Super-Giant" />
        <ListItem name="隐秘哥布林" imgSrc="0601/Sneaky_Goblin_thumb.png" link="0601-Sneaky-Goblin" />
        <ListItem name="超级炸弹人" imgSrc="0603/Super_Wall_Breaker_thumb.png" link="0603-Super-Wall-Breaker" />
        <ListItem name="火箭气球兵" imgSrc="060b/Rocket_Balloon_thumb.png" link="060b-Rocket-Balloon" />
        <ListItem name="超级法师" imgSrc="0609/Super_Wizard_thumb.png" link="0609-Super-Wizard" />
        <ListItem name="超级飞龙" imgSrc="060d/Super_Dragon_thumb.png" link="060d-Super-Dragon" />
        <ListItem name="地狱飞龙" imgSrc="0604/Inferno_Dragon_thumb.png" link="0604-Inferno-Dragon" />
        <ListItem name="超级矿工" imgSrc="060e/Super_Miner_thumb.png" link="060e-Super-Miner" />
        <ListItem name="超级亡灵" imgSrc="0608/Super_Minion_thumb.png" link="0608-Super-Minion" />
        <ListItem name="超级野猪骑士" imgSrc="060f/Super_Hog_Rider_thumb.png" link="060f-Super-Hog-Rider" />
        <ListItem name="超级瓦基丽武神" imgSrc="0607/Super_Valkyrie_thumb.png" link="0607-Super-Valkyrie" />
        <ListItem name="超级女巫" imgSrc="0605/Super_Witch_thumb.png" link="0605-Super-Witch" />
        <ListItem name="寒冰猎犬" imgSrc="060a/Ice_Hound_thumb.png" link="060a-Ice-Hound" />
        <ListItem name="超级巨石投手" imgSrc="060c/Super_Bowler_thumb.png" link="060c-Super-Bowler" />
    </ListItems>
    <ListItems title="法术" imgFolder="home_tech">
        <ListItem name="雷电法术" imgSrc="0100/Lightning_Spell.png" link="0100-Lightning-Spell" />
        <ListItem name="疗伤法术" imgSrc="0101/Healing_Spell.png" link="0101-Healing-Spell" />
        <ListItem name="狂暴法术" imgSrc="0102/Rage_Spell.png" link="0102-Rage-Spell" />
        <ListItem name="弹跳法术" imgSrc="0103/Jump_Spell.png" link="0103-Jump-Spell" />
        <ListItem name="冰冻法术" imgSrc="0104/Freeze_Spell.png" link="0104-Freeze-Spell" />
        <ListItem name="镜像法术" imgSrc="0105/Clone_Spell.png" link="0105-Clone-Spell" />
        <ListItem name="隐形法术" imgSrc="0106/Invisibility_Spell.png" link="0106-Invisibility-Spell" />
        <ListItem name="回溯法术" imgSrc="0107/Recall_Spell.png" link="0107-Recall-Spell" />
        <ListItem name="复苏法术" imgSrc="0108/Revive_Spell_thumb.png" link="0108-Revive-Spell" />
        <ListItem name="毒药法术" imgSrc="0180/Poison_Spell.png" link="0180-Poison-Spell" />
        <ListItem name="地震法术" imgSrc="0181/Earthquake_Spell.png" link="0181-Earthquake-Spell" />
        <ListItem name="急速法术" imgSrc="0182/Haste_Spell.png" link="0182-Haste-Spell" />
        <ListItem name="骷髅法术" imgSrc="0183/Skeleton_Spell.png" link="0183-Skeleton-Spell" />
        <ListItem name="蝙蝠法术" imgSrc="0184/Bat_Spell.png" link="0184-Bat-Spell" />
        <ListItem name="蔓生法术" imgSrc="0185/Overgrowth_Spell.png" link="0185-Overgrowth-Spell" />
    </ListItems>
    <ListItems title="攻城机器" imgFolder="home_tech">
        <ListItem name="攻城战车" imgSrc="0240/Wall_Wrecker_thumb.png" link="0240-Wall-Wrecker" />
        <ListItem name="攻城飞艇" imgSrc="0241/Battle_Blimp_thumb.png" link="0241-Battle-Blimp" />
        <ListItem name="攻城气球" imgSrc="0242/Stone_Slammer_thumb.png" link="0242-Stone-Slammer" />
        <ListItem name="攻城训练营" imgSrc="0243/Siege_Barracks_thumb.png" link="0243-Siege-Barracks" />
        <ListItem name="攻城滚木车" imgSrc="0244/Log_Launcher_thumb.png" link="0244-Log-Launcher" />
        <ListItem name="攻城烈焰车" imgSrc="0245/Flame_Flinger_thumb.png" link="0245-Flame-Flinger" />
        <ListItem name="攻城钻机" imgSrc="0246/Battle_Drill_thumb.png" link="0246-Battle-Drill" />
        <ListItem name="部队发射器" imgSrc="0247/Troop_Launcher_thumb.png" link="0247-Troop-Launcher" />
    </ListItems>
    <ListItems title="特殊角色" imgFolder="home_tech">
        <ListItem name="实验助理" imgSrc="0800/Lab_Assistant_thumb.png" link="0800-Lab-Assistant" />
        <ListItem name="建筑工人学徒" imgSrc="0801/Builder%27s_Apprentice_thumb.png" link="0801-Builder%27s-Apprentice" />
    </ListItems>
</SwitchTabGroup>

<SwitchTabGroup id="cp-upgrade-buildings" class="cp-upgrade-item">
    <ListItems title="大本营及武器" imgFolder="home_buildings">
        <ListItem name="大本营" imgSrc="0400/Town_Hall17_5.png" link="0400-Town-Hall" />
        <ListItem name="巨型特斯拉电磁塔" imgSrc="030c/Giga_Tesla5_thumb.png" link="030c-Giga-Tesla" />
        <ListItem name="巨型地狱之塔" imgSrc="030d/Giga_Inferno16_thumb.png" link="030d-Giga-Inferno" />
        <ListItem name="地狱火炮" imgSrc="0315/Inferno_Artillery5.png" link="0315-Inferno-Artillery" />
    </ListItems>
    <ListItems title="防御建筑" imgFolder="home_buildings">
        <ListItem name="城墙" imgSrc="0300/Wall18.png" link="0300-Walls" />
        <ListItem name="加农炮" imgSrc="0301/Cannon21.png" link="0301-Cannon" />
        <ListItem name="箭塔" imgSrc="0302/Archer_Tower21.png" link="0302-Archer-Tower" />
        <ListItem name="迫击炮" imgSrc="0303/Mortar16.png" link="0303-Mortar" />
        <ListItem name="防空火箭" imgSrc="0304/Air_Defense15.png" link="0304-Air-Defense" />
        <ListItem name="法师塔" imgSrc="0305/Wizard_Tower17.png" link="0305-Wizard-Tower" />
        <ListItem name="空气炮" imgSrc="0306/Air_Sweeper7.png" link="0306-Air-Sweeper" />
        <ListItem name="特斯拉电磁塔" imgSrc="0307/Hidden_Tesla15.png" link="0307-Hidden-Tesla" />
        <ListItem name="炸弹塔" imgSrc="0308/Bomb_Tower12.png" link="0308-Bomb-Tower" />
        <ListItem name="X连弩" imgSrc="0309/X-Bow11.png" link="0309-X-Bow" />
        <ListItem name="地狱之塔" imgSrc="030a/Inferno_Tower10.png" link="030a-Inferno-Tower" />
        <ListItem name="天鹰火炮" imgSrc="030b/Eagle_Artillery7.png" link="030b-Eagle-Artillery" />
        <ListItem name="投石炮" imgSrc="030e/Scattershot5.png" link="030e-Scattershot" />
        <ListItem name="法术塔" imgSrc="0311/Spell_Tower3_Rage.png" link="0311-Spell-Tower" />
        <ListItem name="巨石碑" imgSrc="0312/Monolith3.png" link="0312-Monolith" />
        <ListItem name="跳弹加农炮" imgSrc="0313/Ricochet_Cannon3.png" link="0313-Ricochet-Cannon" />
        <ListItem name="多人箭塔" imgSrc="0314/Multi-Archer_Tower3.png" link="0314-Multi-Archer-Tower" />
        <ListItem name="火焰喷射器" imgSrc="0316/Firespitter2.png" link="0316-Firespitter" />
        <ListItem name="复合机械塔" imgSrc="0317/Multi-Gear_Tower2_LongRange.png" link="0317-Multi-Gear-Tower" />
    </ListItems>
    <ListItems title="陷阱" imgFolder="home_buildings">
        <ListItem name="隐形炸弹" imgSrc="0380/Bomb13.png" link="0380-Bomb" />
        <ListItem name="隐形弹簧" imgSrc="0381/Spring_Trap5.png" link="0381-Spring-Trap" />
        <ListItem name="空中炸弹" imgSrc="0382/Air_Bomb11.png" link="0382-Air-Bomb" />
        <ListItem name="巨型炸弹" imgSrc="0383/Giant_Bomb11.png" link="0383-Giant-Bomb" />
        <ListItem name="搜空地雷" imgSrc="0384/Seeking_Air_Mine7.png" link="0384-Seeking-Air-Mine" />
        <ListItem name="骷髅陷阱" imgSrc="0385/Skeleton_Trap3.png" link="0385-Skeleton-Trap" />
        <ListItem name="飓风陷阱" imgSrc="0386/Tornado_Trap2.png" link="0386-Tornado-Trap" />
        <ListItem name="终极炸弹" imgSrc="0387/Giga_Bomb3.png" link="0387-Giga-Bomb" />
    </ListItems>
    <ListItems title="资源类建筑" imgFolder="home_buildings">
        <ListItem name="金矿" imgSrc="0401/Gold_Mine16.png" link="0401-Gold-Mine" />
        <ListItem name="圣水收集器" imgSrc="0402/Elixir_Collector16.png" link="0402-Elixir-Collector" />
        <ListItem name="暗黑重油钻井" imgSrc="0403/Dark_Elixir_Drill10.png" link="0403-Dark-Elixir-Drill" />
        <ListItem name="储金罐" imgSrc="0404/Gold_Storage18.png" link="0404-Gold-Storage" />
        <ListItem name="圣水瓶" imgSrc="0405/Elixir_Storage18.png" link="0405-Elixir-Storage" />
        <ListItem name="暗黑重油罐" imgSrc="0406/Dark_Elixir_Storage12.png" link="0406-Dark-Elixir-Storage" />
        <ListItem name="部落城堡" imgSrc="0407/Clan_Castle13.png" link="0407-Clan-Castle" />
    </ListItems>
    <ListItems title="军事建筑" imgFolder="home_buildings">
        <ListItem name="兵营" imgSrc="0480/Army_Camp12.png" link="0480-Army-Camp" />
        <ListItem name="训练营" imgSrc="0481/Barracks18.png" link="0481-Barracks" />
        <ListItem name="暗黑训练营" imgSrc="0482/Dark_Barracks10.png" link="0482-Dark-Barracks" />
        <ListItem name="实验室" imgSrc="0483/Laboratory15.png" link="0483-Laboratory" />
        <ListItem name="法术工厂" imgSrc="0484/Spell_Factory8.png" link="0484-Spell-Factory" />
        <ListItem name="暗黑法术工厂" imgSrc="0485/Dark_Spell_Factory6.png" link="0485-Dark-Spell-Factory" />
        <ListItem name="攻城机器工坊" imgSrc="0486/Workshop7.png" link="0486-Workshop" />
        <ListItem name="战宠小屋" imgSrc="0487/Pet_House10.png" link="0487-Pet-House" />
        <ListItem name="铁匠铺" imgSrc="0488/Blacksmith9.png" link="0488-Blacksmith" />
        <ListItem name="英雄殿堂" imgSrc="0489/Hero_Hall11.png" link="0489-Hero-Hall" />
    </ListItems>
    <ListItems title="其他" imgFolder="home_buildings">
        <ListItem name="建筑工人小屋" imgSrc="0500/Builders_Hut6.png" link="0500-Builders-Hut" />
        <ListItem name="小博木屋" imgSrc="0501/B.O.Bs_Hut.png" link="0501-B.O.Bs-Hut" />
        <ListItem name="帮手小屋" imgSrc="0502/Helper_Hut.png" link="0502-Helper-Hut" />
    </ListItems>
</SwitchTabGroup>