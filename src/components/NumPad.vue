<script setup>
  import NumPadButton from "./NumPadButton.vue";

  const numberButtons = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
</script>

<template>
  <div class="numpad">
    <NumPadButton
      v-for="(button, index) in numberButtons"
      :key="index"
      :button-text="index.toString()"
      :button-grid-area="button"
      class="white-button"
    />
    <NumPadButton
      button-text="C"
      button-grid-area="clear"
      class="black-button"
    />
    <NumPadButton
      button-text="/"
      button-grid-area="divide"
      class="black-button"
    />
    <NumPadButton
      button-text="X"
      button-grid-area="multiple"
      class="black-button"
    />
    <NumPadButton
      button-text="<"
      button-grid-area="backspace"
      class="black-button"
    />
    <NumPadButton
      button-text="-"
      button-grid-area="minus"
      class="black-button"
    />
    <NumPadButton
      button-text="+"
      button-grid-area="plus"
      class="black-button"
    />
    <NumPadButton
      button-text="="
      button-grid-area="equal"
      class="green-button"
    />
    <NumPadButton
      button-text="%"
      button-grid-area="percent"
      class="white-button"
    />
    <NumPadButton button-text="." button-grid-area="dot" class="white-button" />
  </div>
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
