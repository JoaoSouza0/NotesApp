<template>
  <section class="modal" @click.prevent="closeModal">
    <div class="modal-container">
      <formCollection />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import formCollection from "./formCollection.vue";

export default {
  name: "appModal",
  components: {
    formCollection,
  },
  methods: {
    ...mapActions("collection", {
      toggleModal: "toggleModal",
    }),
    closeModal(e) {
      if (e.currentTarget == e.target) {
        this.toggleModal(false);
      }
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
