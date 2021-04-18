<template>
    <div class="container md-layout">
        <div class="md-layout-item marocaineBg">
            <img src="assets/jeune-marocaine.jpg" />
        </div>
        <div class="md-layout-item blackBg">
            <div class="blackBgContainer"><div class="md-layout">
                <div class="md-layout-item text-center logo">
                    <img src="assets/Logo-blanc.svg" height="280px" width="280px" />
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item text-center">
                    <md-button to="/shop" class="md-primary md-raised">Commencer le shopping</md-button>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item text-center">
                    <span>ou</span>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item text-center">
                    <span>Nous retrouver sur :</span>
                </div>
            </div>
                <div class="md-layout md-alignment-center-center">
                    <div class="md-layout-item md-size-10">
                        <md-icon style="color: white;">facebook</md-icon>
                    </div>
                    <div class="md-layout-item md-size-10">
                        <md-icon style="color: white;">instagram</md-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    .marocaineBg {
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

    .blackBg {
        min-height: 100%;
        height: 100%;
        color: white;
        background-color: black;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        .logo{
            padding-bottom: 30%;
        }
    }

    .text-center {
        text-align: center;
    }
}
</style>
