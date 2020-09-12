<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="6">
        <v-card id="portfolio-mapper" elevation="0" class="fill-height">
          <v-card-title class="section-subtitle">
            <h3 class="col text-left">{{'DotNet Windows Search Tool'}}</h3>
          </v-card-title>
          <v-card-subtitle>
            <v-chip color="purple" class="ma-2 white--text">C# WinForms</v-chip>
            <v-chip color="rgb(92, 187, 246)" class="ma-2 white--text">Lucene.Net</v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>
              <p>{{$t('_portfolio_searchtool_summary_')}}</p>
              <ol>
                <li>{{$t('_portfolio_searchtool_content1_')}}</li>
                <li>{{$t('_portfolio_searchtool_content2_')}}</li>
              </ol>
            </h3>
          </v-card-text>
          <v-card-actions>
            <a
              href="https://github.com/Maurokarc/.NET-Window-Search-Tool"
              style="color:black"
              target="_blank"
              class="scaling"
            >
              <font-awesome-icon class="mx-1 rotating" :icon="['fab', 'github']" size="2x" />
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          class="clickable ma-4"
          :src="img"
          :aspect-ratio="16/9"
          @click="$store.commit('showLightBox', {show:true,img})"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "portfolio-search-tool",
  props: {},
  components: {},
  data() {
    return {
      showLightbox: false,
      img: require("../../assets/images/SearchTool.png"),
    };
  },
  created() {},
  methods: {
    hide() {
      this.showLightbox = false;
    },
    popupImg() {
      this.showLightbox = true;
    },
  },
};
</script>

<style scoped src="../../assets/css/section.css"></style>