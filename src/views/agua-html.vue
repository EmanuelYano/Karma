
<template>
<div class="bg">
  <v-container>
    <v-card color="#f8f8ff">
      <v-layout align-top justify-center row fill-height>
        <v-flex md11 lg10 mt-5>
          <h1>A poluição de rios evidencia um grande problema: A falta de educação ambiental</h1>
          <hr size=2 width=90% align: center noshade color="black">
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md11 lg8 ml-5 mt-3> 
          <v-img
            :src= "src"
            aspect-ratio="1"
            class="grey lighten"
            max-width="700"
            max-height="400"
          ></v-img>
          <legend>Imagem 1: Rio poluído com lixos sólidos (garrafas pets principalmente). <br/> Fonte: https://www.todoestudo.com.br/geografia/rios-poluidos</legend>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md10 lg8 mt-4>
          <div class="txt">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;O planeta Terra possui cerca de 71% da sua superfície tomada por água, contudo apenas cerca de 2,7% é potável, sendo a maior parte congelada em calotas polares ou geleiras.
              Com isso, estamos enfrentando um era na qual ela está se tornando muito valiosa, pois os rios e lagos, ou estão secando ou se tornando tão poluídos que não se consegue tratar a água para a redistribuição às pessoas. 
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Qualquer alteração, seja ela física, química e biológica, que cause prejuizo a saude da população e comprometa a fauna e flora dos rios,lagos ou lagoas é entendido como poluição das aguas. 
              A poluição está cada vez mais presente no cotidiano da população, que começa num papel de bala jogado no chão a uma indústria que despeja rios de produtos químicos, que ocorre devido a expansão urbana desorganizada e má estruturada, principalmente das industrias.
            </p>   
          </div>
          <div class="table">
            <v-simple-table dark>
              <thead>
                <tr>
                  <th class="text-left">
                      Tipos de poluição
                  </th>
                  <th class="text-left">
                      Definição
                  </th>
                </tr> 
              </thead>
                <tbody>
                  <tr v-for="item in j" :key="item.tp">
                    <td>{{ item.tp }}</td>
                    <td>{{ item.def }}</td>
                  </tr>
                </tbody>
            </v-simple-table>
          </div>
          </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md11 lg8 ml-5 mt-3> 
          <v-img
            :src= "src1"
            aspect-ratio="1"
            class="grey lighten-"
            max-width="700"
            max-height="400"
          ></v-img>
          <legend>Imagem 2: Moratantade dos peixes no rio sino.  <br/> Fonte: https://www.jornalnh.com.br/_conteudo/2017/10/noticias/regiao/2182459-entre-os-dez-mais-poluidos<br/>-do-pais-sinos-cai-e-gravatai-ainda-tem-esgoto-como-vilao.html</legend>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md10 lg8 mt-4>
          <div class="txt">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Uma das principais fontes poluidoras é o esgoto de residencias, industrias e hospitais não tratados, pois além de consumirem oxigenio na sua decomposição, causando a morte de peixes, liberam mal cheiro e micro-organismos patogênicos. 
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Deve-se dar destaque tambem a poluição causada pela despeja de lixo nos rios, que causam assoriamentos, impedindo a agua de circular livremente pelo caminho e levando cidades a sofrerem enchentes, com essa falta de escoamento.
            </p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md11 lg8 ml-5 mt-3> 
          <v-img
            :src= "src2"
            aspect-ratio="1"
            class="grey lighten-"
            max-width="700"
            max-height="500"
          ></v-img>
          <legend s>Imagem 3: Dia mundial da água.  <br/> Fonte:https://www.osantarritense.com.br/2015/03/dia-da-agua-sera-comemorado-com.html</legend>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md10 lg8 mt-4>
          <div class="txt">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Segundo a Lei nº9.795/1999, a educação ambienta é algo essencial e de suma importancia para o equilíbrio da sustentabilidade e desenvolvimento do nosso país. 
            </p>
            
            <p class="cit">
              
              Art. 1º Entendem-se por educação ambiental os processos por meio dos quais o indivíduo e a coletividade constroem valores sociais, conhecimentos, habilidades, atitudes e competências voltadas para a conservação do meio ambiente, bem de uso comum do povo, essencial à sadia qualidade de vida e sua sustentabilidade.
              <br/><br/>Art. 2º A educação ambiental é um componente essencial e permanente da educação nacional, devendo estar presente, de forma articulada, em todos os níveis e modalidades do processo educativo, em caráter formal e não-formal.
              <br/><br/>Art. 4º São princípios básicos da educação ambiental:
              <br/><br/>I - o enfoque humanista, holístico, democrático e participativo;
              <br/>II - a concepção do meio ambiente em sua totalidade, considerando a interdependência entre o meio natural, o sócio-econômico e o cultural, sob o enfoque da sustentabilidade;
              <br/>III - o pluralismo de idéias e concepções pedagógicas, na perspectiva da inter, multi e transdisciplinaridade;
              <br/>IV - a vinculação entre a ética, a educação, o trabalho e as práticas sociais;
              <br/> V - a garantia de continuidade e permanência do processo educativo;
              <br/> VI - a permanente avaliação crítica do processo educativo;
              <br/>VII - a abordagem articulada das questões ambientais locais, regionais, nacionais e globais;
              <br/>VIII - o reconhecimento e o respeito à pluralidade e à diversidade individual e cultural.
            </p>
          </div>
        </v-flex>
      </v-layout>
    <v-layout align-center justify-center row fill-height>
        <v-flex md11 lg8 ml-5 mt-3> 
          <v-img
            :src= "src3"
            aspect-ratio="1"
            class="grey lighten-"
            max-width="700"
            max-height="500"
          ></v-img>
          <legend >Imagem 3: Opinião online da populaçao.  <br/> Fonte:https://www.researchgate.net/figure/Figura-1-Resultado-da-pesquisa-on-line-sobre-o-PLS-221-2015<br/>-em-abril-de-2016_fig1_331985275</legend>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex md10 lg8 mt-4 mb-4>
          <div class="txt">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Contudo, ao sair e analisar a realidade não consiste em 10% do que se manda na lei, geralmente devido a falta de informação ou de estrutura para realização de oficinas ou aulas que possam levar essa ideia de conscientização ambiental, e aplicando mudanças práticas para melhorar o entendimento desde pequenos.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Há um Projeto de Lei no Senado - PLS 221/2015 que tem como principal objetivo incluir a educação ambiental como disciplina obrigatória do ensino fundamental e medio. Ainda está em processo de tramitação, entretanto, se caso isso vier a ser aprovado, será um grande avanço para o combate de diversas práticas desastrosas para com o meio ambiente.  
            </p>
            <hr size=2 width=100% align: rigth noshade color="black" style="margin-left:0%">
          </div>  
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row>
        <v-flex md10 lg8 mt-4>
          <div >
            <p style="font-family: courier; font-weight:bold; font-size: 12px; color: rgba(0,0,0,.8); line-height:2px">Escrito por: Emanuel Yano</p>
            <p style="font-family: courier; font-size: 12px; color: rgba(128,128,128,.9 ); line-height:2px">Dia 05 ago. 2019</p>
          </div>  
        </v-flex>
      </v-layout>
      
    </v-card>
  </v-container>
  <div class="bg1">
  
  </div>
</div>

  
</template>
<script>
export default {
  data() {
    return{
          src: require('../assets/agua/agua(4).jpg'),
          src1: require('../assets/agua/agua(1).jpg'),
          src2: require('../assets/agua/dia-agua.jpg'),
          src3: require('../assets/agua/pls-221.png'),

          j:[
              {tp: 'Poluição química', def: 'Existem 2 tipos de poluentes: biodegradaveis(decompostos pelas bacterias com o tempo) e pesistentes(pesistem no meio ambiente e são toxicos ao viventes do local)' } ,
              {tp: 'Poluição física', def: 'Altera as características fisicas da agua, poluição por sólidos' },
              {tp: 'Poluição biológica', def: 'Contaminação por organismos patogenicos(bacterias, virus, vermes, etc)' }
          ]
    }
  }
}
</script>
<style>
  h1{
    text-align:justify;
    font-family: opensans, helvetica, arial, sans-serif;
    font-size: 56px;
    letter-spacing: -3.55px;
    line-height: 120%;
    margin-bottom: 2%;
  }
  .txt{
   font-family: opensans,helvetica,arial,sans-serif;
   font-size: 20px;
   text-align: justify;
   color: rgba(0,0,0,.8)
  }
  .table{
    border: black 2px solid;
  }
  .table th{
    border: gray 1px solid;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  .table td{
    border: gray 1px solid;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;  
  }
  legend{
    text-align: left;    
    margin-top:3px;
    color:#9f9c99;
    line-height: 135%;
  }
  .cit{
    margin-left:10%;
    color: green;
    font-style: italic;
  }
  .bg{
    height: 100%;
    background-color: #a5f1a3;
  }
  .bg1{
    height: 5%;
    background-color: #006c80;  
  }
  hr{
    margin-left:5%;
  }
</style>
