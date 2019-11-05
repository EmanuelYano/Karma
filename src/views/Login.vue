<template>
    <div class="teste">
        <v-container grid-list-xl text-xs-left fill-height >
            <v-layout align-center justify-center row fill-height >
                <v-flex xs12 sm7 md6 lg5>
                     <v-alert
                        v-model="alert"
                        :color="cor"
                        dismissible>
                        {{mensagem}}
                    </v-alert>
                    <v-card color="vision ml-2 mr-2">
                        <v-layout justify-center>
                            <v-card-title primary-title>
                                <h1 class="font-weight-light text-uppercase"> Login </h1>
                            </v-card-title>
                        </v-layout>
                        <v-card-text class="font-weight-regular" > 
                            <v-text-field color="black" outline label="Digite seu email" v-model="usuario.email" autofocus></v-text-field>
                            <v-text-field color="black" outline label="Digite sua senha" type="password" v-model="usuario.senha"></v-text-field>
                            <v-btn color="rgba(211,160,95,.9)" align-center justify-center @click="entrar" block> Entrar</v-btn>                   
                        </v-card-text>
                        <v-layout justify-center>
                            <v-card-actions>
                                <v-btn flat small to="/cadastro" class="odin">Cadastra-se</v-btn>
                                <v-btn flat small class="odin" >Esqueceu a senha?</v-btn>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-dialog v-model="abrir" hide-overlay persistent width="300">
                <v-card color="primary" dark>
                    <v-card-text>
                        Entrando ...
                        <v-progress-linear indeterminate color="white" class="mb-0">
                        </v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>
<script>
import LoginService from '../service/LoginService.js'
export default {
    data(){
        return{
            usuario:{ },
            alert: false,
            mensagem: "",
            cor: "",
            abrir: false
        }
    },
   /*watch:{
        abrir(val) {
            console.log(val)
        if (!val) return

        setTimeout(() => (this.abrir  = false), 1000)
      }
    },*/
    methods:{
        async entrar(){
            this.abrir = true
            let usuario = await LoginService.logar(this.usuario)
            console.log()
            if(usuario){
                this.cor = 'success'
                this.mensagem = 'Login realizado com sucesso'
                this.alert = true
                this.abrir = false
                //window.location.replace('perfil')
            }else{
                this.cor = 'error'
                this.mensagem = 'Erro ao realizar login. Email ou senha inválidos!'
                this.alert = true
                this.abrir = false
            }
        }
    }
}
</script>

<style scoped>
    >>>.v-label--active{
         transform: translateY(-12px) scale(0.72) !important;
    }
    .teste{
        /*height: 100%;
        background-image: url("../assets/img2/img22.jpg"); 
        background-size: 100% 100%;
        background-repeat: no-repeat; */
        background-color: #d28f3b;
        height: 800px;  
    }
    .vision{
        background-color: rgba(222,184,135,.9);
       
    }
    .odin{
        margin-bottom:6%;
    }
</style>
