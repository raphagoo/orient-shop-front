<template>
    <div class="container">
        <Header/>
        <div class="page-container md-layout-row">
            <md-app>
                <md-app-drawer class="md-transparent osf-background-grey" md-permanent="full" >
                    <md-toolbar class="osf-background-grey" md-elevation="0">
                        <h2 class="titreGeneral"> {{ menu_general.label }}</h2>
                    </md-toolbar>

                    <md-list class="osf-background-grey"  v-if="menu_general.items.length > 0" >
                        <md-list-item v-for="item in menu_general.items"  :key="item.general" >
                            <span class="md-list-item-text"> {{ item.label }} </span>
                        </md-list-item>
                    </md-list>
                </md-app-drawer>
                <md-app-content class="osf-background-grey">
                    <h1 class="titreContent">{{ menu_content.label }}</h1>
                    
                    
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item"> 
                        <h2>Informations de contact</h2>
                        Enaim Safae <br>
                        enaim.safae@ynov.com
                      </div>
                      <div class="md-layout-item md-size-40">
                        <h2>Newsletter</h2>
                        Vous n'etes pas encore inscrit a notre lettre d'information.
                      </div>
                    </div>

                </md-app-content>
            </md-app>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: "ProfilMenu",
    components: {Footer, Header},
    data() {
    return {
      menu_general: {
        label: 'Profil',
        items: [
          {
            label: 'Mon compte',
          },
          {
            label: 'Mes commandes',
          },
          {
            label: 'Mes artricles favoris',
          },
          {
            label: 'Informations de paiement',
          },  
        ]
      },

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
    
    

}

</script>

<style lang="scss" scoped>

.md-card {
    box-shadow: unset !important;
}
 .md-app {
    min-height: 700px;
    border: 0px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 300px;
    height: 800px;
  }
.md-list-item-text {
    margin-left: 80px;
    margin-top: 30px;   
}
.titreGeneral {
    margin-left: 60px;
    margin-bottom: 50px;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
}
.titreContent {
    text-align: center;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
}


.osf-background-grey {
    background-color:#f1f1f1 !important;
}

.md-layout {
    padding-left: 5em;


}
</style>
