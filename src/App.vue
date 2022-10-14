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
  .container {
    padding: 0 1rem;
    padding-top: 5rem;
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  @media screen and (min-width: 720px) {
    .container {
      max-width: 802px;
      margin: 0 auto;
    }

    .col-2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 5rem;
    }
  }
</style>
