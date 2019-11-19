<template>
  <div class="home container">
    <h3>Tareas</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tareas" v-bind:key="t.id">
          <td>{{t.id}}</td>
          <td>{{t.titulo}}</td>
          <td>{{t.descripcion}}</td>
          <td></td>
          <td>
            <button class="btn btn-danger" v-on:click="eliminarTarea(t.id)">eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <crear-tarea></crear-tarea>
    <br />
    <modificar-tarea></modificar-tarea>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearTarea from "../components/CrearTarea";
import ModificarTarea from "../components/ModificarTarea";

import Axios from "axios";

export default {
  name: "Tareas",
  components: {
    CrearTarea,
    ModificarTarea
  },

  methods: {
    ...mapActions(["leerTareas"]),
    async eliminarTarea(id) {
      await this.eliminarTarea(id);
    },
    ...mapActions(["eliminarTarea"])
  },
  computed: {
    ...mapGetters(["tareas"])
  },
  created() {
    this.leerTareas();
  }
};
</script>
