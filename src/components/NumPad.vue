<script setup>
  import NumPadButton from "./NumPadButton.vue";

  const buttons = [
    {
      buttonText: "1",
      buttonGridArea: "one",
      class: "white-button",
    },
    {
      buttonText: "2",
      buttonGridArea: "two",
      class: "white-button",
    },
    {
      buttonText: "3",
      buttonGridArea: "three",
      class: "white-button",
    },
    {
      buttonText: "4",
      buttonGridArea: "four",
      class: "white-button",
    },
    {
      buttonText: "5",
      buttonGridArea: "five",
      class: "white-button",
    },
    {
      buttonText: "6",
      buttonGridArea: "six",
      class: "white-button",
    },
    {
      buttonText: "7",
      buttonGridArea: "seven",
      class: "white-button",
    },
    {
      buttonText: "8",
      buttonGridArea: "eight",
      class: "white-button",
    },
    {
      buttonText: "9",
      buttonGridArea: "nine",
      class: "white-button",
    },
    {
      buttonText: "0",
      buttonGridArea: "zero",
      class: "white-button",
    },
    {
      buttonText: "C",
      buttonGridArea: "clear",
      class: "black-button",
    },
    {
      buttonText: "/",
      buttonGridArea: "divide",
      class: "black-button",
    },
    {
      buttonText: "X",
      buttonGridArea: "multiple",
      class: "black-button",
    },
    {
      buttonText: "<",
      buttonGridArea: "backspace",
      class: "black-button",
    },
    {
      buttonText: "-",
      buttonGridArea: "minus",
      class: "black-button",
    },
    {
      buttonText: "+",
      buttonGridArea: "plus",
      class: "black-button",
    },
    {
      buttonText: "%",
      buttonGridArea: "percent",
      class: "white-button",
    },
    {
      buttonText: ".",
      buttonGridArea: "dot",
      class: "white-button",
    },
    {
      buttonText: "=",
      buttonGridArea: "equal",
      class: "green-button",
    },
  ];
</script>

<template>
  <div class="numpad">
    <NumPadButton
      v-for="(button, index) in buttons"
      :key="index"
      :button-text="button.buttonText"
      :button-grid-area="button.buttonGridArea"
      :class="button.class"
      v-ripple="button.class === 'white-button' ? '#6983B3' : '#fff'"
    />
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
