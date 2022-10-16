<script setup>
  import TheCalculator from "./components/calculator/TheCalculator.vue";
  import HistoryList from "./components/historyList/HistoryList.vue";
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
  <div class="container col-2">
    <TheCalculator @history-update="handler" />
    <HistoryList :history-array="history" />
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
