import Vue from 'vue';
import App from './App.vue';

const y = { ...App };

new Vue({
    el: '#app',
    render: h => h(App)
});
