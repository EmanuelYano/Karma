<template>

  <v-app>
    
    <v-content>
        <Navbar />
      <router-view/>   
    </v-content>
    <v-content>
      <Footer />
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
  import Footer from '@/components/footer'

  export default{
    name: 'App',
    components: { Navbar, Footer },
    data (){
      return{
        //
      }
    }
  }

</script>