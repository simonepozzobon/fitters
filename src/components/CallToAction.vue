<template>
<div class="gr-light flex flex-row items-center w-full py-8 px-12">
    <div>
        <span class="text-3xl text-gr-orange font-bold italic">
            Vieni in palestra con noi.
        </span>
    </div>
    <div class="ml-auto">
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
