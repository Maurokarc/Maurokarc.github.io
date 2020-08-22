<template>
  <div id="app-content">
    <app-about data-aos="fade-in"></app-about>
    <app-experience
      :data-aos="!$vuetify.breakpoint.xs?'fade-left':'fade-down'"
      :data-aos-delay="!$vuetify.breakpoint.xs?250:0"
    ></app-experience>
    <app-skill
      :data-aos="!$vuetify.breakpoint.xs?'fade-right':'fade-down'"
      :data-aos-delay="!$vuetify.breakpoint.xs?500:0"
    ></app-skill>
    <app-portfolio :data-aos="!$vuetify.breakpoint.xs?'zoom-out':'fade-down'"></app-portfolio>
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