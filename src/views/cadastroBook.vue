<template>
    <v-container >
        <v-layout align-center justify-center row fill-height>
            <v-flex >
                <v-card color="hela">
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
                                <v-text-field outline color="black" label="Gênero"> </v-text-field> <!-- colocar um select-->
                                <v-text-field outline color="black" label="Qtd. livros disponíveis" type="number"> </v-text-field> <!-- colocar um type number -->
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
                </v-card> 
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

