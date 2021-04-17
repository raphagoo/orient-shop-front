
<template>
   <div>
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
   </div>
</template>



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

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PayementMenu',
    data () {
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
    computed: {
        ...mapState('user', ['status']),
        loggedIn () {
            console.log(status);
            return this.$store.state.user.status.loggedIn;
        }
    },
    methods: {
        ...mapActions('user', ['logout']),
        logoutUser() {
          this.logout()
      }
    }
}
</script>
