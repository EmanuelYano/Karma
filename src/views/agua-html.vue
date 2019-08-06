
<template>
  <v-container  >
    <v-layout align-top justify-center row fill-height>
       <v-flex xs6>
        <h1>A água esta acabando??</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12> 
        <v-img
          v-for="(item,i) in items"
          :key="i"
          :src= "item.src"
          aspect-ratio="1"
          class="grey lighten-"
          max-width="700"
          max-height="400"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return{
      items:[
          {
            src: require('../assets/agua/agua(2).jpg')
          }
      ]
    }
  }
}
</script>
<style>
  h1{
    font-family: arial, fantasy, courier;
  }
</style>
