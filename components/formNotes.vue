<template>
  <div>ok</div>
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
button {
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: black;
  color: #fff;
}
input {
  border-radius: 10px;
}
</style>