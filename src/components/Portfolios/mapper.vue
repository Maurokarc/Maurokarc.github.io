<template>
  <div>
    <section id="protfolio" :class="showBackground ? section-bg:''">
      <div class="col-11 mx-auto">
        <v-row>
          <v-col :lg="brandSize">
            <div class="section-title">
              <h2 class="text-primary">Mapping Generator</h2>
              <p>
                <em>
                  <h3>C# WPF Application</h3>
                  <h4>Support Oracle &amp; MySQL &amp; MSSQL</h4>
                </em>
              </p>
              <br />
              <h4>{{$t("_protfolio_mapper_sumary_")}} ?</h4>
              <ol>
                <li>{{$t("_protfolio_mapper_content1_")}}</li>
                <li>{{$t("_protfolio_mapper_content2_")}}</li>
                <li>{{$t("_protfolio_mapper_content3_")}}</li>
                <li>{{$t("_protfolio_mapper_content4_")}}</li>
              </ol>
            </div>
          </v-col>
          <v-col :lg="carouselSize">
            <v-carousel :key="'portfolio-backupper'" v-model="idx" class="clickable">
              <v-carousel-item v-for="(img,i) in imgs" :key="i" :src="img" @click="popupImg"></v-carousel-item>
            </v-carousel>
            <vue-easy-lightbox :visible="showLightbox" :imgs="imgs" :index="idx" @hide="hide"></vue-easy-lightbox>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "portfolio-mapper",
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
  components: {},
  data() {
    return {
      showLightbox: false,
      idx: 0,
      imgs: []
    };
  },
  created() {
    this.imgs = require
      .context("@/assets/images/mapper/", false, /^.*\.png$/i)
      .keys()
      .map(text => require(`../../assets/images/mapper/${text.substr(2)}`)); //substr(2) will remove "./"
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