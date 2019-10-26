<template>
    <v-card elevation-10>
      <v-navigation-drawer class="thor" permanent>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to='item.route'
          >
            <v-list-tile-action>
              <!--v-icon>{{ item.icon }}</v-icon-->
              <font-awesome-icon :icon="item.icon" size="2x" pull="right" />
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>
<script>
    export default{
        data(){
             
            return{
                items: [
                { title: 'HTML', icon:['fab','html5'],route:'/Login' },
                { title: 'Redes de computadores', icon:'network-wired', route:'/Login' },
                { title: 'CSS', icon: ['fab','css3-alt'],route:'/Login' },
            ],
            right: null,
            }
        }
    }

</script>