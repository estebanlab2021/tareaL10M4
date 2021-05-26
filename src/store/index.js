import { createStore } from 'vuex'

export default createStore({
    state: {
        lista: [],
        nuevo: { id: 0, nombre: '', edad: '' }, //Agregué id
        dato: { nombre: '', edad: '' },
        stored: []
    },
    mutations: {
        nuevodato: (state, payload) => {
            state.nuevo = payload
        },
        nuevodato1: (state, payload) => {
            state.dato = payload
        },
        actualizar: (state, payload) => {
            state.lista.push(payload);
            console.log(state.lista);
        },
        eliminar: (state, payload) => {
            let coincidir = state.lista.find(valor => valor.nombre === payload);
            let indice = state.lista.indexOf(coincidir);
            console.log(coincidir);
            console.log(indice);
            if (indice !== -1) {
                state.lista.splice(indice, 1);
            }
            //localStorage.removeItem('productos');
        },
        grabar: (state, payload) => {
            state.stored.push(JSON.stringify(payload));
            localStorage.setItem('productos', state.stored);
            alert('Se ha guardado el registro en localStorage');
        },
        update: (state, payload) => {
            if (JSON.stringify(state.nuevo) === JSON.stringify(payload)) {
                console.log('No hay cambios - no hay que hacer nada')
            } else {
                console.log('Si hay diferencias - actualizar')
                state.nuevo = state.nuevo = payload;
                console.log('modificado: ', state.nuevo);

                //let coincidir = state.lista.find(valor => valor.nombre === payload.nombre || valor.edad === payload.edad);
                let coincidir = state.lista.find(valor => valor.id === payload.id || valor.nombre === payload.nombre || valor.edad === payload.edad);
                let indice = state.lista.indexOf(coincidir);
                console.log(coincidir);
                console.log(indice);

                console.log('lista edad: ', state.lista[indice].edad);

                if (indice != -1) {
                    state.lista.forEach(item => {
                        if (item.edad != state.nuevo.edad) {
                            state.lista[indice].edad = state.nuevo.edad
                        }
                        if (item.nombre != state.nuevo.nombre) {
                            state.lista[indice].nombre = state.nuevo.nombre
                        }
                    });
                } else {
                    console.log('No se puede actualizar')
                }

                console.log(state.lista);
                //state.lista = state.lista.map(item => item = state.nuevo);
                //state.lista[0].edad = state.lista.map(item => item = toString(state.nuevo.edad));
                //state.lista = state.lista.map(item => {
                //    if (item.edad != toString(state.nuevo.edad)) {
                //        return item.edad = toString(state.nuevo.edad)
                //    }
                //})
            }

        }
    },
    actions: {},
    modules: {}
})