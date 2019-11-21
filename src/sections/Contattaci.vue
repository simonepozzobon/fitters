<template>
<div
    id="contattaci"
    class="pt-8 pb-24 px-12"
    v-view="viewHandler"
>
    <ui-title
        title="Contattaci"
        class="text-center"
    />
    <p class="text-white leading-normal mt-6 font-bold text-center">
        Hai domande o suggerimenti?<br>
    </p>
    <div class="flex flex-col w-full justify-center items-center">
        <div class="flex flex-col w-full lg:flex-row lg:w-6/12 mt-12">
            <div class="w-full lg:w-6/12 lg:mr-6">
                <ui-input
                    name="name"
                    placeholder="Nome"
                    color="white"
                />
            </div>
            <div class="w-full mt-8 lg:mt-0 lg:w-6/12 lg:ml-6">
                <ui-input
                    name="surname"
                    placeholder="Cognome"
                    color="white"
                />
            </div>
        </div>
        <div class="flex flex-col w-full lg:w-6/12">
            <div class="w-full mt-8">
                <ui-input
                    type="email"
                    name="email"
                    placeholder="Email"
                    color="white"
                />
            </div>
            <div class="w-full mt-8">
                <ui-input
                    name="subject"
                    placeholder="Oggetto"
                    color="white"
                />
            </div>
            <div class="w-full mt-8">
                <ui-text-area
                    name="message"
                    placeholder="Messaggio"
                    color="white"
                />
            </div>
        </div>

        <div class="mt-12">
            <ui-button
                title="Invia"
                size="lg"
            />
        </div>
    </div>
</div>
</template>

<script>
import UiButton from '../components/UiButton.vue'
import UiInput from '../components/UiInput.vue'
import UiTitle from '../components/UiTitle.vue'
import UiTextArea from '../components/UiTextArea.vue'

export default {
    name: 'ChiSiamo',
    components: {
        UiButton,
        UiInput,
        UiTitle,
        UiTextArea,
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'contattaci'
            }
        }
    },
}
</script>
