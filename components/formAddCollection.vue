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
import { mapActions } from "vuex";
import { uuid } from "vue-uuid";
export default {
  //
  name: "formAddCollection",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("collection", { postCollection: "postCollection" }),
     postNewCollection() {
      this.postCollection({ id: uuid.v1(), name: this.name });
      this.name = "";
    },
  },
};
</script>

<style>
</style>