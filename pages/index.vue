<template>
  <section>
    <div class="collections-container">
        <appCollection
          v-for="collection in collections"
          :key="collection.id"
          :name="collection.name"
          :id="collection.id"
        />
      <addCollection />
      
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import appCollection from "@/components/appCollection.vue";
import addCollection from "@/components/appAddCollection.vue";

export default {
  name: "index",
  components: {
    appCollection,
    addCollection,
  },
  computed: {
    ...mapState("collection", {
      collections: "collections",
    }),
  },
  methods: {
    ...mapActions("collection", { getCollections: "getCollections" }),
  },
  created() {
    this.getCollections();
  },
};
</script>

<style scoped>
.collections-container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
</style>
