<template>
  <div>
    <Navbar />
    <section class="profile-container">
      <div class="profile" v-for="(profile,index) in profiles" :key="index">
        <img alt="profile picture"  class = "profile-picture" :src="profile.avatar">
        <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        <h1>me</h1>
        <button name="follow" class = "follow-button">Follow</button>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'Browse',
  components: {Navbar},
  data() {
        return {
            profiles: [],
        };
    },
    async created() {
        const profilesResponse = await fetch('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles');
        this.profiles = await profilesResponse.json();
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

.drop-down-container span {
  display: block;
}

.profile-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
    text-align: center;
}

.profile {
    display: inline-block;
    width: 40%;
    margin: 15px 7.5px auto;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    padding: 10px;
    text-align: center;
}

.profile img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}
</style>
