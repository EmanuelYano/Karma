<template>
    <div>
        <v-container>
            <div>
                <v-layout align-center fill-height >
                    <v-flex md6 lg4>
                        <div class="view-book">
                            <div class="luke" v-for="item in info" :key="item.title_1">
                                <v-row align="center" justify="center" >
                                    <h2 class="cap">{{item.title_1}}</h2>
                                    <v-img                                        
                                        :src="item.src" 
                                        aspect-ratio=".75" 
                                        class="grey lighten" 
                                        max-width="200  " 
                                        max-height="700">
                                    </v-img>
                                    <h3>
                                        {{item.title_2}}
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
                  {title_1: "Sobre o que o livro fala",
                    title_2: "Título do livros completo",
                    disp: "x",
                    sinopse:"aqui ficará uma breve sinopse do livro",
                    rota: "/Login", 
                    src: require("../assets/img1/livro_1.jpg")},

                    {title_1:"abcdefghijklmnopq",
                        title_2:"asdfqwerzcv",disp:"y",
                        sinopse:"adfadsffasdfdasfadsfdas",
                        route:"/",
                        src: require("../assets/img2/img5.jpg")}/*,

                        {title_1:"",
                        title_2:"",disp:"",
                        sinopse:"",
                        route:"",
                        src: require("../assets/")}*/
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
    }
    .luke{
        margin: 0% 6% 0% 6%;
        width: 80%;
        background-color: aquamarine;
        border: black 1px solid;
        border-radius:5px 5px 5px;
    }
    h3, p{
        color: black;
    }
</style>