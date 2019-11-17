<template>
<div class="flex flex-row items-center">
    <div
        class="border border-dark w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer"
        @click.prevent="toggle"
    >
        <transition name="fade">
            <div
                v-if="selected"
                class="gr-orange w-4 h-4 rounded-full"
            ></div>
        </transition>
    </div>
    <div class="ml-4 font-bold text-dark tracking-wide">
        {{label}}
    </div>
</div>
</template>

<script>
export default {
    name: 'UiCheckbox',
    props: {
        label: {
            type: String,
            default: null,
        },
    },
    data: function () {
        return {
            selected: false,
        }
    },
    methods: {
        toggle: function () {
            this.selected = !this.selected
        },
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
