<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="6">
        <v-card id="protfolio-mapper" elevation="0" class="fill-height">
          <v-card-title class="section-subtitle">
            <h3>{{'Restful & Open API'}}</h3>
          </v-card-title>
          <v-card-subtitle>
            <v-chip color="purple" class="ma-2 white--text">C# .NET Core</v-chip>
            <v-chip color="success" class="ma-2 white--text">Web API</v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>
              <p>
                透過C#撰寫標準的RestfulAPI功能
                <br />搭配Swagger進行呈現
              </p>
              <ol>
                <li>平易近人的API操作介面</li>
                <li>方便使用者或開發者進行對接測試</li>
              </ol>
            </h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img class="clickable ma-4" :src="img" :aspect-ratio="16/9" @click="popupImg"></v-img>
        <vue-easy-lightbox :visible="showLightbox" :imgs="[img]" @hide="hide"></vue-easy-lightbox>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "portfolio-openapi",
  props: {},
  components: {},
  data() {
    return {
      showLightbox: false,
      img: require("../../assets/images/openapi.png"),
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