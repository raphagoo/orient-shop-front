
import {userService} from '../services';

import { router } from '../router';

const userLocal = JSON.parse(localStorage.getItem('user'));
const state = userLocal
    ? { status: { loggedIn: true }, userLocal }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { email, password }) {
        let user = userService.login(email, password);

        if(user) {
            commit('loginSuccess', user);
            router.push('/shop')
        } else {
            commit('loginFailure', user);
            dispatch('alert/error', "error", { root: true });
        }
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {

                    if(user){
                        router.push('/login');
                        setTimeout(() => {
                            dispatch('alert/success', 'Registration successful', { root: true });
                        })
                    } else {
                        dispatch('alert/error', "ezrez", { root: true });
                    }
                },
            );
    }
};

const mutations = {
    loginSuccess(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
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
