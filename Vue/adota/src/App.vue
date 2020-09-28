<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import { BButton } from 'bootstrap-vue'
import { BNavbar, BNavbarBrand } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { FormTextareaPlugin } from 'bootstrap-vue'
import { FormPlugin } from 'bootstrap-vue'
import { FormInputPlugin } from 'bootstrap-vue'
import { FormGroupPlugin } from 'bootstrap-vue'
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.component('b-button', BButton)
Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 0px;
}
</style>
