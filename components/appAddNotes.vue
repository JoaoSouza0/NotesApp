<template>
  <button
    class="addCollection"
    id="addCollection"
    @click.prevent="toggleModal({ active: true, id: 0, type: 1 })"
  >
    <img src="@/assets/icons/add-notes.svg" alt="" srcset="" />
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addNotes",
  methods: { ...mapActions("modal", { toggleModal: "toggleModal" }) },
};
</script>

<style scoped>
.addCollection {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 150px;
  border-radius: 10px;
  margin: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addCollection img {
  width: 50px;
}
</style>