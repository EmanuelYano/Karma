<template>
    <v-container >
        <v-layout align-center justify-center row fill-height>
            <v-flex >
                <!--v-card color="hela">
                    <v-card-title>
                        <h3>Cadastre o livro</h3>
                    </v-card-title>
                    <v-layout align-center justify-center >
                            <v-flex xs12 sm6 md6 lg5 class="mr-5 mt-3">
                                <v-text-field outline color="black" label="Nome do livro">  </v-text-field>
                                <v-text-field outline color="black" label="Autor do livro"> </v-text-field>
                                <v-text-field outline color="black" label="Editora"> </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg5 mt-3>
                                <v-text-field outline color="black" label="Gênero"> </v-text-field>  colocar um select
                                <v-text-field outline color="black" label="Qtd. livros disponíveis" type="number"> </v-text-field>  colocar um type number
                                <v-text-field outline color="black" label="Sinopse"> </v-text-field>
                            </v-flex>
                    </v-layout>
                    <v-layout justify-center>
                        <v-card-actions>
                            <v-btn color="success">Salvar</v-btn> 
                            <v-btn color="error">Cancelar</v-btn>
                            <v-btn color="info">Editar</v-btn>
                        </v-card-actions>
                    </v-layout>
                </v-card--->
                 <div>
                    <v-toolbar flat color="white">
                    <v-toolbar-title>My CRUD</v-toolbar-title>
                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                        </template>
                        <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
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
                    </v-toolbar>
                    <v-data-table
                    :headers="headers"
                    :items="desserts"
                    class="elevation-1"
                    >
                    <template v-slot:items="props">
                        <td>{{ props.item.nome }}</td>
                        <td class="text-xs-right">{{ props.item.telefone }}</td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="justify-center layout px-0">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                        >
                            edit
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(props.item)"
                        >
                            delete
                        </v-icon>
                        </td>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
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
    export default {
        data: () => ({
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
        }),

        computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
            this.desserts = await LoginService.listar()
            
        },

        editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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


