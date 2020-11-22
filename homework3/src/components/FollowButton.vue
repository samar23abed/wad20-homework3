<template>
    <button @click="toggleFollow" :class="'follow-button' + (followed ? ' followed' : '')" v-text="buttonText"></button>
</template>

<script>
export default {
    name: 'FollowButton',
    data() {
        return {
            followed: false,
        };
    },
    methods: {
        toggleFollow() {
            this.followed = !this.followed;
        },
    },
    computed: {
        buttonText() {
            return this.followed ? 'Followed' : 'Follow';
        },
    },
};
</script>

<style scoped>
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
