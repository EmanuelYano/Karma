<template>
    <div class="back-full">
        <div grid-list-sm>
            
                <v-layout row wrap>
                    <v-flex xs12 sm12 md2 ml-3>
                        <v-layout>
                            <v-content>
                                <Navbar />
                            </v-content>
                        </v-layout>
                    </v-flex>  
                
         
                
                    <v-flex xs12 md9 class="liv-list">
                        <v-layout row wrap justify-space-between>
                            <v-flex xs12 sm6 md4 lg4 class="" v-for="item in info" :key="item.titulo_1">
                                <v-card class="sif text-xs-center card-liv-list">
                                    
                                    <h2 class="cap">{{item.titulo_1}}</h2>
                                    <v-img                                        
                                            :src="item.src" 
                                            aspect-ratio=".75" 
                                            class="grey lighten" 
                                            max-width="200" 
                                            max-height="700"
                                            style="margin:0 auto">
                                    </v-img>

                                    <v-card-title primary-title class="text-xs-center">
                                        <div>
                                            <h3>
                                                {{item.titulo_2}}
                                            </h3>
                                            <p style="margin-top:3px;"> 
                                                {{item.sinopse}} 
                                            </p>
                                            <p>
                                                {{item.disp}} disponíveis 
                                            </p>
                                        </div>
                                    </v-card-title>
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on }">
                                        <div class="text-xs-center">
                                            <v-btn  color="success" round v-on="on">Reservar</v-btn>
                                            <v-btn  color="info" round v-on="on">Ver mais</v-btn>
                                        </div>    
                                    </template>
                                        <v-card>
                                        <v-card-title>
                                            <span class="headline">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container grid-list-md>
                                                <v-layout wrap>
                                                    <v-flex xs12 sm6 md4>
                                                    <v-text-field v-model="editedItem.name" label="Título do livro"></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 sm6 md4>
                                                    <v-text-field v-model="editedItem.calories" label="Imagem do livro"></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 sm6 md4>
                                                    <v-text-field v-model="editedItem.fat" label="Subtítulo"></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 sm6 md4>
                                                    <v-text-field v-model="editedItem.carbs" label="Sinopse"></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12 sm6 md4>
                                                    <v-text-field v-model="editedItem.protein" label="Disponíveis"></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                                            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                                        </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-card>                            
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>    
       </div>
    </div>
</template>
<script>
    import Navbar from '@/components/NavbarLivros'
    export default {
        name:'Livros',
        components: {Navbar},
        data(){
            return{
                info:[
                    {titulo_1: "Criando sites com HTML",
                        titulo_2: "Sites de Alta Qualidade com HTML e CSS",
                        disp: "4",
                        sinopse:"Construir sites em conformidade com os Padrões Web do W3C, é uma exigência do mercado. Resgatar a finalidade original da linguagem de marcação HTML...",
                        rota: " ", 
                        src: require("../assets/img1/livro_3.png")},

                        {titulo_1:"CSS Grid Layout",
                            titulo_2:"CSS: ferramenta de layout",disp:"2",
                            sinopse:"A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout...",
                            route:"/",
                            src: require("../assets/img1/livro_2.jpg")},

                            {titulo_1:"Engenharia de redes de computadores",
                                titulo_2:"Evolução da rede mundial de compuatdores",disp:"3",
                                sinopse:"O livro apresenta as redes de computadores com enfoque para Engenharia e mostra a evolução da rede mundial até a Internet, com base em tecnologia da informação...",
                                route:"/",
                                src: require("../assets/img1/livro_1.png")}/*,

                            {titulo_1:"",
                            titulo_2:"",disp:"",
                            sinopse:"",
                            route:"",
                            src: require("../assets/")}*/
                ],
                dialog: false,
        headers: [
            {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Actions', value: 'name', sortable: false }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        }
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
    .back-full{
        height: 100%;
        background-image: url("../assets/img2/img26.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat; 
    }
    .liv-list{
        margin:auto;
        margin-top: 2%;
    }
    .card-liv-list{
        margin-left:5px;    
    }
</style>