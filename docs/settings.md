---
title: "设置"
module: settings
lastUpdated: null
robots: noindex, nofollow
hasUpdateTime: false
---

<script>
/*
 * 根据月卡减免比例，给出 Option 的 value
 */
function loadGpValueFromDiscount(discount) {
    if (discount === 10) {
        return 1;
    } else if (discount === 15) {
        return 2;
    } else if (discount === 20) {
        return 3;
    }
    return 0;
}

/**
 * 根据 option 的 value 值确定月卡减免比例
 */
function getDiscountFromOptionValue(value) {
    if (value === "1") {
        return "10";
    } else if (value === "2") {
        return "15";
    } else if (value === "3") {
        return "20";
    } else {
        return "0";
    }
}

/*
 * 保存设置
 */
function saveSettings() {
    // 月卡减免比例的设置
    const gpDiscountTrainingValue = getSelectValue("cp-select-gp-training");
    const gpDiscountTraining = getDiscountFromOptionValue(gpDiscountTrainingValue);

    const gpDiscountResearchValue = getSelectValue("cp-select-gp-research");
    const gpDiscountResearch = getDiscountFromOptionValue(gpDiscountResearchValue);

    const gpDiscountBuildingValue = getSelectValue("cp-select-gp-building");
    const gpDiscountBuilding = getDiscountFromOptionValue(gpDiscountBuildingValue);

    let gpCookieValue;
    if (gpDiscountTraining === "0" && gpDiscountResearch === "0" && gpDiscountBuilding === "0") {
        deleteCookie("cp-gp-discount");
    } else {
        gpCookieValue = gpDiscountTraining + "-" + gpDiscountResearch + "-" + gpDiscountBuilding;
        setCookie("cp-gp-discount", gpCookieValue, "90", "days");
    }

    // 网站主题设置
    const pageThemeValue = getSelectValue("cp-select-page-theme");
    if (pageThemeValue === "1") {
        setCookie("cp-preferred-theme", "light", "10", "years");
    } else if (pageThemeValue === "2") {
        setCookie("cp-preferred-theme", "dark", "10", "years");
    } else {
        deleteCookie("cp-preferred-theme");
    }

    // 字体加载策略
    const fontLoadPolicyValue = getSelectValue("cp-select-font-load-policy");
    if (fontLoadPolicyValue === "1") {
        setCookie("cp-font-load-policy", "Positive", "10", "years");
    } else if (fontLoadPolicyValue === "2") {
        setCookie("cp-font-load-policy", "Negative", "10", "years");
    } else {
        deleteCookie("cp-font-load-policy");
    }

    // 搜索服务提供商设置
    const searchProviderValue = getSelectValue("cp-select-search-provider");
    if (searchProviderValue === "1") {
        setCookie("cp-search-provider", "Google", "10", "years");
    } else if (searchProviderValue === "2") {
        setCookie("cp-search-provider", "DuckDuckGo", "10", "years");
    } else if (searchProviderValue === "3") {
        setCookie("cp-search-provider", "Yandex", "10", "years");
    } else if (searchProviderValue === "4") {
        setCookie("cp-search-provider", "Yahoo", "10", "years");
    } else {
        deleteCookie("cp-search-provider");
    }

    // 弹出提示信息
    generateToast("设置保存成功", {
        type: "success",
        showDuration: 3000
    });
}

/*
 * 重置设置
 */
function resetSettings() {
    window.location.reload();
}
</script>

<script setup>
import { onMounted, nextTick } from 'vue';
import { inBrowser } from 'vitepress';
import SelectContainer from '@/components/select/SelectContainer.vue';
import Select, { getSelectValue, setSelectValue } from '@/components/select/Select.vue';
import Option from '@/components/select/Option.vue';
import { generateToast } from '@/components/dialog/Toast.vue';
import { getCookie, setCookie, deleteCookie, isNumber } from '@/assets/global/utils.js';

/*
 * 获取三个月卡减免比例
 */
const gpCookieValue = inBrowser ? getCookie("cp-gp-discount") : null;
let gpTrainingActiveValue = 0;
let gpResearchActiveValue = 0;
let gpBuildingActiveValue = 0;
// 如果 cookie 不存在，则认为没有减免比例，不进行任何操作
if (gpCookieValue) {
    // 月卡的数组长度一定是 3，如果不是则使用默认值
    const gpDiscountArr = gpCookieValue.split("-");
    if (gpDiscountArr.length !== 3) {
        gpDiscountArr = [0,0,0];
    }
    const gpDiscountTraining = parseInt(gpDiscountArr[0]);
    const gpDiscountResearch = parseInt(gpDiscountArr[1]);
    const gpDiscountBuilding = parseInt(gpDiscountArr[2]);
    gpTrainingActiveValue = loadGpValueFromDiscount(gpDiscountTraining);
    gpResearchActiveValue = loadGpValueFromDiscount(gpDiscountResearch);
    gpBuildingActiveValue = loadGpValueFromDiscount(gpDiscountBuilding);
}

/*
 * 加载用户当前的主题
 */
const preferredTheme = inBrowser ? getCookie("cp-preferred-theme") : null;
let pageThemeActiveValue = 0;
if (preferredTheme) {
    if (preferredTheme === "light") {
        pageThemeActiveValue = 1;
    } else if (preferredTheme === "dark") {
        pageThemeActiveValue = 2;
    }
}

/*
 * 获取字体加载策略
 */
const fontLoadPolicy = inBrowser ? getCookie("cp-font-load-policy") : null;
let fontLoadPolicyValue = 0;
if (fontLoadPolicy) {
    if (fontLoadPolicy === "Positive") {
        fontLoadPolicyValue = 1;
    } else if (fontLoadPolicy === "Negative") {
        fontLoadPolicyValue = 2;
    }
}

/**
 * 加载当前使用的搜索服务提供商
 */
const searchProvider = inBrowser ? getCookie("cp-search-provider") : null;
let searchProviderActiveValue = 0;
if (searchProvider) {
    if (searchProvider === "Google") {
        searchProviderActiveValue = 1;
    } else if (searchProvider === "DuckDuckGo") {
        searchProviderActiveValue = 2;
    } else if (searchProvider === "Yandex") {
        searchProviderActiveValue = 3;
    } else if (searchProvider === "Yahoo") {
        searchProviderActiveValue = 4;
    }
}
</script>

网站的所有设置都通过 Cookie 存储，如果你使用设置功能，即代表您同意我们使用 Cookie 存储您的使用偏好。

网站的所有设置都需要重新刷新页面后才可生效。

## 月卡减免比例

在这个区域，你可以单独设置月卡的训练、研究和建筑加成。月卡减免比例的设置均保留 90 天。

<SelectContainer title="训练加成" selectId="cp-select-gp-training" aria-label="训练加成下拉菜单"
    :activeValue="gpTrainingActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>
<SelectContainer title="研究加成" selectId="cp-select-gp-research" aria-label="研究加成下拉菜单"
    :activeValue="gpResearchActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>
<SelectContainer title="建造加成" selectId="cp-select-gp-building" aria-label="建造加成下拉菜单"
    :activeValue="gpBuildingActiveValue" selectWidth="12rem">
    <Option text="无" value="0" />
    <Option text="10%" value="1" />
    <Option text="15%" value="2" />
    <Option text="20%" value="3" />
</SelectContainer>

## 网站风格

<SelectContainer title="主题" selectId="cp-select-page-theme" aria-label="切换网站主题的下拉菜单"
    :activeValue="pageThemeActiveValue" selectWidth="12rem">
    <Option text="跟随系统（默认）" value="0" />
    <Option text="始终使用浅色主题" value="1" />
    <Option text="始终使用深色主题" value="2" />
</SelectContainer>
<SelectContainer title="字体加载策略" selectId="cp-select-font-load-policy" aria-label="切换字体加载策略的下拉菜单"
    :activeValue="fontLoadPolicyValue" selectWidth="12rem"
    description="在智能加载模式下，网站可能会加载少量字体资源以平衡网站的颜值与加载速度。不论选择哪一项，网站都只会加载英文和数字字体，不会加载巨大的中文字体。中文部分始终使用系统默认字体。">
    <Option text="智能加载（默认）" value="0" />
    <Option text="始终加载" value="1" />
    <Option text="始终不加载" value="2" />
</SelectContainer>

<hr class="cp-light-row-division" />

## 搜索服务

<SelectContainer title="搜索服务提供商" selectId="cp-select-search-provider" aria-label="搜索服务提供商的菜单"
    :activeValue="searchProviderActiveValue" selectWidth="12rem"
    description="由于中国大陆的搜索引擎极少收录境外网站，即使提供了百度、搜狗这些选项也不能用，因此这里就不提供了。">
    <Option text="必应（默认）" value="0" />
    <Option text="谷歌" value="1" />
    <Option text="DuckDuckGo" value="2" />
    <Option text="Yandex" value="3" />
    <Option text="雅虎" value="4" />
</SelectContainer>

<hr class="cp-light-row-division" />

<div class="cp-settings-operation-btn">
    <button class="btn-secondary" @click="resetSettings">重置</button>
    <button class="btn-primary" @click="saveSettings">保存</button>
</div>

<style lang="scss">
.cp-settings-operation-btn {
    display: flex;
    justify-content: space-between;

    button {
        width: 5rem;
    }
}
</style>