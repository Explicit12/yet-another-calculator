<script setup>
  import { onMounted, ref, watch } from "vue";

  const themeToggler = ref(false);

  watch(themeToggler, () => toggleTheme());

  function toggleTheme() {
    const root = document.querySelector("html");
    root.setAttribute("data-theme", themeToggler.value ? "dark" : "light");
    window.localStorage.setItem(
      "calc-theme",
      JSON.stringify(themeToggler.value),
    );
  }

  onMounted(() => {
    themeToggler.value =
      JSON.parse(window.localStorage.getItem("calc-theme")) || false;
  });
</script>

<template>
  <label for="theme-button">
    <input
      type="checkbox"
      id="theme-button"
      name="theme-button"
      v-model="themeToggler"
    />
    <span class="dark" v-show="!themeToggler">Dark</span>
    <span class="light" v-show="themeToggler">Light</span>
  </label>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/mixins";

  #theme-button {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .dark,
  .light {
    @include rubik();
    color: var(--history-heading-line);
    padding: 0.5rem;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  .light {
    color: var(--white);
    border: 1px var(--white) solid;
  }

  .dark {
    border: 1px var(--black) solid;
  }
</style>
