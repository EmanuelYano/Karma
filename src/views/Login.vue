<template>
    <div class="teste">
        <v-container grid-list-xl text-xs-left fill-height >
            <v-layout align-center justify-center row fill-height >
                <v-flex xs12 sm7 md6 lg5>
                     <!-- <v-alert
                        v-model="alert"
                        :color="cor"
                        dismissible>
                        {{mensagem}}
                    </v-alert> -->
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
                                <v-btn flat small to="" @click="recSenha = true" class="odin" >Esqueceu a senha?</v-btn>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        <!-- recuperar senha -->
            <v-dialog v-model="recSenha" persistent width="500">
                <v-card color="sif darken-0">                    
                    <v-card-title>
                        <h1 style="margin: auto">Recuperar senha</h1>
                    </v-card-title>
                    <div v-if="recupSenhaInicial">
                        <v-card-text>
                            <v-flex>
                                <v-text-field outline color="black" label="Digite seu e-mail" v-model="usuarioEmail.email"></v-text-field>
                            </v-flex>
                            <p>
                                {{texto}}
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="red" @click="recSenha = false; usuarioEmail.email = ''; ">
                                Cancelar
                            </v-btn>
                            <v-btn flat color="success darken-1" dark @click="recuperar">
                                Recuperar senha
                            </v-btn>                          
                        </v-card-actions>
                    </div>
                    <div  v-if="recupSenhaFinal">
                        <v-card-text>
                            <v-flex xs12>
                                <v-text-field outline color="black" label="Digite seu código de aluno" v-model="recSenhaUsu.codigo"></v-text-field>
                            
                                <v-text-field outline color="black" label="Digite a sua nova senha" type="password" v-model="recSenhaUsu.senha"></v-text-field>
                            
                                <v-text-field outline color="black" label="Confirme sua nova senha" type="password" v-model="senha"></v-text-field>
                            </v-flex>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="red" @click="cancelar">
                                Cancelar
                            </v-btn>
                            <v-btn @click="salvar" flat color="blue darken-3">Salvar</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-dialog>

            <v-dialog v-model="abrir" hide-overlay persistent width="300">
                <v-card color="primary" dark>
                    <v-card-text>
                        Entrando ...
                        <v-progress-linear indeterminate color="white" class="mb-0">
                        </v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-snackbar v-model="alert" top multi-line :timeout=4000 :color="cor">
                {{ mensagem }}
                <v-btn dark flat @click="alerta = false">
                    Fechar
                </v-btn>
            </v-snackbar>
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
            usuarioEmail:{},
            recSenhaUsu: {},
            dadosUsu:  {},
            texto:"",
            recSenha:false,
            abrir: false,
            senha:"",
            recupSenhaInicial: true,
            recupSenhaFinal: false,

        }
    },   
    methods:{
        async recuperar(){
            let resp = await LoginService.buscarEmail(this.usuarioEmail)
            if(resp){
                this.texto = "Aguarde! Você será redirecionada a área de troca de senha."
                setTimeout(() => { this.texto = "", this.usuarioEmail = {},this.recupSenhaFinal = true,
                this.recupSenhaInicial = false }, 2500);
                this.recSenhaUsu.id = resp._id
                this.dadosUsu = resp 
            }else{
                this.texto = "Desculpe! Não encontramos seu cadastro em nosso sistema. Por favor verifique seu e-mail."
            }
            
        },
        async salvar(){
            let x = LoginService.compararSenha(this.recSenhaUsu.senha, this.senha)
            if(!x){
                this.alert = true
                this.cor = "error"
                this.mensagem = "Senhas diferentes!"
                return
            }
            if(this.recSenhaUsu.codigo != this.dadosUsu.codigo){
                this.alert = true
                this.cor = "error"
                this.mensagem = "Não encontramos esse código em nosso sistema! Verifique e tente novamente!"
                return
            }
            this.dadosUsu.senha = this.recSenhaUsu.senha
            let resp = await LoginService.editar(this.dadosUsu)
            setTimeout(() => {this.recSenha = false, this.senha = "", this.recSenhaUsu = {},setTimeout(() => {this.recupSenhaFinal = false,this.recupSenhaInicial = true}, 100);}, 1000);       
        },
        cancelar(){
            this.recSenha = false 
            this.recSenhaUsu = {}
            setTimeout(() => {this.recupSenhaFinal = false,this.recupSenhaInicial = true}, 1);           
        },
        async entrar(){
            // let y = LoginService.verCamposLogin(this.usuario)
            // if(y==true){
            //     this.alert = true
            //     this.cor = "error"
            //     this.mensagem = "Campos em branco! Por favor digite seu email e senha!"
            //     return
            // }
            this.abrir = true
            let usuario = await LoginService.logar(this.usuario)
            if(usuario){
                this.cor = 'success'
                this.mensagem = 'Login realizado com sucesso'
                this.alert = true
                this.abrir = false
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
                           
                this.$router.push('perfil')
                
            }else{
                this.cor = 'error'
                localStorage.setItem("usuarioLogado", null)
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
