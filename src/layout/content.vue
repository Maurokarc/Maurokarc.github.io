<template>
  <div id="app-content">
    <app-about></app-about>
    <app-experience></app-experience>
    <app-skill></app-skill>
    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import about from "../pages/about";
import experience from "../pages/experience";
import skill from "../pages/skill";
import portfolio from "../pages/portfolio";

export default {
  name: "app-content",
  components: {
    "app-about": about,
    "app-experience": experience,
    "app-skill": skill,
    "app-portfolio": portfolio,
  },
};
</script>
<style scoped>
</style>