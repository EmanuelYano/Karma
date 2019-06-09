<template>
  <v-app>
    
    <v-content>
        <Navbar />
      <router-view/>   
    </v-content>
  
  </v-app>  
</template>
<style>
  .vision{
          border-radius: 10px 10px;
          border: .3px solid black;
          
      }
</style>


<script>
  import Navbar from '@/components/Navbar'

  export default{
    name: 'App',
    components: { Navbar },
    data (){
      return{
        //
      }
    }
  }

</script>