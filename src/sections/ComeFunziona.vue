<template>
<div
    id="come-funziona"
    class="pt-8 pb-24 gr-dark"
    v-view="viewHandler"
>
    <ui-title
        title="Come funziona"
        class="px-12 text-center"
    />
    <img
        :src="comeFunziona"
        alt="Come funziona"
        class="hidden md:block px-12"
    >
    <img
        :src="comeFunzionaMobile"
        alt="Come Funziona"
        class="md:hidden mt-8"
    >
</div>
</template>

<script>
import UiTitle from '../components/UiTitle.vue'
const comeFunziona = require('../assets/images/come_funziona.svg')
const comeFunzionaMobile = require('../assets/images/come_funziona_mobile.svg')

export default {
    name: 'ChiSiamo',
    components: {
        UiTitle,
    },
    data: function () {
        return {
            comeFunziona: comeFunziona,
            comeFunzionaMobile: comeFunzionaMobile,
        }
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'come-funziona'
            }
        }
    },
}
</script>
