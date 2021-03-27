import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Welcome from "./views/Welcome.vue";
import Product from "./views/Product.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import About from "./views/About.vue";
import Products from "./views/Products.vue";
import HomeAdmin from "./views/admin/HomeAdmin.vue"

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
            path: '/shop',
            name: 'home',
            component: Home
        },
        {
            path: '/product',
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
            path: '*',
            redirect: '/',
        },
    ]
})

router.beforeEach((to, from, next) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register', '/', '/shop', '/product', '/about', '/products', '/admin'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = sessionStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});

