<script setup></script>

<template>
  <form action="#" class="calculator">
    <div class="scoreboard"></div>
    <div class="numpad"></div>
  </form>
</template>

<style scoped lang="scss">
  .calculator {
    width: 320px;
    height: 568px;

    border: var(--body-border);
    border-radius: 12px;
    box-shadow: var(--body-shadow);
  }
  .calculator .scoreboard {
    height: 190px;
    border-radius: 11px 11px 0;
    background-color: var(--scoreboard-background);

    .expression {
      color: var(--expression);
    }

    .result {
      color: var(--result);
    }
  }

  .calculator .numpad {
    margin-top: -14px;
    height: 392px;
    background-color: var(--numpad-background);
    border-radius: 11px;
  }
</style>
