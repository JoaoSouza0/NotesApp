<template>
  <div>
    <h3 v-if="idNote === 0">Creting Notes</h3>
    <h3 v-else-if="idNote !== 0">Editing Notes</h3>

    <form action="" class="form-container">
      <div class="title-input">
        <label for="title">Note Title: </label>
        <input type="text" v-model="title" id="title" name="title" />
      </div>

      <div class="color-input">
        <label for="color">Note Color: </label>
        <input type="color" v-model="color" id="color" name="color" />
      </div>

      <div class="select-input">
        <label for="collection">Collection: </label>
        <select v-model="collectionId" name="collection" id="collection">
          <option
            v-for="collection in collections"
            :value="collection.id"
            :key="collection.id"
          >
            {{ collection.name }}
          </option>
        </select>
      </div>
      <div class="text-area-input">
        <label for="Content">Note Content:</label>
        <textarea
          type="text"
          v-model="content"
          id="Content"
          name="Content"
          rows="4"
          cols="50"
        />
      </div>
    </form>
    <button
      v-if="idNote === 0"
      type="submit"
      @click.prevent="postNewNote"
      id="addNote"
    >
      Create New Note
    </button>

    <button
      v-else-if="idNote !== 0"
      type="submit"
      @click.prevent="editNotes"
      id="editNotes"
    >
      Edit Note
    </button>
  </div>
</template>

<script>
import axios from "axios";
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
      this.content = "";
      this.toggleModal(false);
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
    async fillNote() {
      try {
        const res = await axios.get(
          `http://localhost:8000/notes/${this.idNote}`
        );
        this.title = res.data.title;
        this.collectionId = res.data.collectionId;
        this.color = res.data.color;
        this.content = res.data.content;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getCollection();
    if (this.idNote) {
      this.fillNote();
    }
  },
};
</script>

<style scoped>
.form-container {
  display: grid;
  grid-template-columns: 100px, 100px;
  grid-template-rows: 1fr;
  row-gap: 10px;
  column-gap: 30px;
  margin-bottom: 10px;
}
.form-container div {
  display: grid;
}

.form-container .title-input {
  grid-column: 1 /3;
  grid-row: 1;
}
.form-container .text-area-input {
  grid-column: 1 /3;
  grid-row: 3;
}
.form-container .select-input {
  grid-column: 2;
  grid-row: 2;
}
.form-container .color-input {
  grid-column: 1;
  grid-row: 2;
}
.form-container .color-input input {
  width: auto;
  height: 30px;
  z-index: 5000000;
}
.form-container .text-area-input textarea {
  border-radius: 10px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: black;
  color: #fff;
  float: right;
}
input {
  border-radius: 10px;
}
</style>