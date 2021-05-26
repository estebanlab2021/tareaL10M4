<template>
  <div class="container py-3">
    <div class="row justify-content-center">
        <div class="col-8">
            <h1 class="text-center">Lista de Registros</h1>
            <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col" class="text-center w-50">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in lista" :key="index">
                        <th scope="row">{{item.id}}</th>
                        <td>{{item.nombre}}</td>
                        <td>{{item.edad}}</td>
                        <td class="text-center">
                          <button class="btn btn-warning me-3" @click="update(newdata)">Actualizar</button>
                          <button class="btn btn-danger" @click="eliminar(item.nombre)">Borrar</button>
                        </td>
                      </tr>
                    </tbody>
            </table>
            <!--<h3>{{newdata}}</h3>-->
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    props:['newdata'],
    data() {
      return { 
      }
    },
    computed: {
      ...mapState(['lista'])
    },
    methods: {
      ...mapMutations(['eliminar','update'])
    },
    

}
</script>

<style>

</style>