import {productService} from "../services";
import consoleLogger from "logger";

const state = {
    all: {},
    colors: []
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
        return new Promise(function (resolve, reject) {
            commit('getProductByIdRequest');
            productService.getProductById(id)
                .then(
                    response => {
                        commit('getProductByIdSuccess', response.data)
                        resolve(response)
                    },
                    error => {
                        commit('getProductByIdFailure', error);
                        reject(error)
                    }
                )
        })
    },

    addProduct({commit}, product){
        return new Promise(function(resolve, reject){
            commit('addProductRequest');
            productService.addProduct(product)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })

    },
    updateProduct({commit}, product){
        return new Promise(function(resolve, reject){
            commit('updateProductRequest');
            productService.updateProduct(product)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    removeProduct({commit}, id){
        productService.removeProduct(id)
            .then(() => {
                commit('removeProductSuccess', id)
            })
            .catch(error => {
                consoleLogger.error(error)
            })
    }
};

const mutations = {
    getAllProductsRequest(state){
        state.all = { loading: true };
    },
    getAllProductsSuccess(state, response){
        state.all =  response.data
        state.colors = [...new Set(response.data.map(item => item.color))];
        state.sizes = [...new Set(response.data.map(item => item.size))];
    },
    getAllProductsFailure(state, error) {
        state.all = { error };
    },
    getProductByIdRequest(){
        
    },
    getProductByIdSuccess(state, product){
        state.active = product;
    },
    getProductByIdFailure(state, error) {
        state.all = { error };
    },
    addProductRequest(){

    },
    updateProductRequest(){

    },
    removeProductSuccess(state, id) {
        state.all = state.all.filter(function(product){
            return product.id !== id;
        });
    }
};

export const product = {
    namespaced: true,
    state,
    actions,
    mutations
};
