<template>
    <header>
        <nav>
            <div class="logo-container">
                <img src="../assets/logo.png" alt="sticker" />
            </div>
            <div class="search-container"><input type="text" name="search" /><button type="button">Search</button></div>
            <div class="avatar-container">
                <img class="avatar" @click="toggleDropdown" :src="userInfo.avatar" />
                <div class="drop-down-container" :style="{ display: open ? 'block' : 'none' }">
                    <span id="user-name">{{ userInfo | name }}</span>
                    <span id="user-email"></span>
                    <span class="separator"></span>
                    <span>
                        <router-link to="/browse"> Browse</router-link>
                    </span>
                    <span class="separator"></span>
                    <span>
                        <router-link to="/"> Log Out</router-link>
                    </span>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import '../filters';

export default {
    name: 'Navbar',
    methods: {
        toggleDropdown: function () {
            this.open = !this.open;
        },
    },
    data: function () {
        return {
            open: false,
        };
    },

    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        },
    },
    mounted() {
        this.$store.dispatch('getUserInfo');
    },
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
nav div.search-container > button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
}
.drop-down-container span {
    display: block;
}
.drop-down-container span.separator {
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}
</style>
