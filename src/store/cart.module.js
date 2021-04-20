import {cartService} from "../services";
import consoleLogger from "logger";

const state = {
    all: []
};

const actions = {
    getCart({commit}, id){
        cartService.getCart(id)
            .then(response => {
                commit('getCartSuccess', response.data)
            })
    },
    addToCart({commit}, cart){
        return new Promise(function (resolve, reject) {
        cartService.addToCart(cart)
            .then(response => {
                commit('addToCartSuccess')
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    removeFromCart({commit}, cartInfos){
        cartService.removeFromCart(cartInfos)
            .then(() => {
                commit('removeFromCartSuccess', cartInfos.product_id)
            })
            .catch(error => {
                consoleLogger.error(error)
            })
    }
};

const mutations = {
    addToCartSuccess(){

    },
    getCartSuccess(state, data){
        data.forEach(product => {
            product.picture = "assets/" + product.picture
        })
        state.all = data
    },
    removeFromCartSuccess(state, id){
        state.all = state.all.filter(function( obj ) {
            return obj.id !== id;
        });
    }
};

export const cart = {
    namespaced: true,
    state,
    actions,
    mutations
};
