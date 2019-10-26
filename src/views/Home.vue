<template>
  <div class="hom3">
    <!--v-card elevation-5 class="cor"-->
      <center><div class="carousel-local mt-1 pt-4 pb-4" >
              <v-carousel>
                  <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  ></v-carousel-item>
              </v-carousel>
      </div></center>
      
        <v-layout row wrap justify-space-between>
          <v-flex md12 lg12 >
          <center> <div class="od1n" >
              <h1 class="text-xs-center">Apoio e realização</h1>
                <v-layout>
                  <v-flex mb-2 style="padding-bottom:50px;" v-for="item in img" :key="item.src">
                    <v-img  :aspect-ratio="ratio"  
                                                max-width="400" 
                                                max-height="200"
                                                style="margin:0 auto" 
                                                :src='item.src' class="imagem-home"></v-img>
                  </v-flex>
                </v-layout>
            </div></center>
          </v-flex>
        </v-layout>
    <!--/v-card--> 
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
    height: 100%;
    background-image: url('../assets/img2/img4.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
  .imagem-home{
    margin:auto;
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
        ],
        img: [
          {
            src: require('../assets/img1/logo/wbs-logo.png'), ratio: '2'
          },
          {
          src: require('../assets/img1/logo/WBSTEC.png'), ratio:'3'
          }
        ]
      }
    }
  }
</script>