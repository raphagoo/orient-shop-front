import Vue from 'vue'
import logger from 'logger'

import App from './App.vue'
import config from 'config'
import { router } from './router'
import { store } from './store'
import api from './interfaces/apiInterface'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import 'vue-material-slider/dist/vue-material-slider.css';
import VueMaterialSlider from 'vue-material-slider';

Vue.use(VueMaterialSlider);
Vue.use(VueSnap)

// prevents from display notice about running in dev mode
Vue.config.productionTip = false
Vue.use(VueMaterial)
// make api and log available everywhere
Vue.prototype.$api = api
Vue.prototype.$log = logger

logger.info('config:', config);

let VERSION = "0.0.1"

logger.info('main.js VERSION', VERSION); // eslint-disable-line no-undef

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
