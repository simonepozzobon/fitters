<template>
<div
    ref="menu"
    class="flex flex-row items-center py-8 px-8 md:px-12 fixed w-full smooth"
>
    <div class="text-white">
        <svg
            class="h-8"
            viewBox="0 0 512 86"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <path
                class="fill-current"
                d="M480.96614,33.7408511 C469.680068,29.2733686 467.211595,28.0959219 467.211595,24.8058861 C467.211595,22.1443265 469.456694,19.9560173 473.23891,19.2139609 C472.004673,18.0137982 467.790853,15.9958591 465.829704,15.5528968 C465.829704,15.5528968 486.584568,16.1662292 497.893356,27.9823418 L512,12.2250009 C504.125116,4.70221466 492.721677,0 478.262935,0 C458.159264,0 443.344637,11.6381706 443.344637,27.9823418 C443.344637,40.0899767 451.692772,45.7311199 464.743121,50.6680667 C476.263926,55.1355492 478.497667,56.7824602 478.497667,59.958916 C478.497667,62.9990757 475.945902,65.1003069 472.114467,65.7969313 C471.713151,65.8688653 471.292905,65.9256553 470.865087,65.9673014 C472.939816,67.140962 477.407298,68.6970089 477.407298,68.6970089 C477.407298,68.6970089 459.325352,71.7712427 443.814101,54.9008171 L429.120627,70.0675417 C437.938226,79.5893371 451.223308,85.1169002 467.328961,85.1169002 C487.78473,85.1169002 502.360839,73.5960957 502.360839,56.6688801 C502.360839,44.3227271 493.664392,38.5604318 480.96614,33.7408511 L480.96614,33.7408511 Z M394.198543,40.9115392 C404.428321,40.9115392 411.129545,36.5652087 411.129545,29.5081007 C411.129545,27.2743594 410.421562,25.5138685 409.01317,23.9843236 C407.131527,22.1026805 403.720339,21.159966 398.900758,21.159966 L386.554605,21.159966 L381.148194,40.9115392 L394.198543,40.9115392 L394.198543,40.9115392 Z M434.640618,26.8048952 C434.640618,40.559441 426.765734,51.3760491 409.952098,55.9608977 L422.650349,83.7047214 L397.492365,83.7047214 L386.554605,58.7814693 L376.445979,58.7814693 L364.826739,58.7814693 L375.359397,62.8438496 L369.744755,83.7047214 L346.820512,83.7047214 L368.923193,1.4121788 L399.957053,1.4121788 C413.715384,1.4121788 422.767715,4.46748253 428.291493,9.99125966 C432.641609,14.3413761 434.640618,20.2210375 434.640618,26.8048952 L434.640618,26.8048952 Z M281.712634,33.2713868 L276.881695,51.254897 L338.70711,51.254897 L343.526691,33.2713868 L281.712634,33.2713868 Z M290.272784,1.4121788 L285.063245,20.8116538 L350.935897,20.8116538 L356.224942,1.4121788 L290.272784,1.4121788 Z M334.712878,83.7047214 L339.880771,64.3090324 L273.375857,64.3090324 L268.166318,83.7047214 L334.712878,83.7047214 Z M275.810256,21.3946981 L281.095515,1.4121788 L209.03275,1.4121788 L203.626339,21.3946981 L228.314859,21.3946981 L211.50501,83.7047214 L234.425467,83.7047214 L250.035154,25.4570784 L239.502496,21.3946981 L251.121736,21.3946981 L275.810256,21.3946981 Z M131.559789,1.4121788 L126.149591,21.3946981 L150.838111,21.3946981 L134.028262,83.7047214 L156.952505,83.7047214 L172.565978,25.4532924 L162.025748,21.3946981 L173.644988,21.3946981 L198.333508,21.3946981 L203.626339,1.4121788 L131.559789,1.4121788 Z M77.2420158,83.7047214 L100.048893,83.7047214 L122.151573,1.4121788 L99.3446963,1.4121788 L77.2420158,83.7047214 Z M87.9374718,1.4121788 L22.1026805,1.4121788 L16.7341295,21.3946981 L82.5348467,21.3946981 L87.9374718,1.4121788 Z M60.008134,35.387762 L74.6561763,35.387762 L69.6018634,54.3177728 L30.8066994,54.3177728 L19.1874589,54.3177728 L29.7201168,58.3725811 L22.928029,83.7085074 L0,83.7085074 L12.9822014,35.387762 L35.8610123,35.387762 L60.008134,35.387762 Z"
            ></path>
        </svg>
    </div>

    <div class="text-white ml-auto font-bold text-sm hidden lg:block">
        <ul class="flex menu items-center">
            <li
                id="menu-chi-siamo"
                class="mr-6"
            >
                <a
                    href="#"
                    @click.prevent.stop="goTo('chi-siamo')"
                >
                    Chi siamo
                </a>
            </li>
            <li
                id="menu-come-funziona"
                class="mr-6"
            >
                <a
                    href="#"
                    @click.prevent.stop="goTo('come-funziona')"
                >
                    Come Funziona
                </a>
            </li>
            <li
                id="menu-iscriviti"
                class="mr-6 border border-orange hover:border-transparent"
            >
                <a
                    href="#"
                    @click.prevent.stop="goTo('iscriviti')"
                >
                    Iscriviti
                </a>
            </li>
            <li id="menu-contattaci">
                <a
                    href="#"
                    @click.prevent.stop="goTo('contattaci')"
                >
                    Contattaci
                </a>
            </li>
        </ul>
    </div>
    <div
        class="text-white ml-auto cursor-pointer lg:hidden"
        @click="$emit('menu-toggle')"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65.34 61.06"
            class="h-8"
        >
            <path
                class="fill-current"
                d="M3.87,46.67H53.21L49.37,61.06H0ZM65.34,0H16.4L12.53,14.39H61.41ZM6.47,37H52.34l3.57-13.35H10.05Z"
            />
        </svg>

    </div>
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
    name: 'NavBar',
    computed: {
        backgroundColor: function () {
            return `gr-dark`
        },
    },
    watch: {
        '$root.current': function () {
            this.setActive()
        }
    },
    methods: {
        setActive: function () {
            let previous = document.getElementsByClassName('menu-active')
            for (let i = 0; i < previous.length; i++) {
                previous[i].classList.remove('menu-active')
            }

            let current = document.getElementById(`menu-${this.$root.current}`)
            if (current) {
                current.classList.add('menu-active')
            }
        },
        setBg: function () {
            let y = document.documentElement.scrollTop || document.body.scrollTop;
            if (y > 109) {
                this.$refs.menu.classList.add('smooth-bg')
            }
            else {
                this.$refs.menu.classList.remove('smooth-bg')
            }
        },
        goTo: function (name) {
            gsap.to(window, {
                duration: .4,
                scrollTo: {
                    y: `#${name}`,
                    offsetY: 109,
                }
            })
        }
    },
    mounted: function () {
        this.setBg()
        window.onscroll = () => {
            this.setBg()
        }
    },
}
</script>

<style lang="scss">
.menu {
    transition: all 0.2s ease-in-out;

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

    .menu-active {
        @apply bg-light rounded-full px-6 py-3;

        > a {
            @apply text-orange;
        }
    }
}

.smooth {
    transition: all 0.2s ease-in-out;
    z-index: 3;

    > div {
        z-index: 2;
    }

    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        @apply gr-dark shadow-lg;

        transition: all 0.2s ease-in-out;
    }

    &.smooth-bg:after {
        opacity: 1;
    }
}
</style>
