<template>
<div
    id="chi-siamo"
    class="py-8 px-12 gr-dark"
    v-view="viewHandler"
>
    <div class="flex flex-row">
        <div class="w-4/12">
            <ui-title title="Chi siamo" />
            <p class="text-white leading-normal mt-6 font-bold">
                Siamo la libertà al servizio degli amanti del fitness.<br>
                <br>
                Fitters è la prima sharing app al mondo che ti permette di risparmiare o, addirittura, guadagnare dal tuo abbonamento in palestra.<br>
                <br>
                Con un’unica App puoi scegliere di allenarti ogni giorno in una palestra diversa, a costi ridotti. Oppure puoi mettere a disposizione degli altri utenti il tuo abbonamento, guadagnando direttamente dal loro ingresso.
            </p>

            <p class="text-orange-500 font-bold italic mt-6 tracking-wide">
                La rivoluzione del fitness è iniziata.
            </p>
        </div>
        <div class="w-8/12 flex justify-end">
            <img
                :src="phone"
                alt=""
            >
        </div>
    </div>
</div>
</template>

<script>
const phone = require('../assets/images/phone.png')
import UiTitle from '../components/UiTitle.vue'

export default {
    name: 'ChiSiamo',
    components: {
        UiTitle,
    },
    data: function () {
        return {
            phone: phone,
        }
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'chi-siamo'
            }
        }
    },
}
</script>
