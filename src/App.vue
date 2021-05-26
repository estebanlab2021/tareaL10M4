<template>
  <cabecera />
  <padre />
  <!--<hijo />-->
  <pie />
</template>

<script>
import Cabecera from './components/Cabecera.vue'
//import Hijo from './components/Hijo.vue'
import Padre from './components/Padre.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: {
    
    Cabecera,
    Padre,
    //Hijo,
    Pie
  }
}
</script>

<style>

</style>
