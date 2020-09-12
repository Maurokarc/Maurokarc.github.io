<template>
  <section id="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>{{$t("_portfolio_")}}</h2>
      </div>
      <v-card rounded="lg">
        <protfolio-linebot></protfolio-linebot>
        <v-divider></v-divider>
        <protfolio-openapi></protfolio-openapi>
        <v-divider></v-divider>
        <protfolio-mapper></protfolio-mapper>
        <v-divider></v-divider>
        <protfolio-searchTool></protfolio-searchTool>
        <v-divider></v-divider>
        <protfolio-backupper></protfolio-backupper>
      </v-card>
    </div>
  </section>
</template>

<script>
import mapper from "../components/Portfolios/mapper";
import backupper from "../components/Portfolios/backupper";
import linebot from "../components/Portfolios/linebot";
import openapi from "../components/Portfolios/openapi";
import searchTool from "../components/Portfolios/searchTool";

export default {
  name: "section-portfolio",
  components: {
    "protfolio-mapper": mapper,
    "protfolio-backupper": backupper,
    "protfolio-linebot": linebot,
    "protfolio-openapi": openapi,
    "protfolio-searchTool": searchTool,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped src="../assets/css/section.css"></style>