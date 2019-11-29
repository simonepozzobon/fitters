<template>
<input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="border border-orange-500 focus:border-orange-400 rounded-full bg-transparent px-4 py-2 custom-placeholder w-full outline-none"
    :class="colorClass"
    v-model="value"
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
        color: {
            type: String,
            default: 'dark',
        },
    },
    data: function () {
        return {
            value: null,
        }
    },
    watch: {
        value: function (value) {
            this.$emit('update', value)
        },
    },
    computed: {
        colorClass: function () {
            return `placeholder-${this.color} text-${this.color}`
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
