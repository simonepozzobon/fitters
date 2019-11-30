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
                    :content.sync="name"
                />
            </div>
            <div class="w-full mt-8 lg:mt-0 lg:w-6/12 lg:ml-6">
                <ui-input
                    name="surname"
                    placeholder="Cognome"
                    color="white"
                    :content.sync="surname"
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
                    :content.sync="email"
                />
            </div>
            <div class="w-full mt-8">
                <ui-input
                    name="subject"
                    placeholder="Oggetto"
                    color="white"
                    :content.sync="subject"
                />
            </div>
            <div class="w-full mt-8">
                <ui-text-area
                    name="message"
                    placeholder="Messaggio"
                    color="white"
                    :content.sync="message"
                />
            </div>
        </div>
        <transition name="fade">
            <div
                v-if="serviceMessage"
                class="relative overflow-hidden"
            >
                <div class="mt-12 text-4xl font-bold text-gr-orange text-center">
                    {{ this.serviceMessage }}
                </div>
            </div>
        </transition>
        <div class="mt-12">
            <ui-button
                title="Invia"
                size="lg"
                :loader="loader"
                @click="send"
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
    data: function () {
        return {
            loader: false,
            name: null,
            surname: null,
            email: null,
            subject: null,
            message: null,
            serviceMessage: null,
        }
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'contattaci'
            }
        },
        update: function (value, key) {
            this[key] = value
        },
        send: function () {
            this.loader = true
            this.serviceMessage = null

            let data = new FormData()
            data.append('name', this.name)
            data.append('surname', this.surname)
            data.append('subject', this.subject)
            data.append('email', this.email)
            data.append('message', this.message)

            this.$http.post('/send-mail', data).then(response => {
                console.log(response);
                if (response.data.success) {
                    this.serviceMessage = 'Grazie, ti risponderemo al più presto'
                    setTimeout(() => {
                        this.loader = false
                    }, 250)

                    setTimeout(() => {
                        this.name = null
                        this.surname = null
                        this.subject = null
                        this.email = null
                        this.message = null
                    }, 500)
                }
                else {
                    this.serviceMessage = 'Si è verificato un errore, prova ad inviare di nuovo'
                    setTimeout(() => {
                        this.loader = false
                    }, 250)
                }
            }).catch(() => {
                this.serviceMessage = 'Si è verificato un errore, prova ad inviare di nuovo'
                setTimeout(() => {
                    this.loader = false
                }, 250)
            })

            setTimeout(() => {
                this.serviceMessage = null
            }, 5000)
        },
    },
}
</script>
