<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="6">
        <v-card id="portfolio-mapper" elevation="0">
          <v-card-title class="section-subtitle">
            <h3>Mapping Generator</h3>
          </v-card-title>
          <v-card-subtitle>
            <v-chip color="purple" class="ma-2 white--text">C# WPF</v-chip>
            <v-chip color="error" class="ma-2 white--text">Database</v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>
              <p>{{$t("_portfolio_mapper_summary_")}}</p>
              <ol>
                <li>{{$t("_portfolio_mapper_content1_")}}</li>
                <li>{{$t("_portfolio_mapper_content2_")}}</li>
                <li>{{$t("_portfolio_mapper_content3_")}}</li>
                <li>{{$t("_portfolio_mapper_content4_")}}</li>
              </ol>
            </h3>
          </v-card-text>
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
  name: "portfolio-mapper",
  props: {},
  components: {},
  data() {
    return {
      showLightbox: false,
      img: require("../../assets/images/mapper.png"),
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