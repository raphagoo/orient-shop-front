import api from '../interfaces/apiInterface';
import {authHeader} from "../helpers/auth-header";

export const cartService = {
    addToCart
}

function addToCart(id) {
    return api.post(`/shoppingCart/add`, id, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}
