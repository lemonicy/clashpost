<script setup>
const props = defineProps({
    propertyKey: {
        type: Boolean,
        default: false
    },
    theadIcon: {
        type: Boolean,
        default: false
    },
    sidebarItemIcon: {
        type: Boolean,
        default: false
    }
});

let svgDomClass;
if (props.propertyKey) {
    svgDomClass = "cp-icon cp-icon-property-key";
} else if (props.theadIcon) {
    svgDomClass = "cp-icon cp-icon-thead-key";
} else if (props.sidebarItemIcon) {
    svgDomClass = "cp-icon cp-icon-sidebar-item";
} else {
    svgDomClass = "cp-icon";
}
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="svgDomClass" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
</template>