<template>
  <div>
    <section id="about">
      <div class="container">
        <div class="section-title">
          <h2>{{$t("_about_")}}</h2>
        </div>
        <v-row>
          <v-col cols="12" sm="2" class="d-flex">
            <v-img
              :aspect-ratio="1"
              style="border-radius:50%;"
              :class="{'img-max-on-xs':$vuetify.breakpoint.xs}"
              contain
              :src="img"
            />
          </v-col>
          <v-col cols="12" sm="10">
            <h1 :class="{'text-center': $vuetify.breakpoint.xs}">{{$t("_name_")}}</h1>
            <br />
            <h2>{{$t('_about_context')}}</h2>
            <br />
            <h3>
              <ul>
                <li>{{$t('_about_tip1_')}}</li>
                <li>{{$t('_about_tip2_')}}</li>
              </ul>
            </h3>
          </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-spacer></v-spacer>
          <a href="https://www.facebook.com/profile.php?id=100002826589073" target="_blank" class="scaling">
            <font-awesome-icon class="mx-1 rotating" :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a href="https://github.com/Maurokarc" style="color:black" target="_blank" class="scaling">
            <font-awesome-icon class="mx-1 rotating" :icon="['fab', 'github']" size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/jack-chan-6b5347194/" target="_blank" class="scaling">
            <font-awesome-icon class="mx-1 rotating" :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "section-about",
  components: {},
  data() {
    return {
      img: require("../assets/images/photo.jpg"),
    };
  },
  computed: {},
};
</script>

<style scoped src="../assets/css/section.css"></style>

<style scoped>
.img-max-on-xs {
  margin-left: auto;
  margin-right: auto;
  max-height: 230px;
  max-width: 230px;
}
.scaling:hover {
  transition: transform .5s;
  transform: scale(1.3); 
}

.rotating:hover {
   animation: shake 1s;
   animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>