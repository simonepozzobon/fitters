<template>
<div
    class="relative gr-orange rounded-full cursor-pointer"
    :class="[sizeClass, loaderClass, visibleClass]"
    @click.prevent.stop="$emit('click')"
>
    <a
        href="#"
        class="relative block inset-auto text-white font-semibold"
        :class="btnClass"
        @click.prevent.stop="$emit('click')"
    >
        <span>
            {{ title }}
        </span>
    </a>
    <div
        class="relative w-8 h-8 inset-auto spinner"
        :class="spinnerClass"
    >
        <span class="absolute spinner__first block border-white border-2 w-8 h-8 inset-auto rounded-full"></span>
        <span class="absolute spinner__second block border-white border-2 w-8 h-8 inset-auto rounded-full"></span>
        <span class="absolute spinner__third block border-white border-2 w-8 h-8 inset-auto rounded-full"></span>
    </div>
</div>
</template>

<script>
export default {
    name: 'UiButton',
    props: {
        title: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null,
        },
        loader: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        btnClass: function () {
            if (this.loader) {
                return 'btn--hidden'
            }

            return 'btn--visible'
        },
        spinnerClass: function () {
            if (this.loader == false) {
                return 'spinner--hidden'
            }

            return 'spinner--visible'
        },
        visibleClass: function () {
            if (this.loader) {
                return 'loader--visible'
            }

            return 'loader--hidden'
        },
        loaderClass: function () {
            if (this.loader) {
                return `min-w-8 min-h-8`
            }
            else {
                return ''
            }
        },
        sizeClass: function () {
            let x = 6,
                y = 3,
                text = 'base',
                tracking = 'wide'

            if (this.size == 'lg') {
                x = 10
                y = 4
                tracking = 'normal'
                text = 'xl'
            }

            if (this.loader) {
                return `text-${text} tracking-${tracking}`
            }

            return `px-${x} py-${y} text-${text} tracking-${tracking}`
        },
    },
}
</script>


<style lang="scss">
.loader--visible {
    @apply px-8 py-8;
    @apply min-w-8 min-h-8;
    transition: all 600ms ease;
    overflow: hidden;
}

.loader--hidden {
    @apply px-20 py-7;
    overflow: hidden;
    transition: all 600ms ease-in-out;
}

.btn--hidden {
    opacity: 0;
    position: absolute;
    // display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    transition: all 600ms ease-in-out;
}

.btn--visible {
    position: absolute;
    display: block;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    transition: all 300ms cubic-bezier(.38,.58, .77,.45) 200ms;
}

.spinner--hidden {
    position: absolute;
    // display: none;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    transition: all 300ms ease-in-out 100ms;
}

.spinner--visible {
    position: absolute;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    transition: all 300ms ease-in-out;
}

.spinner {
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);

    &__first {
        top: 50%;
        left: 50%;
        animation-name: crescendo;
        animation-delay: 0;
        animation-direction: alternate;
        animation-duration: 1298ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;

        transform-origin: center;
        transform: translate(-50%, -50%) scale(0.2);
        z-index: 3;
    }

    &__second {
        top: 50%;
        left: 50%;
        transform-origin: center;
        transform: translate(-50%, -50%) scale(.7);

        animation-name: crescendosec;
        animation-delay: 123ms;
        animation-direction: alternate;
        animation-duration: 1688ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        // animation: 1s alternate 0s infinite cubic-bezier(.77,.45, .38,.58);
        z-index: 2;
    }

    &__third {
        top: 50%;
        left: 50%;
        opacity: 0.2;
        transform-origin: center;
        transform: translate(-50%, -50%) scale(.1);

        animation-name: crescendoter;
        animation-delay: 283ms;
        animation-direction: alternate;
        animation-duration: 1600ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out;
        // animation: crescendoter 1s alternate 0s infinite cubic-bezier(.77,.45, .38,.58);
        z-index: 1;
    }
}

.padding-spinner {}

.spinner-sec {}

@keyframes crescendo {
    0% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(0.3);
        // background-color: transparent;
        animation-timing-function: ease-in-out;
    }
    65% {
        opacity: 0.7;
        transform: translate(-50%, -50%) scale(0.5);
        // background-color: white;
        animation-timing-function: ease-in-out;
    }
    100% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(0.7);
        // background-color: transparent;
        animation-timing-function: ease-in-out;
    }
}

@keyframes crescendosec {
    0% {
        opacity: 0.7;
        transform: translate(-50%, -50%) scale(0.7);
        // background-color: transparent;
        animation-timing-function: ease;
    }
    37% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1);
        // background-color: white;
        animation-timing-function: ease-in-out;
    }
    100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1.2);
        // background-color: transparent;
        animation-timing-function: ease-in;
    }
}

@keyframes crescendoter {
    0% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(0.1);
        // background-color: transparent;
        animation-timing-function: ease-in-out;
    }
    25% {
        opacity: 0.4;
        transform: translate(-50%, -50%) scale(0.7);
        // background-color: white;
        animation-timing-function: ease;
    }
    100% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(1);
        // background-color: transparent;
        animation-timing-function: ease-in;
    }
}

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
