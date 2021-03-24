<template>
    <div class="container">
        <Header/>
        <div class="background-register">
            <form class="box">
                        
            </form>   
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: "Register",
    components: {Footer, Header},
    
    

}

</script>

<style lang="scss" scoped>

.background-register {
    background-image: url("../assets/Caftan-or.jpg");
}



 
</style>
