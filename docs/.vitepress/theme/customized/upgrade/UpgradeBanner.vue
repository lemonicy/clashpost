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
let tempUnitAvailable = false;
let craftedBuildingAvailable = false;

if (link && isUpgradeDetails(link)) {
    // 提取链接中的序号
    const unitId = link.substring(9, 13);

    // 判断是否为可用的临时单位
    tempUnitAvailable = availableTempUnits.includes(unitId);

    // 判断是否为可用的精工防御
    craftedBuildingAvailable = availableCraftedBuildings.includes(unitId);
}
</script>

<template>
    <Callout type="success" class="cp-callout-available-tip" v-if="tempUnitAvailable">
        该临时单位现在可用。在活动期间，你可以使用临时单位。
    </Callout>
    <Callout type="success" class="cp-callout-available-tip" v-if="craftedBuildingAvailable">
        该精工防御现在可用。在新一批精工防御推出之前，你可以升级该防御。
    </Callout>
</template>