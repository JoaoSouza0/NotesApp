<template>
  <div class="note-container"> 
    <dropDownNotes :id="id" />
    <div :class="noteClass" @click="activeNote">
      <h5 class="noteTitle">{{ title }}</h5>
      <b class="note-dateModfied">{{ dateModfied }} </b>
      <div class="note-content">
        <span :class="paragraphClass"> {{ content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dropDownNotes from "@/components/dropDownNotes.vue";

export default {
  name: "appNotes",
  data(){
    return{
      
      active:false,
    }
  },
  computed:{
    noteClass(){
      return this.active ?'note note-active' :'note'
    },
    paragraphClass(){
      return this.active ?'note-paragraph paragraph-active' :'note-paragraph'
    }
  },
  props: ["id", "title", "collectionId", "color", "dateModfied", "content"],
  components: {
    dropDownNotes,
  },
  methods: {
    activeNote() {
      this.active = !this.active
    },
  },
};
</script>

<style scoped>
.note-container {
  padding: 20px;
  position: relative;
}
.note-paragraph {
  display: -webkit-box;
  -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paragraph-active {
  display: -webkit-box;
  -webkit-line-clamp: 30000; /** número de linhas que você quer exibir */
}

.note {
  padding: 30px;
  width: 230px;
  max-height: 150px;
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: max-height 0.5s;
  margin: 5px;
}

.note-active {
  max-height: 6000px; /*  // colocar um valor maior que q será pra garantir */
  transition: max-height 3s ease-in-out;
  z-index: 122;
}
</style>
