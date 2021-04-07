<template>
    <div class="md-layout mdtabLayout">
        <div class="md-layout-item md-size-30 md-small-size-50 md-medium-size-40">
            <md-tabs md-sync-route>
                <md-tab id="tab-home" md-label="Produits ajoutés" to="/admin/listProduct" exact></md-tab>
                <md-tab id="tab-pages" md-label="Ajouter un nouveau produit" to="/admin/addProduct"></md-tab>
            </md-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminProductTabs"
}
</script>

<style scoped>
.mdtabLayout{
    margin-bottom: 3%;

}
.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active{
    color: #8b3b1c !important;
}
</style>
