<template>
   <v-container 
    fill-height
    fluid
    grid-list-xl>
    
        <v-layout justify-center wrap>            
                <v-flex xs12 md8>
                <v-card>
                        <material-card class="v-card-profile" >
                            <v-avatar slot="offset" class="mx-auto d-block" size="130">
                                <img src="">
                            </v-avatar>
                            <v-card-text class="text-xs-center">
                                <h4 class="card-title font-weight-light">{{usuario.nome}}</h4>                            
                            </v-card-text>
                        </material-card>
                    
                        <v-card elevation="3">
                            <v-form>
                                <v-container py-0>
                                    <v-layout wrap>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                v-model="aa" color="success" label="Status da reserva:" disabled/>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                class="purple-input" label="Nome" v-model="usuario.nome"/>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                label="Código do aluno" class="purple-input" v-model="usuario.codigo"/>
                                            </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field
                                                label="Email" class="purple-input" v-model="usuario.email"/>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-layout>
                                                <v-flex xs10 md11 >
                                                    <v-text-field label="Senha" class="purple-input"  type="password" :disabled="travaSeg" v-model="usuario.senha"/>
                                                </v-flex>
                                                <v-flex xs2 md1 p-0 style="margin-top: 7%;margin-left: -2%;">
                                                    <v-btn v-if="destravar" flat fab small @click="destravaSenha"><font-awesome-icon icon="unlock" size="1x"/></v-btn>
                                                    <v-btn v-if="travar" flat fab small  @click="travaSenha"><font-awesome-icon icon="lock" size="1x" /></v-btn>
                                                </v-flex> 
                                            </v-layout> 
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                label="Código do aluno" class="purple-input" v-model="usuario.codigo" />
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                label="Telefone" mask="(##) #####-####" class="purple-input" v-model="usuario.telefone" />
                                        </v-flex>
                                        <v-flex xs6 md2>
                                            <v-text-field label="Série" class="purple-input" v-model="usuario.serie" />
                                        </v-flex>
                                        <v-flex xs6 md2>
                                            <v-text-field
                                                label="Turma"
                                                class="purple-input"/>
                                            </v-flex>
                                        <v-flex xs12 text-xs-right>
                                            <v-btn
                                                class="mx-0 font-weight-light"
                                                color="primary" @click="atualizar" >
                                                Atualizar Perfil
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card>
                     </v-card>
                </v-flex>               
        </v-layout>   
  </v-container>
</template>
<script>
    import LoginService from '../service/LoginService.js'
    export default {
        data () {
        return {
            destravar: true, travar: false, travaSeg: true,aa:"", usuario:{}
            
        }
        },
        async created(){
            let user = JSON.parse(localStorage.getItem("usuarioLogado"))            
            let user2 = await LoginService.buscarid(user._id)
            this.usuario.nome = user2.nome
            this.usuario.codigo = user2.codigo
            this.usuario.email = user2.email
            this.usuario.senha = user2.senha
            this.usuario.telefone = user2.telefone
            this.usuario.serie = user2.serie
        },       
        methods:{
            destravaSenha(){
                this.destravar = false;
                this.travar = true;
                this.travaSeg = false;
            },
            travaSenha(){
                this.destravar = true;
                this.travar = false;
                this.travaSeg = true;
            },
            async atualizar(){
                try {
                    //console.log(this.usuario)
                    let conf = await LoginService.editar(this.usuario)
                    
                    if (conf){
                        console.log("aaa")
                        location.reload()
                    }
                } catch (error) {
                    console.log(error)
                }finally{
                    
                }
                
            }
        }
    }
</script>