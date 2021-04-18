<template>
    <div class="container">
        <Header/>
        <div class="background-register" >
            <div  style="padding: 10%;">
                <form  @submit.prevent="submit" class="box" style="background-color: white;">
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <label class="label">Votre Prenom </label>
                            <div class="control">
                                <input type="text"  placeholder="Exemple: Safae" class="input"  v-model="firstname" required>
                            </div>

                            <label class="label"> Nom de famille </label>
                            <div class="control">
                                <input type="text"  placeholder="Exemple: Enaim" class="input" v-model="lastname" required>
                            </div>

                            <label class="label">Adresse e-mail </label>
                            <div class="control">
                                <input type="email"  placeholder="Email :" class="input"  v-model="email" required>
                            </div>

                            <label class="label">Mot de passe</label>
                            <div class="control">
                                <input type="password"  placeholder="Mot de passe :" class="input" v-model="password" required>
                            </div>
                        </div>

                        <div class="md-layout-item">
                            <label class="label">Votre Adresse </label>
                            <div class="control">
                                <input type="text"  placeholder="ex.2 Rue du pasteur 13003 Marseille :" v-model="address" class="input" required>
                            </div>

                            <label class="label">Télephone mobile </label>
                            <div class="control">
                                <input type="phone"  placeholder="+33 6 68 01 54 76 :" class="input" v-model="phone" required>
                            </div>

                            <md-checkbox >Je désire étre informé des anno</md-checkbox> <br>
                            <md-checkbox >Boolean</md-checkbox>

                            <div class="field">
                                <input type="submit" class="button_registration" value="Enregistrer" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import {mapActions, mapState} from "vuex";
export default {
    name: "Register",
    components: {Footer, Header},
    data () {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
            phone: '',
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
        ...mapActions('user', ['login', 'logout', 'register']),
        submit () {
            this.submitted = true;
            const { firstname, lastname, email , password, address, phone} = this;
            if (firstname && lastname && email && password && address && phone) {
                this.register({  firstname, lastname, email , password, address, phone })
            }
            this.$router.push('/shop');
        }
    }
}

</script>

<style lang="scss" scoped>

.background-register {
    background: url("../assets/Caftan-or.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.md-layout-item {
    padding: 2rem;
}


.background-card {
    background-color:white;
    position:absolute;
    //top:40%;
    left:50%;
    width:1000px; /* A toi de donner la bonne largeur */
    height:600px; /* A toi de donner la bonne hauteur */
    margin-left:-500px; /* -largeur/2 */
    margin-top:100px; /* -hauteur/2 */

}

.label{
    font-weight: bold;
}

.input{
    border: 1.7px solid #ccc6c6;
    margin-bottom: 30px;
    margin-top: 10px;
    width: 100%;
    height: 3rem;
    padding-left: 24px;
    border-radius: 10px;
 }

.input::placeholder {
    text-align: left;

}

.button_registration {
    background-color: #8b3b1c;
    width: 50%;
    float: right;
    height: 45px;
    color: white  !important;
    margin-top: 7rem;
}



</style>
