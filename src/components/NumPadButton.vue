<script setup>
  defineProps({
    buttonText: {
      type: String,
      required: true,
    },
    buttonGridArea: {
      type: String,
      default: "none",
    },
  });
</script>

<template>
  <input
    class="numpad-button"
    type="button"
    :value="buttonText"
    :style="{ gridArea: buttonGridArea }"
  />
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";

  .numpad-button {
    border: none;
    border-radius: 0.5rem;
    box-shadow: var(--button-shadow);
    height: 100%;
    width: 100%;

    @include rubik(2rem, 500);
    text-align: center;

    &.white-button {
      background-color: var(--white-numpad-button-background);
      color: var(--white-numpad-button-color);
    }

    &.black-button {
      background-color: var(--black-numpad-button-backgound);
      color: var(--black-numpad-button-color);
      border: var(--black-numpad-button-border);
    }

    &.green-button {
      background-color: var(--green-numpad-button-background);
      color: var(--green-numpad-button-color);
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
