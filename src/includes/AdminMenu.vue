<template>
    <div class="md-layout-item md-size-20 containerMenu">
    <md-app-drawer md-permanent="full">
        <md-toolbar md-elevation="0">
            <img class="logoMenu text-center" src="src/assets/Logo-blanc.svg" />
        </md-toolbar>

        <md-list>
            <md-list-item>
                <md-avatar>
                    <img src="src/assets/caftan-rouge.jpg" alt="Avatar">
                </md-avatar>
                <span class="md-list-item-text">User connecté</span>
            </md-list-item>
            <md-list-item to="/">
                <md-icon style="color:white;">home</md-icon>
                <span class="md-list-item-text">Accueil</span>
            </md-list-item>

            <md-list-item to="/">
                <md-icon style="color:white;">shopping_basket</md-icon>
                <span class="md-list-item-text">Produits</span>
            </md-list-item>

            <md-list-item to="/">
                <md-icon style="color:white;">settings</md-icon>
                <span class="md-list-item-text">Site Management</span>
            </md-list-item>

            <md-list-item to="/">
                <md-icon style="color:white;">checkroom</md-icon>
                <span class="md-list-item-text">Gestion des commandes</span>
            </md-list-item>

            <md-list-item to="/">
                <md-icon style="color:white;">power_settings_new</md-icon>
                <span class="md-list-item-text">Se déconnecter</span>
            </md-list-item>
        </md-list>
    </md-app-drawer>
    </div>
</template>

<script>
export default {
    name: "AdminMenu"
}
</script>

<style lang="scss" scoped>
    .containerMenu{
        min-height: 100%;
        height: 100%;
    }
    .md-app-drawer{
        min-height: 100%;
        height: 100%;
        width: 100%;
    }
    .md-app-drawer, .md-toolbar, .md-list, .md-list-item{
        background-color: #8b3b1c !important;
        color: white !important;
        .md-list-item-text{
            color: white !important;
        }
    }
    .logoMenu{
        display:block;
        max-width:100px;
        max-height:100px;
        margin: 40px auto;
    }
</style>
