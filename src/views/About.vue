<template>
    <div class="container">
        <Header/>
        <div class="md-layout">
            <div class="md-layout-item robeBg">
                <img src="assets/caftan-rouge.jpg" />
            </div>
            <div class="md-layout-item aboutText">
                <div class="md-layout">
                    <div class="md-layout-item md-title primaryText">
                        <span>A propos de nous</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span class="md-body-2">Adresse</span><span> : Orient'Shop : 2 rue le Corbusier, 13090 Aix-en-Provence</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span class="md-body-2">Numéro de téléphone</span><span> : 06.06.06.06.06</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item icons">
                        <md-icon>instagram</md-icon> Caftanbeldi_azur
                        <md-icon>facebook</md-icon> Orient'Shop Safa
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span class="md-body-2">Email</span><span> : enaim.safae@orient-shop.fr</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-subheading">
                        Que fait Orient'Shop ?
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit turpis, porttitor vel dui aliquet, porttitor faucibus urna. Vivamus ipsum enim, cursus et libero in, molestie vestibulum risus. Duis cursus, mi in consectetur venenatis, tortor nisl placerat elit, in semper metus quam vitae dolor. Vestibulum sed ullamcorper erat, ornare fermentum neque. Praesent sit amet tempus odio. Sed et nisi sit amet erat auctor porttitor at sed arcu. Nulla accumsan urna eget enim placerat faucibus vitae ut erat. Donec cursus mattis condimentum. Vestibulum gravida auctor viverra. Fusce commodo erat eu hendrerit faucibus. Duis neque magna, varius vel euismod egestas, vulputate eget arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit turpis, porttitor vel dui aliquet, porttitor faucibus urna. Vivamus ipsum enim, cursus et libero in, molestie vestibulum risus. Duis cursus, mi in consectetur venenatis, tortor nisl placerat elit, in semper metus quam vitae dolor. Vestibulum sed ullamcorper erat, ornare fermentum neque. Praesent sit amet tempus odio. Sed et nisi sit amet erat auctor porttitor at sed arcu. Nulla accumsan urna eget enim placerat faucibus vitae ut erat. Donec cursus mattis condimentum. Vestibulum gravida auctor viverra. Fusce commodo erat eu hendrerit faucibus. Duis neque magna, varius vel euismod egestas, vulputate eget arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: "About",
    components: {Footer, Header}
}
</script>

<style lang="scss" scoped>
.robeBg{
    height: 100%;
    min-height: 100%;
    img{
        width: 100%;
        height: auto;
    }
    @supports(object-fit: cover){
        img{
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }
}
.aboutText{
    padding-top: 5%;
    padding-left: 5%;
    .md-title{
        margin-bottom: 5%;
    }
    .md-subheading{
        text-decoration: underline;
        font-weight: bold;
        margin-top: 15%;
    }
    .icons{
        padding-top: 2%;
        padding-bottom: 2%;
    }
}
</style>
