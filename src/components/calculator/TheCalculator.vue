<script setup>
  import ScoreBoard from "./ScoreBoard.vue";
  import NumPad from "./NumPad.vue";
  import evaluate from "../../utils/evaluate";
  import { ref, computed } from "vue";

  const scoreBoardInput = ref("");
  const prevExpression = ref("");

  const formatedScoreBoardInput = computed(() => {
    return scoreBoardInput.value.slice().replaceAll(" ", "");
  });

  function setPrevExpression() {
    prevExpression.value = formatedScoreBoardInput.value;
  }

  function clearInput() {
    scoreBoardInput.value = scoreBoardInput.value.substring(
      0,
      scoreBoardInput.value.length - 1,
    );
  }

  function showResult() {
    try {
      const invalidRegexp = new RegExp(/[a-z]|=|\$|@|!|&|'|"|`|\+\+|--|~/gi);
      const invalidTokens = String(formatedScoreBoardInput.value).match(
        invalidRegexp,
      );
      if (invalidTokens) {
        throw new SyntaxError(`Unexpected tokens ${invalidTokens}`);
      } else if (formatedScoreBoardInput.value === "") {
        throw new SyntaxError("Empty string");
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
      @clear-click="scoreBoardInput = ''"
      @backspace-click="clearInput"
      @numpad-click="(value) => (scoreBoardInput += value)"
    />
  </form>
</template>

<style scoped lang="scss">
  .calculator {
    border: var(--body-border);
    border-radius: 0 0 12px 12px;
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
      border-radius: 12px;
      max-width: 320px;
    }
  }
</style>
