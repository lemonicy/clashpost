<script setup>
import { availableTempUnits, availableCraftedBuildings } from "#/global-variables.js";
import { isUpgradeDetails } from "@/assets/global/common.js";
import Callout from "@/components/Callout.vue";

const props = defineProps({
    link: {
        type: String,
        required: true
    }
});

const link = props.link;
let tempTroopAvailable = false;
let tempSpellAvailable = false;
let tempTrapAvailable = false;
let craftedBuildingAvailable = false;

if (link && isUpgradeDetails(link)) {
    // 提取链接中的序号
    const unitId = link.substring(9, 13);

    // 判断是否为可用的临时单位
    let availableTempTroops = [];
    let availableTempSpells = [];
    let availableTempTraps = [];
    // 判断该临时单位是兵种、法术还是陷阱，并存入对应的分类中
    for (const availableItem of availableTempUnits) {
        const availableItemFirst3 = availableItem.substring(0, 3); // 序号中的前三个字符
        if (["0e0", "0e1", "0e2", "0e3", "0e4", "0e5", "0e6", "0e7"].includes(availableItemFirst3)) {
            availableTempTroops.push(availableItem);
        } else if (["0e8", "0e9", "0ea", "0eb", "0ec", "0ed", "0ee", "0ef"].includes(availableItemFirst3)) {
            availableTempSpells.push(availableItem);
        } else {
            availableTempTraps.push(availableItem);
        }
    }
    tempTroopAvailable = availableTempTroops.includes(unitId);
    tempSpellAvailable = availableTempSpells.includes(unitId);
    tempTrapAvailable = availableTempTraps.includes(unitId);

    // 判断是否为可用的精工防御
    craftedBuildingAvailable = availableCraftedBuildings.includes(unitId);
}
</script>

<template>
    <Callout type="success" class="cp-callout-available-tip" v-if="tempTroopAvailable">
        该临时兵种现在可用。在活动期间，你可以训练和使用该兵种。
    </Callout>
    <Callout type="success" class="cp-callout-available-tip" v-else-if="tempSpellAvailable">
        该临时法术现在可用。在活动期间，你可以配置和部署该法术。
    </Callout>
    <Callout type="success" class="cp-callout-available-tip" v-else-if="tempTrapAvailable">
        该临时陷阱现在可用。在活动期间，你可以购买和部署该陷阱。
    </Callout>
    <Callout type="success" class="cp-callout-available-tip" v-else-if="craftedBuildingAvailable">
        该精工防御现在可用。在新一批精工防御推出之前，你可以升级该防御。
    </Callout>
</template>