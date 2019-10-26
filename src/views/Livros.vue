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
                                               <h3> {{item.disp}} disponíveis </h3> 
                                            </p>
                                        </div>
                                    </v-card-title>
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on }">
                                        <div class="text-xs-center">
                                            <v-btn  color="success" round>Reservar</v-btn>
                                            <v-btn  color="info" round v-on="on">Ver mais</v-btn>
                                        </div>    
                                    </template>
                                        <v-card min-width=" ">
                                            <v-card-title>
                                                <span class="headline">{{ formTitle }}</span>
                                            </v-card-title>

                                            <v-card-text>
                                                <v-container grid-list-md>
                                                    <v-layout wrap>
                                                        <v-card class="sif modal-livro text-xs-center">
                                                            <h2 class="cap">{{item.titulo_1}}</h2>
                                                            <v-img                                        
                                                                    :src="item.src" 
                                                                    aspect-ratio=".75" 
                                                                    class="grey lighten" 
                                                                    max-width="300" 
                                                                    max-height="700"
                                                                    style="margin:0 auto">
                                                            </v-img>

                                                            <v-card-title primary-title class="text-xs-center">
                                                                <div>
                                                                    <h3>
                                                                        {{item.titulo_2}}
                                                                    </h3>
                                                                    <p style="margin-top:3px;" class="text-xs-justify"> 
                                                                        {{item.sinopse2}} 
                                                                    </p>
                                                                    <p>
                                                                    <h3> {{item.disp}} disponíveis </h3>
                                                                    </p>
                                                                    <p>
                                                                    <h3> Quantidade de páginas: {{item.paginas}}</h3>
                                                                    </p>
                                                                    <p>
                                                                        <h3>Autor: {{item.autor}} </h3>
                                                                    </p>
                                                                    <p>
                                                                    <h3> Editora: {{item.editora}}</h3>
                                                                    </p>
                                                                </div>
                                                            </v-card-title>
                                                        </v-card>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" flat round @click="close"><font-awesome-icon icon="times"/> </v-btn>
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
                dialog: false,
                info:[
                    {titulo_1: "Criando sites com HTML",
                        titulo_2: "Sites de alta qualidade com HTML e CSS",
                        disp: "4",
                        sinopse:"Construir sites em conformidade com os Padrões Web do W3C, é uma exigência do mercado. Resgatar a finalidade original da linguagem de marcação HTML...",
                        rota: " ", 
                        src: require("../assets/img1/livro_3.png"),
                        sinopse2:"Construir sites em conformidade com os Padrões Web do W3C, mais do que uma opção de desenvolvimento, é uma exigência do mercado. Resgatar a finalidade original da linguagem de marcação HTML, tal como idealizada pelo seu inventor, Tim Berners-Lee é a palavra-chave que norteia o moderno conceito de escrever HTML. Este livro descreve de forma detalhada cada um dos elementos do HTML, dando ênfase a sua finalidade. Um capítulo é dedicado exclusivamente às folhas de estilo em cascata (CSS), que forma uma dupla inseparável com HTML. Para ilustrar a teoria, os assuntos apresentados são complementados com códigos-fonte, exemplos e figuras. O leitor será guiado passo a passo na construção de um site real e funcional, para consulta e consolidação do aprendizado. No site de apoio ao livro, o leitor encontrará os códigos-fonte para download e informações complementares.",
                        paginas:"432",
                        autor:"Maurício Samy Silva",
                        editora:"Novatec"},

                        {titulo_1:"CSS Grid Layout",
                            titulo_2:"CSS: ferramenta de layout",disp:"2",
                            sinopse:"A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout...",
                            route:"/",
                            src: require("../assets/img1/livro_2.jpg"),
                            sinopse2:"",
                            paginas:"",
                            autor:"",
                            editora:""},

                            {titulo_1:"Engenharia de redes de computadores",
                                titulo_2:"Evolução da rede mundial de compuatdores",disp:"3",
                                sinopse:"O livro apresenta as redes de computadores com enfoque para Engenharia e mostra a evolução da rede mundial até a Internet, com base em tecnologia da informação...",
                                route:"/",
                                src: require("../assets/img1/livro_1.png"), 
                                sinopse2:"",
                                paginas:"",
                                autor:"",
                                editora:""}/*,

                            {titulo_1:"",
                            titulo_2:"",disp:"",
                            sinopse:"",
                            route:"",
                            src: require("../assets/"),
                            sinopse2:"",
                            paginas:"",
                            autor:"",
                            editora:""}*/
                ],
                headers: [
                    {
            
                    }
                ],
                methods:{   
                    close () {
                        this.dialog = false
                    },    
                }   
            } 
        } 
    }
</script>
<style>
    h3, p{
        color: black;
    }
    h2{
        font-size:28px;
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
    .modal-livro{
        top:-45px;
        margin-bottom: -11%; 
    }
    .v-dialog{
        max-width: 800px !important;
    }
</style>