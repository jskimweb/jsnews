<template>
  <div>
    <NavBar></NavBar>
    <router-view v-slot="{Component}">
      <transition name=slide>
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
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
    /* text-decoration: none; */
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
    font-size: 2rem;
  }

  .slide-enter-from {
    opacity: 0;
  }

  .slide-enter-active {
    transition: 1s;
  }
</style>