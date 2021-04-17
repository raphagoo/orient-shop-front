import {cartService} from "../services";

const state = {

};

const actions = {
    addToCart({commit}, id){
        cartService.addToCart(id)
            .then(response => {
                commit('addToCartSuccess', response.data)
            })
    }
};

const mutations = {
    addToCartSuccess(state, data){
        state = { data };
    },
};

export const cart = {
    namespaced: true,
    state,
    actions,
    mutations
};
