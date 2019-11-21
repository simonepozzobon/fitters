import Vue from 'vue'
import App from './App.vue'
import router from './router'

import checkView from 'vue-check-view'
Vue.use(checkView)

Vue.config.productionTip = false

new Vue({
    router,
    data: function () {
        return {
            current: null,
            size: 0,
        }
    },
    methods: {
        getSize: function () {
            this.size = window.innerWidth
        },
    },
    mounted: function () {
        window.addEventListener('resize', () => {
            this.getSize()
        })
        this.getSize()
    },
    render: h => h(App)
}).$mount('#app')
