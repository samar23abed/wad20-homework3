<template>
  <section :id="browse-page">
    <header>
      <nav>
        <div :class="logo-container">
          <img :src="res/images/logo.png" alt="postIt">
        </div>
        <div :class="search-container">
          <input :type="text" name="search"><button type="button">Search</button>
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
    <section :class="main-container">
      <div :class="profile" v-for="(profile,index) in profiles" :key="index">
        <!--<img :src={{profile.avatar}} alt="profile picture"  :class = "profile-picture">-->
        <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        <button name="follow" :class = "follow-button">Follow</button>
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

</style>