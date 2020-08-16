<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="6">
        <v-card id="protfolio-mapper" elevation="0">
          <v-card-title class="section-subtitle">
            <h3>Linetbot 管理後台</h3>
          </v-card-title>
          <v-card-subtitle>
            <v-chip color="rgb(79, 192, 141)" class="ma-2 white--text">Vue.js</v-chip>
            <v-chip color="rgb(92, 187, 246)" class="ma-2 white--text">Vuetify</v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>
              <p>
                搭配Linebot API
                <br />進行flexmessage的排版設定
              </p>
              <ol>
                <li>降低設定的複雜度</li>
                <li>透過即時反應功能在設定的同時即可看到結果呈現</li>
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
  name: "portfolio-linebot",
  props: {},
  components: {},
  data() {
    return {
      showLightbox: false,
      img: require("../../assets/images/linebot.png"),
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