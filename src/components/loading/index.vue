<template>
  <transition name="loading">
    <div v-show="this.loading" class="loading">
      <span v-if="this.error">Ops! This is strange, sorry!</span>
      <span v-else class="loading__text">Loading...</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'TheLoading',

    props: [
      'loading',
      'error'
    ]
  }
</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #222;

    color: #fff;
    font-size: 2em;
  }

  .loading__text {
    animation: loading 2s infinite alternate;
  }

  .loading-enter,
  .loading-leave-active {
    opacity: 0;
    transform: scale(1.2);
  }

  .loading-enter-active,
  .loading-leave-active {
    transition: .5s ease;
  }

  @keyframes loading {
    0% { opacity: .4; }
    100% { opacity: 1; }
  }
</style>
