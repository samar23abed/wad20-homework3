<template>
    <button type="button" name="like" @click="toggle" :class="'like-button' + (liked ? ' liked' : '')">
        {{ value }}
    </button>
</template>

<script>
export default {
    name: 'LikeButton',
    methods: {
        toggle: function () {
            this.liked = !this.liked;
        },
    },
    data: function () {
        return {
            liked: false,
        };
    },
    props: {
        value: Number,
    },
};
</script>

<style scoped>
.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>
