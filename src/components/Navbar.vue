<template> 
    <nav>  
        <v-toolbar dark color="thor" app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
            
                <v-toolbar-title class="grey--text text-uppercase">
                  <span class="font-weight-thin ">Biblio</span>
                  <span class="font-weight-regular ">tec</span>
                  <span class="ml-2 font-weight-bold">wbs</span> 
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field label="Pesquisar" class="ml-5 mt-2" color="green" v-if="mostra"> </v-text-field>
                <v-btn icon @click="mostraInput">
                  <v-icon>search</v-icon>
                </v-btn>
                <!----v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>apps</v-icon>
                </v-btn>
            
                <v-btn icon>
                  <v-icon>refresh</v-icon>
                </v-btn>
            
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn ---->
                <v-btn to="/Login" class="sif"> Login </v-btn>
                <v-btn to="/cadastro" class="sif"> Register </v-btn>
              </v-toolbar>

            <v-navigation-drawer  app v-model="drawer" class="thor"  temporary>
                <v-list class="pt-2 mj" dense>
                    <v-toolbar-title class="grey--text text-uppercase " >
                      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="grey--text text-uppercase"></v-toolbar-side-icon>                              
                        <span class="ml-4 font-weight-thin ">Biblio</span>
                        <span class="font-weight-regular ">tec</span>
                        <span class="ml-2 font-weight-bold">wbs</span> 
                    </v-toolbar-title>
                </v-list>
                    
                        <v-list class="pt-0" dense>                                                     
                           <v-divider></v-divider> 
                           <v-list-tile
                              v-for="item in items" :to='item.route'
                              :key="item.title"
                            >
                              <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                              </v-list-tile-action>

                              <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                              </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
            </v-navigation-drawer>
        </nav>
</template>
<style>
    .mj{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        line-height: 1.5;
        margin-top:1%;
        padding-left:1%;
    }
</style>
<script>
  export default {
    data () {
      return {
        mostra: false,
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', route: '/' },  
          { title: 'Livros', icon: 'widgets', route: '/Livros' }
        ]
      }
    },
    methods:{
      mostraInput(){
        this.mostra = !this.mostra
      },
      logar(){

      }
    }
  }
</script>