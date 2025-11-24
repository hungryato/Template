<template>
  <nav class="krds-main-menu">
    <div class="inner">
      <ul class="gnb-menu">
        <li v-for="menu in menuList" :key="menu.label">
          <button
            type="button"
            class="gnb-main-trigger"
            :data-trigger="menu.trigger"
          >
            {{ menu.label }}
          </button>
          <!-- gnb-toggle-wrap -->
          <div class="gnb-toggle-wrap">
            <!-- gnb-main-list -->
            <div class="gnb-main-list" data-has-submenu="true">
              <ul>
                <li v-for="itemList in menu.children" :key="itemList.label">
                  <button
                    type="button"
                    class="gnb-sub-trigger"
                    data-trigger="gnb"
                  >
                    {{ itemList.label }}
                  </button>
                  <!-- gnb-sub-list -->
                  <div class="gnb-sub-list">
                    <div class="gnb-sub-content">
                      <h2 class="sub-title">{{ itemList.title }}</h2>
                      <ul>
                        <li v-for="item in itemList.children" :key="item.label">
                          <a v-if="item.isLink" :href="item.href">
                            {{ item.label }}
                          </a>
                          <button v-else type="button">{{ item.label }}</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- //gnb-sub-list -->
                </li>
              </ul>
            </div>
            <!-- //gnb-main-list -->
          </div>
          <!-- //gnb-toggle-wrap -->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { menuList } from "@/data/headerMenuData.ts";
</script>
