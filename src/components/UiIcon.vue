<template>
<div class="flex flex-col items-center">
    <div class="rounded-full border-2 border-orange-500 w-28 h-28 flex justify-center items-center">
        <slot name="icon"></slot>
    </div>
    <div class="mt-4 uppercase text-orange-500 font-bold italic">
        {{ title }}
    </div>
    <div class="text-dark font-bold text-center">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'UiIcon',
    props: {
        title: {
            type: String,
            default: null,
        },
    },
}
</script>
