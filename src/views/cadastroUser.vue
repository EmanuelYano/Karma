 <template>
    <div class="cardzin">
      <!--h1 v-for="usu in usuarios" :key="usu._id" > {{usu.nome}} </h1-->
      <v-container fill-height>
          <v-layout align-center justify-center  >
              <v-flex xs12 sm9 md8 lg7>
                 <v-alert v-model="alert" :color="cor" dismissible>
                        {{message}}
                    </v-alert>
                  <v-card color="rgba(222,184,135,.9)" class="vision" >
                  <v-layout justify-center>
                   
                    <v-card-title primary-title>
                      <h1 class="font-weight-light text-uppercase">Cadastre-se</h1>
                    </v-card-title>
                  </v-layout>
                  <v-card-text>
                    
                    <v-container grid-list-xs id="form">
                    <v-layout row wrap>
                      <v-flex xs12 sm6>
                        <v-text-field color="black" outline label="Nome" autofocus v-model="usuario.nome"></v-text-field>
                
                        <v-text-field mask="########" color="black" outline label="Código do Aluno"  v-model="usuario.codigo"></v-text-field>
                        <v-text-field :color="colorEmail" outline label="E-mail"  v-model="usuario.email"></v-text-field>
                        <v-text-field :color="colorEmail" outline label="Confirmar e-mail"  v-model="email"></v-text-field>
                        
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field color="black" outline type="password" label="Senha"  v-model="usuario.senha"></v-text-field>
                        <v-text-field color="black" outline type="password" label="Confirmar senha"  v-model="senha"></v-text-field>  
                        <v-text-field mask="(##) #####-####" color="black" outline label="Número de Telefone" placeholder="(XX) XXXXX-XXXX"  v-model="usuario.telefone"></v-text-field>
                
                        <!--v-text-field color="black" outline label="Série"></v-text-field-->
                        <v-layout>
                          <v-flex xs8 md8>
                            <v-select :items="items" label="Selecione a série" color="black" outline v-model="usuario.serie"></v-select>
                          </v-flex>  
                          <v-flex xs4 md4>
                          <v-text-field color="black" mask="A" outline label="Turma" v-model="usuario.turma" ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                    <v-layout justify-center>
                        <v-flex xs12 md4 lg4>       
                          <v-btn block class="conf" color="rgba(211,160,95,.9)" @click="salvar">Confirmar</v-btn> 
                        </v-flex>
                        <v-flex xs12 md4 lg4>
                          <v-btn block class="limpa" color="rgba(211,160,95,.9)" @click="limpaCampos">Limpar campos</v-btn>
                        </v-flex>
                        <v-flex xs12 md4 lg4>
                          <v-btn block class="canc" color="rgba(211,160,95,.9)" @click="cancel">Cancelar</v-btn>
                        </v-flex>                        
                      </v-layout>
                    </v-container>
                    
                      
                    
                  </v-card-text>  
                </v-card>
              </v-flex>
          </v-layout>
          <v-dialog v-model="abrirProgress" hide-overlay persistent width="300">
              <v-card :color="cor" dark>
                  <v-card-text>
                      {{message}}
                      <v-progress-linear indeterminate color="white" class="mb-0">
                      </v-progress-linear>            
                  </v-card-text>
              </v-card>
          </v-dialog>          
          <v-snackbar v-model="abrir" top multi-line :timeout=4000 :color="cor">
            {{ message }}
            <v-btn dark flat @click="alerta = false">
                Fechar
            </v-btn>
          </v-snackbar>
      </v-container>
    </div>
</template>
<style>
    >>>.v-label--active{
            transform: translateY(-12px) scale(0.72) !important;
        }
    .cardzin{
      height: 800px;
      /*background-image: url('../assets/img2/img1_1.png');
      background-size: 100% 100%;*/
      background-color: #d28f3b;
    }
    .v-input__slot{
      height: 58px;
    }
 
    
</style>

<script>
import LoginService from '../service/LoginService.js'
    export default {
      data () {
        return {
          abrir: false,
          abrirProgress: false,
          vorf: false,          
          colorEmail:'black',
          usuario: {},
          usuarios:[],
          message:"", 
          cor:"success", 
          alert: false, 
          senha:"", email:"",
          items:['1 ano', '2 ano', '3 ano', '1 TI', '2 TI', '3 TI']          
        }
      },
      methods:{
        limpaCampos(){
          this.usuario = {}
          this.email = ""
          this.senha = ""
        },
        cancel(){
          this.$router.push('/')     
        },
        async salvar() {
          let x = LoginService.compararSenha(this.usuario.senha,this.senha);
          let y = LoginService.compararEmail(this.usuario.email,this.email);
          let z = LoginService.verificarCampos(this.usuario, this.senha, this.email);
          if (z == true){
            this.message = 'Por favor! Preencha todos os campos';
            this.cor = 'error';
            this.abrir = true;
            return
          }
          if (y == false && x == false){
            this.message = 'E-mails e senhas diferentes';
            this.cor = 'error';
            this.abrir = true;
            return
          }
          if (y == false){
            this.message = 'E-mails diferentes';
            this.cor = 'error';
            this.abrir = true; 
            return
          }
          if (x == false){
            this.message = 'Senhas diferentes';
            this.cor = 'error';
            this.abrir = true;
            return 
          } 
          let dupli = await LoginService.verDupli(this.usuario)
          if (dupli) {
            this.message = 'Usuário já cadastrado!';
            this.cor = 'warning';
            this.abrir = true;
            return 
          }
          this.cor = "cyan"
          this.abrirProgress = true
          this.message = "Aguarde... Efetuando cadastro!"        
          let cadSucesso = await LoginService.salvar(this.usuario)
          try{ 
            if(cadSucesso){
              try{                
                this.message = 'Cadastro efetuado com sucesso. Você será redirecionado a área de login em 3 segundos'
                this.cor = 'success'                 
              }catch(err){
                console.log(err)
              }finally{
                setTimeout(() => (this.$router.push('login')), 3000)                
              }
            }
          }catch(err){
            console.log(err)
          }            
        }
      }
      // , 
      // async mounted(){
      //   this.usuarios = await LoginService.listar()
      //   console.log(this.usuarios.email)
      // }
    }
</script>