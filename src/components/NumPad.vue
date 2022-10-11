<script setup></script>

<template>
  <div class="numpad"></div>
</template>

<style scoped lang="scss">
  .numpad {
    margin-top: -14px;
    height: 392px;
    background-color: var(--numpad-background);
    border-radius: 11px;
    padding: 1.5rem;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      "clear divide multiple backspace"
      "seven eight nine minus"
      "four five six plus"
      "one two three equal"
      "percent zero dot equal";
  }
</style>
