<template>
  <footer class="container bg-dark py-3">
            <div class="row justify-content-center align-content-center">
                <div class="col-md-6 col-sm-3">
                    <h5 class="text-center text-light fw-bold">{{titulopie}}</h5>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    name:'Pie',
    data(){
        return{
            titulopie: '© 2021 | Esteban Arroyo',
        }
    }

}
</script>

<style>

</style>