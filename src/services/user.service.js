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
        firstname: 'Safae',
        lastname: 'Enaim',
        address: '21 Rue de la république, 13003, Marseille',
        phone: '+33 6 62 25 38 83',
    }

    if (data) {
        // Stocké les détails de l'utilsiateur dont son token dans le localStorage afin de laisser l'utilisateur connecté.
        localStorage.setItem('user', JSON.stringify(data));
        return data;
    } else {
        return false;
    }

    // const data = {
    //     email: email,
    //     password: password,
    // };
    // api.post(`/user/login`, data, {
    //     headers: {'Content-Type': 'application/json'},
    // }).then(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user) {
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
    return true;
    // api.post(`/user/add`, user, {
    //     headers: {'Content-Type': 'application/json'},
    // }).then(response => {
    //     if (response.status == 201) {
    //         return user;
    //     } else {
    //         return false;
    //     }
    // }).catch(error => console.log(error));
}

