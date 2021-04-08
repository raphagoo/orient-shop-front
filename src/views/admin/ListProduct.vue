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
            <AdminProductTabs></AdminProductTabs>
            <div class="md-layout">
                <div class="md-layout-item">
                    <md-icon>shopping_basket</md-icon>
                    <span class="md-headline primaryText">Liste des produits</span>
                </div>
            </div>
            <div class="md-layout productsTable">
                <div class="md-layout-item">
                    <md-table :value="products" md-card md-sort="name" md-sort-order="asc">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell md-label="Nom" md-sort-by="name">{{item.name}}</md-table-cell>
                            <md-table-cell md-label="Prix" md-sort-by="price" md-numeric>{{item.price}}</md-table-cell>
                            <md-table-cell md-label="Couleur" md-sort-by="color">{{item.color}}</md-table-cell>
                            <md-table-cell md-label="Actions"><div @click="deleteProduct(item)"><md-icon>delete</md-icon></div><div @click="modifyProduct(item);"><md-icon>edit</md-icon></div></md-table-cell>
                        </md-table-row>
                    </md-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminMenu from "../../includes/AdminMenu.vue";
import {mapActions, mapState} from "vuex";
import AdminProductTabs from "../../includes/AdminProductTabs.vue";
export default {
    name: "ListProduct",
    components: {AdminProductTabs, AdminMenu},
    methods: {
        ...mapActions('product', {
            getAllProducts: 'getAllProducts',
            removeProduct: 'removeProduct'
        }),
        deleteProduct(product){
            this.$fire({
                title: "Souhaitez vous vraiment supprimer le produit ?",
                type: "error",
                text: product.name,
                showCancelButton: true,
                cancelButtonText: "Annuler",
                confirmButtonText: "Supprimer",
            }).then(r => {
                if(r.value){
                    this.removeProduct(product.id)
                }
            })
        },
        modifyProduct(product){
            this.$router.push('/admin/editProduct/' + product.id)
        }

    },
    computed: {
        ...mapState({
            products: state => state.product.all
        }),
    },
    beforeMount() {
        this.getAllProducts()
    }
}
</script>

<style lang="scss" scoped>
.contentContainer{
    padding-left: 10%;
    padding-top: 2%;
}
.productsTable{
    position: relative;
    width: 80%;
    margin-TOP: 2%;
    .md-ripple{
        color: white !important;
        .md-table-sortable-icon{
            color: white !important;
        }
    }
    .md-table-cell{
        div{
            display: inline-block;
            cursor: pointer;
        }
    }
}

</style>
