<template>
  <div class="notes-container">
    <appNotes
      v-for="note in notes"
      :key="note.id"
      :id="note.id"
      :title="note.title"
      :collectionId="note.collectionId"
      :color="note.color"
      :dateModfied="note.dateModfied"
      :content="note.content"
    />
    <addNotes class="add-notes" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import appNotes from "@/components/appNotes.vue";
import addNotes from "@/components/appAddNotes.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    appNotes,
    addNotes,
  },
  computed: {
    ...mapState("notes", {
      notes: "notes",
    }),
  },
  methods: {
    ...mapActions("notes", {
      getNotes: "getNotes",
    }),
  },
  created() {
    this.getNotes({ id: this.id });
  },
  updated() {
    this.getNotes({ id: this.id });
  },
};
</script>

<style>
.notes-container {
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;

}
.add-notes{
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
}
</style>