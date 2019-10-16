<template>
    <div>
        <v-container>
            <div>
                <v-layout align-center fill-height >
                   
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
                        
                    <v-flex md6 lg4>
                        <div class="view-book">
                            <div class="luke" v-for="item in info" :key="item.titulo_1">
                                <v-row align="center" justify="center" >
                                    <h2 class="cap">{{item.titulo_1}}</h2>
                                    <div class="imagem">
                                        <v-img                                        
                                            :src="item.src" 
                                            aspect-ratio=".75" 
                                            class="grey lighten" 
                                            max-width="200  " 
                                            max-height="700">
                                        </v-img>
                                    </div>
                                    <h3>
                                        {{item.titulo_2}}
                                    </h3>
                                    <p style="margin-top:3px;"> {{item.sinopse}} </p>
                                    <p>
                                        {{item.disp}} disponíveis (qtd de livros disponíveis para empréstimo)
                                    </p>
                                    
                                        <v-btn class="th0r" color="success" :to="rota">Reservar</v-btn>
                                        <v-btn class="th0r" color="info" >Ver mais</v-btn>                            
                                    
 
                                </v-row>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
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
    .btn-book{
        margin-left:10%;
        margin-right:10%;
    }
    .th0r{
        border-radius: 100px 100px 100px;
        height: 35px;
        width: 130px;
        font-family: Comic Sans MS, Comic Sans, cursive;   
        font-size: 16px; 
        margin-left: 4%;
    }
    .luke{
        margin: 0% 6% 0% 6%;
        width: 80%;
        background-color: aquamarine;
        border: black 1px solid;
        border-radius:5px 5px 5px;
        margin-top: 5px;
    }
    .luke .imagem{
        margin-left: 16.5%;
        margin-top: 3px;
        margin-bottom: 2%;
    }
    h3, p{
        color: black;
    }
</style>