<template>
  <v-row>
    <v-col cols="auto">
      <span class="clickable text-left text-no-wrap">
        <h3>Github.io</h3>
      </span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto" class="text-right">
      <v-menu offset-y right origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            
            <font-awesome-icon class="mx-1" :icon="['fas', 'globe-americas']" size="2x" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="lang in lnags" :key="lang.value" @click="switchLang(lang.value)">
            <v-list-item-title>{{ lang.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "app-header",
  components: {},
  data: () => ({
    showMenu: false,
    dialog: false,
    isLeftOpened: false,
    lnags: [],
  }),
  computed: {},
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    },
  },
  created() {
    var keys = Object.keys(this.$i18n.messages);
    for (let i = 0; i < keys.length; i++) {
      this.lnags.push({
        text: this.$i18n.messages[keys[i]]["_lang_"],
        value: keys[i],
      });
      this.lnags.sort((src, dst) => (src.text > dst.text ? 1 : -1));
    }
  },
  mounted() {},
};
</script>

<style scoped>
</style>