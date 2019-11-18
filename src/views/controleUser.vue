<template>
    <v-container >
        <v-layout align-center justify-center row fill-height>
            <v-flex >
                 <div>
                    <v-toolbar flat color="white">
                    <v-toolbar-title>Lista de usuários cadastrados</v-toolbar-title>
                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" persistent max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="info" dark class="mb-2" v-on="on">Adicionar novo usuário</v-btn>
                        </template>
                        <v-card>
                            <v-alert v-model="alert" :color="cor" dismissible>
                                {{message}}
                            </v-alert>
                            <v-card-title>
                                <span class="headline">Novo usuário</span>
                            </v-card-title>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.nome" label="Nome" autofocus aria-required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.codigo" mask="########" label="Código do aluno"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.email" label="E-mail"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="email" label="Confirmar E-mail"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.senha" label="Senha" type="password"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="senha" label="Confirmar senha" type="password"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.telefone" mask="(##) #####-####" placeholder="(XX) xxxx-xxxx" label="Telefone"></v-text-field>
                                            </v-flex>
                                            <!-- <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="usuario.serie"  label="Série"></v-text-field>
                                            </v-flex> -->
                                            <v-layout>
                                                <v-flex xs8 md8>
                                                    <v-select :items="items" label="Selecione a série" color="black"  v-model="usuario.serie"></v-select>
                                                </v-flex>  
                                                <v-flex xs4 md4>
                                                    <v-text-field color="black" mask="A"  label="Turma" v-model="usuario.turma" ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="cancelar">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" flat @click="salvar">Salvar</v-btn>
                                </v-card-actions>
                        </v-card>
                    </v-dialog>
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="listarUsuarios" class="elevation-1">
                        <template v-slot:items="props">
                            <td style="display:none">{{props.item._id}}</td>
                            <td>{{ props.item.nome }}</td>
                            <td class="text-xs-right">{{ props.item.codigo }}</td>
                            <td class="text-xs-right">{{ props.item.email }}</td>
                            <td class="text-xs-right esconderSenha">xxxxxxxx</td>
                            <td class="text-xs-right">{{ props.item.telefone }}</td>
                            <td class="text-xs-right">{{ props.item.serie }}</td>
                            <td class="text-xs-right">{{ props.item.turma }}</td>
                            <td class="justify-center layout px-0">
                            <!--v-icon small  class="mr-2" @click="editItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-3" size="2x" @click="editItem(props.item._id)" icon="edit"/>
                            <!--v-icon small @click="deleteItem(props.item)"> </v-icon-->
                            <font-awesome-icon small class="mr-2" size="2x" @click="deleteItem(props.item)" icon="trash-alt"/>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="info" @click="initialize">Atualizar</v-btn>
                        </template>
                    </v-data-table>
                </div>
                <v-dialog v-model="edit" persistent max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar usuário</span>
                        </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="usuarioEdit.nome" label="Nome" autofocus aria-required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="usuarioEdit.codigo" label="Código do aluno"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="usuarioEdit.email" label="E-mail"></v-text-field>
                                        </v-flex>
                                        <!--v-flex xs12 sm6 md4>
                                        <v-text-field v-model="email" label="Confirmar E-mail"></v-text-field>
                                        </v-flex-->
                                        <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="usuarioEdit.senha" label="Senha" type="password"></v-text-field>
                                        </v-flex>
                                        <!--v-flex xs12 sm6 md4>
                                        <v-text-field v-model="senha" label="Confirmar senha" type="password"></v-text-field>
                                        </v-flex-->
                                        <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="usuarioEdit.telefone" mask="(##) #####-####" placeholder="(XX) xxxx-xxxx" label="Telefone"></v-text-field>
                                        </v-flex>
                                        <!-- <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="usuarioEdit.serie"  label="Série"></v-text-field>
                                        </v-flex> -->
                                        <v-layout>
                                            <v-flex xs8 md8>
                                                <v-select :items="items" label="Selecione a série" color="black"  v-model="usuarioEdit.serie"></v-select>
                                            </v-flex>  
                                            <v-flex xs4 md4>
                                                <v-text-field color="black" mask="A"  label="Turma" v-model="usuarioEdit.turma" ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="cancelar" >Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click="salvarEdit">Salvar</v-btn>
                            </v-card-actions>
                    </v-card>
                </v-dialog> 
            </v-flex>
        </v-layout>
            <v-dialog v-model="deleteVorf" hide-overlay persistent width="600">
                <v-card :color="cor">
                    <v-card-text>
                        {{message}}
                    </v-card-text>
                    <v-card-text class="text-right">
                        <v-spacer></v-spacer>
                        <v-btn @click="cancelar">Não</v-btn>
                        <v-btn @click="deleta(true)">Sim</v-btn>
                    </v-card-text>
                </v-card>
            </v-dialog> 
            <!--v-dialog v-model="alerta" hide-overlay persistent width="600">
                <v-card :color="cor" dark>
                    <v-card-text>
                        {{message}}
                    </v-card-text>
                </v-card>
            </v-dialog-->
            <!--v-dialog v-model="alerta" hide-overlay dismissible width="300">
                <v-card :color="cor" dark>
                    <v-card-text>
                        {{message}}
                    </v-card-text>
                </v-card>
            </v-dialog-->
            <v-snackbar
            v-model="alerta"
            bottom
            multi-line       
            :timeout=6000
            :color="cor">
            {{ message }}
            <v-btn
                dark
                flat
                @click="alerta = false">
                Fechar
            </v-btn>
            </v-snackbar>
    </v-container>
</template>
<style scoped>
    >>> .v-label--active{
        transform: translateY(-27px) translateX(-8px) scale(0.75) !important;
        background: rgb(238, 208, 130);
        padding: 0px 10px;
    }
    .esconderSenha { 
        -webkit-text-security: disc;
    }
</style>
<script>
import LoginService from '../service/LoginService.js'
    export default {
        data: () => ({
        dialog: false, email:'', senha:'',message:"", cor:"", alerta: false,edit:false,alert:false,deleteVorf:false,alerta:false,
        items:['1 ano', '2 ano', '3 ano', '1 TI', '2 TI', '3 TI'],
        headers: [
            {
            text: 'Nome do usuário',
            align: 'left',
            sortable: false,
            value: 'nome'
            },
            { text: 'Código do aluno', value: 'codigo' },
            { text: 'E-mail', value: 'email' },
            { text: 'Senha', value:'senha' },
            { text: 'Telefone', value: 'telefone' },
            { text: 'Série', value: 'serie' },
            { text: 'Turma', value: 'turma' },
            { text: 'Ação', value: 'name', sortable: false },
        ],
        listarUsuarios: [],
        
        usuario: {},
        usuarioEdit: {},
        itemASerDeletado: {}
        }),        
        watch: {
            dialog (val) {
                val || this.cancelar()
                val || this.salvar()
            },
        },
        created () {
                this.initialize()
        },

        methods: {
            async initialize () {
                this.listarUsuarios = await LoginService.listar()
            },
            cancelar () {
                this.dialog = false
                this.usuario = {}
                this.email = ""
                this.senha = ""
                this.usuarioEdit = {}
                this.edit = false
                this.deleteVorf = false
            },
            //editar usuario
            async editItem(id){
                let b = await LoginService.buscarid(id);
                // console.log(b)
                this.usuarioEdit._id = b._id
                this.usuarioEdit.nome = b.nome;
                this.usuarioEdit.codigo = b.codigo;
                this.usuarioEdit.email = b.email;
                this.usuarioEdit.senha = b.senha;
                this.usuarioEdit.telefone = b.telefone;
                this.usuarioEdit.serie = b.serie;
                if(b){
                    this.edit = true
                }
            },
            async salvarEdit(){
                try{
                    let conf = await LoginService.editar(this.usuarioEdit);
                    if(conf){
                        this.alerta = true;
                        this.message = 'Usuário editado com sucesso';
                        this.cor = 'info';
                    }
                }catch(err){
                    console.log(err)
                }finally{
                    this.edit = false;
                    this.initialize();
                }
                
            },
            //deletar usuario
            async deleta(){
                try{
                    this.message = 'Deletando ' + this.itemASerDeletado.nome + '! Aguarde...'
                    this.cor = 'info';
                    this.alerta = true;
                    let x = await LoginService.deletar(this.itemASerDeletado._id);
                    if (x){
                        this.message = this.itemASerDeletado.nome + ' deletado com sucesso!'
                        this.cor = 'success';
                        this.alerta = true;
                    }else{
                        this.message = 'Erro ao deletar ' + this.itemASerDeletado.nome + '. Tente novamente!'
                        this.cor = 'error';
                        this.alerta = true;
                    }                                
                }catch(err){
                    console.log(err)
                }finally{
                    this.deleteVorf = false;
                    this.initialize();
                }
            },
            deleteItem(usuario){
                this.itemASerDeletado = usuario;
                this.message = "Você deseja realmente excluir " + this.itemASerDeletado.nome + " ?";
                this.deleteVorf = true;
            },
            //salvar usuario
            async salvar() {
                try{
                    let x = LoginService.compararSenha(this.usuario.senha,this.senha);
                    let y = LoginService.compararEmail(this.usuario.email,this.email);
                    let z = LoginService.verificarCampos(this.usuario, this.senha, this.email);
                    if (z == true){
                        this.message = 'Por favor! Preencha todos os campos';
                        this.cor = 'error';
                        this.alerta = true;
                        return
                    }
                    if (y == false && x == false){
                        this.message = 'E-mails e senhas diferentes';
                        this.cor = 'error';
                        this.alerta = true;
                        return
                    }
                    if (y == false){
                        this.message = 'E-mails diferentes';
                        this.cor = 'error';
                        this.alerta = true; 
                        return
                    }
                    if (x == false){
                        this.message = 'Senhas diferentes';
                        this.cor = 'error';
                        this.alerta = true;
                        return 
                    } 
                    let dupli = await LoginService.verDupli(this.usuario)
                    if (dupli) {
                        this.message = 'Usuário já cadastrado!';
                        this.cor = 'warning';
                        this.alerta = true;
                        return 
                    }
                    this.abrir = true                    
                    let cadSucesso = await LoginService.salvar(this.usuario)
                    if(cadSucesso){
                        this.abrir = false
                        this.message = 'Cadastro efetuado com sucesso'
                        this.cor = 'success'
                        this.alerta = true
                        this.usuario = {}
                        this.email = ""
                        this.senha = ""               
                    }
                }catch(err){
                    console.log(err);
                }finally{
                    this.initialize()
                }                 
            }
        }
    }
</script>


