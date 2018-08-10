<template>
  <footer class="footer">
    <small class="footer__small">
      <p class="footer__text">
        Feito com <img class="footer__logo" src="/vuejs.png" alt="Vue.js">
        por <a class="footer__link" href="https://gabrielmedina.github.io">Gabriel Medina</a>
      </p>
    </small>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 100px;
    padding: 30px;
    background: #222;
  }

  .footer__small {
    color: #fff;
    font-size: 1em;
    text-align: center;
  }

  .footer__link {
    color: #A9DFBF;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .footer__logo {
    position: relative;
    z-index: 0;
    top: .2em;
    width: 1em;
    height: 1em;
    transform: translateZ(0);
  }

  @media screen and (min-width: 768px) {
    .footer {

    }

    .footer__small {
      font-size: 1.2em;
    }
  }
</style>
