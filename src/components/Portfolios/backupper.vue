<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="6">
        <v-card id="protfolio-mapper" elevation="0">
          <v-card-title class="section-subtitle">
            <h3>Database Backupper</h3>
          </v-card-title>
          <v-card-subtitle>
            <v-chip color="purple" class="ma-2 white--text">C# WinForms</v-chip>
            <v-chip color="error" class="ma-2 white--text">Database</v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>
              <p>{{$t("_protfolio_backupper_sumary_")}}</p>
              <ol>
                <li>{{$t("_protfolio_backupper_content1_")}}</li>
                <li>{{$t("_protfolio_backupper_content2_")}}</li>
                <li>{{$t("_protfolio_backupper_content3_")}}</li>
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
  name: "portfolio-backupper",
  props: {},
  data() {
    return {
      showLightbox: false,
      img: require("../../assets/images/backupper.png"),
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