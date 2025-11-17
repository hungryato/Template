<template>
  <!-- header -->
  <header id="krds-header">
    <!-- 헤더 컨텐츠 영역  -->
    <div class="header-in">
      <!-- 헤더 상단 기타메뉴 -->
      <div class="header-container">
        <div class="inner">
          <HeaderUtility />
          <HeaderBranding />
        </div>
      </div>
      <!-- //헤더 상단 기타메뉴 -->

      <!-- 메인메뉴 : 데스크탑 -->
      <HeaderMenu />
      <!-- //메인메뉴 : 데스크탑 -->
    </div>
    <!-- //헤더 컨텐츠 영역  -->

    <!-- 메인메뉴 : 모바일 -->
    <MobileMenu />
    <!-- //메인메뉴 : 모바일 -->
  </header>
  <!-- //header -->
</template>

<script setup>
import HeaderUtility from "../header/HeaderUtility.vue";
import HeaderBranding from "../header/HeaderBranding.vue";
import HeaderMenu from "../header/HeaderMenu.vue";
import MobileMenu from "../header/MobileMenu.vue";
</script>
