<template>
    <div class="container">
        <Header/>
        <div class="container md-layout osf-background-grey">
            <div class="md-layout-item md-size-20" >
                <sidebar-profil></sidebar-profil>
            </div>
            <div class="md-layout-item md-size-80" style="padding: 3rem;">
                <h1 class="titreContent">{{ menu_content.label }}</h1>
                <div class="container">
                    <md-table md-card >
                        <md-table-row class="osf-background-grey" >
                            <md-table-head v-for="item in menu_content.items"  :key="item.content">{{ item.label }}</md-table-head>
                        </md-table-row>
                        <md-table-row class="osf-background-grey testt" >
                            <md-table-cell class="test">IMG</md-table-cell>
                            <md-table-cell>fr1093847635</md-table-cell>
                            <md-table-cell>27/10/20</md-table-cell>
                            <md-table-cell>Enaim Safae</md-table-cell>
                            <md-table-cell>109.45</md-table-cell>
                            <md-table-cell>Terminée</md-table-cell>
                        </md-table-row>
                        <md-table-row class="osf-background-grey" >
                            <md-table-cell >IMG</md-table-cell>
                            <md-table-cell>fr1093847635</md-table-cell>
                            <md-table-cell>27/10/20</md-table-cell>
                            <md-table-cell>Enaim Safae</md-table-cell>
                            <md-table-cell>109.45</md-table-cell>
                            <md-table-cell>Terminée</md-table-cell>

                        </md-table-row>

                    </md-table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../includes/Footer.vue";
import Header from "../includes/Header.vue";
import SidebarProfil from "../includes/SidebarProfil.vue";

export default {
    name: "CommandeMenu",
    components: {Footer, Header, SidebarProfil},
    data() {
    return {
      menu_content: {
        label: 'Mes Commandes',
        items: [
          {
            label: 'Produit',
          },
          {
            label: 'Commande #',
          },
          {
            label: 'Date',
          },
          {
            label: 'Expédié à',
          },
          {
            label: 'Total de la commande',
          },
          {
            label: 'Statut',
          },
        ]
      },
    }
  },
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
}
</style>
