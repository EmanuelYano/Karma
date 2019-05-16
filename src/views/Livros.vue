<template>
    <div>
        <h1>
            Hello {{x}}
        </h1>
        <br />
        <v-btn @click="login"> livros</v-btn>

        <input v-model="x" >

        <!--v-card style="width:15%;">
            <v-card-title>
                <h5> Programando C++ </h5> 
            </v-card-title>
            <v-card-text>
                <p>
                    ------ imagem ------
                </p>
                <p>
                    Sinopse do livro
                </p>
                <p> 
                   Disponivel ou Não 
                </p>
            </v-card-text>
        </v-card--->

    </div>
</template>
<script>
    export default {
      data(){
          return{
              x:"World!"
          }
      },
      methods:{
          login(){
              if (this.x == "World!")
              console.log(this.x)
          }
      }  
    }
</script>
