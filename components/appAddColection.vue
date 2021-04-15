<template>
  <button class="addColection">{{modalStatus}}</button>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "plusColection",
  computed:{
      modalStatus(){
          return this.$store.state.fristTry.modal
      }
  }

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
