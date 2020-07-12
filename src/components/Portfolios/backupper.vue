<template>
  <div>
    <section id="protfolio" :class="showBackground ? 'section-bg':''">
      <div class="col-11 mx-auto">
        <v-row>
          <v-col :lg="brandSize">
            <div class="section-title">
              <h2 class="text-primary">Database Backupper</h2>
              <p>
                <em>
                  <h3>C# WindowsForms</h3>
                  <h4>MySQL Version</h4>
                </em>
              </p>
              <br />
              <h4>{{$t("_protfolio_backupper_sumary_")}}</h4>
              <ol>
                <li>{{$t("_protfolio_backupper_content1_")}}</li>
                <li>{{$t("_protfolio_backupper_content2_")}}</li>
                <li>{{$t("_protfolio_backupper_content3_")}}</li>
              </ol>
            </div>
          </v-col>
          <v-col :lg="carouselSize">
            <v-carousel :key="'portfolio-backupper'" v-model="idx" class="clickable">
              <v-carousel-item v-for="(img,i) in imgs" :key="i" :src="img" @click="popupImg"></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
      <vue-easy-lightbox :visible="showLightbox" :imgs="imgs" :index="idx" @hide="hide"></vue-easy-lightbox>
    </section>
  </div>
</template>

<script>
export default {
  name: "portfolio-backupper",
  props: {
    showBackground: {
      type: Boolean,
      required: false,
      default: false
    },
    brandSize: {
      type: Number,
      required: false,
      default: 5
    },
    carouselSize: {
      type: Number,
      required: false,
      default: 7
    }
  },
  data() {
    return {
      showLightbox: false,
      idx: 0,
      interval: 3000,
      imgs: []
    };
  },
  created() {
    this.imgs = require
      .context("@/assets/images/backupper/", false, /^.*\.png$/i)
      .keys()
      .map(text => require(`../../assets/images/backupper/${text.substr(2)}`)); //substr(2) will remove "./"
  },
  methods: {
    hide() {
      this.showLightbox = false;
    },
    popupImg() {
      this.showLightbox = true;
    }
  }
};
</script>

<style scoped src="../../assets/css/section.css"></style>
<style scoped>
.clickable {
  cursor: pointer;
}
</style>