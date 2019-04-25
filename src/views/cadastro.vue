<template>
    <div>
      <v-container>
        <v-form>
           <v-layout align-center justify-center column class="elevation-2 cardzin">
             <v-flex xs12 sm6 md12>
                  <v-text-field
                    label="Nome"
                  ></v-text-field>
                </v-flex>
        
                <v-flex xs12 sm6 md12>
                  <v-text-field
                    label="Código do Aluno"
                  ></v-text-field>
                </v-flex>
        
                <v-flex xs12 sm6 md12>
                    <v-text-field
                      label="E-mail"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md12>
                    <v-text-field
                      label="Número de Telefone"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs12 sm6 md12>
                    <v-text-field
                      label="Série"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md12>
                      <v-text-field
                      v-model="password"
                      
                      name="input-10-1"
                      label="Senha"
                      ></v-text-field>
                    </v-flex>

              </v-layout>
            </v-form>
      </v-container>

      <v-layout align-center justify-center>
          <div>
              
                <v-btn color="green">confirmar</v-btn>
            
          </div>
      </v-layout>    
    </div>
</template>
<style>
.cardzin{
  background-color: rgba(200,150,214,.6);
}
</style>