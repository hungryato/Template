<template>
  <nav class="header-menu">
    <ul>
      <li><a href="#">메뉴1</a></li>
      <li><a href="#">메뉴2</a></li>
      <li><a href="#">메뉴3</a></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.header-menu ul {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.header-menu a {
  color: #fff;
  text-decoration: none;
}
</style>