import {productService} from "../services";
import consoleLogger from "logger";

const state = {
    all: {}
};

const actions = {
    getAllProducts({commit}){
        commit('getAllProductsRequest');
        productService.getAllProducts()
            .then(
                response => {
                    commit('getAllProductsSuccess', response);
                },
                error => {
                    consoleLogger.error(error)
                    commit('getAllProductsFailure', error);
                }
            )
    },

    getProductById({commit}, id){
        commit('getProductByIdRequest');
        productService.getProductById(id)
            .then(
                product => {
                    commit('getProductByIdSuccess', product)
                },
                error => {
                    commit('getProductByIdFailure', error);
                }
            )
    }
};

const mutations = {
    getAllProductsRequest(state){
        state.all = { loading: true };
    },
    getAllProductsSuccess(state, response){
        state.all =  response.data
    },
    getAllProductsFailure(state, error) {
        state.all = { error };
    },
    getProductByIdRequest(state){
        state.all = { loading: true };
    },
    getProductByIdSuccess(state, product){
        state.all = { items: product.message };
    },
    getProductByIdFailure(state, error) {
        state.all = { error };
    }
};

export const product = {
    namespaced: true,
    state,
    actions,
    mutations
};
