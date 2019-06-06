<template>
    <div>
            <h1>Diogo lindo {{X}}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                X:"Diogo lindo!"
            }
        },
        methods:{
            seila(){
                console.log(this.X)
            }
        }
    }
</script>