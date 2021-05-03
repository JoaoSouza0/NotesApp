<template>
  <div>
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import appNotes from "@/components/appNotes.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    appNotes,
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
};
</script>

<style>
</style>