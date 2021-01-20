import api from '../interfaces/apiInterface';
import {authHeader} from "../helpers/auth-header";

export const productService = {
    getAllProducts,
    getProductById
};

function getAllProducts() {
    return api.get(`/product`, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })

}
function getProductById() {

}
