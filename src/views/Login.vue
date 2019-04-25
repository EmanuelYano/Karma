<template >
    <v-container grid-list-xl text-xs-left fill-height>
        <v-layout align-center justify-center row fill-height >
            <v-flex xs12 sm6 md4 lg6>
                <v-card dark color="primary">
                    <v-card-title primary-title>
                        <h2 class="font-weight-regular font-italic"> Login </h2>
                    </v-card-title>
                    <v-card-text class="font-weight-regular" > 
                        <v-text-field label="Digite seu email"></v-text-field>
                        <v-text-field label="Digite sua senha" type="password"></v-text-field>
                        <v-btn color="green" align-center justify-center >Entrar</v-btn>
                        <!----<input v-model="email">
                        <input v-model="senha"> 
                        <v-btn color="blue">Entrar</v-btn> -->                      
                    </v-card-text>
                    <v-card-text>
                        <v-btn flat small to="/cadastro">Cadastra-se</v-btn>
                        <v-btn flat small>Esqueceu a senha?</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>
    .v-content{
        background-image: url("../../img2/img1.jpg");    
    }
</style>
