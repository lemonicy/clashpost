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
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
</template>