<template>
  <section id="skill">
    <div class="container">
      <div class="section-title">
        <h2>{{$t("_about_skill_")}}</h2>
      </div>
      <v-row>
        <v-col>
          <skill-progress text="Backend : C# - Web API 2" :value="92"></skill-progress>
          <skill-progress text="Backend : PHP - Laravel" :value="77"></skill-progress>
          <skill-progress text="Frontend : Vue + Vuetify" :value="85"></skill-progress>
          <skill-progress text="Frontend : JQuery + Bootstrap" :value="72"></skill-progress>
          <skill-progress text="Desktop : C# - WindowsForms" :value="96"></skill-progress>
          <skill-progress text="Desktop : C# - WPF" :value="86"></skill-progress>
          <skill-progress text="Dockerise : Docker" :value="74"></skill-progress>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import SkillProgress from "../components/SkillProgress";
export default {
  name: "section-skill",
  props: {},
  data() {
    return {};
  },
  components: {
    "skill-progress": SkillProgress,
  },
  computed: {},
};
</script>

<style scoped src="../assets/css/section.css"></style>