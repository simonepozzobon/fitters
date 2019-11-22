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
    <div class="main-image md:hidden">
        <img
            :src="mainMobile"
            alt=""
            class="main-image__bg"
        >
        <img
            :src="mainMobileText"
            alt=""
            class="absolute main-image__text"
        >
    </div>

</div>
</template>

<script>
const main = require('../assets/images/main.svg')
const mainMobile = require('../assets/images/main_mobile.svg')
const mainMobileText = require('../assets/images/main_mobile_text.svg')

export default {
    name: 'MainHeader',
    data: function () {
        return {
            main: main,
            mainMobile: mainMobile,
            mainMobileText: mainMobileText,
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

<style lang="scss">
.main-image {
    position: relative;
    height: 100vh;
    overflow: hidden;

    &__bg {
        position: absolute;
        width: 100vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__text {
        position: absolute;
        max-height: 100vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
