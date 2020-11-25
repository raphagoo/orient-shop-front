<template>
    <div class="container">
        <Header></Header>
        <p>Hello word</p>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: 'home',
    components: {
        Footer,
        Header
    }
}
</script>
