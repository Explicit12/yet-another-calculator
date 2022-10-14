<script setup></script>

<template>
  <li class="history-list-item" v-ripple="'#000'">
    <button class="history-item-button">
      <div class="expression">
        <slot name="expression"> 250+250 </slot>
      </div>
      <div class="decision">
        <slot name="decision"> 500 </slot>
      </div>
    </button>
  </li>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";

  .history-list-item {
    list-style: none;
    border-bottom: 1px solid var(--history-item-line);

    .history-item-button {
      padding: 1rem 0;
      text-align: right;
      background: none;
      border: none;
      width: 100%;
      transition: 250ms background-color;

      &:hover {
        transition: 250ms background-color;
        background-color: var(--active-color);
        cursor: pointer;
      }
    }

    .expression {
      @include rubik(1rem, 400);
      color: var(--expression);
    }

    .decision {
      margin-top: 0.5rem;
      @include rubik(1rem, 500);
      color: var(--history-result);
    }
  }
</style>
