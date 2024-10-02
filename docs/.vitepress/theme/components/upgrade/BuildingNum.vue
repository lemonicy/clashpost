<template>
    <div class="cp-upgrade-building-num">
        <table>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.cp-upgrade-building-num {
    overflow-x: auto;
    border: var(--cp-border-light);
    border-radius: 0.5rem;

    table {
        border-radius: 0.5rem;

        tbody {
            tr:hover td {
                background-color: var(--cp-page-bg-light);
            }

            tr:first-child {
                border-top: none;
            }

            td {
                white-space: nowrap;
            }
            
            td:first-child {
                font-weight: 700;
                color: var(--cp-grey-text-light);
            }
        }
    }
}

.cp-theme-dark .cp-upgrade-building-num {
    border: var(--cp-border-dark);

    table tbody {
        tr:hover td {
            background-color: var(--cp-page-bg-dark);
        }
            
        td:first-child {
            color: var(--cp-grey-text-dark);
        }
    }
}

@media (max-width: $cp-col-phone-large) {
    .cp-upgrade-building-num table tbody td:first-child {
        min-width: 7.5rem;
        white-space: normal;
    }
}
</style>