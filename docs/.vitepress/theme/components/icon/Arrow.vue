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
    <svg :class="svgDomClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
    </svg>
</template>