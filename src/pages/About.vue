<template>
  <div>
    <section id="about">
      <div class="container">
        <div class="section-title">
          <h2>{{$t("_about_")}}</h2>
        </div>
        <v-row>
          <v-col cols="12" lg="4" class="d-flex justify-content-center mb-2">
            <img alt src="http://placehold.it/300x300/dddddd/ffffff.png" />
          </v-col>
          <v-col cols="12" lg="8">
            <h3>{{$store.state.IsResumeOpen ? $t("_real_name_"):$t("_name_")}}</h3>
            <h4>.NET Developer &amp; Web Developer.</h4>
            <p>
              <em>
                {{$t("_about_sumary_content1_")}}
                <br />
                {{$t("_about_sumary_content2_")}}
                <br />
                {{$t("_about_sumary_content3_")}}
              </em>
            </p>
          </v-col>
        </v-row>
      </div>
    </section>
    <skills-progress :showBackground="true"></skills-progress>
  </div>
</template>

<script>
import Skills from "../components/Skills";
export default {
  name: "About",
  components: {
    "skills-progress": Skills
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
    }
  }
};
</script>

<style scoped src="../assets/css/section.css"></style>
<style scoped src="../assets/css/skill.css"></style>