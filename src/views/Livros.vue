<template>
    <div>
        <v-container grid-list-sm>
            
                <v-layout row wrap>
                    <v-flex md2>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaa
                            <!--v-card
                            class="mx-auto"
                            height="400"
                            width="256">
                            <v-navigation-drawer
                            class="deep-purple accent-4"
                            dark
                            permanent
                            >
                            <v-list>
                                <v-list-item
                                v-for="item in items"
                                :key="item.titulo"
                                :to="item.rota"
                                >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icone }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            </v-navigation-drawer>
                        </v-card-->
                    </v-flex>    
                    <v-flex xs12 md10>
                        <v-layout row wrap justify-space-between>
                            <v-flex xs12 sm6 md4 lg3 class="" v-for="item in info" :key="item.titulo_1">
                                <v-card color="sif" class="text-xs-center">
                                    
                                    <h2 class="cap">{{item.titulo_1}}</h2>
                                    <v-img                                        
                                            :src="item.src" 
                                            aspect-ratio=".75" 
                                            class="grey lighten" 
                                            max-width="200" 
                                            max-height="700"
                                            style="margin:0 auto">
                                    </v-img>

                                    <v-card-title primary-title>
                                    <div>
                                        <h3>
                                            {{item.titulo_2}}
                                        </h3>
                                        <p style="margin-top:3px;"> 
                                            {{item.sinopse}} 
                                        </p>
                                        <p>
                                            {{item.disp}} disponíveis (qtd de livros disponíveis para empréstimo)
                                        </p>
                                    </div>
                                    </v-card-title>

                                    <div class="text-xs-center">
                                        <v-btn  color="success" round :to="item.rota">Reservar</v-btn>
                                        <v-btn  color="info" round >Ver mais</v-btn>
                                    </div>
                                </v-card>                            
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            
       </v-container>
    </div>
</template>
<script>
    export default {
      data(){
          return{
              info:[
                  {titulo_1: "Sobre o que o livro fala",
                    titulo_2: "Título do livros completo",
                    disp: "x",
                    sinopse:"aqui ficará uma breve sinopse do livro",
                    rota: "/Login", 
                    src: require("../assets/img1/livro_1.jpg")},

                    {titulo_1:"abcdefghijklmnopq",
                        titulo_2:"asdfqwerzcv",disp:"y",
                        sinopse:"adfadsffasdfdasfadsfdas",
                        route:"/",
                        src: require("../assets/img2/img5.jpg")}/*,

                        {titulo_1:"",
                        titulo_2:"",disp:"",
                        sinopse:"",
                        route:"",
                        src: require("../assets/")}*/
              ],
              items:[
                  {titulo: 'aaaa', icone: 'dashboard',rota:'/ '}
              ]
              

          }
      },
      methods:{

      } 

    }
</script>
<style>
    h3, p{
        color: black;
    }
</style>