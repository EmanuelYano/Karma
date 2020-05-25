<template>
    <v-card class="a" elevation-10>
      <v-navigation-drawer color="bar" class="tor" permanent>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to='item.route'
          >
            <v-list-tile-action>
              <!--v-icon>{{ item.icon }}</v-icon-->
              <font-awesome-icon :icon="item.icon" size="2x" pull="right"/>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title @click="buscarNome(item.title)">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>
<style>
  .tor{
    width:100% !important;
  }
  .a{
    margin-left: 20%;
  }
  a.primary--text.v-list__tile--active.v-list__tile.v-list__tile--link.theme--light{
    color: black !important;
    caret-color: black !important;
  }
</style>
<script>
    export default{
        data(){
             
            return{
                items: [
                { title: 'HTML', icon:['fab','html5'],route:'/lista-livros' },
                { title: 'Redes de computadores', icon:'network-wired', route:'/lista-livros' },
                { title: 'CSS', icon: ['fab','css3-alt'],route:'/lista-livros' }
            ],
            right: null
            }
        },
        methods:{
          teste(x){
            console.log(x)
          }
        }
    }

</script>