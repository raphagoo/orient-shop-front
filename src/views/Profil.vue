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
                    <md-table md-card >
                        <md-table-row class="osf-background-grey" >
                            <md-table-head v-for="item in menu_content.items"  :key="item.content">{{ item.label }}</md-table-head>
                        </md-table-row>
                        <md-table-row class="osf-background-grey" >
                            <md-table-cell>Enaim</md-table-cell>
                            <md-table-cell>Safae</md-table-cell>
                            <md-table-cell>Safae@Enaim.com</md-table-cell>
                            <md-table-cell>272938930283930</md-table-cell>
                            <md-table-cell>Visa</md-table-cell>
                        </md-table-row>
                    </md-table>
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
    name: "Profil",
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
        label: 'Information de paiement',
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
</style>
