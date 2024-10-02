<script setup>
import { inBrowser, useRouter } from 'vitepress';
import SelectContainer from '@/components/select/SelectContainer.vue';
import Option from '@/components/select/Option.vue';
import { getCookie, setCookie, deleteCookie } from '@/assets/global/utils.js';
import { showGoldPassValue } from '@/assets/upgrade.js';

const props = defineProps({
    link: {
        type: String,
        default: null
    },
    hasCustomOption: {
        type: Boolean,
        default: false
    }
});

/**
 * 判断是否含有月卡减免
 * 
 * @param {String} link 页面的规范链接
 */
function hasGoldPassItem(link) {
    if (link && (link.startsWith("/upgrade/0") || link.startsWith("/upgrade/1"))) {
        const unitId = link.substring(9, 13);
        const excludedId = ["0501", "0502"];
        // 英雄装备的升级花费不受月卡影响，特意排除
        return unitId.match(/^[0-9a-f][0-9a-f][0-9a-f][0-9a-f]$/)
            && !unitId.startsWith("07") && !excludedId.includes(unitId);
    }
    return false;
}

const link = props.link;
const hasGoldPass = hasGoldPassItem(link);
let gpActiveOption;
const cookieValue = inBrowser ? getCookie("cp-gp-discount") : null;
if (hasGoldPass) {
    if (cookieValue && cookieValue !== "0-0-0") {
        if (cookieValue === "10-10-10") {
            gpActiveOption = 1;
        } else if (cookieValue === "15-15-15") {
            gpActiveOption = 2;
        } else if (cookieValue === "20-20-20") {
            gpActiveOption = 3;
        } else {
            gpActiveOption = 4;
        }
    } else {
        gpActiveOption = 0;
    }
}

function setDiscountValue(value) {
    // 展示用户选择的值，并将用户选择的值写入 Cookie
    const DOM = document.querySelector("main");
    if (value === 0) {
        showGoldPassValue(DOM, [0,0,0]);
        deleteCookie("cp-gp-discount");
    } else if (value === 10) {
        showGoldPassValue(DOM, [10,10,10]);
        setCookie("cp-gp-discount", "10-10-10", "90", "days");
    } else if (value === 15) {
        showGoldPassValue(DOM, [15,15,15]);
        setCookie("cp-gp-discount", "15-15-15", "90", "days");
    } else if (value === 20) {
        showGoldPassValue(DOM, [20,20,20]);
        setCookie("cp-gp-discount", "20-20-20", "90", "days");
    } else {
        console.error("[clashpost error] 月卡减免比例设置错误，value 必须为 0、10、15、20 这四个值之一。")
    }
}

const router = useRouter();
function goToSetting() {
    router.go("/settings");
}
</script>

<template>
    <SelectContainer title="月卡减免比例：" selectId="cp-gp-discount-container" aria-label="月卡减免下拉菜单"
        :activeValue="gpActiveOption" selectWidth="8rem" v-if="hasGoldPass">
        <Option text="无" value="0" @clickEvent="setDiscountValue(0)"></Option>
        <Option text="10%" value="1" @clickEvent="setDiscountValue(10)"></Option>
        <Option text="15%" value="2" @clickEvent="setDiscountValue(15)"></Option>
        <Option text="20%" value="3" @clickEvent="setDiscountValue(20)"></Option>
        <Option text="自定义" value="4" @clickEvent="goToSetting"></Option>
    </SelectContainer>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

#cp-gp-discount-container {
    display: flex; /* 让元素显示在一行 */
    margin-top: 0.75rem;
}

@media (min-width: $cp-col-tablat-big) {
    #cp-gp-discount-container {
    margin-top: 0;
    }
}

#cp-gp-discount-title {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: rgb(17, 24, 39);
}

.cp-theme-dark #cp-gp-discount-title {
    color: rgb(230, 235, 238);
}

#cp-gp-select {
    margin-left: 0.25rem;
}
</style>