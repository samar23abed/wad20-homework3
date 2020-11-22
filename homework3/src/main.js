import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Login from '@/components/Login';
import Index from '@/components/Index';
import Browse from "@/components/Browse";
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    { path: '/', component: Login },
    { path: '/index', component: Index },
    { path: '/browse', component: Browse },
];

const router = new VueRouter({ routes });

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
