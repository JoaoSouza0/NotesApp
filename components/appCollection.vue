<template>
  <section>
    <div class="collection">
      <dropDownMenu :id="id" />
      <div class="icons">
        <img src="@/assets/icons/work.svg" alt="" />
      </div>
      <div class="infos">
        <p>{{ name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import dropDownMenu from "./dropDownMenu.vue";

export default {
  name: "collection",
  props: ["name", "id"],
  components: {
    dropDownMenu,
  },
};
</script>

<style>
.collection {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-width: 120px;
  height: 150px;
  border-radius: 10px 0 10px 10px;
  margin: 20px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1s forwards;
}
.infos {
  text-align: center;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform:all translate3d(0, 50px, );
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}
</style>
