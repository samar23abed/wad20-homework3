import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    userInfo: {},
    posts: [],
    profiles: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
    getUserInfo({ commit }) {
        axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/users/1').then((response) => {
            commit('SET_USER_INFO', response.data);
        });
    },
    getPosts({ commit }) {
        axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/posts').then((response) => {
            commit('SET_POSTS', response.data);
        });
    },
    getProfiles({ commit }) {
        axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles').then((response) => {
            commit('SET_PROFILES', response.data);
        });
    },
};

//to handle mutations
const mutations = {
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_PROFILES(state, profiles) {
        state.profiles = profiles;
    },
};

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
