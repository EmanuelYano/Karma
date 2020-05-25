<template> 
    <nav>
      <v-flex xs5>  
          <v-toolbar  color="bar" app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer" class=""></v-toolbar-side-icon>
            
                <v-toolbar-title class="text-uppercase">
                  <span class="font-weight-thin ">Biblio</span>
                  <span class="font-weight-regular ">tec</span>
                  <span class="ml-2 font-weight-bold">wbs</span> 
                </v-toolbar-title>               
                  <v-spacer></v-spacer>
                   
                    <div>
                      <v-text-field v-model="inputBuscar" label="Pesquisar" @keyup="buscarProjeto" class="ml-5 mt-3" color="black" v-if="mostra"> </v-text-field>
                    </div>
                    <v-btn v-if="liberaBusca" icon @click="mostraInput">
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
                  <v-btn to="/Login" class="thor" v-if="deslogado"> Login </v-btn>
                  <v-btn to="/cadastro" class="thor" v-if="deslogado"> Register </v-btn>
                  <v-btn to="/perfil" class="thor" flat fab v-if="logado"> <font-awesome-icon icon="user-alt" size="2x" /></v-btn>
                  <v-btn to="" flat fab v-if="logado" @click="deslogar"><font-awesome-icon icon="sign-out-alt" size="2x"  /></v-btn>
              </v-toolbar>
          </v-flex>

            <v-navigation-drawer  app v-model="drawer" class="bar"   temporary>
                <v-list class="pt-2 mj" dense>
                    <v-toolbar-title class="text-uppercase" >
                      <v-toolbar-side-icon @click.stop="drawer = !drawer" class=" "></v-toolbar-side-icon>                              
                        <span class="ml-4 font-weight-thin ">Biblio</span>
                        <span class="font-weight-regular ">tec</span>
                        <span class="ml-2 font-weight-bold">wbs</span> 
                    </v-toolbar-title>
                </v-list>
                    
                        <v-list class="pt-0" dense>                                                     
                           <v-divider></v-divider> 
                           <v-list-tile
                              v-for="item in itemsFiltrados" :to='item.route'
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
    .theme--light.v-list.mj {
      color: rgb(0, 0, 0)	;
    }
    .theme--light.v-toolbar{
      color: rgb(0, 0, 0)	; 
    }
    .loki{
      width: 20%;
    }
    span{
      font-size:22px;
    }
</style>
<script>
  import LoginService from '../service/LoginService.js'
  export default {
    data () {
      return {
        mostra: false,
        adm:"0",
        deslogado:true,
        logado: false,
        drawer: false,
        inputBuscar: "",
        liberaBusca: false,
        items: [
          { title: 'Home', icon: 'home', route: '/', mostra:true },  
          { title: 'Livros', icon: 'local_library', route: '/lista-livros', mostra:true },
          { title: 'Cadastro e controle de livros', icon: 'menu_book', route: '/controle-livros', mostra:false },
          { title: 'Cadastro e controle dos usuários', icon:'account_box', route:'/controle-usuarios', mostra:false }
          /*,{ title: 'Agua', icon:'pool', route:'/agua', mostra:true}*/
        ],
        usuario:{}
      }      
    },
    computed:{
      itemsFiltrados(){
        if(this.logado && this.adm == "1"){
          return this.items
        }
        var items = new Array()
        this.items.forEach(item => {
          if (item.mostra) {
            items.push(item)
          }
        });
        if(this.adm == "0"){
          return items
        }
      }
      
    },
    mounted(){
        let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
        //console.log(usuario)        
        if (usuario == null || !usuario._id){
          this.logado = false
          this.deslogado = true
        }else{
          this.logado = true
          this.deslogado = false
        }
        if(usuario == null){
          this.adm = "0"
        }else if (usuario.email == "emanuel@emanuel.com" && usuario.codigo == "761629"){
          this.adm = "1"
        }
    },
    watch:{
      '$route'(para,de){ 
        if(para.path == "/lista-livros"){
          this.liberaBusca = true
        }else{
          this.liberaBusca = false
        }
        if(para.path == "/perfil"){
          location.reload()
          this.inicializar()
        }
      }

    },
    methods:{
      deslogar(){
        localStorage.setItem("usuarioLogado", null)
        this.$router.push('login') 
        location.reload()       
      },
      mostraInput(){
        this.mostra = !this.mostra
      },
      buscarProjeto() {
        var filter, listaLivros, h2, h3, i, txtValueH2, txtValueh3="", livros, corpoLivro;
        filter = this.inputBuscar.toString().toUpperCase();
        listaLivros = document.getElementById("listaLivros");
        livros = listaLivros.getElementsByClassName("filtro-livro");
        for (i = 0; i < livros.length; i++) {
            h2 = livros[i].getElementsByTagName("h2")[0];
            h3 = livros[i].getElementsByTagName("h3")[0];
            txtValueH2 =  h2.textContent ||  h2.innerText;
            txtValueh3 =  h3.textContent ||  h3.innerText;
            if (txtValueh3.toUpperCase().indexOf(filter) > -1 || txtValueH2.toUpperCase().indexOf(filter) > -1 ) {
                livros[i].style.display = "";
            } else {
                livros[i].style.display = "none";
            }
        }
      }      
    }
  }
</script>