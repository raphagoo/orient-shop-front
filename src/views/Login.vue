<template>
    <div class="container">
        <Header/>
        <div class="container md-layout">
            <div class="md-layout-item marocaineBg">
                <img src="assets/caftan-rouge.jpg" />
            </div>
            <div class="md-layout-item">
                <div class="login-form">
                    <H1 class="titre">Vous connecter</H1>
                    <form @submit.prevent="submit" class="box">
                        <div class="field">
                            <label class="label" for="email">Veuillez reinseigner votre adresse mail : </label>
                            <div class="control">
                                <input type="text"  placeholder="Email :" class="input" id="email" v-model="email" required>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="password" id="password">Veuillez reinseigner votre mot de passe</label>
                            <div class="control">
                                <input type="password"  placeholder="Mot de passe :" class="input" v-model="password" required>
                            </div>
                        </div>

                        <div class="field">
                            <input type="submit" class="buttonCo" value="Connexion" />
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item check-box">
                                <md-checkbox v-model="boolean" >Se souvenir de moi</md-checkbox>
                            </div>
                            <div class="md-layout-item forget-password">
                                <md-button class="forget-pass" style="float: right;"> Mot de passe oublié ?</md-button>
                            </div>
                        </div>
                        <hr>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item login-span">
                                <span>Où</span>
                            </div>
                            <div class="md-layout-item login-span">
                                <span>Où</span> <br>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item login-span2">
                                <span>Connectez vous via</span>
                            </div>
                            <div class="md-layout-item login-span2">
                                <span>Vous n'avez pas encore de compte</span>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item login-span2">
                                <div class="md-layout-item ">
                                    <md-icon style="color: #8b3b1c;">facebook</md-icon>
                                    <md-icon style="color: #8b3b1c;">instagram</md-icon>
                                </div>
                            </div>
                            <div class="md-layout-item login-span2">
                                <router-link to="/register"><md-button class="buttonCo" value="Inscription">Inscription</md-button></router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import { mapState, mapActions } from 'vuex'

export default {
    name: "Login",
    components: {Footer, Header},
    data () {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('user', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('user', ['login', 'logout']),
        submit () {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
            this.$router.push('/shop');
        }
    }
};

</script>

<style lang="scss" scoped>

.marocaineBg {
    background: url("../../assets/caftan-rouge.jpg") no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.buttonCo {
    background-color: #8b3b1c;
    width: 100%;
    height: 45px;
    color: white  !important;
     border-radius: 10px;
}
.md-layout {
    background-color: white;

}
.login-form  {
    margin: 80px 110px;
    background-color:#FFFFFF;
 }
 .input{
    margin-bottom: 50px;
     margin-top: 10px;
    width: 100%;
     border-radius: 10px;
     height: 3rem;
     border: 1.7px solid #ccc6c6;
     padding-left: 24px;

 }
 .input::placeholder {
    text-align: left;
    font-weight: bold;
    color: black;
}
 .titre {

     color: #8b3b1c ;
     font-family: Fondamento, serif;
     margin-bottom: 50px;
 }
 .label {
     margin-bottom: 50px;
 }
.check-box {
    padding-top: 30px;
}
.forget-password {
    padding-top: 30px;

}
.login-span {
    margin: 10px 20px 20px;
    text-align: center;
}
.login-span2 {
    text-align: center;
    font-size: x-small;
}

.container {
    min-height: 900px !important;
}



</style>
