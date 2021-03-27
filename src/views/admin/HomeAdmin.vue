<template>
    <div class="md-layout container">
        <AdminMenu></AdminMenu>
        <div class="md-layout-item md-size-80 contentContainer">
            <div class="md-layout">
                <div class="md-layout-item">
                    <md-icon>home</md-icon>
                    <span class="md-headline primaryText">Accueil</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminMenu from "../../includes/AdminMenu.vue";
export default {
    name: "HomeAdmin",
    components: {AdminMenu}
}
</script>

<style lang="scss" scoped>
.contentContainer{
    padding-left: 10%;
    padding-top: 5%;
}
</style>
