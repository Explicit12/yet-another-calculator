<script setup>
  import TheCalculator from "./components/calculator/TheCalculator.vue";
</script>

<template>
  <div class="container">
    <TheCalculator />
  </div>
</template>

<style scoped lang="scss">
  @media screen and (min-width: 720px) {
    .container {
      max-width: 802px;
      padding: 1rem;
      margin: 0 auto;
    }
  }
</style>
