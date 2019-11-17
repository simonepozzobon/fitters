<template>
<input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="border border-orange-500 rounded-full bg-transparent px-4 py-2 placeholder-dark custom-placeholder w-full"
>
</template>

<script>
export default {
    name: 'UiInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: null,
        },
    },
}
</script>

<style lang="scss">
.custom-placeholder::placeholder {
    @apply font-bold;
    @apply uppercase;
    @apply italic;
}
</style>
