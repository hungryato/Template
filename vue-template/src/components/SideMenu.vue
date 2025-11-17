ers/template/vue-template/src/components/SideMenu.vue
<template>
  <aside class="side-menu">
    <ul>
      <li><a href="#">대시보드</a></li>
      <li><a href="#">사용자 관리</a></li>
      <li><a href="#">설정</a></li>
    </ul>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.side-menu {
  width: 200px;
  background: #f5f5f5;
  height: 100%;
  padding: 24px 0;
}
.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.side-menu a {
  display: block;
  padding: 12px 24px;
  color: #222;
  text-decoration: none;
}
.side-menu a:hover {
  background: #e0e0e0;
}
</style>