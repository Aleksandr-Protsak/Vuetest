<template>
<div id="app">
  <app-header></app-header>
  <div class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <app-sidebar></app-sidebar>
 </div>
</template>
<script>
  export default {
    components: {
      'app-header' : () => import('./layouts/app-header/Header.vue'),
      'app-sidebar' : () => import('./layouts/sidebar/Sidebar.vue')
    }
  }
</script>
<style src="./../css/style.css"></style>
