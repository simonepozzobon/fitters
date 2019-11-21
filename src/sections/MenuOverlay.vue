<template>
<div
    ref="menu"
    class="fixed overflow-hidden w-full gr-dark flex justify-center items-center menu-mobile"
>
    <ul class="py-24 text-white font-bold flex flex-col justify-around h-full text-center">
        <li class="">
            <a
                href="#"
                @click.prevent.stop="goTo('chi-siamo')"
            >
                Chi siamo
            </a>
        </li>
        <li class="">
            <a
                href="#"
                @click.prevent.stop="goTo('come-funziona')"
            >
                Come funziona
            </a>
        </li>
        <li class="border border-orange hover:border-transparent">
            <a
                href="#"
                @click.prevent.stop="goTo('iscriviti')"
            >
                Iscriviti
            </a>
        </li>
        <li class="">
            <a
                href="#"
                @click.prevent.stop="goTo('contattaci')"
            >
                Contattaci
            </a>
        </li>
    </ul>
</div>
</template>

<script>
import {
    gsap,
    ScrollToPlugin,
}
from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

export default {
    name: 'MenuOverlay',
    data: function () {
        return {
            master: null,
            isOpen: false,
        }
    },
    methods: {
        init: function () {
            let menu = this.$refs.menu

            this.master = gsap.timeline({
                paused: true,
                yoyo: true
            })

            this.master.fromTo(menu, {
                autoAlpha: 0,
                height: 0,
            }, {
                duration: .2,
                autoAlpha: 1,
                height: '100%',
                ease: 'power4.easeInOut',
                immediateRender: false,
                onStart: () => {
                    // eslint-disable-next-line no-console
                    console.log('starting');
                },
                onUpdate: () => {
                    // eslint-disable-next-line no-console
                    console.log('progress');
                }
            })

            this.master.progress(1).progress(0)
        },
        toggle: function () {
            if (this.master) {
                if (this.isOpen) {
                    this.master.reverse()
                    this.isOpen = false
                }
                else {
                    this.master.play()
                    this.isOpen = true
                }
            }
        },
        goTo: function (name) {
            this.master.eventCallback('onReverseComplete', () => {
                gsap.to(window, {
                    duration: .4,
                    scrollTo: {
                        y: `#${name}`,
                        offsetY: 109,
                    },
                    onComplete: () => {
                        this.master.eventCallback('onReverseComplete', null)
                    }
                })
            })

            this.toggle()
        }
    },
    mounted: function () {
        this.$nextTick(() => {
            this.init()
        })
    },
}
</script>

<style lang="scss">
.menu-mobile {
    li {
        @apply rounded-full px-6 py-3;

        &:hover {
            @apply bg-light rounded-full px-6 py-3;
            transition: all 0.2s ease-in-out;

            > a {
                @apply text-orange;
                transition: all 0.2s ease-in-out;
            }
        }
    }
}
</style>