<script setup>
  import ScoreBoard from "./ScoreBoard.vue";
</script>

<template>
  <form action="#" class="calculator">
    <ScoreBoard />
    <div class="numpad"></div>
  </form>
</template>

<style scoped lang="scss">
  .calculator {
    // width: 320px;
    height: 568px;

    border: var(--body-border);
    border-radius: 12px;
    box-shadow: var(--body-shadow);

    .numpad {
      margin-top: -14px;
      height: 392px;
      background-color: var(--numpad-background);
      border-radius: 11px;
    }
  }

  @media screen and (min-width: 720px) {
    .calculator {
      max-width: 320px;
    }
  }
</style>
