<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-8 bg-light border border-dark">
            <h1 class="text-center">Administrador de Productos en Vue.js</h1>
            <form class="row g-3 justify-content-center" v-on:submit.prevent>
                <div class="col-4">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="nombre" id="nombre" type="text" class="form-control" placeholder="Escribe el nombre">
                </div>
                <div class="col-4">
                    <label for="edad" class="form-label">Edad</label>
                    <input v-model="edad" id="edad" type="text" class="form-control" placeholder="Escribe la edad">
                </div>
            </form>
            <div class="row justify-content-center py-3">
                <div class="col-2">
                    <button class="btn btn-success" @click="guardar">Ingresar</button>
                </div>
                <div class="col-2">
                    <button type="reset" class="btn btn-danger" @click="borrar" >Reset</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  <hijo :newdata='retornar'/>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Hijo from './Hijo.vue';

export default {
  components: {Hijo  },
    data() {
        return {
            nombre:'',
            edad:'',
            id:0,
            nuevovalor:{}
            //valor:{nombre:'', edad:''}
        }
    },
    computed: {
        ...mapState(['nuevo','dato']),
        retornar(){
            return this.nuevovalor = {id:this.id, nombre:this.nombre, edad:this.edad}  
        }
    },
    methods: {
        ...mapMutations(['actualizar', 'nuevodato', 'nuevodato1']),
        guardar() {
            this.id = Date.now();
            let valor = {id:this.id, nombre:this.nombre, edad:this.edad};
            this.nuevodato(valor);
            this.actualizar(this.nuevo);
            console.log(this.nuevo);
        },
        borrar(){
            this.nombre = '';
            this.edad = '';
            //this.valor = {nombre:'', edad:''};
        }
    },

}
</script>

<style>

</style>