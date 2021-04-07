<template>
    <div class="md-layout container">
        <AdminMenu></AdminMenu>
        <div class="md-layout-item md-size-80 contentContainer">
            <div class="md-layout">
                <div class="md-layout-item">
                    <md-icon>shopping_basket</md-icon>
                    <span class="md-headline primaryText">Ajouter un nouveau produit</span>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item">
                    <span class="md-caption">Les nouveaux produits seront automatiquement visible sur le site internet</span>
                </div>
            </div>
            <form novalidate @submit.prevent="validateProduct">
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('name')">
                            <label for="name">Nom</label>
                            <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.name.required">Le nom est requis</span>
                            <span class="md-error" v-else-if="!$v.form.name.minlength">Nom invalide</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('category')">
                            <label for="category">Catégorie</label>
                            <md-input name="category" id="category" autocomplete="given-category" v-model="form.category" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.category.required">La catégorie est requise</span>
                            <span class="md-error" v-else-if="!$v.form.category.minlength">Catégorie invalide</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('price')">
                            <label for="price">Prix</label>
                            <md-input name="price" id="price" type="number" v-model="form.price" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.price.required">Le prix est requis</span>
                            <span class="md-error" v-else-if="!$v.form.price.maxlength">Prix invalide</span>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('stock')">
                            <label for="price">Quantité</label>
                            <md-input name="price" id="stock" type="number" v-model="form.stock" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.stock.required">La quantité est requise</span>
                            <span class="md-error" v-else-if="!$v.form.stock.maxlength">Quantité invalide</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('color')">
                            <label for="Color">Couleur</label>
                            <md-input name="color" id="color" autocomplete="given-color" v-model="form.color" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.color.required">La couleur est requise</span>
                            <span class="md-error" v-else-if="!$v.form.color.minlength">Couleur invalide</span>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('size')">
                            <label for="color">Taille</label>
                            <md-select name="size" id="size" v-model="form.size" md-dense :disabled="sending">
                                <md-option value="S">S</md-option>
                                <md-option value="M">M</md-option>
                                <md-option value="L">L</md-option>
                            </md-select>
                            <span class="md-error" v-if="!$v.form.size.required">La taille est requise</span>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('image')">
                            <md-file placeholder="Image" name="image" v-on:change="onFileChange" accept="image/*" />
                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('description')">
                            <label for="description">Description</label>
                            <md-textarea name="description" id="description" v-model="form.description" :disabled="sending" />
                        </md-field>
                    </div>
                </div>
                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-button type="submit" class="md-primary md-raised primaryBtn" :disabled="sending">Publier</md-button>

                <md-snackbar :md-active.sync="productSaved">The user {{ lastProduct }} was saved with success!</md-snackbar>
            </form>
        </div>
    </div>
</template>

<script>
import AdminMenu from "../../includes/AdminMenu.vue";
import { validationMixin } from 'vuelidate';
import {
    required,
    minLength,
    maxLength
} from 'vuelidate/lib/validators';
import consoleLogger from "logger";
import {mapActions} from "vuex";
export default {
    name: "EditProduct",
    components: {AdminMenu},
    mixins: [validationMixin],
    data: () => ({
        form: {
            name: null,
            stock: null,
            size: null,
            price: null,
            color: null,
            category: null,
            description: null,
            picture: null,
        },
        productSaved: false,
        sending: false,
        lastProduct: null
    }),
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(5)
            },
            color: {
                required,
                minLength: minLength(3)
            },
            price: {
                required,
                maxLength: maxLength(3)
            },
            size: {
                required
            },
            category: {
                required,
                minLength: minLength(5)
            },
            stock: {
                required,
                maxLength: maxLength(3)
            }
        }
    },
    methods: {
        ...mapActions('product', {
            updateProduct: 'updateProduct',
            getProductById: 'getProductById'
        }),
        onFileChange(e) {
            let form = this.form;
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function () {
                form.picture = files[0].name
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            this.form = form
        },
        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm() {
            this.$v.$reset()
            this.form.name = null
            this.form.price = null
            this.form.stock = null
            this.form.price = null
            this.form.color = null
            this.form.category = null
            this.form.description = null
        },
        saveProduct() {
            this.sending = true

            // Instead of this timeout, here you can call your API
            this.updateProduct(this.form)
                .then(() => {
                    this.lastProduct = `${this.form.name}`
                    this.productSaved = true
                    this.sending = false
                })
                .catch(error => {
                    consoleLogger.error(error)
                })
            window.setTimeout(() => {

            }, 1500)
        },
        validateProduct() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveProduct()
            }
        }
    },
    beforeMount() {
        this.getProductById(this.$route.params.productId)
            .then(response => {
                this.form = response.data
                this.form.picture = response.data.picture
            })
            .catch(error => {
                consoleLogger.error(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.contentContainer{
    padding-left: 10%;
    padding-top: 5%;
}
</style>
