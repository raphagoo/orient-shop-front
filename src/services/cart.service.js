import api from '../interfaces/apiInterface';
import {authHeader} from "../helpers/auth-header";

export const cartService = {
    addToCart,
    getCart,
    removeFromCart
}

function addToCart(cart) {
    return api.post(`/cart/add`, cart, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}

function getCart(id) {
    return api.get(`/cart/unique/`+id, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}

function removeFromCart(cartInfos) {
    return api.delete(`/cart/remove`, {
        headers: {...authHeader(), 'Accept': 'application/json'},
        data: {
            product_id: cartInfos.product_id,
            user_id: cartInfos.user_id
        }
    })
}
