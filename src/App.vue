<template>
<div
    id="app"
    class="antialiased min-h-screen"
>
    <nav-bar />
    <main-header />
    <call-to-action />
    <chi-siamo />
</div>
</template>

<script>
import './assets/css/tailwind.css'
import CallToAction from './components/CallToAction.vue'
import ChiSiamo from './sections/ChiSiamo.vue'
import MainHeader from './sections/MainHeader.vue'
import NavBar from './components/NavBar.vue'

export default {
    name: 'app',
    components: {
        CallToAction,
        ChiSiamo,
        MainHeader,
        NavBar,
    }
}
</script>

<style lang="scss">
body {
    @apply bg-dark;
}
</style>
