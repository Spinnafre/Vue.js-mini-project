<template>
    <div>
        <h1 v-text="contador"></h1>
        <button type="button" v-on:click="contador++">+</button>
        <button type="button" v-on:click="contador--">--</button>
   </div>
</template>
<script>
export default {
    name:"Componente2",
    data(){
        return{
            contador:0
        }
    }
}
</script>
<style>
    
</style>