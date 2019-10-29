<template>
  <div class="hom3">
    <!--div class="fundo-home">
      <v-img aspect-ratio="" :src='src' />
    </div-->  
       
    <v-parallax :src="src">
      <v-layout align-center column justify-center>    
          <h1 class="display-2 font-weight-thin mb-3"></h1>
          <h4 class="subheading"></h4>
      </v-layout>
    </v-parallax>
    <!--div class="desenvolvendo">
      <v-img aspect-ratio="" :src='src2' />
    </div--> 
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
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
  .v-parallax{
    height: 715px !important;
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
  .desenvolvendo{
    width: 40%;
    height: 40%;
    margin: auto;
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
        src2: require('../assets/img2/construindo.jpg')
      }
    }
  }
</script>