<template>
    <div class="container">
        <Header/>
        <div class="background-register">
                <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="validateUser">
                    <md-card class="form-card md-layout-item md-size-90 md-small-size-100">
                        <md-card-header>
                            <div class="md-title">Inscription</div>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('firstName')">
                                        <label for="first-name">Prénom</label>
                                        <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                                        <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('lastName')">
                                        <label for="last-name">Nom</label>
                                        <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                                        <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                                    </md-field>
                                </div>
                            </div>

                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('email')">
                                        <label for="email">E-mail</label>
                                            <md-input name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                            <span class="md-error" v-if="!$v.form.email.required">The last name is required</span>
                                            <span class="md-error" v-else-if="!$v.form.email.minlength">Invalid last name</span>
                                        <span class="md-error">L'e-mail est demandé</span>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('password')">
                                        <label for="password">Mot de passe</label>
                                        <md-input type="password" id="password" name="password" v-model="form.password" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                                        <span class="md-error" v-else-if="!$v.form.password.maxlength">Invalid password</span>
                                    </md-field>
                                </div>
                            </div>
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('address')">
                                        <label for="password">Addresse</label>
                                        <md-input type="text" id="address" name="address" v-model="form.address" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.address.required">The address is required</span>
                                        <span class="md-error" v-else-if="!$v.form.address.maxlength">Invalid address</span>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('mobile')">
                                        <label for="password">Téléphone</label>
                                        <md-input type="number" id="mobile" name="mobile" v-model="form.mobile" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.mobile.required">The mobile is required</span>
                                        <span class="md-error" v-else-if="!$v.form.mobile.maxlength">Invalid mobile</span>
                                    </md-field>
                                </div>
                            </div>
                        </md-card-content>

                        <md-progress-bar md-mode="indeterminate" v-if="sending" />
                        <md-card-actions>
                            <md-button type="submit" class="md-primary" :disabled="sending">S'inscrire</md-button>
                        </md-card-actions>
                    </md-card>

                    <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
                </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import {mapActions} from "vuex";
import { validationMixin } from 'vuelidate'
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'
export default {
    name: "Register",
    mixins: [validationMixin],
    components: {Footer, Header},
    data: () => ({
        form: {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            address: null,
            mobile: null
        },
        userSaved: false,
        sending: false,
        lastUser: null
    }),
    validations: {
        form: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            lastName: {
                required,
                minLength: minLength(3)
            },
            password: {
                required,
                minLength: minLength(5)
            },
            address: {
                required,
                minLength: minLength(10)
            },
            email: {
                required,
                email
            },
             mobile: {
                required,
                 minLength: minLength(10),
                 maxLength: maxLength(10)
             }
        }
    },
    methods: {
        ...mapActions('user', {
            register: 'register'
        }),
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset()
            this.form.firstName = null
            this.form.lastName = null
            this.form.address = null
            this.form.password = null
            this.form.mobile = null
        },
        saveUser () {
            this.sending = true

                this.register(this.form)
                    .then(() => {
                        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                        this.userSaved = true
                        this.sending = false
                        this.clearForm()
                            window.setTimeout(() => {
                                this.$router.push('/login')
                            }, 1500)
                    })
                    .catch((error) => {
                        this.$fire({
                            title: "Une erreur est survenue",
                            text: error.data.message,
                            type: "error",
                            timer: 3000
                        })
                        this.sending = false
                    })

        },
        validateUser () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveUser()
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.background-register {
    background: url("../../assets/Caftan-or.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.md-layout-item {
    padding: 2rem;
}
.form-card{
    margin-top: 5%;
    margin-bottom: 5%;
}

.label{
    font-weight: bold;
}

.input{
    border: 1.7px solid #ccc6c6;
    margin-bottom: 30px;
    margin-top: 10px;
    width: 100%;
    height: 3rem;
    padding-left: 24px;
    border-radius: 10px;
 }

.input::placeholder {
    text-align: left;

}

.button_registration {
    background-color: #8b3b1c;
    width: 50%;
    float: right;
    height: 45px;
    color: white  !important;
    margin-top: 7rem;
}



</style>
