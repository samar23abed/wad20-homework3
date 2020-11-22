<template>
  <section :id="browse-page">
    <header>
      <nav>
        <div :class="logo-container">
          <img :src="res/images/logo.png" alt="postIt">
        </div>
        <div :class="search-container">
          <input type="text"><button>Search</button>
        </div>
        <div :class="avatar-container">
          <img :class="avatar">
          <div :class="drop-down-container">
            <span :id="user-name">John Doe</span>
            <span :id="user-email"></span>
            <span :class="separator"></span>
            <span>
              <a :href="browse.html">Browse</a>
            </span>
            <span :class="separator"></span>
            <span>
              <a :href="login.html">Log Out</a>
            </span>
          </div>
        </div>
      </nav>
    </header>
    <section :class="profile-container">
      <div :class="profile" v-for="(profile,index) in profiles" :key="index">
        <img :src=profile.avatar @error="profilePicture"  :class = "profile-picture">
        <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        <button :name="follow" :class = "follow-button">Follow</button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Browse",
  data(){
    return {
      profiles: []
    }
  },
  async created(){
    const profilesResponse = await fetch("https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles");
    const profilesJson = await profilesResponse.json();
    this.posts = profilesJson;
  }
}
</script>

<style scoped>
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