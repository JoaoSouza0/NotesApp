<template>
  <header>
    <div class="header-content">
      <div>
        <img src="../assets/icons/noteIcon.svg" alt="" />
      </div>

      <nav>
        <ul class="menu">
          <li>
            <h4>{{ userName }}</h4>
          </li>
          <li>Perfil</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      userName: "João Victor",
    };
  },
};
</script>

<style scoped>
header {
  margin-top: 10px;
}

.header-content {
  border: solid 1px rgba(207, 194, 194, 0.164);
  border-radius: 10px;
  max-width: 820px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu {
  display: flex;
  align-items: baseline;
}

.menu li {
  margin-right: 20px;
}
</style>
