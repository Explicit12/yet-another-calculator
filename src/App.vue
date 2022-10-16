<script setup>
  import TheCalculator from "./components/calculator/TheCalculator.vue";
  import HistoryList from "./components/historyList/HistoryList.vue";
  import AppFooter from "./components/AppFooter.vue";
  import { ref, onMounted, watch, computed } from "vue";

  const history = ref([]);

  const historyCopy = computed(() => [...history.value]);

  watch(historyCopy, (newValue) => {
    localStorage.setItem("calc-history", JSON.stringify(newValue));
  });

  function handler(newItem) {
    history.value.unshift(newItem);
  }

  onMounted(() => {
    history.value =
      JSON.parse(window.localStorage.getItem("calc-history")) || [];
  });
</script>

<template>
  <section class="container col-2">
    <TheCalculator @history-update="handler" />
    <HistoryList :history-array="history" />
  </section>
  <AppFooter />
</template>

<style scoped lang="scss">
  .container {
    padding: 5rem 1rem 10rem 1rem;
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  @media screen and (min-width: 720px) {
    .container {
      min-height: 100vh;
      width: 100%;
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
