<template>
  <div class="note-container">
    <dropDownNotes :id="id" />
    <div class="note">
      <h5 class="noteTitle">{{ title }}</h5>
      <b class="note-dateModfied">{{ dateModfied }} </b>
      <div class="note-content">
        <span>{{ content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dropDownNotes from "@/components/dropDownNotes.vue";

export default {
  props: ["id", "title", "collectionId", "color", "dateModfied", "content"],
  components: {
    dropDownNotes,
  },
};
</script>

<style scoped>
.note-container {
  padding: 20px;
  position: relative;
}
.note {
  padding: 30px;
  width: 230px;
  height: 150px;
  border: 1px solid red;
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
</style>
