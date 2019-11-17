<template>
<div class="pt-8 pb-24 px-12">
    <ui-title title="Contattaci" />
    <p class="text-white leading-normal mt-6 font-bold">
        Hai domande o suggerimenti?<br>
    </p>
    <div class="flex flex-col w-full justify-center items-center">
        <div class="flex flex-row w-6/12 mt-12">
            <div class="w-6/12 mr-6">
                <ui-input
                    name="name"
                    placeholder="Nome"
                    color="white"
                />
            </div>
            <div class="w-6/12 ml-6">
                <ui-input
                    name="surname"
                    placeholder="Cognome"
                    color="white"
                />
            </div>
        </div>
        <div class="flex w-6/12 mt-8">
            <div class="w-full">
                <ui-input
                    type="email"
                    name="email"
                    placeholder="Email"
                    color="white"
                />
            </div>
        </div>
        <div class="flex w-6/12 mt-8">
            <div class="w-full">
                <ui-input
                    name="subject"
                    placeholder="Oggetto"
                    color="white"
                />
            </div>
        </div>
        <div class="flex w-6/12 mt-8">
            <div class="w-full">
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
}
</script>
