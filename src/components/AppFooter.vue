<script setup>
  import MailIcon from "./icons/MailIcon.vue";
  import GithubIcon from "./icons/GithubIcon.vue";
</script>

<template>
  <footer class="footer">
    <div class="glory-to-ukraine">
      <div class="blue"></div>
      <div class="yellow"></div>
    </div>

    <p class="credits">By Dmytro Holdobin</p>

    <ul class="contacts">
      <li>
        <a href="https://github.com/Explicit12">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="mailto: explicit1@tutanota.com">
          <MailIcon />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
  @import "@/assets/scss/mixins";

  .footer {
    box-sizing: border-box;
    padding: 5rem 1rem;
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;
    border-top: 1px var(--history-heading-line) solid;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .credits {
      @include rubik();
      margin: 0;
      color: var(--history-heading-line);
    }

    .contacts {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .glory-to-ukraine {
      display: flex;
      flex-direction: column;
      width: 4rem;
      height: 2rem;

      .blue {
        height: 100%;
        width: 100%;
        background-color: #0066cc;
      }

      .yellow {
        height: 100%;
        width: 100%;
        background-color: #ffcc00;
      }
    }
  }

  @media screen and (min-width: 720px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }
  }
</style>
