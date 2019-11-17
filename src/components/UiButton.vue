<template>
<a
    href="#"
    class="gr-orange px-6 py-3 rounded-full text-white font-semibold tracking-wide"
>
    {{ title }}
</a>
</template>

<script>
export default {
    name: 'UiButton',
    props: {
        title: {
            type: String,
            default: null,
        },
    },
}
</script>
