
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
    register({  commit }, user) {
        commit('registerRequest', user);
        let register = userService.register(user);
        if(register) {
            router.push('login');
        }
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
