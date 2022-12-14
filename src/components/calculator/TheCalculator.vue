<script setup>
  import ScoreBoard from "./ScoreBoard.vue";
  import NumPad from "./NumPad.vue";
  import evaluate from "../../utils/evaluate";
  import { ref, computed, watch } from "vue";

  const emit = defineEmits(["historyUpdate"]);

  const scoreBoardInput = ref("");
  const prevExpression = ref("");
  const error = ref(true);

  const formatedScoreBoardInput = computed(() => {
    return scoreBoardInput.value.slice().replaceAll(" ", "");
  });

  watch(formatedScoreBoardInput, (newValue) => {
    const invalidRegexp = new RegExp(
      /[a-z]|^$|=|\$|@|!|&|'|"|`|\+\+|--|\/\/|\*\*|\.\.|~/gi,
    );
    if (newValue.match(invalidRegexp)) error.value = true;
    else error.value = false;
  });

  function setPrevExpression() {
    if (error.value) return;
    prevExpression.value = formatedScoreBoardInput.value;
  }

  function clearInput() {
    scoreBoardInput.value = scoreBoardInput.value.substring(
      0,
      scoreBoardInput.value.length - 1,
    );
  }

  function showResult() {
    if (error.value) return;
    scoreBoardInput.value = String(evaluate(formatedScoreBoardInput.value));
    emit("historyUpdate", {
      expression: prevExpression.value,
      solution: scoreBoardInput.value,
    });
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
      :error="error"
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
    border-radius: 12px;

    flex-shrink: 0;

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
      position: sticky;
      top: 5rem;
    }
  }
</style>
