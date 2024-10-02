<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { getSelectDomFromOption, setSelectValue } from '@/components/select/Select.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const emits = defineEmits([
    "clickEvent"
]);

const listItemRef = ref();

function listItemClickEvent() {
    // 将激活的选项改为刚刚点击的
    const optionDom = listItemRef.value;
    const selectDom = getSelectDomFromOption(optionDom);
    const selectId = selectDom.getAttribute("id");
    const currentOptionValue = optionDom.getAttribute("data-value");
    setSelectValue(selectId, currentOptionValue);
    // 模拟点击 .cp-select-button，达到收起下拉菜单的目的
    selectDom.querySelector(".cp-select-button").click();
    // 执行自定义事件
    emits('clickEvent');
}

onMounted(() => {
    nextTick(() => {
        const optionDom = listItemRef.value;
        const selectDom = getSelectDomFromOption(optionDom);
        if (selectDom.getAttribute("active-value") === props.value) {
            optionDom.classList.add("cp-select-item-active")
        } else {
            optionDom.classList.remove("cp-select-item-active")
        }
    });
});
</script>

<template>
    <li class="cp-select-item" @click="listItemClickEvent" ref="listItemRef" tabindex="0" :data-value="props.value">
        <span class="cp-select-item-text">{{ props.text }}</span>
        <span class="cp-select-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
            </svg>
        </span>
    </li>
</template>

<style lang="scss">
.cp-select-item {
    list-style: none;
    height: 2.75rem;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0.5rem 0.75rem;
    cursor: pointer;

    .cp-select-item-text {
        display: inline-block;
        width: calc(100% - 1.5rem);
    }

    .cp-select-item-check {
        display: none;
        transform: translate(6px, -1px);

        svg {
            stroke: none;
            fill: var(--cp-text-light);
            position: relative;
            top: 0.25rem;
        }
    }
}

.cp-select-item.cp-select-item-active {
    .cp-select-item-text {
        font-weight: 700;
        transform: translateX(1px);
    }

    .cp-select-item-check {
        display: inherit;
    }
}

.cp-theme-dark .cp-select-item-check svg {
    fill: var(--cp-text-dark);
}

.cp-select-item:hover, .cp-select-item:focus {
    background-color: var(--cp-primary-light);

    .cp-select-item-text {
        color: rgb(240, 240, 240);
    }

    .cp-select-item-check svg {
        fill: rgb(240, 240, 240);
    }
}

.cp-theme-dark .cp-select-item:hover, .cp-theme-dark .cp-select-item:focus {
    background-color: var(--cp-primary-dark);

    .cp-select-item-text {
        color: rgb(32, 32, 32);
    }

    .cp-select-item-check svg {
        fill: rgb(32, 32, 32);
    }
}
</style>