<template>
  <v-app>
    <v-container>
      <v-fade-transition>
        <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right small @click="toTop">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </v-fade-transition>
      <app-header></app-header>
      <v-card elevation="0" class="bg-transparent">
        <v-card-text>
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
    return {
      fab: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > parseInt(document.body.scrollHeight * 0.1);
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
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
