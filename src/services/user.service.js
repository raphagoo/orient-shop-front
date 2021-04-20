//import api from '../interfaces/apiInterface';

import api from "../interfaces/apiInterface";

export const userService = {
    login,
    logout,
    register,
};


function login(email, password) {
    const data = {
        email: email,
        password: password,
    }

    return api.post(`/api/login`, data, {
        headers: {'Accept': 'application/json'},
    })
}

function logout() {
    // Supprimer la clé "user" du localStorage pour déconnecté l'utilisateur
    localStorage.removeItem('user');
    return {success: true};
}

function register(user) {
    return api.post(`/user/add`, user, {
        headers: {'Accept': 'application/json'},
    })
}

