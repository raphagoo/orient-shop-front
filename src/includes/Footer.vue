<template>
    <div class="md-content footerContainer">
        <div class="md-layout md-alignment-top-center md-gutter">
            <div class="md-layout-item md-size-20 md-title">Information</div>
            <div class="md-layout-item md-size-20 md-title">Besoin d'aide</div>
            <div class="md-layout-item md-size-20 md-title">Mon compte</div>
            <div class="md-layout-item md-size-20 md-title">Suivez nous</div>
        </div>
        <div class="md-layout md-alignment-top-center md-gutter">
            <div class="md-layout-item md-size-20">A propos de nous</div>
            <div class="md-layout-item md-size-20">Contactez nous</div>
            <div class="md-layout-item md-size-20">Mes informations</div>
            <div class="md-layout-item md-size-20"><md-icon class="text-white">facebook</md-icon> orient-shop</div>
        </div>
        <div class="md-layout md-alignment-top-center md-gutter">
            <div class="md-layout-item md-size-20">Principes de confidentialité</div>
            <div class="md-layout-item md-size-20">Mode de paiement</div>
            <div class="md-layout-item md-size-20">Suivi de commande</div>
            <div class="md-layout-item md-size-20"><md-icon class="text-white">monochrome_photos</md-icon> orient-shop</div>
        </div>
        <div class="md-layout md-alignment-top-center md-gutter md-size-20">
            <div class="md-layout-item md-size-20">Conditions générales de vente</div>
            <div class="md-layout-item md-size-20">Livraison</div>
            <div class="md-layout-item md-size-20">Mon panier</div>
            <div class="md-layout-item md-size-20"></div>
        </div>
        <div class="md-layout md-alignment-top-center md-gutter md-size-20">
            <div class="md-layout-item md-size-20">Nos boutiques</div>
            <div class="md-layout-item md-size-20">Echange et retour</div>
            <div class="md-layout-item md-size-20">Mes favoris</div>
            <div class="md-layout-item md-size-20"></div>
        </div>
        <div class="md-layout logoLayout md-alignment-center-center">
            <div class="md-layout-item md-title text-center">Logo Orient shop</div>

        </div>
        <div class="md-layout copyrightLayout md-alignment-center-center">
            <div class="md-layout-item text-center"><md-icon class="text-white">copyright</md-icon>2020 orientshop - Tous droits réservés</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
.footerContainer{
    background-color: black;
    color: white;
    .md-layout{
        padding: 10px 0 10px 0;
        .text-white{
            color: white !important;
        }
        .text-center{
            text-align: center;
        }
    }
    .logoLayout{
        padding: 50px 0 15px 0;
    }
    .copyrightLayout{
        padding: 15px 0 50px 0;
    }
}
</style>
