<template>
  <li class="history-list-item" v-ripple="'#6983B3'">
    <div class="expression">
      <slot name="expression"> 250+250 </slot>
    </div>
    <div class="solution">
      <slot name="solution"> 500 </slot>
    </div>
  </li>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";

  .history-list-item {
    list-style: none;
    border-bottom: 1px solid var(--history-item-line);
    text-align: right;
    padding: 1rem 0;

    .expression {
      @include rubik(1rem, 400);
      color: var(--expression);
    }

    .solution {
      margin-top: 0.5rem;
      @include rubik(1rem, 500);
      color: var(--history-result);
    }
  }
</style>
