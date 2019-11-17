<template>
<div
    id="iscriviti"
    class="pt-8 pb-24 px-12 gr-light flex flex-col justify-center items-center"
    v-view="viewHandler"
>
    <ui-title class="text-5xl leading-none text-center">
        Vuoi prendere parte anche tu alla rivoluzione del fitness?
    </ui-title>
    <div class="flex flex-row w-6/12 mt-12">
        <div class="w-6/12 mr-6">
            <ui-input
                name="name"
                placeholder="Nome"
            />
        </div>
        <div class="w-6/12 ml-6">
            <ui-input
                name="surname"
                placeholder="Cognome"
            />
        </div>
    </div>
    <div class="flex w-6/12 mt-8">
        <div class="w-full">
            <ui-input
                type="email"
                name="email"
                placeholder="Email"
            />
        </div>
    </div>

    <div class="mt-8">
        <ui-checkbox label="Ho un abbonamento in palestra" />
        <ui-checkbox
            label="Non ho un abbonamento in palestra"
            class="mt-8"
        />
    </div>

    <div class="mt-12">
        <ui-button
            title="Iscriviti"
            size="lg"
        />
    </div>
</div>
</template>

<script>
import UiButton from '../components/UiButton.vue'
import UiCheckbox from '../components/UiCheckbox.vue'
import UiInput from '../components/UiInput.vue'
import UiTitle from '../components/UiTitle.vue'

export default {
    name: 'ChiSiamo',
    components: {
        UiButton,
        UiCheckbox,
        UiInput,
        UiTitle,
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'iscriviti'
            }
        }
    },
}
</script>
