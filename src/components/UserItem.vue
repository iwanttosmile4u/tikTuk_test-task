<template>
  <div class="user-item">
    <div class="user-item__header">
      <img
        class="user-item__header-img"
        :src="userData?.user?.avatarThumb"
        alt="user-photo"
      />
      <p class="user-item__header-name">{{ userData?.user?.nickname }}</p>
    </div>
    <div class="user-item__info">
      <p class="user-item__info-text">
        {{ userData?.stats?.followerCount }} Followers
      </p>
      <p class="user-item__info-text">
        {{ userData?.stats?.followingCount }} Followings
      </p>
      <p class="user-item__info-text">
        {{ userData?.stats?.heartCount }} Likes
      </p>
    </div>
  </div>
  <VideoItem
    v-for="newsItem in userVideos?.itemList"
    :key="newsItem.id"
    :videoItem="newsItem"
  />
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  name: "user-item",
  components: { VideoItem },
  props: {
    userData: {
      type: Object,
      default() {
        return {};
      },
    },
    userVideos: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";
.user-item {
  @include flex-column;
  justify-content: center;
  align-items: center;

  &__header {
    display: flex;
  }

  &__header-name {
    @include font($weight: bold, $size: 18px);
    margin-left: 10px;
  }

  &__info {
    display: flex;
  }

  &__info-text {
    margin: 20px 10px;
  }
}
</style>
