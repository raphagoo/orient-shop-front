<template>
  <div>
    <md-toolbar class="md-dense">
      <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" >
            <md-icon style="color:white">keyboard_arrow_down</md-icon>
          </md-button>

          <md-button style="color:white">Où est mon colis ?</md-button>

        </div>


        <div class="md-toolbar-section-end">
           <md-button class="md-layout-item md-size-10">
                <md-icon style="color: white;">facebook</md-icon>
            </md-button>
            <md-button class="md-layout-item md-size-10">
                <md-icon style="color: white;">instagram</md-icon>
            </md-button>
        </div>
    </md-toolbar>

    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button  class="md-icon-button">
            <md-icon style="color:black">search</md-icon>
          </md-button>
        </div>


        <div  class="md-layout-item md-size-10">
            <router-link to="/shop"><img class="logoHeader" src="src/assets/Logo-dégradé.svg" /></router-link>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon style="color:black">favorite_border</md-icon>
          </md-button>


          <md-button class="md-icon-button" >
            <router-link to="/login"><md-icon style="color:black">account_circle</md-icon></router-link>
          </md-button>

          <md-button class="md-icon-button" >
            <md-icon style="color:black">shopping_basket</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset" style="float:center">
          <div class="second-navbar-button" style="float:center">
            <router-link to="products"><md-button class="nav-button">ROBE ORIENTALE</md-button></router-link>
            <md-button class="nav-button">ROBE SOIREE</md-button>
            <md-button class="nav-button">ACCESSOIRE</md-button>
            <md-button class="nav-button">HIJAB</md-button>
            <md-button class="nav-button">TURBAN</md-button>
            <md-button class="nav-button">CHAUSSURES</md-button>
            <md-button class="nav-button">CONFECTION SUR-MESURE</md-button>
            <md-button class="nav-button">INFORMATION</md-button>

          </div>

      </div>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>



.second-navbar-button {
    margin: auto;
    padding: 20px;
}
.md-button.button-second-navbar{
    color: black;
}

.md-toolbar.md-theme-default {
    background-color: #8b3b1c;
    color: white;
}
.md-dense {
    color: white im !important;
    padding: auto;
}
.md-large {
    color: black !important;
    box-shadow: 0 0px 0px ;
}
.md-layout{
            padding: 5px 0 5px 0;
}
.md-toolbar.md-theme-default.md-primary {
    background-color:white;
}
.logoHeader{
    max-width: 150px;
    max-height: 150px;
}
.nav-button {
    color: black !important;
    font-family: Fondamento;
    font-weight: bold;
}




</style>

<script>
export default {
  name: 'ContentActions'
}
</script>
Code copied!
Elements
The following classes creates parts of a toolbar:

