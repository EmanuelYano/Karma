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
                        <v-card-title>
                            <span class="headline">Novo Livro</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="livro.nome_livro" label="Nome"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="livro.subtitulo" label="Subtitulo"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="livro.sinopse" label="Sinopse"></v-text-field>
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
                            </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
                            <v-btn color="blue darken-1" flat @click="save">Salvar</v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                        <template v-slot:items="props">
                            <td>{{ props.item.nome_livro }}</td>
                            <td class="text-xs-right">{{ props.item.autor }}</td>
                            <td class="text-xs-right">{{ props.item.editora }}</td>
                            <td class="text-xs-right">{{ props.item.n_paginas }}</td>
                            <td class="text-xs-right">{{ props.item.n_disp }}</td>
                            <td class="justify-center layout px-0">
                            <!--v-icon small  class="mr-2" @click="editItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-3" size="2x" @click="editItem(props.item)" icon="edit"/>
                            <!--v-icon small @click="deleteItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-2" size="2x" @click="deleteItem(props.item)" icon="trash-alt"/>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="info" @click="initialize">Atualizar</v-btn>
                        </template>
                    </v-data-table>
                </div> 
            </v-flex>
        </v-layout> 
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
import LoginService from '../service/LoginService.js'
import LivrosService from '../service/LivrosService.js'
    export default {
        data: () => ({
        dialog: false,
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
        desserts: [],
        editedIndex: -1,
        livro: {
            name: '',
            subtitulo: 0,
            sinopse:0,
            autor: 0,
            editora: 0,
            n_paginas: 0,
            n_disp: 0
        }
        }),

        computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'Novo Livro' : 'Editar livro'
        }
        },

        watch: {
        dialog (val) {
            val || this.close()
        }
        },

        created () {
        this.initialize()
        },

        methods: {
        async initialize () {
            this.desserts = await LivrosService.listar()
            
        },

        editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            const index = this.desserts.indexOf(item)
            confirm('Você deseja realmente excluir o item?') && this.desserts.splice(index, 1)
        },

        close () {
            this.dialog = false
            setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 300)
        },

        save () {
            if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
            this.desserts.push(this.editedItem)
            }
            this.close()
        }
        }
    }
</script>


