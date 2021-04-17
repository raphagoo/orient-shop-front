import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import { product } from './product.module'
import { cart } from "./cart.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        product,
        cart
    },
    plugins: [createPersistedState()]
});
