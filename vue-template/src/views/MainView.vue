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
import Header from "../components/layout/HeaderView.vue";
import SideMenu from "../components/layout/SideMenuView.vue";
import Content from "../components/layout/ContentView.vue";
</script>

<style scoped></style>
