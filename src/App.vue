<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
    primary: #8b3b1c, // The primary color of your brand
    accent: #1f1f1f // The secondary color of your brand
));

@import "~vue-material/dist/theme/all"; // Apply the theme
// @import '~normalize.css';
// @import '~reset-css/_reset.scss';
* {
    box-sizing: border-box;
}
html,body{
    height: 100%;
    overflow-x: hidden; /* Hide horizontal scrollbar */
}
#app{
    height: 100%;
}
.primaryText{
    color: #8b3b1c;
    font-family: Fondamento, serif;
}
.primaryBtn{
    background-color: #8b3b1c !important;
    color: white !important;
}
.secondaryText{
    font-family: Fondamento, serif;
}
.text-center{
    text-align: center;
}
.container{
    min-height: 100%;
    height: 100%;
}
</style>
