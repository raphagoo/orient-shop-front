import api from '../interfaces/apiInterface';
import {authHeader} from "../helpers/auth-header";

export const productService = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct
};

function getAllProducts() {
    return api.get(`/product`, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })

}
function addProduct(product) {
    return api.post(`/product/add`, product, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}
function updateProduct(product) {
    return api.put(`/product/update`, product, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}
function removeProduct(id) {
    return api.delete(`/product/delete/`+ id, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}
function getProductById(id) {
    return api.get(`/product/oneproduct/` + id, {
        headers: {...authHeader(), 'Accept': 'application/json'},
    })
}
