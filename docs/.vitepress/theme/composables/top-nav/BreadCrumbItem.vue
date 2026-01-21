<script setup>
import Arrow from "@/components/icon/general/Arrow.vue";

const props = defineProps({
    breadcrumbItems: {
        type: Array,
        required: true
    }
});

const items = props.breadcrumbItems;
</script>

<template>
    <div class="cp-breadcrumb-item" v-for="(item, index) in items">
        <div class="cp-breadcrumb-text">
            <a :href="item.link" v-if="item.link">{{ item.text }}</a>
            <span v-else>{{ item.text }}</span>
        </div>
        <div class="cp-breadcrumb-icon" v-if="index < items.length - 1">
            <Arrow />
        </div>
    </div>
</template>

<style lang="scss">
.cp-breadcrumb-item {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
}

.cp-breadcrumb-item:last-child {
    margin-right: 0;
}

.cp-breadcrumb-text {
    margin-right: 0.5rem;
    white-space: nowrap;
}

.cp-breadcrumb-text a {
    color: var(--cp-grey-text-light);
}

.cp-theme-dark .cp-breadcrumb-text a {
    color: var(--cp-grey-text-dark);
}

.cp-breadcrumb-item:last-child .cp-breadcrumb-text span {
    color: rgb(55, 61, 81);
    font-weight: 700;
}

.cp-theme-dark .cp-breadcrumb-item:last-child .cp-breadcrumb-text span {
    color: rgb(243, 244, 246);
}

.cp-breadcrumb-icon {
    display: flex;
    align-items: center;
    width: 1rem;
}

.cp-breadcrumb-icon svg {
    stroke: var(--cp-grey-text-light) !important;
}

.cp-theme-dark .cp-breadcrumb-icon svg {
    stroke: var(--cp-grey-text-light) !important;
}
</style>