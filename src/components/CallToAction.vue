<template>
<div class="gr-light flex flex-col md:flex-row items-center w-full pt-8 pb-12 md:py-8 px-12">
    <div class="text-xl lg:text-3xl text-gr-orange font-bold italic">
        Vieni in palestra con noi.
    </div>
    <div class="mt-6 md:mt-0 md:ml-auto">
        <ui-button title="Iscriviti" />
    </div>
</div>
</template>

<script>
import UiButton from './UiButton.vue'
export default {
    name: 'CallToAction',
    components: {
        UiButton,
    },
}
</script>
