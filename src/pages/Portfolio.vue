<template>
  <div>
    <section id="protfolio" class="section-bg">
      <div class="col-11 mx-auto">
        <v-row>
          <v-col lg="5">
            <div class="section-title">
              <h2 class="text-primary">Mapping Generator</h2>
              <p>
                <em>
                  <h3>C# WPF Application</h3>
                  <h4>Support Oracle &amp; MySQL &amp; MSSQL</h4>
                </em>
              </p>
              <br />
              <h4>{{$t("_protfolio_item1_sumary_")}} ?</h4>
              <ol>
                <li>{{$t("_protfolio_item1_content1_")}}</li>
                <li>{{$t("_protfolio_item1_content2_")}}</li>
                <li>{{$t("_protfolio_item1_content3_")}}</li>
                <li>{{$t("_protfolio_item1_content4_")}}</li>
              </ol>
            </div>
          </v-col>
          <v-col lg="7">
            <v-carousel
              :interval="mapper.interval"
              :cycle="!mapper.showLightbox"
              show-arrows-on-hover
              v-model="mapper.idx"
            >
              <v-carousel-item
                v-for="(img,i) in mapper.imgs"
                :key="i"
                :src="img"
                @click="popupImg(mapper)"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
      <vue-easy-lightbox
        :visible="mapper.showLightbox"
        :imgs="mapper.imgs"
        :index="mapper.idx"
        @hide="hide(mapper)"
      ></vue-easy-lightbox>
    </section>
  </div>
</template>

<script>
export default {
  name: "Protfolio",
  data() {
    return {
      mapper: {
        showLightbox: false,
        idx: 0,
        interval: 3000,
        imgs: []
      }
    };
  },
  created() {
    this.mapper.imgs = require
      .context("@/assets/images/mapper/", false, /^.*\.png$/i)
      .keys()
      .map(text => require(`../assets/images/mapper/${text.substr(2)}`)); //substr(2) will remove "./"
  },
  methods: {
    hide(data) {
      data.showLightbox = false;
    },
    popupImg(data) {
      data.showLightbox = true;
    }
  }
};
</script>

<style scoped src="../assets/css/section.css"></style>