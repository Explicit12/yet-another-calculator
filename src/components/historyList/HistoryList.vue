<script setup>
  import HistoryIcon from "../icons/HistoryIcon.vue";
  import HistoryListItem from "./HistoryListItem.vue";
</script>

<template>
  <div class="history-list-wrapper">
    <header class="history-list-header">
      <h2 class="history-headline">History</h2>
      <button class="back-history-button">
        <HistoryIcon />
      </button>
    </header>

    <ul class="history-list">
      <HistoryListItem v-for="n in 50" :key="n" />
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
    padding-bottom: 5px;
    border-bottom: 1px solid var(--history-heading-line);

    .history-headline {
      margin: 0;
      @include rubik(1.5rem, 500);
      color: var(--history-heading-line);
    }

    .back-history-button {
      background: none;
      border: none;
      line-height: 0;
      border-radius: 4px;
      outline: var(--history-heading-line);
      padding: 0.5rem;
      border-radius: 4px;
      transition: 250ms background-color;

      &:hover {
        cursor: pointer;
        transition: 250ms background-color;
        background-color: var(--active-color);
      }
    }
  }
</style>
