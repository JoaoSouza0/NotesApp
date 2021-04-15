<template>
  <div>
    <appHeader />
    <Nuxt />
  </div>
</template>
<script>
import appHeader from "@/components/appHeader.vue";
export default {
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
li ,p,hr{
  padding: 0;
  margin: 0;
}
body{
    background: #f6f6f6
;
}

* {
  box-sizing: border-box;
}
</style>
