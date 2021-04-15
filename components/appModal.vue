<template>
  <section class="modal" @click.prevent="closeModal">
    <div class="modal-container">
      <h5>Add new collection</h5>
      <form action="">
        <label for="nameCollection">Name:</label>
        <input type="text" id="nameCollection" v-model="name" />
        <button type="submit" @click.prevent="postCollection">Save</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "appModal",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters({ id: "collection/qtCollections" }),
  },
  methods: {
    ...mapActions({
      toggleModal: "collection/toggleModal",
      postCollection: "collection/postCollection",
    }),
    closeModal(e) {
      if (e.currentTarget == e.target) {
        this.toggleModal(false);
      }
    },
    async postCollection() {
      this.postCollection({ id: this.id, name: this.name });
    },
  },
};
</script>

<style scoped>
.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal-container {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 50px;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s forwards;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 80px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}
</style>
