<template>
    <div>
        <v-container>
            <div>
                <v-layout align-left row fill-height >
                    <v-flex md6 lg4>
                        <div class="view-book">
                            
                                <v-img 
                                    v-for="(item, i) in items" 
                                    :key="i" 
                                    :src="item.src" 
                                    aspect-ratio="1" 
                                    class="grey lighten" 
                                    max-width="200  " 
                                    max-height="500">
                                </v-img>
                            
                        </div>
                    </v-flex>
                </v-layout>
            </div>
       </v-container>
        <!--v-card style="width:15%;">
            <v-card-title>
                <h5> Programando C++ </h5> 
            </v-card-title>
            <v-card-text>
                <p>
                    ------ imagem ------
                </p>
                <p>
                    Sinopse do livro
                </p>
                <p> 
                   Disponivel ou Não 
                </p>
            </v-card-text>
        </v-card--->
    </div>
</template>
<script>
    export default {
      data(){
          return{
              items:[
                  {src: require("../assets/img1/livro_1.jpg")}
              ]
          }
      },
      methods:{

      } 

    }
</script>
<style>
    .view-book{
        border: black 2px solid;
        padding: 3px;
    }

</style>