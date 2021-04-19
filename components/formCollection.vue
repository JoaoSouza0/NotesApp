<template>
  <div>
    <h5 v-if="idCollection === 0">ADD collection</h5>
    <h5 v-else-if="idCollection !== 0">Edit collection</h5>

    <form action="">
      <label for="nameCollection">Name:</label>
      <input type="text" id="nameCollection" v-model="name" />
      <button
        type="submit"
        v-if="idCollection === 0"
        @click.prevent="postNewCollection"
      >
        Save Collection
      </button>
      <button
        type="submit"
        v-else-if="idCollection !== 0"
        @click.prevent="editCollection"
      >
        Edit Collection
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { uuid } from "vue-uuid";
export default {
  //
  name: "formCollection",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("collection", { idCollection: "id" }),
  },
  methods: {
    ...mapActions("collection", {
      postCollection: "postCollection",
      putCollection: "putCollection",
      toggleModal: "toggleModal",
    }),
    postNewCollection() {
      this.postCollection({ id: uuid.v1(), name: this.name });
      this.name = "";
    },
    editCollection() {
      this.putCollection({ id: this.idCollection, name: this.name });
      this.toggleModal(false);
    },
  },
};
</script>

<style scoped>

button{
    border: none;
    border-radius: 10px ;
    padding: 5px;
    background-color: black;
    color: #fff;
}
input{
    border-radius: 10px;
}
</style>