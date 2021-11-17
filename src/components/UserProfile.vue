<template>
  <div class="user-profile">
    <UserItem :userData="USER" :userVideos="USERFEEDS" />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "user-profile",
  components: {
    UserItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["USER", "USERFEEDS"]),
  },
  methods: {
    ...mapActions([
      "GET_USER_FROM_API",
      "GET_USER_VIDEOS_FROM_API",
      "GET_USER_VIDEOS_FROM_DISK",
    ]),
  },
  watch: {},
  mounted() {
    const { nickname } = this.$route.params;
    this.GET_USER_FROM_API(nickname);
    this.GET_USER_VIDEOS_FROM_DISK(nickname);
  },
};
</script>

<style lang="scss"></style>
