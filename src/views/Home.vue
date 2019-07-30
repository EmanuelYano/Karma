<template>
    <div class="home">
        <v-carousel
           
        >
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    
    </div>
</template>
<style>
  .v-carousel__controls{
    background-color:rgba(0,0,0,.3);
    height: 8%;
  }
</style>

<script>
//1440-500 fotos
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/img2/img9_1.jpg')
          }/*,
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
           // src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }*/
        ]
      }
    }
  }
</script>