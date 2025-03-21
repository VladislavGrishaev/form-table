<script setup>
import NavTabs from "./components/NavTabs.vue";
import '../src/assets/style.css'


</script>

<template>
  <NavTabs/>
  <transition name="fade-slide" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>


