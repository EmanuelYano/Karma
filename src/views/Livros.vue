<template>
    <div>
        <h1>
            Hello {{x}}
        </h1>
        <br />
        <v-btn @click="login"> livros</v-btn>

        <input v-model="x" >
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
