<template>
  <form class="form-inline">
    <div class="form-group">
      <label>Id:</label>&nbsp;
      <input class="form-control" type="text" v-model="id" />
      <label>Titulo:</label>&nbsp;
      <input class="form-control" type="text" v-model="titulo" />
      <label>Descripcion:</label>&nbsp;
      <input class="form-control" type="text" v-model="descripcion" />
      &nbsp;
      <input
        class="btn btn-warning"
        type="button"
        v-on:click="modificarClick()"
        value="modificar"
      />
    </div>
  </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModificarTarea",
  data: function() {
    return {
      id: "",
      titulo: "",
      descripcion: ""
    };
  },
  methods: {
    async modificarClick() {
      await this.modificarTarea({
        id: this.id,
        descripcion: this.descripcion,
        titulo: this.titulo
      });
    },

    ...mapActions(["modificarTarea"])
  }
};
</script>