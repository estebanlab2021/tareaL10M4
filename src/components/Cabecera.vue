<template>
  <header class="container">
            <div class="row justify-content-center align-content-center bg-primary py-3">
                <div class="col-md-8 col-sm-5 text-center">
                    <h1 class="text-center text-light display-5 fw-bold">{{titulocabezal}}</h1>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name:'Cabecera',
    data(){
        return{
            titulocabezal: 'EVALUACIÓN FINAL MODULO 4',
        }
    }

}
</script>

<style>

</style>