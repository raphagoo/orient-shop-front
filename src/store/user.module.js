
import {userService} from '../services';

import { router } from '../router';

const userLocal = JSON.parse(localStorage.getItem('user'));
const state = userLocal
    ? { status: { loggedIn: true }, userLocal }
    : { status: {}, user: null };

const actions = {
    login({ commit }, { email, password }) {
            userService.login(email, password)
            .then(response => {
                if (response.data.jwt) {
                    commit('loginSuccess', response);
                    // Stocké les détails de l'utilsiateur dont son token dans le localStorage afin de laisser l'utilisateur connecté.
                    router.push('/shop')
                } else {
                    return false;
                }

            })
            .catch(error => {
                console.log(error.response)
            })
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
    register({ commit }, user) {
        commit('registerRequest', user);
        return new Promise(function(resolve, reject) {
            userService.register(user)
                .then(response => {
                    console.log(response)
                    resolve(response)
                })
                .catch(error => {
                    console.log(error.response)
                    reject(error.response)
                })
        })
    }
};

const mutations = {
    loginSuccess(state, response) {
        state.status = { loggingIn: true };
        localStorage.setItem('user', JSON.stringify(response.data.jwt));
        state.user = response.data.user;
    },

    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, user) {
        console.log(user);
        state.status = { registering: true };
    },
};

export const user = {
    namespaced: true,
    state,
    actions,
    mutations
};
