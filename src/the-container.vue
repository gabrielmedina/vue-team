<template>
  <div class="app">
    <the-header></the-header>
    <the-team></the-team>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from './the-header.vue'
  import TheFooter from './the-footer.vue'
  import TheTeam from './features/team'

  export default {
    name: 'TheContainer',

    components: {
      TheHeader,
      TheFooter,
      TheTeam
    },

    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;

    padding: 0;
    background: #2ECC71;

    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
