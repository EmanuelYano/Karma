<template>
  <v-app>
    
    <v-content>
        <Navbar />
      <router-view/>
      <v-btn to="/login">login</v-btn>   
    </v-content>
  
  </v-app>  
</template>

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