<template>
<a
    href="#"
    class="gr-orange rounded-full text-white font-semibold"
    :class="sizeClass"
    @click.prevent.stop="$emit('click')"
>
    {{ title }}
</a>
</template>

<script>
export default {
    name: 'UiButton',
    props: {
        title: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null,
        },

    },
    computed: {
        sizeClass: function () {
            let x = 6,
                y = 3,
                text = 'base',
                tracking = 'wide'

            if (this.size == 'lg') {
                x = 10
                y = 4
                tracking = 'normal'
                text = 'xl'
            }
            return `px-${x} py-${y} text-${text} tracking-${tracking}`
        },
    },
}
</script>
