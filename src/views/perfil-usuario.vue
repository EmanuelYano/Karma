<template>
   <v-container 
    fill-height
    fluid
    grid-list-xl>
    
        <v-layout justify-center wrap>            
                <v-flex xs12 md8>
                    <!-- <h1 style="display: "> </h1> -->
                <v-card>
                        <material-card class="v-card-profile" >
                            <v-avatar slot="offset" class="mx-auto d-block" size="180">
                                <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="Foto de perfil" title="Foto  de perfil" style="margin-top:5%">
                                <v-btn fab dark small color="primary" @click="editarImagem" class="img-edit-btn">
                                    <font-awesome-icon icon="user-edit" size="1x"/>
                                </v-btn>
                            </v-avatar>
                            <v-card-text class="text-xs-center">
                                <h4 class="card-title font-weight-light">{{usuarioUp.nome}}</h4>                            
                            </v-card-text>
                        </material-card>
                    
                        <v-card elevation="3">
                            <v-form>
                                <v-container py-0>
                                    <v-layout wrap>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                outline v-model="aa" color="black" label="Status da reserva:" disabled/>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                outline class="purple-input" color="black" label="Nome" v-model="usuarioUp.nome"/>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                outline label="Código do aluno" color="black" class="purple-input" v-model="usuarioUp.codigo"/>
                                            </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field
                                                outline label="Email" color="black" class="purple-input" v-model="usuarioUp.email"/>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-layout>
                                                <v-flex xs11 md11 >
                                                    <v-text-field outline label="Senha" color="black" class="purple-input"  type="password" :disabled="travaSeg" v-model="usuarioUp.senha"/>
                                                </v-flex>
                                                <v-flex xs1 md1 p-0 style="margin-top: 2%;margin-left: -3%;">
                                                    <v-btn v-if="destravar" flat fab  @click="verificarSenha"><font-awesome-icon icon="unlock" size="1x"/></v-btn>
                                                    <v-btn v-if="travar" flat fab  @click="travaSenha"><font-awesome-icon icon="lock" size="1x" /></v-btn>
                                                </v-flex> 
                                            </v-layout> 
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                               outline label="Código do aluno" color="black" class="purple-input" v-model="usuarioUp.codigo" />
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                outline label="Telefone" color="black" mask="(##) #####-####" class="purple-input" v-model="usuarioUp.telefone" />
                                        </v-flex>
                                        <v-flex xs6 md2>
                                            <v-select outline :items="items" label="Série" color="black" class="purple-input" v-model="usuarioUp.serie"> </v-select>
                                        </v-flex>
                                        <v-flex xs6 md2>
                                            <v-text-field outline label="Turma" color="black" class="purple-input" v-model="usuarioUp.turma" />
                                            </v-flex>
                                        <v-flex xs12 text-xs-right>
                                            <v-btn
                                                class="mx-0 font-weight-light"
                                                color="primary" @click="atualizar" >
                                                Salvar Perfil
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card>
                     </v-card>
                </v-flex>               
        </v-layout>
    <!-- caixa dialogo senha -->
        <v-dialog v-model="vorf" persistent width="400px">            
            <v-card class="text-xs-center">
                <v-card-title class="text-xs-center">
                    <span class="headline">Confirmação de segurança</span>
                </v-card-title>
                <v-card-text class="text-xs-center">                    
                    <v-flex xs12 sm10 md8>
                        <v-text-field v-model="senhaVer" color="black" type="password" label="Digite sua senha" required></v-text-field>
                    </v-flex>                        
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="vorf = false; senhaVer = ''; ">Sair</v-btn>
                    <v-btn color="green darken-1" flat @click="destravaSenha(senhaVer)">Confirmar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <!-- alerta senha errada -->
         <v-snackbar v-model="abrir" top multi-line :timeout=4000 color="error">
            Senha incorreta!
            <v-btn dark flat @click="alerta = false">
                Fechar
            </v-btn>
          </v-snackbar>
    <!-- caixa dialogo imagem -->
        <v-dialog v-model="imageUp" persistent width="450px">            
            <v-card>
                <v-card-title>
                    <span class="headline">Modificar foto de perfil</span>
                </v-card-title>
                <v-card-text>                    
                     <v-flex xs12> 
                        <v-image-input
                        v-model="usuarioUp.imageData"
                        uploadIcon="adicionar imagem"                        
                        :image-quality="2"
                        clearable
                        image-format="jpeg"
                        style="margin-left:2%"
                        ></v-image-input>  
                    </v-flex>                       
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                     <v-btn color="red darken-1" flat @click="imageUp = false;">Sair</v-btn>
                    <v-btn color="green darken-1" class="mr-3" flat @click="atualizar">Confirmar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
     <!-- alerta de atualização de cadastro -->
        <v-dialog v-model="upUsu" hide-overlay persistent width="300">
            <v-card color="blue" dark>
                <v-card-text>
                    Atualizando...
                    <v-progress-linear indeterminate color="white" class="mb-0">
                    </v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
  </v-container>
</template>
<style>
    .img-edit-btn{
        margin-left: 87%;
        top: -25%;
    }
</style>
<script>
    import LoginService from '../service/LoginService.js'
    export default {
        data () {
        return {
            senhaVer:"",upUsu:false,imageUp:false,abrir:false,vorf: false,destravar: true, travar: false, travaSeg: true,aa:"", usuarioUp:{}
            ,items:['1 ano', '2 ano', '3 ano', '1 TI', '2 TI', '3 TI']
            
        }
        },
        created(){            
            this.inicializar()
            //location.reload()            
            // setTimeout(() => {location.reload()}, 1);
        },       
        methods:{
            async inicializar(){
                let user = JSON.parse(localStorage.getItem("usuarioLogado"));       
                let id = user._id;
                let user2 = await LoginService.buscarid(id);
                this.usuarioUp._id = user2._id;      
                this.usuarioUp.nome = user2.nome;
                this.usuarioUp.codigo = user2.codigo;
                this.usuarioUp.email = user2.email;
                this.usuarioUp.senha = user2.senha;
                this.usuarioUp.telefone = user2.telefone;
                this.usuarioUp.serie = user2.serie;
                this.usuarioUp.turma = user2.turma;
            },
            //Imagem
            editarImagem(){
                this.imageUp = true;
            },
            //senha
            verificarSenha(){
                this.vorf = true;
            },
            destravaSenha(senha){                
                this.senhaVer = senha;
                if(this.usuarioUp.senha == this.senhaVer){
                    this.vorf = false;
                    this.destravar = false;
                    this.travar = true;
                    this.travaSeg = false;
                    this.senhaVer = "";
                }else{
                    this.abrir = true;
                }
            },
            travaSenha(){
                this.destravar = true;
                this.travar = false;
                this.travaSeg = true;
            },
            // async atualizaImagem(){
                // console.log(this.usuarioUp.imageData)
            //     try {
            //         let imagemModif = await LoginService.editar(this.usuarioUp)
            //     } catch (error) {
            //         console.log(error)
            //     }
            // },
            async atualizar(){
                try {
                    this.upUsu = true;
                    let conf = await LoginService.editar(this.usuarioUp);
                } catch (error) {
                    console.log(error)
                }finally{
                    this.inicializar()
                    this.upUsu = false;
                }
                
            }
        }
    }
</script>