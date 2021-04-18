<template>
    <div class="md-layout container">
        <AdminMenu></AdminMenu>
        <div class="md-layout-item md-size-75 contentContainer">
            <div class="md-layout">
                <div class="md-layout-item md-size-80">
                    <form>
                        <md-field>
                            <label for="search">Search</label>
                            <md-input name="search" id="search" autocomplete="search" />
                        </md-field>
                    </form>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item">
                    <md-icon>home</md-icon>
                    <span class="md-headline primaryText">Accueil</span>
                </div>
            </div>
            <div class="md-layout contentDivs">
                <div class="md-layout-item md-size-45 content">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-70 md-title primaryText">
                            <md-icon>shopping_basket</md-icon> Les derniers articles ajoutés
                        </div>
                        <div class="md-layout-item md-size-30 text-right">
                            <router-link to="/admin/listProducts">Tout voir</router-link>
                        </div>
                    </div>
                    <div class="md-layout">
                        <div v-bind:key="product.id" v-for="product in lastNine" class="productDisplay md-layout-item md-size-33">
                            <img src="assets/robe-bleu-claire.jpg" alt="photo product"/>
                            {{product.name}} {{product.price}}€
                        </div>
                    </div>
                </div>
                <div class="md-layout-item md-size-5"></div>
                <div class="md-layout-item md-size-45">
                    <div class="content statsDiv">
                        <div class="md-layout">
                            <div class="md-layout-item md-title primaryText">
                                <md-icon>bar_chart</md-icon> Statistiques - trafic du site
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <md-icon>visibility</md-icon> <span>500 visiteurs par mois</span>
                                <md-progress-bar class="progress-bar" md-mode="determinate" :md-value="amount"></md-progress-bar>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <md-icon>shopping_basket</md-icon> <span>Nombre de paniers abandonnés</span>
                                <md-progress-bar class="progress-bar" md-mode="determinate" :md-value="amount"></md-progress-bar>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="md-layout">
                            <div class="md-layout-item md-title primaryText md-size-70">
                                <md-icon>shopping_basket</md-icon> Les produits les plus achetés
                            </div>
                            <div class="md-layout-item md-size-30 text-right">
                                <router-link to="/admin/listProducts">Tout voir</router-link>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div v-bind:key="product.id" v-for="product in lastThree" class="md-layout-item md-size-33 productDisplay">
                                <img src="assets/caftan-rouge.jpg" alt="photo product"/>
                                <span class="text-center"> {{product.name}} - {{product.price}} €</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminMenu from "../../includes/AdminMenu.vue";
import {mapState} from "vuex";
export default {
    name: "HomeAdmin",
    components: {AdminMenu},
    data: () => ({
        amount: 60
    }),
    computed: {
        ...mapState({
            products: state => state.product.all
        }),
        lastThree(){
            const size = 3
            return this.$store.state.product.all.slice(0, size)
        },
        lastNine(){
            const size = 9
            return this.$store.state.product.all.slice(0, size)
        }
    }
}
</script>

<style lang="scss" scoped>
.contentContainer{
    padding-left: 5%;
    padding-top: 2%;
    .contentDivs{
        margin-top: 5%;
        .statsDiv{
            margin-bottom: 10%;
        }
        .content{
            background-color: lightgrey;
            padding: 20px;
            border-radius: 20px;
            img{
                max-width: 125px;
                max-height: 200px;
            }
            .md-title{
                padding-bottom: 3%;
            }
            .progress-bar{
                margin-top: 2%;
                margin-bottom: 5%;
            }
        }
        .productDisplay{
            padding-right: 5%;
        }
    }
}
</style>
