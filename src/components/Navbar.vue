<template> 
    <nav>  
        <v-toolbar dark color="thor" app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            
                <v-toolbar-title class="white--text">Title</v-toolbar-title>
            
                <v-spacer></v-spacer>
            
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
            
                <v-btn icon>
                  <v-icon>apps</v-icon>
                </v-btn>
            
                <v-btn icon>
                  <v-icon>refresh</v-icon>
                </v-btn>
            
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>

            <v-navigation-drawer  app v-model="drawer" class="thor"  temporary>
                <v-list class="pt-2 mj" dense>
                    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>           
                    <v-title class="white--text">Title</v-title>
                </v-list>
                    
                        <v-list class="pt-0" dense>                                                     
                           <v-divider></v-divider> 
                           <v-list-tile
                              v-for="item in items"
                              :key="item.title"
                              @click=""
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
        font-size: 18px;
    }
</style>
<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>