<template>
  <div class="more" @click="isOpen = !isOpen">
    <p >...</p>
    <transition name="fade" appear>
      <div class="click-menu" v-if="isOpen">
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropDownMenu",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}

.icons {
  width: 50px;
}

.more {
  position: absolute;
  top: -1px;
  right: -30px;
  border-radius: 0 10px 10px 10px;
  padding: 10px;
  background: rgb(248, 248, 248);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.more p {
  display: true;
  margin-top: -10px;
  
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