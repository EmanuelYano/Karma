<template>

  <v-app>
    
    <v-content pt-0 style="padding-top: 40px !important;">
        <Navbar />
    </v-content>
    <router-view/>       
    <Footer />
    
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