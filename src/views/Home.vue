<template>
    <div class="container">
        <Header></Header>
        <p>Hello word</p>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: 'home',
    components: {
        Footer,
        Header
    },
    computed: {
        ...mapState({
            products: state => state.products
        })
    },
    created() {
        this.getAllProducts()
    },
    methods: {
        ...mapActions('product', {
            getAllProducts: 'getAllProducts'
        })
    }
}
</script>
