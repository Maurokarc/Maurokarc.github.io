<template>
  <section class="resume" id="experience">
    <v-row>
      <v-col cols="12" class="section-title pl-0">
        <h2>{{$t("_resume_professional_")}}</h2>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.xs" cols="12">
        <v-card rounded="lg">
          <v-card elevation="0">
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  <h4>{{$t("_resume_professional_job2_title_")}}</h4>
                </v-col>
                <v-col cols="12" class="text-right">
                  <a href="https://www.intersense.com.tw/" target="_bank">
                    <h5>{{$t("_resume_professional_job2_inc_")}}</h5>
                  </a>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-subtitle>
              <h4>
                <span>2020 年 3 月 - Present</span>
              </h4>
            </v-card-subtitle>
            <v-card-text>
              <ul>
                <li>{{$t("_resume_professional_job2_item1_")}}</li>
                <li>{{$t("_resume_professional_job2_item2_")}}</li>
                <li>{{$t("_resume_professional_job2_item3_")}}</li>
              </ul>
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
          <v-card elevation="0">
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  <h4>{{$t("_resume_professional_job1_title_")}}</h4>
                </v-col>
                <v-col cols="12" class="text-right">
                  <a href="http://www.chroma.com.tw/" target="_bank">
                    <h5>{{$t("_resume_professional_job1_inc_")}}</h5>
                  </a>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-subtitle>
              <h4>
                <span>2017 年 9 月 - 2020 年 2 月</span>
                <span>2 年 6 個月</span>
              </h4>
            </v-card-subtitle>
            <v-card-text>
              <ul>
                <li>{{$t("_resume_professional_job1_item1_")}}</li>
                <li>{{$t("_resume_professional_job1_item2_")}}</li>
                <li>{{$t("_resume_professional_job1_item3_")}}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col v-else cols="12" class="px-0">
        <v-timeline align-top dense right>
          <v-timeline-item>
            <template v-slot:icon>
              <v-avatar>
                <span class="bold white--text">2</span>
              </v-avatar>
            </template>
            <v-card>
              <v-card-title>
                <v-row>
                  <v-col cols="auto">
                    <h3>{{$t("_resume_professional_job2_title_")}}</h3>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="auto" class="text-right">
                    <a href="https://www.intersense.com.tw/" target="_bank">
                      <h4>{{$t("_resume_professional_job2_inc_")}}</h4>
                    </a>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-card-subtitle>
                <h4>
                  <span>2020 年 3 月 - Present</span>
                </h4>
              </v-card-subtitle>
              <v-card-text>
                <h3>
                  <ul>
                    <li>{{$t("_resume_professional_job2_item1_")}}</li>
                    <li>{{$t("_resume_professional_job2_item2_")}}</li>
                    <li>{{$t("_resume_professional_job2_item3_")}}</li>
                  </ul>
                </h3>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item>
            <template v-slot:icon>
              <v-avatar>
                <span class="bold white--text">1</span>
              </v-avatar>
            </template>
            <v-card>
              <v-card-title>
                <v-row>
                  <v-col cols="auto">
                    <h3>{{$t("_resume_professional_job1_title_")}}</h3>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="auto" class="text-right">
                    <a href="http://www.chroma.com.tw/" target="_bank">
                      <h4>{{$t("_resume_professional_job1_inc_")}}</h4>
                    </a>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-subtitle>
                <h4>
                  <span>2017 年 9 月 - 2020 年 2 月</span>
                  <span>2 年 6 個月</span>
                </h4>
              </v-card-subtitle>
              <v-card-text>
                <h3>
                  <ul>
                    <li>{{$t("_resume_professional_job1_item1_")}}</li>
                    <li>{{$t("_resume_professional_job1_item2_")}}</li>
                    <li>{{$t("_resume_professional_job1_item3_")}}</li>
                  </ul>
                </h3>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "section-experience",
  data() {
    return { e13: "" };
  },
  computed: {
    mailLink() {
      return this.$store.state.mail ? `mailto:${this.$store.state.mail}` : null;
    },
    age() {
      return (
        parseInt(
          (new Date() - new Date("1994/09/09")) / 1000 / 60 / 60 / 24 / 365
        ) + 1
      );
    },
  },
  mounted() {},
};
</script>

<style scoped src="../assets/css/section.css"></style>