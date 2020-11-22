<template>
  <div>
    <Navbar />
    <section class="profile-container">
      <div class="profile" v-for="(profile,index) in profiles" :key="index">
        <img alt="profile picture"  class = "profile-picture" :src="profile.avatar">
        <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        <button name="follow" class = "follow-button" @click="followProfile">Follow</button>
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
        return{
          follow: false
        }
    },
  methods: {
    followProfile(){
      
    }
  },

  computed: {
    profiles() {
      return this.$store.state.profiles;
    },
  },
  mounted() {
    this.$store.dispatch('getProfiles');
  },
};
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

.follow-button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #75048b;
  border: none;
  border-radius: 4px;
}

.follow-button.followed {
  color: #75048b;
  background-color: #ffffff;
  border: 1px solid #75048b;
}
</style>
