<template>
    <div class="container">
        <Header/>
        <div class="background-register">
            <div class="background-card">
                <form class="box">
                    <div class="md-layout">
                        <div class="md-layout-first">
                            <label class="label">Votre Prenom </label>
                            <div class="control">
                                <input type="text"  placeholder="Exemple: Safae" class="input" required>
                            </div>

                            <label class="label"> Nom de famille </label>
                            <div class="control">
                                <input type="text"  placeholder="Exemple: Enaim" class="input" required>
                            </div>

                            <label class="label">Adresse e-mail </label>
                            <div class="control">
                                <input type="email"  placeholder="Email :" class="input" required>
                            </div>

                            <label class="label">Mot de passe</label>
                            <div class="control">
                                <input type="password"  placeholder="Mot de passe :" class="input" required>
                            </div>
                        </div>

                        <div class="md-layout-second">
                            <label class="label">Votre Adresse </label>
                            <div class="control">
                                <input type="email"  placeholder="ex.2 Rue du pasteur 13003 Marseille :" class="input" required>
                            </div>

                            <label class="label">Télephone mobile </label>
                            <div class="control">
                                <input type="phone"  placeholder="+33 6 68 01 54 76 :" class="input" required>
                            </div>

                            <md-checkbox >Je désire étre informé des anno</md-checkbox> <br>
                            <md-checkbox >Boolean</md-checkbox>

                            <div class="field">
                                <input type="submit" class="buttonCo" value="Inscription" />
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
export default {
    name: "Register",
    components: {Footer, Header},
}

</script>

<style lang="scss" scoped>

.background-register {
    background-image: url("../../assets/Caftan-or.jpg");
    width: 1500px;
    height: 800px;
    margin-top:10px; /* -hauteur/2 */
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

.md-layout-first {
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 30px;
}
.md-layout-second {
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 30px;
}


.label{
    font-weight: bold;
}

.input{
    margin-bottom: 30px;
    margin-top: 10px;
    padding: 10PX 135PX;
    width: 100%;
    border-radius: 10px;
    border-color: gray;


 }

.input::placeholder {
    text-align: left;

}

.buttonCo {
    background-color: #8b3b1c;
    width: 100%;
    height: 45px;
    color: white  !important;
     border-radius: 10px;
}



</style>
