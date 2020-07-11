<template>
  <div id="app-theme">
    <v-app-bar app color="grey darken-4" dark>
      <v-toolbar-title @click="$router.push('/')" class="ml-0 pl-4">
        <span class="clickable">Github.io</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="px-1 clickable"  @click="$router.push('/About')">{{$t("_about_")}}</span>
      <span class="px-1 clickable"  @click="$router.push('/Resume')">{{$t("_resume_")}}</span>
      <span class="px-1 clickable"  @click="$router.push('/Portfolio')">{{$t("_portfolio_")}}</span>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="lang in lnags" :key="lang.value" @click="switchLang(lang.value)">
              <v-list-item-title>{{ lang.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: "app-header",
  components: {},
  data: () => ({
    showMenu: false,
    dialog: false,
    isLeftOpened: false,
    lnags: []
  }),
  computed: {},
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    },
    Hi() {
      this.$alertSuccess("Hi");
    }
  },
  created() {
    var keys = Object.keys(this.$i18n.messages);
    for (let i = 0; i < keys.length; i++) {
      this.lnags.push({
        text: this.$i18n.messages[keys[i]]["_lang_"],
        value: keys[i]
      });
      this.lnags.sort((src, dst) => (src.text > dst.text ? 1 : -1));
    }
  },
  mounted() {}
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>