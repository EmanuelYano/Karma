<template>
    <v-container >
        <v-layout align-center justify-center row fill-height>
            <v-flex >
                 <div>
                    <v-toolbar flat color="white">
                    <v-toolbar-title>Lista de livros adicionados</v-toolbar-title>
                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="info" dark class="mb-2" v-on="on">Adicionar novo livro</v-btn>
                        </template>
                        <v-card>
                            <v-alert v-model="alert" :color="cor" dismissible>
                                {{message}}
                            </v-alert>
                            <v-card-title>
                                <span class="headline">Novo Livro</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap> 
                                        <v-flex xs12 > 
                                            <v-image-input
                                            v-model="livro.imageData"
                                            uploadIcon="adicionar imagem"                        
                                            :image-quality="2"
                                            clearable
                                            image-format="jpeg"
                                            ></v-image-input>  
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.nome_livro" label="Nome"></v-text-field>
                                        </v-flex>                                        
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.subtitulo" label="Subtitulo"></v-text-field>
                                        </v-flex>
                                        
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.autor" label="Autor"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.editora" label="Editora"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.n_paginas" type="number" label="Quantidade de páginas"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.n_disp" type="number" label="Quantidade disnponível"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="livro.categoria" label="Categoria (gênero)"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm12 md8>
                                        <!--v-text-field v-model="livro.sinopse" label="Sinopse"></v-text-field-->
                                         <v-textarea v-model="livro.sinopse" style="height:30px;" rows="2" label="Sinopse" value="Sinopse"></v-textarea>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="cancelar()">Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click="salvar()">Salvar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="listaLivros" class="elevation-1">
                        <template v-slot:items="props">
                            <td style="display:none">{{ props.item._id }}</td>
                            <td>{{ props.item.nome_livro }}</td>
                            <td class="text-xs-right">{{ props.item.autor }}</td>
                            <td class="text-xs-right">{{ props.item.editora }}</td>
                            <td class="text-xs-right">{{ props.item.n_paginas }}</td>
                            <td class="text-xs-right">{{ props.item.n_disp }}</td>
                            <td class="justify-center layout px-0">
                            <!--v-icon small  class="mr-2" @click="editItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-3" size="2x" @click="editItem(props.item._id)" icon="edit"/>
                            <!--v-icon small @click="deleteItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-2" size="2x" @click="deleteItem(props.item)" icon="trash-alt"/>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="info" @click="initialize">Atualizar</v-btn>
                        </template>
                    </v-data-table>
                </div>
                <v-dialog v-model="edit" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar livro</span>
                        </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 > 
                                            <v-image-input
                                            v-model="livroEdit.imageData"
                                            uploadIcon="adicionar imagem"                        
                                            :image-quality="2"
                                            clearable
                                            image-format="jpeg"
                                            ></v-image-input>  
                                        </v-flex>
                                        <v-text-field style="display:none" v-model="livroEdit._id"></v-text-field>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.nome_livro" label="Nome" autofocus aria-required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.subtitulo" label="subtitulo"></v-text-field>
                                        </v-flex>                                                                                
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.autor" label="autor"></v-text-field>
                                        </v-flex>                                
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.editora" label="editora"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.n_paginas"  label="n_paginas"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.n_disp"  label="n_disp"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="livroEdit.categoria"  label="categoria"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm12 md8>                                        
                                            <v-textarea v-model="livroEdit.sinopse" rows="2" auto-grow style="height:30px;" label="Sinopse" value="Sinopse"></v-textarea>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="cancelar()" >Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click="salvarEdit(livroEdit._id)">Salvar</v-btn>
                            </v-card-actions>
                    </v-card>
                </v-dialog> 
            </v-flex>
        </v-layout> 
        
        <v-dialog v-model="deleteVorf" hide-overlay persistent width="600">
            <v-card :color="cor">
                <v-card-text>
                    {{message}}
                </v-card-text>
                <v-card-text class="text-right">
                    <v-spacer></v-spacer>
                    <v-btn @click="cancelar">Não</v-btn>
                    <v-btn @click="deleta(true)">Sim</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar
        v-model="alerta"
        bottom
        multi-line       
        :timeout=6000
        :color="cor">
        {{ message }}
        <v-btn
            dark
            flat
            @click="alerta = false">
            Fechar
        </v-btn>
        </v-snackbar>
    </v-container>
</template>
<style scoped>
    >>> .v-label--active{
        transform: translateY(-27px) translateX(-8px) scale(0.75) !important;
        background: rgb(238, 208, 130);
        padding: 0px 10px;
    }
</style>
<script>
import LivrosService from '../service/LivrosService.js'
    export default {
        data: () => ({
        dialog: false, message:"",cor:"",alert:false,abrir:false,alerta:false,edit:false,deleteVorf:false,deletar: false,
        headers: [
            {
            text: 'Nome do livro',
            align: 'left',
            sortable: false,
            value: 'nome_livro'
            },
            { text: 'Autor', value: 'autor' },
            { text: 'Editora', value: 'editora' },
            { text: 'Nº páginas', value: 'n_paginas' },
            { text: 'Nº disponível', value: 'n_disp' },
            { text: 'Ação', value: 'name', sortable: false }
        ],
        listaLivros: [],
        livroEdit: {},
        livro: {},
        itemASerDeletado: {}
        }),
        watch: {
            dialog (val) {
                val || this.cancelar();
                val || this.salvar();
            },            
        },
        created () {
                this.initialize();
            },
        methods: {
            async initialize () {
                this.listaLivros = await LivrosService.listar();
                
            },
            cancelar() {
                this.dialog = false;
                this.livro = {};
                //this.alert = false;
                this.deleteVorf = false;
                this.edit = false;
                //this.alerta = false;                                
            },
            //salvar livro
            async salvar(){
               try{
                    let z = await LivrosService.verificarCampos(this.livro);                    
                    if (z == true){
                        this.message = 'Por favor! Preencha todos os campos';
                        this.cor = 'error';
                        this.alerta = true;
                        return
                    }
                    let cadSucesso = await LivrosService.salvar(this.livro)
                    if(cadSucesso){
                        this.alerta = true;
                        this.message = 'Livro cadastrado com sucesso';
                        this.cor = 'success';
                        this.livro = {};             
                    }              
               }catch(err){
                   console.log(err);
               }finally{
                   this.initialize();                   
               }
            },
            //editar item
            async editItem(id){
                let info = await LivrosService.buscarId(id)
                this.livroEdit._id = info._id; 
                this.livroEdit.nome_livro = info.nome_livro;
                this.livroEdit.subtitulo = info.subtitulo;
                this.livroEdit.sinopse = info.sinopse;
                this.livroEdit.autor = info.autor;
                this.livroEdit.editora = info.editora;
                this.livroEdit.n_paginas = info.n_paginas;
                this.livroEdit.n_disp = info.n_disp;
                this.livroEdit.categoria = info.categoria;
                if(info){
                    this.edit = true;
                }
            },
            async salvarEdit(){
                try{
                    let conf = await LivrosService.editar(this.livroEdit);
                    if(conf){
                        this.alerta = true;
                        this.message = 'Livro editado com sucesso';
                        this.cor = 'success';
                        this.edit = false;
                    }
                }catch(err){
                    console.log(err);
                }finally{
                    this.initialize();
                }
            },
            //deletar item
            async deleta(){
                try{
                    this.message = 'Deletando ' + this.itemASerDeletado.nome_livro + '! Aguarde...'
                    this.cor = 'info';
                    this.alerta = true;
                    this.deleteVorf = false;
                    let x = await LivrosService.deletar(this.itemASerDeletado._id);
                    if (x){
                        this.message = this.itemASerDeletado.nome_livro + ' deletado com sucesso!'
                        this.cor = 'success';
                        this.alerta = true;
                        this.deleteVorf = false;
                    }else{
                        this.message = 'Erro ao deletar ' + this.itemASerDeletado.nome_livro +'. Tente novamente!'
                        this.cor = 'error';
                        this.alerta = true;
                        this.deleteVorf = false;
                    }                
                }catch(err){
                    console.log(err)
                }finally{
                    this.initialize()
                }
            },
            deleteItem(livro){
                this.itemASerDeletado = livro;
                this.message = "Você deseja realmente excluir " + this.itemASerDeletado.nome_livro + " ?";
                this.deleteVorf = true;
                this.cor = 'info';
            }            
        }   
    }
</script>


