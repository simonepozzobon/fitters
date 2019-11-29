import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import checkView from 'vue-check-view'
Vue.use(checkView)

const baseURL = process.env.VUE_APP_API_URL
console.log(baseURL);

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
    baseURL: baseURL
})

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
