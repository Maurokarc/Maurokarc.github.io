<template>
  <v-app>
    <v-container>
      <v-card elevation="0" class="bg-transparent">
        <v-card-title>
          <app-header></app-header>
        </v-card-title>
        <v-card-text :class="{'px-0': $vuetify.breakpoint.xs}">
          <app-content></app-content>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import header from "./layout/header";
import content from "./layout/content";
// import footer from "./layout/footer";

export default {
  name: "App",
  components: {
    "app-header": header,
    "app-content": content,
    // "app-footer": footer,
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    document.title = this.$t("_site_");
  },
  mounted() {},
};
</script>

<style>
#app {
  text-align: center;
  font-size: 24px;
  background: #f9f4ed;
}
*,
*:before,
*:after {
  font-family: "Helvetica", "黑體-繁", "微軟正黑體", sans-serif;
  box-sizing: inherit;
}

.clickable {
  cursor: pointer;
}
.bg-transparent {
  background: transparent !important;
}
/* "Open Sans", sans-serif; */
</style>
