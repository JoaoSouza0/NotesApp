<template>
  <button class="addColection" @click.prevent="toggleModal(true)">plusIcon</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addColection",
  methods: mapActions({ toggleModal: "collection/toggleModal" }),
};
</script>

<style>
.addColection {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-width: 120px;
  height: 150px;
  border-radius: 10px;
  margin: 20px 20px;
}
</style>
