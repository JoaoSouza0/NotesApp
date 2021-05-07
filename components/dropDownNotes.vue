<template>
  <div class="more" @click="isOpen = !isOpen">
    <p>...</p>
    <transition name="fade" appear>
      <div class="click-menu" v-if="isOpen">
        <button
          id="EditButton"
          @click.prevent="toggleModal({ active: true, id: id, type: 1 })"
        >
          Editar
        </button>
        <button id="deleteButton" @click.prevent="rmvNote">Excluir</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "dropDownNote",
  data() {
    return {
      isOpen: false,
    };
  },
  props: ["id"],
  methods: {
    ...mapActions("modal", {
      deleteNote: "deleteNotes",
      toggleModal: "toggleModal",
    }),
    ...mapActions("notes", {
      deleteNote: "deleteNotes",
    }),
    rmvNote() {
      this.deleteNote(this.id);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.more {
  border-radius: 0 10px 10px 10px;
  padding: 10px;
  background: rgb(248, 248, 248);
  left: 25px;
  top:25px;
  cursor: pointer;
  position: absolute;
}
.more p {
  display: true;
  margin-top: -10px;
}
#EditButton,
#deleteButton {
  border: 1px solid black;
  border-radius: 5px;
}
#EditButton:hover,
#deleteButton:hover {
  color: white;
  background-color: black;
  border-radius: 5px;
}
#EditButton {
  width: 54px;
  margin-bottom: 5px;
}
.icons {
  width: 50px;
}

.click-menu {
  font-size: 13px;
}
.click-menu button {
  border: none;
  background-color: rgb(248, 248, 248);
  display: block;
}
</style>