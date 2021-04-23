<template>
  <div>
    <appHeader />
    <Nuxt />
  </div>
</template>
<script>
import appHeader from "@/components/appHeader.vue";
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
  },
};
</script>
<style>
ul {
  list-style: none;
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
