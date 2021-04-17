//import api from '../interfaces/apiInterface';

export const userService = {
    login,
    logout,
    register,
};


function login(email, password) {
    const data = {
        email: email,
        password: password,
        token: "zoerzmerezrlmzerz"
    }

    if (data.token) {
        // Stocké les détails de l'utilsiateur dont son token dans le localStorage afin de laisser l'utilisateur connecté.
        localStorage.setItem('user', JSON.stringify(data));
        return data;
    } else {
        return false;
    }

    // api.post(`/user/login`, data, {
    //     headers: {'Content-Type': 'application/json'},
    // }).then(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user.token) {
    //         // Stocké les détails de l'utilsiateur dont son token dans le localStorage afin de laisser l'utilisateur connecté.
    //         localStorage.setItem('user', JSON.stringify(user));
    //         return user;
    //     } else {
    //         return false;
    //     }
    // }).catch(error => console.log(error));
}

function logout() {
    // Supprimer la clé "user" du localStorage pour déconnecté l'utilisateur
    localStorage.removeItem('user');
    return {success: true};
}

function register(user) {
    console.log(user);
}

