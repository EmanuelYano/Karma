<template>
    <div class="teste">
        <v-container grid-list-xl text-xs-left fill-height >
            <v-layout align-center justify-center row fill-height >
                <v-flex xs12 sm7 md6 lg5>
                     <v-alert
                        :value="false"
                        :type="cor"
                        >
                        {{mensagem}}
                    </v-alert>
                    <v-card color="vision ml-2 mr-2">
                        <v-layout justify-center="">
                            <v-card-title primary-title>
                                <h1 class="font-weight-medium text-uppercase"> Login </h1>
                            </v-card-title>
                        </v-layout>
                        <v-card-text class="font-weight-regular" > 
                            <v-text-field outline label="Digite seu email" v-model="email" autofocus></v-text-field>
                            <v-text-field outline label="Digite sua senha" type="password" v-model="pass"></v-text-field>
                            <v-btn color="green" align-center justify-center @click="tyr" block> Entrar</v-btn>                   
                        </v-card-text>
                        <v-layout justify-center>
                            <v-card-actions>
                                <v-btn flat small to="/cadastro">Cadastra-se</v-btn>
                                <v-btn flat small >Esqueceu a senha?</v-btn>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import LoginService from '../service/LoginService.js'
export default {
    data(){
        return{
            email:"",
            pass: "",
            value: false,
            mensagem: "",
            cor: ""
        }
    },
    methods:{
        tyr(){
            let x = LoginService.logar(this.email,this.senha)
            if(x == true){
                this.cor = 'success'
                this.mensagem = 'Login realizado com sucesso'
                this.alert = true
            }else{
                this.cor = 'error'
                this.mensagem = 'Erro ao realizar login'
                this.alert = true
            }
        }
    }
}
</script>

<style scoped>
    .teste{
        height: 100%;
        background-image: url("../../img2/img1_1.png"); 
        background-size: 100% 100%;
        background-repeat: no-repeat;   
    }
    .vision{
        background-color: rgba(250,250,210,.84);
        border-radius: 10px 10px;
        border: .1px solid black;
        
    }
</style>
