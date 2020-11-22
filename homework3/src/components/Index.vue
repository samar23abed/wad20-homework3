<template>
    <div>
        <Navbar />
        <section class="main-container">
            <div class="post" v-for="(post, index) in posts" :key="index">
                <div class="post-author">
                    <span class="post-author-info">
                        <img :src="post.author.avatar" alt="Post author" />
                        <small>{{ post.author | name }}</small>
                    </span>
                    <small>{{ post.createTime }}</small>
                </div>

                <div v-if="post.media" class="post-image">
                    <div v-if="post.media.type === 'image'">
                        <img :src="post.media.url" alt="" />
                    </div>
                    <div v-if="post.media.type === 'video'">
                        <video controls :src="post.media.url" />
                    </div>
                </div>

                <div class="post-title">
                    <h3>{{ post.text ? post.text : '' }}</h3>
                </div>
                <div class="post-actions">
                    <LikeButton :value="post.likes" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar';
import LikeButton from './LikeButton';
import '../filters';

export default {
    name: 'Index',
    components: {
        Navbar,
        LikeButton,
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
    },
    mounted() {
        this.$store.dispatch('getPosts');
    },
};
</script>

<style>
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: '';
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    margin-left: 5px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img,
video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}
</style>
