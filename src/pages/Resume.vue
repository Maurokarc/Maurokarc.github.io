<template>
  <div class="col-11 mx-auto">
    <section class="resume d-flex justify-content-center">
      <v-row class="mx-auto">
        <v-col cols="12" class="section-title">
          <h2>{{$t("_resume_")}}</h2>
        </v-col>
        <v-col lg="6">
          <h3 class="resume-title">{{$t("_resume_sumary_")}}</h3>
          <v-row class="ml-2">
            <div class="resume-item pb-0">
              <h4>{{$t("_name_")}}</h4>
              <p>
                <em>
                  {{$t("_resume_sumary_content1_")}}
                  <br />
                  {{$t("_resume_sumary_content2_")}}
                  <br />
                  {{$t("_resume_sumary_content3_")}}
                </em>
              </p>
              <v-row>
                <v-col cols="12" md="6">
                  <ul class="mb-0">
                    <li class="inline">
                      <strong>{{$t("_resume_sumary_location_")}}：</strong>
                      <a
                        target="_blank"
                        href="https://www.google.com.tw/maps/place/25.017861, 121.297903"
                        class="text-info"
                      >{{$t("_resume_sumary_addr_")}}</a>
                    </li>
                    <li>
                      <strong>{{$t("_resume_sumary_birth_")}}：</strong>
                      {{$t("_resume_sumary_birth_text_")}}
                    </li>
                    <li>
                      <strong>{{$t("_resume_sumary_age_")}}：</strong>
                      {{age}}
                    </li>
                  </ul>
                </v-col>
                <v-col cols="12" md="6">
                  <ul class="mb-0">
                    <li>
                      <strong>{{$t("_resume_sumary_degree_")}}：</strong>
                      {{$t("_resume_sumary_degree_text_")}}
                    </li>
                    <li>
                      <strong>{{$t("_resume_sumary_phone_")}}：</strong>
                      {{$store.state.phone || $t("_not_opened_")}}
                    </li>
                    <li>
                      <strong>{{$t("_resume_sumary_mail_")}}：</strong>
                      <a
                        :href="mailLink"
                        :class="[$store.state.mail ?'text-info':'']"
                      >{{$store.state.mail || $t("_not_opened_")}}</a>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </div>
          </v-row>
          <h3 class="resume-title">{{$t("_resume_education_")}}</h3>
          <v-row class="ml-2">
            <div class="resume-item">
              <h4>{{$t("_resume_education_title_")}}</h4>
              <h5>2013 - 2016</h5>
              <p>
                <em>{{$t("_resume_education_name_")}}</em>
              </p>
            </div>
          </v-row>
          <h3 class="resume-title">{{$t("_resume_leadership_")}}</h3>
          <v-row class="ml-2">
            <div class="resume-item">
              <h4>{{$t("_resume_leadership_title_")}}</h4>
              <h5>2019 - 2019</h5>
              <p>
                <em>{{$t("_resume_leadership_inc_")}}</em>
              </p>
              <ul>
                <li>{{$t("_resume_leadership_content_")}}</li>
              </ul>
            </div>
          </v-row>
        </v-col>
        <v-col lg="6">
          <h3 class="resume-title">{{$t("_resume_professional_")}}</h3>
          <v-row class="ml-2">
            <div class="resume-item pb-0">
              <h4>{{$t("_resume_professional_job2_title_")}}</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>{{$t("_resume_professional_job2_inc_")}}</em>
              </p>
              <p>
                <em>
                  <v-row>
                    <v-col class="col-auto">
                      <div class="text-right">Database：</div>
                      <div class="text-right">Front-End：</div>
                      <div class="text-right">Back-End：</div>
                    </v-col>
                    <v-col class="px-0">
                      <div>MySQL &amp; MSSQL &amp; Oracle</div>
                      <div>Vue.js + Vuetify.js</div>
                      <div>C#</div>
                    </v-col>
                  </v-row>
                </em>
              </p>
              <p></p>
              <ul>
                <li>{{$t("_resume_professional_job2_item1_")}}</li>
                <li>{{$t("_resume_professional_job2_item2_")}}</li>
                <li>{{$t("_resume_professional_job2_item3_")}}</li>
              </ul>
            </div>
            <div class="resume-item pb-0">
              <h4>{{$t("_resume_professional_job1_title_")}}</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>{{$t("_resume_professional_job1_inc_")}}</em>
              </p>
              <p>
                <em>
                  <v-row>
                    <v-col class="col-auto">
                      <div class="text-right">{{$t("_resume_professional_platform_")}}：</div>
                      <div class="text-right">{{$t("_resume_professional_database_")}}：</div>
                    </v-col>
                    <v-col class="px-0">
                      <div>C# - Windows Forms</div>
                      <div>Oracle</div>
                    </v-col>
                  </v-row>
                </em>
              </p>
              <p></p>
              <ul>
                <li>{{$t("_resume_professional_job1_item1_")}}</li>
                <li>{{$t("_resume_professional_job1_item2_")}}</li>
                <li>{{$t("_resume_professional_job1_item3_")}}</li>
              </ul>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {};
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
    }
  }
};
</script>

<style scoped src="../assets/css/section.css"></style>
<style scoped src="../assets/css/resume.css"></style>