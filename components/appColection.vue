<template>
  <section class="test">
    <div class="collection">
      <div class="icons">
        <img src="" alt="" />
        icon
      </div>
      <div class="infos">
        <p>{{ name }}</p>
        <small>{{ notes }} note </small>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "collection",
  props: ["name", "notes"],
};
</script>

<style>
.collection {
  background: rgb(248, 248, 248);
  border: solid 1px rgba(207, 194, 194, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-width: 120px;
  height: 150px;
  border-radius: 10px;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.infos {
  text-align: center;
}
</style>
