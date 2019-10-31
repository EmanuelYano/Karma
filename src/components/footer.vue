<template>
  <v-footer
    dark
    height="auto" style="width:100%; position: relative;
bottom: 0;">
    <v-layout>
        
      <v-card
        flat
        tile
        class="sif lighten-1 black--text text-xs-center">
        
       
        <v-flex>
            
            <v-layout align-center justify-start row fill-height>
               
                    <v-card-text class="info-escola black--text pt-0">
                        <br />Escola Estadual Waldemir Barros da Silva.
                        Rua Palmácia, S/N, Moreninhas. <br/> 
                        Email para contato: eewbs@sed.ms.gov.br<br />
                        Telefone: 3314-9014 
                    </v-card-text>
                
            </v-layout>
        </v-flex>
        <v-divider class="ml-0"></v-divider>
            <v-card-text class="black--text">
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


</style>
<script>
export default {
    data: () => ({
        
    })
}
</script>