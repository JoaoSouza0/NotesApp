<template>
  <section>
    <div class="wrapper">
      <dropDownMenu :id="id" />
      <nuxt-link :to="'collection/' + id">
        <div class="collection">
          <div class="icons">
            <img src="@/assets/icons/work.svg" alt="" />
          </div>
          <div class="infos">
            <p>{{ name }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import dropDownMenu from "./dropDownCollection.vue";

export default {
  name: "collection",
  props: ["name", "id"],
  components: {
    dropDownMenu,
  },
};
</script>

<style>
.wrapper {
  position: relative;
  margin: 20px 20px;
  border: 20px;
}
.wrapper:hover {
  transform: scale(1.08);
}

.collection {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-width: 120px;
  height: 150px;
  border-radius: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1s forwards;
}
.infos {
  text-align: center;
  color: black;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: all translate3d(0, 50px);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}
</style>
