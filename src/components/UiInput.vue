<template>
<input
    :type="type"
    :name="name"
    class="border border-orange-500 focus:border-orange-400 rounded-full bg-transparent px-4 py-2 custom-placeholder w-full outline-none"
    :class="colorClass"
    :placeholder="placeholder"
    :value="content"
    @input="$emit('update:content', $event.target.value)"
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
        content: {
            type: String,
            default: null,
        },
    },
    data: function () {
        return {
            internalValue: null,
        }
    },
    // watch: {
    //     value: function (v) {
    //         this.internalValue = v
    //     },
    //     internalValue: function (value) {
    //         this.$emit('update:value', value)
    //     },
    // },
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
