<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
//import Login from './components/Login.vue'
//import Browse from './components/Browse.vue'

export default {
    name: 'App',
    components: {},
};
</script>

<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}
html,
body {
    margin: 0;
    padding: 0;
}

body {
    background-color: #0277bd;
    color: #263238;
}
a {
    color: #40c4ff;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}
</style>
