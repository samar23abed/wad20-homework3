import Vue from 'vue';

Vue.filter('name', (author) => author.firstname + ' ' + author.lastname);
