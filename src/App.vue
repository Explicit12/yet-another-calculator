<script setup>
  import TheCalculator from "./components/calculator/TheCalculator.vue";
  import HistoryList from "./components/historyList/HistoryList.vue";
</script>

<template>
  <div class="container col-2">
    <TheCalculator />
    <HistoryList />
  </div>
</template>

<style scoped lang="scss">
  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  @media screen and (min-width: 720px) {
    .container {
      max-width: 802px;
      padding: 1rem;
      margin: 0 auto;
    }

    .col-2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 5rem;
    }
  }
</style>
