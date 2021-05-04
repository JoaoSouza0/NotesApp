<template>
  <div>
    <h3 v-if="idNote === 0">Creting Collections</h3>
    <h3 v-else-if="idNote !== 0">Editing Collections</h3>

    <form action="">
      <label for="title">Note Title</label>
      <input type="text" v-model="title" id="title" name="title" />

      <label for="Content">Note Content</label>
      <textarea type="text" v-model="content" id="Content" name="Content" />

      <label for="color">Note Color</label>
      <input type="color" v-model="color" id="color" name="color" />

      <select v-model="collectionId" name="" id="">
        <option
          v-for="collection in collections"
          :value="collection.id"
          :key="collection.id"
        >
          {{ collection.name }}
        </option>
      </select>
  
    </form>
    <button v-if="idNote === 0" type="submit" @click.prevent="postNewNote">
      Create New Note
    </button>

    <button v-else-if="idNote !== 0" type="submit" @click.prevent="editNotes">
      Edit Note
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { uuid } from "vue-uuid";
export default {
  //
  name: "formCollection",
  data() {
    return {
      title: "",
      content: "",
      color: "#F0B3B2",
      collectionId: this.$route.params.id,
    };
  },
  computed: {
    ...mapState("collection", {
      collections: "collections",
    }),
    ...mapState("modal", { idNote: "id" }),
  },
  methods: {
    ...mapActions("collection", {
      getCollection: "getCollections",
    }),
    ...mapActions("notes", {
      postNotes: "postNotes",
      putNotes: "putNotes",
    }),
    ...mapActions("modal", {
      toggleModal: "toggleModal",
    }),
    postNewNote() {
      this.postNotes({
        id: uuid.v1(),
        title: this.title,
        collectionId: this.collectionId,
        color: this.color,
        content: this.content,
      });
      this.title = "";
      console.log("hi");
    },
    editNotes() {
      this.putNotes({
        id: this.idNote,
        title: this.title,
        collectionId: this.collectionId,
        color: this.color,
        content: this.content,
      });
      this.toggleModal(false);
    },
  },
  created() {
    this.getCollection();
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