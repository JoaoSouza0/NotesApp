<template>
  <div> 
    <appNotes  v-for="note in notes" :key="note.id"
      :id="notes.id"
      :title="notes.title"
      :collectionId="notes.collectionId"
      :color="notes.color"
      :dt_create="note.dt.create"
      :content="note.content"
    />
    <p>{{ notes }}</p>
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
  components:{
    appNotes
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