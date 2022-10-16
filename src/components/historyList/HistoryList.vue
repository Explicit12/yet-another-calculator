<script setup>
  import HistoryListItem from "./HistoryListItem.vue";
  import ThemeButton from "./ThemeButton.vue";

  defineProps(["historyArray"]);
</script>

<template>
  <div class="history-list-wrapper">
    <header class="history-list-header">
      <h2 class="history-headline">History</h2>
      <ThemeButton />
    </header>

    <ul class="history-list">
      <HistoryListItem
        v-for="(historyItem, index) in historyArray"
        :key="index"
      >
        <template v-slot:expression>
          {{ historyItem.expression }}
        </template>
        <template v-slot:solution>
          {{ historyItem.solution }}
        </template>
      </HistoryListItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";

  .history-list-wrapper {
    width: 100%;
  }

  .history-list {
    padding: 0 0 5rem 0;
  }

  .history-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--history-heading-line);

    .history-headline {
      margin: 0;
      @include rubik(1.5rem, 500);
      color: var(--history-heading-line);
    }
  }
</style>
