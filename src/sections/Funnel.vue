<template>
<div
    id="iscriviti"
    class="pt-8 pb-24 px-12 gr-light flex flex-col justify-center items-center"
    v-view="viewHandler"
>
    <div class="md:mt-12 lg:w-8/12">
        <ui-title class="text-4xl lg:text-5xl leading-none text-center">
            Vuoi prendere parte anche tu alla rivoluzione del fitness?
        </ui-title>
    </div>
    <div class="flex flex-col w-full mt-10 lg:flex-row lg:w-6/12 lg:mt-24">
        <div class="lg:w-6/12 lg:mr-6">
            <ui-input
                name="name"
                placeholder="Nome"
                @update="update($event, 'name')"
            />
        </div>
        <div class="mt-10 lg:mt-0 lg:w-6/12 lg:ml-6">
            <ui-input
                name="surname"
                placeholder="Cognome"
                @update="update($event, 'surname')"
            />
        </div>
    </div>
    <div class="flex w-full lg:w-6/12 mt-10">
        <div class="w-full">
            <ui-input
                type="email"
                name="email"
                placeholder="Email"
                @update="update($event, 'email')"
            />
        </div>
    </div>

    <div class="mt-12">
        <ui-checkbox
            ref="check1"
            label="Ho un abbonamento in palestra"
            @update="updateCheckbox($event, 'check1')"
        />
        <ui-checkbox
            ref="check2"
            label="Non ho un abbonamento in palestra"
            class="mt-8"
            @update="updateCheckbox($event, 'check2')"
        />
    </div>
    <transition name="fade">
        <div
            v-if="message"
            class="mt-12 text-4xl font-bold text-gr-orange text-center"
        >
            {{ this.message }}
            <transition name="fade">
                <div
                    v-if="hasLink"
                    class="text-dark text-base mt-4"
                >
                    Se il problema persiste ti preghiamo di provare a questo link:
                    <br>
                    <a
                        href="http://eepurl.com/gGxwzf"
                        target="_blank"
                        class="underline inline-block mt-1"
                    >
                        http://eepurl.com/gGxwzf
                    </a>
                </div>
            </transition>
        </div>
    </transition>
    <div class="mt-24">
        <ui-button
            title="Iscriviti"
            size="lg"
            @click="send"
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
    data: function () {
        return {
            checkbox: 1,
            name: null,
            surname: null,
            email: null,
            message: null,
            hasLink: false,
        }
    },
    methods: {
        viewHandler: function (e) {
            if (e.percentInView > 0.5) {
                this.$root.current = 'iscriviti'
            }
        },
        updateCheckbox: function (value, key) {
            if (key == 'check1') {
                this.$refs.check2.toggle(false, !value)
                this.checkbox = 0
            }
            else {
                this.$refs.check1.toggle(false, !value)
                this.checkbox = 1
            }
        },
        update: function (value, key) {
            this[key] = value
        },
        send: function () {
            this.hasLink = null
            this.message = null
            let data = new FormData()
            data.append('email', this.email)
            data.append('fields', JSON.stringify({
                ABBONAMENT: this.checkbox,
                NAME: this.name,
                SURNAME: this.surname
            }))

            this.$http.post('/newsletter', data).then(response => {
                let data = response.data
                if (data.success) {
                    this.message = 'Grazie, ora fai parte anche tu della rivoluzione'
                }
                else {
                    if (data.results.title == 'Member Exists') {
                        this.message = 'Attenzione: Questa mail è già nei nostri contatti!'
                    }
                    else {
                        this.hasLink = true
                        this.message = 'Si è verificato un errore, ti preghiamo di riprovare'
                    }
                }
            }).catch(() => {
                this.hasLink = true
                this.message = 'Si è verificato un errore, ti preghiamo di riprovare'
            })
        },
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
