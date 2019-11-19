<template>
<div
    id="app"
    class="antialiased min-h-screen w-full"
>
    <nav-bar />
    <main-header />
    <call-to-action />
    <chi-siamo />
    <vantaggi />
    <come-funziona />
    <funnel />
    <contattaci />
    <main-footer />
</div>
</template>

<script>
import './assets/css/tailwind.css'
import CallToAction from './components/CallToAction.vue'
import ChiSiamo from './sections/ChiSiamo.vue'
import ComeFunziona from './sections/ComeFunziona.vue'
import Contattaci from './sections/Contattaci.vue'
import Funnel from './sections/Funnel.vue'
import MainFooter from './components/MainFooter.vue'
import MainHeader from './sections/MainHeader.vue'
import NavBar from './components/NavBar.vue'
import Vantaggi from './sections/Vantaggi.vue'

export default {
    name: 'app',
    components: {
        CallToAction,
        ChiSiamo,
        ComeFunziona,
        Contattaci,
        Funnel,
        MainFooter,
        MainHeader,
        NavBar,
        Vantaggi,
    }
}
</script>

<style lang="scss">
body {
    @apply bg-dark;
}
</style>
