<template>
    <div class="back-full">
        <div grid-list-sm>
            
            <v-layout row wrap>
                <!--v-flex xs12 sm12 md2 ml-3 mr-3>
                    <v-layout>
                        <v-content>
                            <Navbar />
                        </v-content>
                    </v-layout>
                </v-flex-->  
            
                <v-flex xs12 md11 class="liv-list">
                    <v-layout id="listaLivros" row wrap justify-space-between>
                        <v-flex class="filtro-livro" xs11 sm6 md4 m-auto v-for="item in info" :key="item.nome_livro">
                            <v-card class="sif text-xs-center card-liv-list" max-width="90%" style="margin-left:2%">
                                
                                <h2 class="cap text-truncate">{{item.nome_livro}}</h2>
                                <v-img                                        
                                        :src="item.imageData" 
                                        aspect-ratio=".75" 
                                        class="grey lighten" 
                                        max-width="200" 
                                        max-height="700"
                                        style="margin:0 auto">
                                </v-img>

                                <v-card-title primary-title class="text-center">                                        
                                    <h3 class="card-text-items text-truncate" style="margin: auto;">
                                        {{item.subtitulo}}
                                    </h3>
                                    <p style="margin-top:3px;" class="card-text-items text-xs-justify text-truncate"> 
                                        {{item.sinopse}} 
                                    </p>
                                     
                                    <h3 class="card-text-items text-truncate" style="margin: auto;"> {{item.n_disp-item.reservas}} disponíveis </h3>
                                        
                                                                           
                                </v-card-title>
                                <div class="text-xs-center">
                                        <v-btn  color="success" v-if="liberaBtn" round @click="reservar(item._id)" :disabled="(item.n_disp-item.reservas)<1 || a == true">Reservar</v-btn>
                                        <v-btn  color="info" round @click="verMais(item._id)">Ver mais</v-btn>
                                </div>        
                            </v-card>
                            
                    

                            <!-- Ver mais -->  
                            <v-dialog v-model="dialog">                               
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline"><!--{{ formTitle }}--></span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-container grid-list-md>
                                                <v-layout wrap>
                                                    <v-card class="sif modal-livro text-xs-center">
                                                        <h2 class="cap">{{verMaisInfoLivro.nome_livro}}</h2>
                                                        <v-img                                        
                                                                :src="verMaisInfoLivro.imageData" 
                                                                aspect-ratio=".75" 
                                                                class="grey lighten" 
                                                                max-width="300" 
                                                                max-height="700"
                                                                style="margin:0 auto">
                                                        </v-img>

                                                        <v-card-title primary-title class="text-xs-center">
                                                            <div>
                                                                <h3>
                                                                    {{verMaisInfoLivro.subtitulo}}
                                                                </h3>
                                                                <p style="margin-top:3px;" class="text-xs-justify"> 
                                                                    {{verMaisInfoLivro.sinopse}} 
                                                                </p>
                                                                <div class="text-xs-center">
                                                                    <p></p>
                                                                    <div >
                                                                        <h4 style="display:inline-block; margin-right:5%;">Autor: {{verMaisInfoLivro.autor}} </h4>
                                                                        <h4 style="display:inline-block; margin-left:5%;"> Editora: {{verMaisInfoLivro.editora}}</h4>
                                                                    </div>
                                                                    <div>
                                                                        <h4> Quantidade de páginas: {{verMaisInfoLivro.n_paginas}} páginas</h4>
                                                                        <h4> Quantidade de livros disponíveis: {{verMaisInfoLivro.n_disp-item.reservas}} livros </h4>
                                                                    </div>
                                                                </div>
                                                            </div>                                                                
                                                        </v-card-title>
                                                    </v-card>
                                                </v-layout>
                                            </v-container>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="error dark-1" flat round @click="close"><!-- <font-awesome-icon icon="times"/> -->Sair </v-btn>
                                            <v-btn  color="success" v-if="liberaBtn" flat round @click="reservar(item._id)" :disabled="(item.n_disp-item.reservas)<1 || a == true">Reservar</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>                                                           
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>    
       </div>
       <v-dialog v-model="carregaLivros"  persistent>
        <v-card color="sif">
            <v-card-title>
                <h3 style="margin:auto"> Aguarde um momento enquanto os livros são carregados. </h3>
            </v-card-title>
            <v-card-text>
                 <v-progress-linear indeterminate color="black" class="mb-0">
                        </v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
    
</template>
<script>
    import Navbar from '@/components/NavbarLivros'
    import LivrosService from '../service/LivrosService.js'
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    Vue.use(BootstrapVue)
    export default {
        name:'Livros',
        components: {Navbar},
        data(){
            return{
                dialog: false,imageData:"",liberaBtn:true, carregaLivros:false,a:false,b:false,
                info:[],
                listarLivros: {},
                verMaisInfoLivro: {},
                headers: [{}]
                }
            },
            mounted(){
                let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
                var x = usuario._id
                if(usuario == null || !usuario._id){
                    this.liberaBtn = false
                    //this.$router.push('login')
                }
            },
            created(){
                this.inicializar()
            },            
            methods:{ 
                teste(){
                    // console.log(this.imageData)
                }  ,
                close () {
                    this.dialog = false
                },
                async inicializar(){
                    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
                    let x = "" 
		    let resp
		    if(usuario != null){
 		      x = usuario._id
		      resp = await LivrosService.buscaReserva(x)
                      if(resp.reserva >= "1"){
                          this.a = true
                      }  
                    }
                    
                    this.carregaLivros = true
                    this.listarLivros = await LivrosService.listar()                    
                    this.carregaLivros = false
                    this.info = this.listarLivros                     
                },
                async verMais(id){
                    let x = await LivrosService.buscarId(id);
                    this.verMaisInfoLivro = x;
                    this.dialog = true;
                },
                async reservar(id){
                    //alert("Infelizmente essa função se encontra indisponivel!")
                    try{
                        let reserva = {}
                        reserva.livro = id
                        reserva.usuario = JSON.parse(localStorage.getItem("usuarioLogado"))._id
                        let resp = await LivrosService.reservar(reserva)
                        console.log(resp)
                    }catch(error){
                        console.log(error)
                    }finally{
                        this.$router.push('/perfil');
                        this.inicializar();
                    }

                }
            }  
        } 
</script>
<style>
    h3,h4, p{
        color: black;
    }
    h2{
        font-size:28px;
    }
    .cap{
        width:80%;
        text-align: center;
        margin: 2px auto;
    }
    .card-text-items h3,p{
        width:90%;
        text-align: center;
        margin: 2px auto;
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