<template>
<div class="text-white">
    <img
        :src="main"
        alt=""
        class="h-full"
    >
</div>
</template>

<script>
const main = require('../assets/images/main.svg')

export default {
    name: 'MainHeader',
    data: function () {
        return {
            main: main
        }
    },
}
</script>
