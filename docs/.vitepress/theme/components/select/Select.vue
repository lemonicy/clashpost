<script>
export function getSelectDomFromOption(optionDom) {
    let selectDom = optionDom.parentNode;
    const mainContent = document.querySelector("main");
    while(!selectDom.classList.contains("cp-select")) {
        if (selectDom === mainContent) {
            console.error("[clashpost error]: \".cp-select-item\" 的 DOM 结构有误，请检查以下元素所在的 Select container:");
            console.error(optionDom);
            break;
        }
        selectDom = selectDom.parentNode;
    }
    return selectDom;
}

export function getSelectValue(selectId) {
    const selectDom = document.querySelector("#" + selectId);
    return selectDom.getAttribute("active-value");
}

export function setSelectValue(selectId, newOptionValue) {
    // 遍历所有选项，寻找目标项
    const selectDom = document.querySelector("#" + selectId);
    const allSelectItems = selectDom.querySelectorAll(".cp-select-dropdowns .cp-select-item");
    allSelectItems.forEach(currentItem => {
        // 两边的类型可能不相等，因此这里使用两个等于号
        if (currentItem.getAttribute("data-value") == newOptionValue) {
            // 将按钮的文字修改为目标文字
            const selectBtn = selectDom.querySelector(".cp-select-button");
            // 如果使用 innerText，则 Safari 无法读取。我不知道为啥 innerHTML 可以跑起来，所以不能乱动。
            const optionHTML = currentItem.querySelector(".cp-select-item-text").innerHTML;
            selectBtn.querySelector(".cp-select-button-text").innerHTML = optionHTML;
            // 将下拉菜单中的对号修改为指定值
            currentItem.classList.add("cp-select-item-active");
            // 将 active-index 属性修改为指定值
            const currentValue = currentItem.getAttribute("data-value");
            selectDom.setAttribute("active-value", currentValue);
        } else {
            currentItem.classList.remove("cp-select-item-active");
        }
    });
}
</script>

<script setup>
import { onMounted, nextTick, ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        default: ""
    },
    selectWidth: {
        type: String,
        default: "12rem"
    },
    activeValue: {
        type: [String, Number],
        default: "0"
    }
});

const selectStyle = "width: " + props.selectWidth;
const selectRef = ref();

function changeDropdownsVisibility() {
    const selectDom = selectRef.value;
    // 展开或折叠下拉菜单
    if (selectDom.classList.contains("cp-select-expand")) {
        selectDom.classList.remove("cp-select-expand");
    } else {
        selectDom.classList.add("cp-select-expand");
    }
    // 选中当前激活的下拉菜单
    const allSelectItems = selectDom.querySelectorAll(".cp-select-dropdowns .cp-select-item");
    allSelectItems.forEach(currentItem => {
        if (currentItem.classList.contains("cp-select-item-active")) {
            currentItem.focus();
        }
    });
}

onMounted(() => {
    nextTick(() => {
        const selectDom = selectRef.value;
        setSelectValue(selectDom.getAttribute("id"), props.activeValue);
    });
});
</script>

<template>
    <div :id="props.id" class="cp-select" :style="selectStyle" :active-value="props.activeValue" ref="selectRef">
        <button class="cp-select-button" :aria-label="props.ariaLabel" @click="changeDropdownsVisibility" tabindex="0">
            <span class="cp-select-button-text"></span>
            <span class="cp-select-button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="24" height="24">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"></path>
                </svg>
            </span>
        </button>
        <div class="cp-select-dropdowns">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.cp-select {
    position: relative; /* 子元素相对这个元素定位 */
    margin-left: 0;
}

.cp-select-button {
    width: 100%;
    min-height: 2.25rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.375rem;
    border: none;
    background-color: var(--cp-page-bg-light);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, var(--cp-border-color-light) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

.cp-theme-dark .cp-select-button {
    background-color: var(--cp-page-bg-dark);
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px inset, var(--cp-border-color-dark) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0) 0px 0px 0px 0px;
}

.cp-select-button:focus {
    outline: 0.1rem solid var(--cp-primary-light);
}

.cp-theme-dark .cp-select-button:focus {
    outline: 0.1rem solid var(--cp-primary-dark);
}

.cp-select-button-icon {
    display: flex;
    align-items: center;
    position: relative;
    top: 0.125rem;
    left: 0.25rem;
}

.cp-select-dropdowns {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s cubic-bezier(0.4, 0, 0.2, 1);;
    position: absolute;
    top: 2.5rem;
    right: 0;
    width: 100%;
    margin: 0.375rem 0 0 0;
    padding: 0;
    z-index: 100;
    border-radius: 0.375rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, var(--cp-border-color-light) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    background-color: var(--cp-page-bg-light);

    ul {
        margin: 0;
        min-height: 0;
        overflow: hidden;
        border-radius: 0.375rem;
    }
}

.cp-select.cp-select-expand .cp-select-dropdowns {
    grid-template-rows: 1fr;
}

.cp-theme-dark .cp-select-dropdowns {
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px inset, var(--cp-border-color-dark) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0) 0px 0px 0px 0px;
    background-color: var(--cp-page-bg-dark);
}
</style>