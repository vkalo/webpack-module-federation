import Vue from 'vue/dist/vue.esm.js';
import Button from './Button.js';

Vue.component('button-counter', Button);
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  mounted() {
    console.log(this);
  }
});