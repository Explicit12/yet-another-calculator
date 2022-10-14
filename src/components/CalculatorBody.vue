<script setup>
  import ScoreBoard from "./ScoreBoard.vue";
  import NumPad from "./NumPad.vue";
  import evaluate from "../utils/evaluate";
  import { ref, computed } from "vue";

  const scoreBoardInput = ref("");
  const prevExpression = ref("");

  const formatedScoreBoardInput = computed(() => {
    return scoreBoardInput.value.slice().replaceAll(" ", "");
  });

  function setPrevExpression() {
    prevExpression.value = formatedScoreBoardInput.value;
  }

  function showResult() {
    try {
      const invalidRegexp = new RegExp(/[a-z]|=|\$|@|!|&|'|"|`|\+\+|--|~/gi);
      const invalidTokens = String(formatedScoreBoardInput.value).match(
        invalidRegexp,
      );
      if (invalidTokens) {
        throw new SyntaxError(`Unexpected tokens ${invalidTokens}`);
      }

      scoreBoardInput.value = String(evaluate(formatedScoreBoardInput.value));
    } catch (error) {
      console.error(error);
    }
  }
</script>

<template>
  <form action="#" class="calculator">
    <ScoreBoard
      @result-request="
        setPrevExpression();
        showResult();
      "
      v-model="scoreBoardInput"
      :prev-expression="prevExpression"
    />
    <NumPad
      @equal-click="
        setPrevExpression();
        showResult();
      "
    />
  </form>
</template>

<style scoped lang="scss">
  .calculator {
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
