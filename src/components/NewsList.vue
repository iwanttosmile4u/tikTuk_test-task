<template>
  <div class="news-list">
    <NewsCard
      v-for="newsItem in NEWSLIST"
      :key="newsItem.id"
      :videoItem="newsItem"
    />
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "news-list",
  components: {
    NewsCard,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["NEWSLIST"]),
  },
  methods: {
    ...mapActions(["GET_NEWS_FROM_API"]),
  },
  watch: {},
  mounted() {
    this.GET_NEWS_FROM_API();
  },
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.news-list {
  @include flex-column;
  justify-content: center;
  align-items: center;
}
</style>
