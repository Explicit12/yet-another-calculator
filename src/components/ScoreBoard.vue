<script setup></script>

<template>
  <div class="scoreboard">
    <span class="previous-expression">
      Type here
      <b>&#128071;</b>
    </span>
    <span class="input-wrapper">
      <input
        class="expression-input"
        type="number"
        name="expression-input"
        id="expression-input"
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";
  .scoreboard {
    height: 190px;
    border-radius: 11px 11px 0;
    background-color: var(--scoreboard-background);

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    .previous-expression {
      color: var(--expression);
      padding-right: 1.5rem;
      @include rubik(1.5rem, 500);
    }

    .expression-input {
      @include rubik(3rem);
      text-align: right;

      color: var(--result);
      background: transparent;
      border: none;

      padding: 1.5rem;
      padding-bottom: calc(1rem + 14px);
      box-sizing: border-box;
      width: 100%;

      appearance: none;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }

      &:focus,
      &:active,
      &:focus-visible {
        border: none;
        outline: none;
      }
    }

    .input-wrapper {
      position: relative;
    }
    .input-wrapper::after {
      content: "";
      background: linear-gradient(
        90deg,
        var(--scoreboard-background) 6.25%,
        transparent 100%
      );
      position: absolute;
      height: 3.6rem;
      width: 4rem;
      left: 1.4rem;
      top: 1.5rem;
    }
  }
</style>
