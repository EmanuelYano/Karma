<template>
    <div>
        <v-toolbar flat color="green">
                <v-btn color="blue" dark @click="adicionar">Adicionar</v-btn>
        </v-toolbar>
        <v-data-table
            :headers="cabecalho"
            :items="items"
        >
            <template v-slot:items="props">
                    <td>{{props.item.descricao}}</td>
                    <td>{{props.item.valor}}</td>
            </template>
            
        </v-data-table>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cabecalho: [{text: "Descricao"},{text: "Valor"}],
                items:[{descricao: "Creme de Milho ", valor:"R$ 9,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},{descricao: "Milho", valor:"R$ 5,00"},]
            }       
        }
    }

</script>