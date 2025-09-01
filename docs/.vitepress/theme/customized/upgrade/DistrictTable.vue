<script setup>
import { onMounted, nextTick, ref } from "vue";

const tableContainerRef = ref();

onMounted(() => {
    nextTick(() => {
        const tableContainer = tableContainerRef.value;
        const firstTheadCell = tableContainer.querySelector("thead th");
        firstTheadCell.innerHTML = "<span class=\"cp-district-title-left\">子城名称</span>" +
            "<span class=\"cp-district-title-slash\"></span>" +
            "<span class=\"cp-district-title-right\">子城大本营<br>等级</span>";
    });
});
</script>

<template>
    <div class="cp-table-container cp-table-district-level" ref="tableContainerRef">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

/* 第一列含有右边框 */
.cp-table-district-level {
    thead th:first-child, tbody td:first-child {
        border-right: var(--cp-border-light);
    }
}

.cp-theme-dark .cp-table-district-level {
    thead th:first-child, tbody td:first-child {
        border-right: var(--cp-border-dark);
    }
}

@media (min-width: $cp-col-phone-large) {
    .cp-table-district-level {
        thead th:first-child, tbody td:first-child {
            white-space: nowrap;
        }
    }
}

/* 当鼠标挨在表格上时，右边框采用对比度更高的颜色，看起来不违和 */
.cp-table-district-level tbody tr:hover td:first-child  {
    border-right: 0.1rem solid rgb(220, 220, 220);
}

.cp-theme-dark .cp-table-district-level tbody tr:hover td:first-child  {
    border-right: 0.1rem solid rgb(64, 64, 64);
}

/* 左上角的第一个单元格 */
.cp-table-district-level thead th:first-child {
    width: 6.5rem;
    min-width: 6.5rem;
    height: 4.5rem;
    border-right: var(--cp-border-light);

    span {
        color: var(--cp-grey-text-light);
        line-height: 1.25rem;
    }

    /* 左下角的文字 */
    .cp-district-title-left {
        position: absolute;
        left: 0.5rem;
        bottom: 0.25rem;
    }

    /* 右上角的文字 */
    .cp-district-title-right {
        position: absolute;
        top: 0.125rem;
        right: 0.25rem;
        text-align: right;
    }

    /* 中间的斜线 */
    .cp-district-title-slash {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 7.906rem;
        height: 0.1rem;
        background-color: var(--cp-border-color-light);
        transform: rotate(34.64deg);
        transform-origin: top left;
    }
}

/* 当屏幕足够大时第一列宽度更大 */
@media (min-width: $cp-col-phone-large) {
    .cp-table-district-level thead th:first-child {
        width: 7.5rem;
        min-width: 7.5rem;
        height: 4.75rem;

        .cp-district-title-left {
            left: 0.625rem;
            bottom: 0.375rem;
        }

        .cp-district-title-right {
            top: 0.25rem;
            right: 0.375rem;
        }

        .cp-district-title-slash {
            width: 8.817rem;
            transform: rotate(31.89deg);
        }
    }
}

.cp-theme-dark .cp-table-district-level thead th:first-child {
    border-right: var(--cp-border-dark);

    span {
        color: var(--cp-grey-text-dark);
    }
    
    .cp-district-title-slash {
        background-color: var(--cp-border-color-dark);
    }
}
</style>