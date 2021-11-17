<template>
  <div class="video-item">
    <div class="video-item__video">
      <video
        class="video-item__video-item"
        :src="videoItem.video.downloadAddr"
        controls
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-item",
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
.video-item {
  margin-bottom: 50px;
}
</style>
