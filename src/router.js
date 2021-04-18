import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Welcome from "./views/Welcome.vue";
import Product from "./views/Product.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import PayementMenu from "./views/PaymentMenu.vue";
import FavoriMenu from "./views/FavoriMenu.vue";
import CommandeMenu from "./views/CommandeMenu.vue";
import About from "./views/About.vue";
import ProfilMenu from "./views/ProfilMenu.vue";
import Products from "./views/Products.vue";
import HomeAdmin from "./views/admin/HomeAdmin.vue"
import AddProduct from "./views/admin/AddProduct.vue";
import ListProduct from "./views/admin/ListProduct.vue";
import EditProduct from "./views/admin/EditProduct.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/profil',
            name: 'profil',
            component: ProfilMenu
        },
        {
            path: '/payment',
            name: 'Payement',
            component: PayementMenu
        },
        {
            path: '/favori',
            name: 'favori',
            component: FavoriMenu
        },
        {
            path: '/commande',
            name: 'commande',
            component: CommandeMenu
        },

        {
            path: '/shop',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/admin',
            name: 'adminHome',
            component: HomeAdmin
        },
        {
            path: '/admin/addProduct',
            name: 'addProduct',
            component: AddProduct
        },
        {
            path: '/admin/listProduct',
            name: 'listProduct',
            component: ListProduct
        },
        {
            path: '/admin/editProduct/:productId',
            name: 'editProduct',
            component: EditProduct
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
})

//router.beforeEach((to, from, next) => {

    // redirect to login page if not logged in and trying to access a restricted page
    //const publicPages = ['/login', '/register', '/', '/shop', '/product', '/about', '/products'];
    //const authRequired = !publicPages.includes(to.path);
    //const loggedIn = sessionStorage.getItem('token');

    //if (authRequired && !loggedIn) {
        //return next('/login');
    //}

    //next();
//});

