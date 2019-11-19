import Vue from 'vue';
import Vuex from 'vuex';

import Axios from 'axios';

Vue.use(Vuex);

const apiURLTareas = 'api/Tareas';

export default new Vuex.Store({
  state: {
    tareas: [],
    otracosa: []
  },
  getters: {
    tareas: state => state.tareas
  },
  mutations: {
    setTareas(state, data) {
      state.tareas = data;
    }
  },
  actions: {
    async leerTareas(context) {
      console.log('leyendo tareas');
      let tareasData = (await Axios.get(apiURLTareas)).data;
      console.log('se leyeron tareas', tareasData);
      context.commit('setTareas', tareasData);
    },
    async agregarTarea(context, nuevaTarea) {
      let grabar = await Axios.post(apiURLTareas, nuevaTarea);
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    },
    async eliminarTarea(context, id) {
      let eliminar = await Axios.delete(`${apiURLEliminarTarea}/${id}`);
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    },
    async modificarTarea(context, body) {
      var newTarea = {
        descripcion: body.descripcion,
        titulo: body.titulo
      };

      let modificar = await Axios.put(`${apiURLTareas}/${body.id}`, newTarea);
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    }
  },
  modules: {}
});
