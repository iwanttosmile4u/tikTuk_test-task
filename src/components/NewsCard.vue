<template>
  <div class="news-card">
    <router-link
      :to="{
        name: 'userProfile',
        params: { nickname: videoItem?.authorMeta?.name },
      }"
    >
      <div class="news-card__user">
        <img
          class="news-card__user-img"
          :src="videoItem.authorMeta.avatar"
          alt="user-photo"
        />
        <p class="news-card__user-name">
          {{ videoItem?.authorMeta?.nickName }}
        </p>
      </div>
    </router-link>
    <div class="news-card__description">
      <p class="news-card__description-text">{{ videoItem?.text }}</p>
    </div>
    <div class="news-card__video">
      <video
        class="news-card__video-item"
        :src="videoItem.videoUrl"
        controls
      ></video>
      <div class="news-card__info">
        <div class="news-card__reaction">
          <img
            class="news-card__reaction-img"
            src="../assets/images/love.png"
            alt="likes"
          />

          <span class="news-card__reaction-text">{{
            videoItem?.diggCount
          }}</span>
        </div>

        <div class="news-card__reaction">
          <img
            class="news-card__reaction-img"
            src="../assets/images/commentary.png"
            alt="comments"
          />
          <span class="news-card__reaction-text">{{
            videoItem?.commentCount
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news-card",
  components: {},
  props: {
    videoItem: {
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
.news-card {
  width: 100%;
  max-width: 500px;
  margin-bottom: 50px;

  &__user {
    display: flex;
    padding: 20px;
  }

  &__user-img {
    max-width: 15%;
    border-radius: 50%;
  }

  &__user-name {
    @include font($weight: bold, $size: 20px);
    margin-left: 20px;
  }

  &__video {
    display: flex;
    justify-content: space-between;
  }

  &__video-item {
    max-height: 80vh;
  }

  &__info {
    @include flex-column;
    justify-content: flex-end;
    margin-left: 10px;
  }

  &__reaction {
    @include flex-column;
  }

  &__reaction-text {
    margin-bottom: 30px;
  }

  &__reaction-img {
    max-width: 20%;
  }
}
</style>
