<template>
  <v-container>
    <v-row v-if="!$vuetify.breakpoint.xs">
      <v-spacer></v-spacer>
      <v-col>
        <span class="text-left text-no-wrap clickable" @click="$vuetify.goTo('#about')">
          <h3>{{$t('_about_')}}</h3>
        </span>
      </v-col>
      <v-col>
        <span class="text-left text-no-wrap clickable" @click="$vuetify.goTo('#experience')">
          <h3>{{$t('_resume_professional_')}}</h3>
        </span>
      </v-col>
      <v-col>
        <span class="text-left text-no-wrap clickable" @click="$vuetify.goTo('#skill')">
          <h3>{{$t('_about_skill_')}}</h3>
        </span>
      </v-col>
      <v-col>
        <span class="text-left text-no-wrap clickable" @click="$vuetify.goTo('#portfolio')">
          <h3>{{$t('_portfolio_')}}</h3>
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
            <v-list-item v-for="lang in langs" :key="lang.value" @click="switchLang(lang.value)">
              <v-list-item-title>{{ lang.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <template v-else>
      <v-app-bar app flat right style=" background:#f9f4ed">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="isDrawerOpened = !isDrawerOpened"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="isDrawerOpened"
        absolute
        temporary
        right
        style="background:#f9f4ed;position:fixed; top:0; right:0; overflow-y:auto;"
      >
        <v-list>
          <v-list-item link @click="$vuetify.goTo('#about');isDrawerOpened=false;">
            <v-list-item-content>
              <v-list-item-title>
                <h1>{{$t("_about_")}}</h1>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$vuetify.goTo('#experience');isDrawerOpened=false;">
            <v-list-item-content>
              <v-list-item-title>
                <h1>{{$t("_resume_professional_")}}</h1>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$vuetify.goTo('#skill');isDrawerOpened=false;">
            <v-list-item-content>
              <v-list-item-title>
                <h1>{{$t("_about_skill_")}}</h1>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$vuetify.goTo('#portfolio');isDrawerOpened=false;">
            <v-list-item-content>
              <v-list-item-title>
                <h1>{{$t("_portfolio_")}}</h1>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group append-icon v-model="langsOpened">
            <template v-slot:activator>
              <v-list-item-content>
                <font-awesome-icon class="mx-1" :icon="['fas', 'globe-americas']" />
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="lang in langs"
              :key="lang.value"
              @click="switchLang(lang.value);isDrawerOpened=false;langsOpened=false;"
            >
              <v-list-item-title>{{ lang.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "app-header",
  components: {},
  data: () => ({
    isDrawerOpened: false,
    langs: [],
    langsOpened: false,
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
      this.langs.push({
        text: this.$i18n.messages[keys[i]]["_lang_"],
        value: keys[i],
      });
      this.langs.sort((src, dst) => (src.text > dst.text ? 1 : -1));
    }
  },
  mounted() {},
};
</script>

<style scoped>
</style>