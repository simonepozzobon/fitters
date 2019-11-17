<template>
<h2
    class="text-gr-orange font-black uppercase text-3xl italic mt-4"
    v-if="title"
>
    {{ title }}
</h2>
<h2
    class="text-gr-orange font-black uppercase text-3xl italic mt-4"
    v-else
>
    <slot></slot>
</h2>
</template>

<script>
export default {
    name: 'UiTitle',
    props: {
        title: {
            type: String,
            default: null,
        },
    },
}
</script>
