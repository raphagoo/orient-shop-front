<template>
    <div>
        <md-app-drawer class="md-transparent osf-background-grey" md-permanent="full"  >
            <md-toolbar class="osf-background-grey" md-elevation="0">
                <h2 class="titreGeneral"> {{ menu_general.label }}</h2>
            </md-toolbar>
            <md-list class="osf-background-grey bordernav"  v-if="menu_general.items.length > 0" >
                <md-list-item v-for="item in menu_general.items"  :key="item.general" >
                    <router-link class="md-list-item-text" :to="item.to">{{ item.label }}</router-link>
                </md-list-item>
                <md-button  v-on:click="logoutUser">
                    Se déconnecter
                </md-button>
            </md-list>
        </md-app-drawer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "SidebarProfil",
    data() {
        return {
      menu_general: {
        label: 'Profil',
        items: [
          {
            label: 'Mon compte',
              to: '/profil'
          },
          {
            label: 'Mes commandes',
              to: '/profil/commande'
          },
          {
            label: 'Mes artricles favoris',
              to: '/profil/favori'
          },
          {
            label: 'Informations de paiement',
              to: '/profil/payment'
          },
        ]
      },
    }
    },
    methods: {
        ...mapActions('user', ['logout']),
        logoutUser() {
            this.logout()
            this.$router.push('/shop');
        }
    }
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
    width: 100%;
    min-height: 500px;
    //padding-right: 2em;
  }
.md-list-item-text {
    margin-left: 50px;
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
.bordernav {
  min-height: 400px;
  border-right: 1px solid grey;
}
</style>
