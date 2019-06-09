<template>
    <div>
        
         <v-layout align-center justify-center column class="elevation-3">
                <v-btn color="success">Creme de Milho</v-btn>
                <v-btn color="error">Creme de Alho</v-btn>
                <v-btn color="warning">Creme de Mandioca</v-btn>
                <v-btn color="info">Creme de Ovo</v-btn>
        <v-data-table
            :headers="cabecalho"
            :items="items"
        >
            <template v-slot:items="props">
                    <td>{{props.item.descricao}}</td>
                    <td>{{props.item.valor}}</td>
            </template>
            
        </v-data-table>
        </v-layout>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cabecalho: [{text: "Descricao"},{text: "Valor"}],
                items:[{descricao: "Creme de Milho", valor:"R$ 92,00"},
                {descricao: "Creme de Alho", valor:"R$ 85,00"},
                {descricao: "Creme de Mandioca", valor:"R$ 76,00"},
                {descricao: "Creme de Ovo", valor:"R$ 48,00"}

                
                
                ]
            }       
        }
    }

</script>
