<template>
<div
    class="text-white"
    v-view="viewHandler"
>
    <img
        :src="main"
        alt=""
        class="h-full hidden md:block"
    >
    <img
        :src="mainMobile"
        alt=""
        class="h-full md:hidden"
    >

</div>
</template>

<script>
const main = require('../assets/images/main.svg')
const mainMobile = require('../assets/images/main_mobile.svg')

export default {
    name: 'MainHeader',
    data: function () {
        return {
            main: main,
            mainMobile: mainMobile,
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
