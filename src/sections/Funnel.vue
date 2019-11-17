<template>
<div class="py-8 px-12 bg-light flex flex-col justify-center items-center">
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

    <div>
        checkboxes
    </div>

    <div class="mt-4">
        <ui-button
            title="Iscriviti"
            class="text-2xl"
        />
    </div>
</div>
</template>

<script>
import UiButton from '../components/UiButton.vue'
import UiInput from '../components/UiInput.vue'
import UiTitle from '../components/UiTitle.vue'

export default {
    name: 'ChiSiamo',
    components: {
        UiButton,
        UiInput,
        UiTitle,
    },
}
</script>
