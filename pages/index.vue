<template>
  <section>
    <div class="collections">
      <appCollection
        v-for="collection in collections"
        :key="collection.id"
        :name="collection.name"
      />

      <addCollection />
      <appModal v-show="isActiveModal" />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import appCollection from "@/components/appCollection.vue";
import addCollection from "@/components/appAddCollection.vue";
import appModal from "@/components/appModal.vue";

export default {
  name: "index",
  components: {
    appCollection,
    addCollection,
    appModal,
  },
  computed: {
    //...mapState({ collections: "collection/collections" }),
    collections() {
      return this.$store.state.collection.collections;
    },
    isActiveModal() {
      return this.$store.state.collection.isActiveModal;
    },
  },
  methods: {
    ...mapActions({ getCollections: "collection/getCollections" }),
  },
  created() {
    this.getCollections();
  },
};
</script>

<style scoped>
.collections {
  border-radius: 10px;
  border: solid 1px rgba(207, 194, 194, 0.164);
  max-width: 820px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
</style>
