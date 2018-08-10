<template>
  <header class="header">
    <h1 class="header__title">Make your <span class="header__logo">TEAM!</span></h1>
  </header>
</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 160px;

    text-align: center;
  }

  .header__title {
    cursor: default;
    margin: 0;
    color: #E9F7EF;
    font-size: 2em;
    line-height: 1.1;
  }

  .header__logo {
    color: #3D3636;
    font-weight: 800;
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    .header {
      height: 220px;
    }

    .header__title {
      font-size: 3em;
    }
  }
</style>
