<template>
  <div>
    <h5>Edit collection</h5>
    <form action="">
      <label for="nameCollection">Name:</label>
      <input type="text" id="nameCollection" v-model="name" />
      <button type="submit" @click.prevent="editCollection">Save</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "formEditCollection",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("collection", {
      putCollection: "putCollection",
      toggleModal: "toggleModal",
    }),
    async editCollection() {
      this.putCollection({ id: this.id, name: this.name });
      this.toggleModal(false);
    },
  },
};
</script>

<style>
</style>