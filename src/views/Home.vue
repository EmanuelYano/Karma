<template>
  <div class="hom3">
    <div class="fundo-home">
      <v-img aspect-ratio="" :src='src' />
    </div>      
    
     
  </div> 
</template>
<style>
  .v-carousel__controls{
    background-color:rgba(0,0,0,.3);
    height: 8%;
  }
  .v-content{
    padding-bottom: 4px !important;
  }
  .hom3{
  }
  .fundo-home{
    background-image: url('../assets/img2/img_fundo_home.jpg');
    width: 100%;
    height: 100%;
  }
  .od1n{
    background-color: #f4a460;
    height: auto;
    margin-top: 80px;
    width:80%;
  }
  .carousel-local{
    width: 80%;
  }

  .cor{
    color: rgba(0,0,0,.1)
  }
</style>
  
<script>
//1440-500 fotos
  export default {
    data () {
      return {
        src: require('../assets/img2/img_fundo_home.jpg'),
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