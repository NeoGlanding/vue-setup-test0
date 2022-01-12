<template>
  <TestComponent />
  <test-component></test-component>
  <check-vue></check-vue>
</template>

<script>
import CheckVue from './components/CheckVue.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
    CheckVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
