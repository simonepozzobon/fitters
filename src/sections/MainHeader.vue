<template>
<div
    class="text-white"
    v-view="viewHandler"
>
    <img
        :src="main"
        alt=""
        class="h-full"
    >
</div>
</template>

<script>
const main = require('../assets/images/main.svg')

export default {
    name: 'MainHeader',
    data: function () {
        return {
            main: main
        }
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = null
            }
        },
    },
}
</script>
