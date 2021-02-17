<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
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
</style>
