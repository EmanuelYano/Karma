<template>
    <v-container >
  
        <v-card color="">
            <v-layout align-center justify-center >
                    <v-flex xs12 sm6 md6 lg4 class="mr-5 mt-3">
                        <v-text-field outline color="black" label="Nome do livro">  </v-text-field>
                        <v-text-field outline color="black" label="Autor do livro"> </v-text-field>
                        <v-text-field outline color="black" label="Editora"> </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg4 mt-3>
                        <v-text-field outline color="black" label="Gênero"> </v-text-field> <!-- colocar um select-->
                        <v-text-field outline color="black" label="Sinopse"> </v-text-field>
                        <v-text-field outline color="black" label="Qtd. livros disponíveis"> </v-text-field> <!-- colocar um type number -->
                    </v-flex>
            </v-layout>
        </v-card>  
           

    </v-container>
</template>
<style scoped>
    >>> .v-label--active{
        transform: translateY(-27px) scale(0.75) !important;
        background: rgb(250, 250, 250);
        padding: 0px 10px;
    }
</style>

