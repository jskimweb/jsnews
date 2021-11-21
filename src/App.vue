<template>
  <div>
    <Header></Header>
    <router-view v-slot="{Component}">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Spinner from '@/components/Spinner.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['loadingStatus'])
    },
    components: {
      Header,
      Spinner
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  li,
  ul {
    list-style: none;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 2rem;
    font-weight: 400;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: .5s;
  }
</style>