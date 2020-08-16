<template>
  <div>
    <section id="about">
      <div class="container">
        <div class="section-title">
          <h2>{{$t("_about_")}}</h2>
        </div>
        <v-row>
          <v-col cols="12" sm="2" class="d-flex">
            <v-img :aspect-ratio="1" style="border-radius:50%;" contain :src="img" />
          </v-col>
          <v-col cols="12" sm="10">
            <h1 :class="{'text-center': $vuetify.breakpoint.xs}">{{$t("_name_")}}</h1>
            <br />
            <h2>曾任職於致茂電子擔任MES軟體工程師，主要負責為洽談客戶需求、訂定系統操作流程、功能整合等。</h2>
            <br />
            <h3>
              <ul>
                <li>注重於專案的架構規劃與團隊溝通</li>
                <li>致力於程式碼的可讀性、可擴展性</li>
              </ul>
            </h3>
          </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-spacer></v-spacer>
          <a href="https://www.facebook.com/profile.php?id=100002826589073" target="_blank">
            <font-awesome-icon class="mx-1" :icon="['fab', 'facebook']" size="3x" />
          </a>
          <a href="https://github.com/Maurokarc" style="color:black" target="_blank">
            <font-awesome-icon class="mx-1" :icon="['fab', 'github']" size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/jack-chan-6b5347194/" target="_blank">
            <font-awesome-icon class="mx-1" :icon="['fab', 'linkedin']" size="3x" />
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
  computed: {
    site() {
      return window.location.host;
    },
    age() {
      return (
        parseInt(
          (new Date() - new Date("1994/09/09")) / 1000 / 60 / 60 / 24 / 365
        ) + 1
      );
    },
  },
};
</script>

<style scoped src="../assets/css/section.css"></style>