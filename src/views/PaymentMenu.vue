<template>
    <div class="container">
        <Header/>
        <div class="container md-layout osf-background-grey">
            <div class="md-layout-item md-size-20" >
                <sidebar-profil ></sidebar-profil>
            </div>
            <div class="md-layout-item md-size-80" style="padding: 3rem;">
                <h1 class="titreContent">{{ menu_content.label }}</h1>
                <div class="container">
                    <md-table md-card >
                        <md-table-row class="osf-background-grey" >
                            <md-table-head v-for="item in menu_content.items"  :key="item.content">{{ item.label }}</md-table-head>
                        </md-table-row>
                        <md-table-row class="osf-background-grey" >
                            <md-table-cell>Enaim</md-table-cell>
                            <md-table-cell>Safae</md-table-cell>
                            <md-table-cell>XXXX-XXXX-XXXX-0000</md-table-cell>
                            <md-table-cell>Mastercard</md-table-cell>
                            <md-table-cell>03/23</md-table-cell>
                        </md-table-row>
                    </md-table>
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

export default {
    name: "PaymentMenu",
    components: {Footer, Header, SidebarProfil},
    data() {
    return {
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
