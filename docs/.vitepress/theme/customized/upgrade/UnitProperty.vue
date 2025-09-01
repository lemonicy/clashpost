<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { showDialog } from '@/components/dialog/Dialog.vue';
import Resource from '@/customized/Resource.vue';
import Info from '@/components/icon/Info.vue';
import Question from '@/components/icon/Question.vue';
import { convertTime, convertNum } from '@/assets/global/utils.js';
import { getGoldPassValueArr, showGoldPassValue } from '@/assets/upgrade.js';

const props = defineProps({
    pKey: {
        type: String,
        required: true
    },
    pValue: {
        type: String,
        required: true
    },
    noGoldPass: {
        type: Boolean,
        default: false
    },
    trainingSystem: {
        type: String,
        default: null
    },
    isUpgradeTime: {
        type: Boolean,
        default: false
    },
    isJudgeSquare: {
        type: Boolean,
        default: false
    },
    isUpgradeCost: {
        type: Boolean,
        default: false
    },
    isDonationCost: {
        type: Boolean,
        default: false
    },
    resourceType: {
        type: String,
        default: null
    },
    isTrainingCost: {
        type: Boolean,
        default: false
    },
    isDefensePreferredTroop: {
        type: Boolean,
        default: false
    },
    gpClass: {
        type: String,
        default: ""
    }
});

const key = props.pKey;
let value = props.pValue;

let valueArr;
let valueDomClass;
let gpValue;

const gpClass = props.gpClass;
let gpClassStr = "";

const isGoldPassTrainingItem = props.trainingSystem && (props.trainingSystem === "legacy" || props.trainingSystem === "2022");
if (isGoldPassTrainingItem) {
    // 如果是 legacy 或者 2022 版本的训练系统，则认定为受月卡影响
    gpClassStr = "cp-gp-class-training";
} else if (gpClass === "research") {
    gpClassStr = "cp-gp-class-research";
} else if (gpClass === "building") {
    gpClassStr = "cp-gp-class-building";
}

if (props.noGoldPass) {
    // 明确注明不受月卡影响，则只转化数字
    if (isGoldPassTrainingItem) {
        value = convertTime(value, true); // 第二个参数是训练时间的 flag
    } else if (props.isUpgradeTime) {
        value = convertTime(value);
    } else if (props.isUpgradeCost || props.isTrainingCost) {
        value = convertNum(value);
    }
    gpValue = false;
    valueDomClass = "cp-unit-property-value";
} else {
    // 未明确注明是否受月卡影响，或手动注明受月卡影响，则根据数据类型将各个月卡减免比例下的数值填入 div
    if (isGoldPassTrainingItem) {
        // 不管是 legacy 还是 2022 版训练系统，都按照训练时间的逻辑处理。2025 版训练系统不会进入这个 if 分支。
        valueArr = getGoldPassValueArr("training", value, null);
        gpValue = true;
        valueDomClass = "cp-unit-property-value cp-gp-item cp-gp-type-training " + gpClassStr;
    } else if (props.isUpgradeTime) {
        valueArr = getGoldPassValueArr("time", value, null);
        gpValue = true;
        valueDomClass = "cp-unit-property-value cp-gp-item cp-gp-type-time " + gpClassStr;
    } else if (props.isUpgradeCost || props.isTrainingCost) {
        valueArr = getGoldPassValueArr("cost", null, value);
        gpValue = true;
        valueDomClass = "cp-unit-property-value cp-gp-item cp-gp-type-cost " + gpClassStr;
    } else {
        // 即使手动注明受月卡影响，但当找不到数据类型时，也视为不受月卡影响
        gpValue = false;
        valueDomClass = "cp-unit-property-value";
    }
}

// 捐赠费用这一块视为不受月卡影响，单独处理
let valueSplit;
let donationCostGem;
let donationCostRaidMedal;
let donationCostNormalResource;
let donationCostNormalResourceType;
if (props.isDonationCost) {
    valueSplit = value.split(",");
    donationCostGem = convertNum(valueSplit[0].trim());
    donationCostRaidMedal = convertNum(valueSplit[1].trim());
    donationCostNormalResource = convertNum(valueSplit[2].trim());
    donationCostNormalResourceType = valueSplit[3].trim();
}

const unitPropertyRef = ref();

onMounted(() => {
    nextTick(() => {
        const unitProperty = unitPropertyRef.value;
        // 根据用户要求（cookie 值）确定要展示哪个特殊数据
        showGoldPassValue(unitProperty);
    });
});
</script>

<template>
    <div class="cp-unit-property" ref="unitPropertyRef">
        <div class="cp-unit-property-key" v-if="props.trainingSystem === '2025'">
            {{ key }} <Info :propertyKey="true" @click="showDialog('cp-training-dialog-2025')" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.trainingSystem === '2022'">
            {{ key }} <Info :propertyKey="true" @click="showDialog('cp-training-dialog-2022')" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.trainingSystem === 'legacy'">
            {{ key }} <Info :propertyKey="true" @click="showDialog('cp-training-dialog-legacy')" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.isJudgeSquare">
            {{ key }} <Question :propertyKey="true" :greyStroke="true" @click="showDialog('cp-judge-square-dialog')" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.isTrainingCost">
            {{ key }} <Resource :type="props.resourceType" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.isUpgradeCost">
            {{ key }} <Resource :type="props.resourceType" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.resourceType">
            {{ key }} <Resource :type="props.resourceType" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.isDonationCost">
            {{ key }} <Info :propertyKey="true" @click="showDialog('cp-donation-cost-dialog')" />
        </div>
        <div class="cp-unit-property-key" v-else-if="props.isDefensePreferredTroop">
            {{ key }} <Info :propertyKey="true" @click="showDialog('cp-preferred-target-tip')" />
        </div>
        <div class="cp-unit-property-key" v-else>{{ key }}</div>

        <div :class="valueDomClass" v-if="gpValue">
            <div class="cp-gp-discount-0">{{ valueArr[0] }}</div>
            <div class="cp-gp-discount-10">{{ valueArr[1] }}</div>
            <div class="cp-gp-discount-15">{{ valueArr[2] }}</div>
            <div class="cp-gp-discount-20">{{ valueArr[3] }}</div>
        </div>
        <div :class="valueDomClass" v-else-if="props.isDonationCost">
            <div class="cp-unit-property-donation-cost-line">{{ donationCostGem }}<Resource type="Gem" /><br></div>
            <div class="cp-unit-property-donation-cost-line">{{ donationCostRaidMedal }}<Resource type="Raid_Medal" /><br></div>
            <div class="cp-unit-property-donation-cost-line">{{ donationCostNormalResource }}<Resource :type="donationCostNormalResourceType" /></div>
        </div>
        <div :class="valueDomClass" v-html="value" v-else></div>
    </div>
</template>

<style lang="scss">
.cp-unit-property {
    /* 设置 flex 让元素在一行内显示 */
    display: flex;
    /* 给位置加个偏移，让重叠的边框超出父元素的范围，再给父元素设置 overflow: hidden 让它遮住重叠的边框 */
    position: relative;
    top: 0.1rem;
    left: 0.1rem;
    border-bottom: var(--cp-border-light);
    border-right: var(--cp-border-light);

    .cp-img-container {
        margin-left: 0.125rem;
    }
}

.cp-theme-dark .cp-unit-property {
    border-bottom: var(--cp-border-dark);
    border-right: var(--cp-border-dark);
}

.cp-unit-property-key {
    font-size: 0.9375rem;
    font-weight: 700;
    padding: 0.375rem 0.375rem 0.375rem 0.625rem;
    color: var(--cp-grey-text-light);
}

.cp-theme-dark .cp-unit-property-key {
    color: var(--cp-grey-text-dark);
}

.cp-unit-property-key, .cp-unit-property-value {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.cp-unit-property-key {
    width: 45%;
}

.cp-unit-property-value {
    width: 55%;
    padding: 0.375rem 0.625rem 0.375rem 0.375rem;
}

/* 默认只显示第一项，其他几项需要用 js 控制才会显示 */
.cp-gp-item {
    .cp-gp-discount-0, .cp-gp-discount-10, .cp-gp-discount-15, .cp-gp-discount-20 {
        display: none;
    }

    .cp-gp-discount-10, .cp-gp-discount-15, .cp-gp-discount-20 {
        color: var(--cp-gold-color-light);
    }
}

.cp-theme-dark .cp-gp-item {
    .cp-gp-discount-10, .cp-gp-discount-15, .cp-gp-discount-20 {
        color: var(--cp-gold-color-dark);
    }
}

.cp-gp-item .cp-gp-showing-value {
    display: block;
}

.cp-gp-type-dailyCost {
    .cp-gp-discount-10, .cp-gp-discount-15, .cp-gp-discount-20 {
        color: inherit;
    }
}

/* 在捐赠费用一栏中，每种资源类型独占一行 */
.cp-unit-property-donation-cost-line {
    width: 100%;
}
</style>