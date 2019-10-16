<template>

  <div class="hom3">
    <center><div class="car">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
    </div></center>
    
      <v-layout>
        <v-flex md12 lg12>
          <div class="od1n">
            <p>dhfghadsgfhgadsfdsafkgbdfdhsagfdhgfadfshaybhsadtbfgmndb fhjgdfbdafgduaisfhdgsfdbf dfgdasf lkgdfabsd fgdsafj dasfdasfsah iuewbfds iutg bdfuieg dsbfjsadhfdg</p>
           
          </div>
        </v-flex>
      </v-layout>
      <i class="fas fa-home">a</i>
  </div>
   
</template>
<style>
  .v-carousel__controls{
    background-color:rgba(0,0,0,.3);
    height: 8%;
  }
  .hom3{
    
  }
  .od1n{
    background-color: #f4a460;
    height: 180px;
    margin-top: 80px;
  }
  .car{
    width: 80%;
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
          },
          {
            src: require('../assets/img2/img21_1.jpg')
          },
          {
            src: require('../assets/img2/img28_1.jpg')
          }/*,
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }*/
        ]
      }
    }
  }
</script>