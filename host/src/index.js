import Vue from 'vue/dist/vue.esm.js';
function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}
loadComponent('remote', 'Button')().then(({ default: Button }) => {
  console.log(Button);
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
});
