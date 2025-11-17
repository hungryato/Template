<template>
  <div id="wrap" class="g-wrap">
    <Header />
    <div id="container">
      <div class="inner in-between">
        <SideMenu />
        <Content />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/layout/Header.vue";
import SideMenu from "../components/layout/SideMenu.vue";
import Content from "../components/Content.vue";
</script>

<style scoped></style>
