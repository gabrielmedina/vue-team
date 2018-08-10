<template>
  <button class="people" :class="{ 'active': this.active }" @click="$emit('click')">
    <figure class="people__figure">
      <img class="people__img" :src="this.people.photo" :alt="this.people.name">
    </figure>

    <div class="people__content">
      <h1 class="people__name">{{ this.people.name }} {{ this.people.surname }}</h1>
      <p class="people__region">{{ this.people.region }}</p>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'ThePeople',

    props: [
      'people',
      'active'
    ]
  }
</script>

<style lang="scss" scoped>
  .people {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 60px 40px;
    background: rgba(#fff, .1);
    border: none;
    border-radius: 6px;

    font-size: 1em;

    transition: .3s ease;
    outline: none;

    &:hover {
      cursor: pointer;
      background: #fff;
      box-shadow: 0 4px 40px rgba(#239B56,.04);
      transform: scale(1.2);
      z-index: 11;

      .people__name {
        color: #4D5656;
      }

      .people__region {
        color: #82E0AA;
      }

      .people__figure {
        box-shadow: 0 0 0 4px #fff, 0 0 0 6px #eee;
      }

      .people__img {
        filter: grayscale(0);
      }
    }

    &.active {
      background: #3D3636;

      .people__name {
        color: #2ECC71;
      }

      .people__figure {
        box-shadow: none;
      }

      .people__img {
        filter: grayscale(0);
      }

      &:hover {
        background: #3D3636;
        transform: scale(1);

        .people__name {
          color: #2ECC71;
        }

        .people__region {
          color: #D5F5E3;
        }

        .people__figure {
          box-shadow: none;
        }

        .people__img {
          filter: grayscale(0);
        }
      }
    }
  }

  .people__figure {
    margin: 0 0 15px;

    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;

    transition: .3s ease;
  }

  .people__img {
    width: 100%;
    border-radius: 100%;
    filter: grayscale(100%);
  }

  .people__content {
    text-align: center;
  }

  .people__name {
    margin: 0;

    color: #fff;
    font-size: 1.2em;

    height: 1.3em;
    overflow: hidden;

    transition: .3s ease;
  }

  .people__region {
    margin: 0;

    color: #D5F5E3;
    font-size: 1em;

    transition: .3s ease;
  }
</style>
