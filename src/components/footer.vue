<template>
  <v-footer
    dark
    height="auto">
    <v-layout>
        
      <v-card
        flat
        tile
        class="loki lighten-1 white--text text-xs-center">
        
       
        <v-flex md9 lg10 >
            
            <v-layout align-center justify-start row fill-height>
                <h2 class="text-xs-center titulo-imagem">Apoio:</h2>
                <v-flex class="img-apoio" xs2 m-0 mb-2 v-for="item in img" :key="item.src">
                    <v-img style="margin:0 auto" :src='item.src' class="imagem-home" />
                </v-flex>
                <v-flex xs10 align-self-start>
                    <v-card-text class="info-escola white--text pt-0">
                        <br />Escola Estadual Waldemir Barros da Silva.
                        Rua Palmácia, S/N, Moreninhas. <br/> 
                        Email para contato: eewbs@sed.ms.gov.br<br />
                        Telefone: 3314-9014 
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-flex>
            

            
        
        <v-flex>
            <v-layout align-center justify-end row fill-height>
                
            </v-layout>
        </v-flex>

        <v-divider></v-divider>

            <v-card-text class="white--text">
                &copy;2019 — <strong>Emanuel Yano</strong>
            </v-card-text>
        </v-card>
    </v-layout>
  </v-footer>
</template>
<style>
    .v-card{
        width:100% !important;
    }
    .imagem-home{
        margin:auto;
        width:60%;
    }
    .info-imagem{
        
    }
    .img-apoio{
        margin-left: -3%;
    }

</style>
<script>
export default {
    data: () => ({
        img: [
          {
            src: require('../assets/img1/logo/wbs-logo.png')
          },
          {
          src: require('../assets/img1/logo/WBSTEC.png')
          }
        ]
    })
}
</script>