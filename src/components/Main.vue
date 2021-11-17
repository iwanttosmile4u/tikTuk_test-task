<template>
  <NewsList />
</template>

<script>
import NewsList from "./NewsList";

export default {
  name: "main",
  components: {
    NewsList,
  },
  props: {},
  data() {
    return {
      title: "Main",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss"></style>
