<template>
<div class="bg-light py-8 px-12">
    <h2 class="text-orange-500 font-black uppercase text-3xl italic tracking-wide mt-4">
        Vantaggi
    </h2>
    <div class="flex flex-row justify-around mt-12 pb-24">
        <ui-icon
            class="w-3/12"
            title="libertà"
        >
            Perché puoi scegliere di allenarti ogni giorno in una palestra diversa.
        </ui-icon>
        <ui-icon
            class="w-3/12"
            title="risparmio"
        >
            Perché se entri in palestra utilizzando FITTERS, il costo per l’ingresso è più basso.
        </ui-icon>
        <ui-icon
            class="w-3/12"
            title="guadagno"
        >
            Perché se condividi il tuo abbonamento nei giorni in cui non vai in palestra, guadagni dagli ingressi degli altri utenti.
        </ui-icon>
    </div>
</div>
</template>

<script>
import UiIcon from '../components/UiIcon.vue'
export default {
    name: 'ChiSiamo',
    components: {
        UiIcon,
    },
}
</script>
