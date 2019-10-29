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
                        <v-text-field color="black" outline label="E-mail"  v-model="usuario.email"></v-text-field>
                        <v-text-field color="black" outline label="Confirmar e-mail"  v-model="email"></v-text-field>
                        
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field color="black" outline type="password" label="Senha"  v-model="usuario.senha"></v-text-field>
                        <v-text-field color="black" outline type="password" label="Confirmar senha"  v-model="senha"></v-text-field>  
                        <v-text-field mask="(##) #####-####" color="black" outline label="Número de Telefone"  v-model="usuario.telefone"></v-text-field>
                
                        <!--v-text-field color="black" outline label="Série"></v-text-field-->
                        <v-select :items="items" label="Selecione a série" color="black" outline v-model="usuario.serie"></v-select>
                        <the-mask mask="ZZZ" :tokens="hextokens" />
                        
                      </v-flex>
                    </v-layout>
                    </v-container>
                    
                      <v-layout justify-center>
                        <v-flex sm5 md5 lg5>       
                          <v-btn block class="conf" color="rgba(211,160,95,.9)" @click="salvar">Confirmar</v-btn> 
                        </v-flex>
                        <v-flex sm5 md5 lg5>
                          <v-btn block class="canc" color="rgba(211,160,95,.9)" @click="cancelar">Cancelar</v-btn>
                        </v-flex>
                        
                      </v-layout>
                    
                  </v-card-text>  
                </v-card>
              </v-flex>
          </v-layout>
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
          hextokens:{
            Z:{
              pattern: /[a-z,A-Z]/,
              transform: v => v.toLocaleUpperCase()
            }
          },
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
        async salvar() {
          let x = LoginService.compararSenha(this.usuario.senha,this.senha);
          let y = LoginService.compararEmail(this.usuario.email,this.email);
          let z = LoginService.verificarCampos(this.usuario, this.senha, this.email);
          if (x == false){
            this.message = 'Senhas diferentes';
            this.cor = 'error';
            this.alert = true;
            return 
          }
          if (y == false){
            this.message = 'E-mails diferentes';
            this.cor = 'error';
            this.alert = true; 
            return
          }
          if (y == false && x == false){
            this.message = 'E-mails e senhas diferentes';
            this.cor = 'error';
            this.alert = true;
            return
          }
          if (z == true){
            this.message = 'Por favor! Preencha todos os campos';
            this.cor = 'error';
            this.alert = true;
            return
          }
          await LoginService.salvar(this.usuario)
          if(LoginService.salvar(this.usuario) == true){
            this.message = 'Cadastro efetuado com sucesso'
            this.cor = 'success'
            this.alert = true;
            return
          }
          console.log(this.usuario.serie)
        }
      }, 
      async mounted(){
        this.usuarios = await LoginService.listar()
      },
      async cancelar(){
        await Object.assign(this.$data, this.$options.data())
      }
    }
</script>