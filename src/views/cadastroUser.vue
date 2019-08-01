<template>
    <div class="cardzin">
      <v-container fill-height>
          <v-layout align-center justify-center  >
              <v-flex xs12 sm9 md7 lg7>
                <v-card color="rgba(222,184,135,.9)" class="vision" >
                  <v-layout justify-center>
                    <v-card-title primary-title>
                      <h1 class="font-weight-light text-uppercase">Cadastre-se</h1>
                    </v-card-title>
                  </v-layout>
                  <v-card-text>
                    <v-layout>
                      <v-flex sm9 md7 lg7>
                        <v-text-field color="black" outline label="Nome" autofocus required></v-text-field>
                        <v-text-field color="black" outline label="Código do Aluno" type="number"></v-text-field>
                        <v-text-field color="black" outline label="E-mail" type="email" v-model="em1"></v-text-field>
                        <v-text-field color="black" outline label="Senha" type="password" v-model="pw1"></v-text-field>
                      </v-flex>
                      <v-flex sm9 md7 lg7 ml-2>
                        <v-text-field color="black" outline label="Número de Telefone" type="number"></v-text-field>
                        <v-text-field color="black" outline label="Série"></v-text-field>
                        <v-text-field color="black" outline label="Confirmar e-mail" type="email" v-model="em2"></v-text-field>
                        <v-text-field color="black" outline label="Confirmar senha" type="password" v-model="pw2"></v-text-field>  
                      </v-flex>
                    </v-layout>
                    <v-btn block color="rgba(211,160,95,.9)" @click="comPass">confirmar</v-btn>
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
      height: 100%;
      background-image: url('../assets/img2/img1_1.png');
      background-size: 100% 100%;
    }
</style>

<script>
    export default {
      data () {
        return {
          pw1:"", pw2:"", em2:"", em1:""          
        }
      },
      methods:{
        comPass(pw1,pw2) {
          if (this.em1 != this.em2 && this.pw1!=this.pw2) {
            alert("E-mails e senhas diferentes")
          }else if (this.em1 != this.em2) {
            alert("E-mails diferente")
          }else if(this.pw1!=this.pw2){
            alert("Senhas diferente")
          }
        }
      }
    }
</script>