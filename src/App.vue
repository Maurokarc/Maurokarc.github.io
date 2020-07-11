<template>
  <v-app>
    <v-container class="col-12 pa-0">
      <app-header></app-header>
      <v-main class="mx-auto">
        <app-content></app-content>
      </v-main>
      <app-footer></app-footer>
    </v-container>
  </v-app>
</template>

<script>
import header from "./layout/header";
import content from "./layout/content";
import footer from "./layout/footer";

export default {
  name: "App",
  components: {
    "app-header": header,
    "app-content": content,
    "app-footer": footer
  },
  watch: {
    $route: {
      immediate: true,
      handler(newRoute) {
        document.title =
          this.$t("_site_") + " - " + this.$t(newRoute.meta.title);
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 0;
  padding: 0 0;
}
*,
*:before,
*:after {
  font-family: "Helvetica", "Arial", "LiHei Pro", "黑體-繁", "微軟正黑體",
    sans-serif;
  box-sizing: inherit;
}
/* "Open Sans", sans-serif; */
</style>
