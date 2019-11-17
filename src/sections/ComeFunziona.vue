<template>
<div
    id="come-funziona"
    class="pt-8 pb-24 px-12 gr-dark"
    v-view="viewHandler"
>
    <ui-title title="Come funziona" />
    <img
        :src="comeFunziona"
        alt=""
    >
</div>
</template>

<script>
import UiTitle from '../components/UiTitle.vue'
const comeFunziona = require('../assets/images/come_funziona.svg')
export default {
    name: 'ChiSiamo',
    components: {
        UiTitle,
    },
    data: function () {
        return {
            comeFunziona: comeFunziona
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
