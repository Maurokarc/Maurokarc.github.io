<template>
  <section id="skills" :class=" showBackground?'skills section-bg':''">
    <div class="container">
      <div class="section-title">
        <h2>{{$t("_about_skill_")}}</h2>
      </div>
      <v-row>
        <v-col cols="12" lg="6">
          <skill-progress text="Backend : C# - Web API 2" :value="95"></skill-progress>
          <skill-progress text="Frontend : Vue + Vuetify" :value="85"></skill-progress>
          <skill-progress text="Desktop : C# - WindowsForms" :value="100"></skill-progress>
        </v-col>
        <v-col cols="12" lg="6">
          <skill-progress text="Backend : PHP - Laravel" :value="75"></skill-progress>
          <skill-progress text="Frontend : JQuery + Bootstrap" :value="75"></skill-progress>
          <skill-progress text="Desktop : C# - WPF" :value="80"></skill-progress>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import SkillProgress from "./SkillProgress";
export default {
  name: "Skills",
  props: {
    showBackground: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    "skill-progress": SkillProgress
  },
  computed: {}
};
</script>

<style scoped src="../assets/css/section.css"></style>
<style scoped src="../assets/css/skill.css"></style>