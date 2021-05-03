<template>
  <div>
    <appHeader />
    <div class="collections">
      <Nuxt />
    </div>
    <appModal v-show="isActiveModal" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import appHeader from "@/components/appHeader.vue";
import appModal from "@/components/appModal.vue";
export default {
  head: {
    titleTemplate: "Collection App - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
  components: {
    appHeader,
    appModal,
  },
  computed: {
    ...mapState("collection", {
      isActiveModal: "isActiveModal",
    }),
  },
};
</script>
<style>
ul {
  list-style: none;
}
.collections {
  border-radius: 10px;
  border: solid 1px rgba(207, 194, 194, 0.164);
  max-width: 820px;
  margin: 0 auto;
  margin-top: 20px;
}
body,
h1,
h2,
ul,
li,
p,
hr {
  padding: 0;
  margin: 0;
}
body {
  background: #f6f6f6;
}

* {
  box-sizing: border-box;
}
</style>
