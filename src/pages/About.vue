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
    <section id="skills" class="skills section-bg">
      <div class="container">
        <div class="section-title">
          <h2>{{$t("_about_skill_")}}</h2>
        </div>
        <v-row>
          <v-col cols="12" lg="6">
            <skill-progress text="Backend : C# - Web API 2" :value="95"></skill-progress>
            <skill-progress text="Frontend : Vue + Vuetify" :value="85"></skill-progress>
            <skill-progress text="Desktop : C# - WindowsForms" :value="90"></skill-progress>
          </v-col>
          <v-col cols="12" lg="6">
            <skill-progress text="Backend : PHP - Laravel" :value="75"></skill-progress>
            <skill-progress text="Frontend : JQuery + Bootstrap" :value="75"></skill-progress>
            <skill-progress text="Desktop : C# - WPF" :value="80"></skill-progress>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import SkillProgress from "../components/SkillProgress";
export default {
  name: "About",
  components: {
    "skill-progress": SkillProgress
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