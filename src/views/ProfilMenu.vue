<template>
    <div class="container">
        <Header/>
        <div class="container md-layout osf-background-grey">
            <div class="md-layout-item md-size-20" >
                <sidebar-profil></sidebar-profil>
            </div>
            <div class="md-layout-item md-size-80" style="padding: 3rem;">
                <h1 class="titreContent">{{ menu_content.label }}</h1>
                <div class="container" >
                <H2 class="titreSecond">Informations du compte</H2>
                    <div class="md-layout md-gutter">
                      
                        <div class="md-layout-item">
                            <h2 class="titreThird">Informations de contact</h2>
                            {{ getUser.user.firstname }} {{ getUser.user.lastname }}<br>
                            {{ getUser.user.email }}
                        </div>
                        <div class="md-layout-item md-size-50">
                            <h2 class="titreThird">Newsletter</h2>
                            Vous n'etes pas encore inscrit a notre lettre d'information.
                            <div class="md-layout">
                              <div class="md-layout-item">
                                <md-checkbox v-model="boolean">Je m'abonne</md-checkbox>
                              </div>
                              <div class="md-layout-item">
                                <md-checkbox v-model="boolean">Je me désabonne</md-checkbox>
                              </div>
                            </div>
                            <div class="field">
                                <input type="submit" class="button_enregistrer" value="Enregistrer" />
                            </div>
                            
                        </div>
                    </div>
                  <H2 class="titreSecond">Carnet d'adresse </H2> 
                    <div class="md-layout md-gutter">
                      
                        <div class="md-layout-item">
                            <h2 class="titreThird">Adresse de facturation par default</h2>
                            {{ getUser.user.firstname }} {{ getUser.user.lastname }}<br>
                            {{ getUser.user.address }} <br>
                            Téléphone : {{ getUser.user.phone }}
                        </div>
                        <div class="md-layout-item md-size-50">
                            <div class="md-layout-item">
                              <h2 class="titreThird">Adresse de facturation par default</h2>
                              {{ getUser.user.firstname }} {{ getUser.user.lastname }}<br>
                              {{ getUser.user.address }} <br>
                              Téléphone : {{ getUser.user.phone }}
                            </div>
                           
                            <h2 class="titreThird">Préférence de livraison</h2>
                            <div class="md-layout">
                              <div class="md-layout-item">
                                <md-checkbox v-model="boolean">En point de relais </md-checkbox>
                              </div>
                              <div class="md-layout-item">
                                <md-checkbox v-model="boolean">A domicile</md-checkbox>
                              </div>
                            </div>
                            <div class="field">
                                <input type="submit" class="button_enregistrer" value="Enregistrer" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import SidebarProfil from "../includes/SidebarProfil.vue";
import {mapState} from "vuex";

export default {
    name: "ProfilMenu",
    components: {Footer, Header, SidebarProfil},
    data() {
        return {
      menu_content: {
        label: 'Mon compte',
        items: [
          {
            label: 'Nom',
          },
          {
            label: 'Prenom',
          },
          {
            label: 'Numero de carte',
          },
          {
            label: 'Type de carte',
          },
          {
            label: 'Date d\'expiration',
          },
        ]
      },
    }
    },
    computed: {
        ...mapState({
            user: state => state.user
        }),
        getUser(){
            return this.user;
        },
    }
}
</script>

<style lang="scss" scoped>
.osf-background-grey {
    background-color:#f1f1f1 !important;
}
.titreContent {
    text-align: center;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
     margin-bottom: 90px;
}
.titreSecond {
    margin-top: 50px;
    margin-bottom: 15px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
     text-decoration: underline;
     text-decoration-thickness: 0.2em;
     border-bottom: 1px solid grey;

}
.button_enregistrer {
    background-color: #8b3b1c;
    
    width: 70%;
    height: 45px;
    color: white  !important;
    margin-top: 0.5rem;
}
.container {
  height: 900PX;
}
.titreThird {
  font-size: 18px;

}
</style>
