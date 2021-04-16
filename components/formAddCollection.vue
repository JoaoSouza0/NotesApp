<template>
  <div>
    <h5>Add new collection</h5>
    <form action="">
      <label for="nameCollection">Name:</label>
      <input type="text" id="nameCollection" v-model="name" />
      <button type="submit" @click.prevent="postNewCollection">Save</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  //
  name: "formAddCollection",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters({ id: "collection/qtCollections" }),
  },
  methods: {
    ...mapActions("collection", { postCollection: "postCollection" }),
    async postNewCollection() {
      this.postCollection({ id: this.id, name: this.name });
    },
  },
};
</script>

<style>
</style>