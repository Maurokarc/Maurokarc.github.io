<template>
  <v-footer id="app-footer" absolute>
    <v-row justify="center">
      <v-col class="bg-transparent py-2 text-center">
        <v-hover>
          <v-btn
            slot-scope="{ hover }"
            :color="`${hover? 'success': 'success'}`"
            :outlined="!hover"
            @click="display"
          >
            <v-icon class="mr-2">mdi-email-open</v-icon>
            <strong>Contact Me !!</strong>
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
    <v-dialog v-model="$store.state.showConact" persistent max-width="500px">
      <ValidationObserver ref="observer">
        <v-card>
          <v-card-title class="headline">
            <v-spacer>
              <strong class="text-section-line">CONTACT</strong>
            </v-spacer>
          </v-card-title>
          <v-card-subtitle class="py-0">
            <v-row align="center" justify="center">
              <v-col>
                <a :href="!isSending?'mailto:MauroKarc@gmail.com':null">MauroKarc@gmail.com</a>
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-card-text class="pb-0">
            <v-row dense>
              <v-col class="col-12 col-sm-6">
                <ValidationProvider
                  :name="$t('_contact_name_')"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    outlined
                    dense
                    clearable
                    :label="$t('_contact_name_')"
                    :error-messages="errors"
                    v-model="name"
                    :disabled="isSending"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col class="col-12 col-sm-6">
                <ValidationProvider
                  :name="$t('_contact_email_')"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    outlined
                    dense
                    clearable
                    :label="$t('_contact_email_')"
                    :error-messages="errors"
                    v-model="email"
                    :disabled="isSending"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider
                  :name="$t('_contact_title_')"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    outlined
                    dense
                    clearable
                    :label="$t('_contact_title_')"
                    :error-messages="errors"
                    v-model="title"
                    :disabled="isSending"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider
                  :name="$t('_contact_message_')"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-textarea
                    outlined
                    dense
                    auto-grow
                    clearable
                    :label="$t('_contact_message_')"
                    :error-messages="errors"
                    v-model="message"
                    :disabled="isSending"
                  ></v-textarea>
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="center" dense class="py-0">
              <v-col class="text-right">
                <v-btn
                  class="mx-2"
                  depressed
                  @click="$store.commit('showConact', false)"
                  :loading="isSending"
                  color="secondary"
                >{{$t('_contact_cancel_')}}</v-btn>
                <v-btn
                  class="mx-2"
                  depressed
                  :disabled="!canSend"
                  @click="sendMail"
                  :loading="isSending"
                  color="success"
                >{{ canSend ?$t('_contact_confirm_'):clock}}</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-dialog>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      isSending: false,
      canSend: false,
      title: "",
      name: "",
      email: "",
      message: "",
      sessionTime: 30,
      time: null,
    };
  },
  methods: {
    async display() {
      this.title = "";
      this.name = "";
      this.email = "";
      this.message = "";
      if (this.$refs.observer) await this.$refs.observer.reset();
      this.$store.commit("showConact", true);
      clearInterval(this.time);
      this.timer();
    },
    async sendMail() {
      const isPass = await this.$refs.observer.validate();

      if (!isPass) return false;
      this.isSending = true;

      if (!window.Email) await this.$loadScript("https://smtpjs.com/v3/smtp.js");

      let result = await window.Email.send({
        SecureToken: process.env.VUE_APP_SMTP_TOKEN,
        To: "MauroKarc@gmail.com",
        From: this.email,
        Subject: `[Github.io] ${this.title}`,
        Body: this.message,
      });
      this.isSending = false;
      if (result.toLocaleLowerCase() == "ok") {
        await this.$alertSuccess(this.$t("_contact_send_success"));
        this.$store.commit("showConact", false);
      } else {
        await this.$alertError(this.$t("_contact_send_fail"));
      }
    },
    timer() {
      let vm = this;
      vm.canSend = false;
      vm.sessionTime = 30;
      this.time = setInterval(() => {
        vm.sessionTime--;
        if (!vm.canSend && vm.sessionTime === 0) vm.canSend = true;
      }, 1000);
    },
  },
  computed: {
    clock() {
      let min = ("0" + parseInt(this.sessionTime / 60, 10)).slice(-2);
      let sec = ("0" + (this.sessionTime % 60)).slice(-2);

      return `${min}:${sec}`;
    },
  },
  created() {},
};
</script>
<style scoped>
.text-section-line {
  letter-spacing: 0.2rem;
  padding-bottom: 5px;
  border-bottom: 3px solid;
  display: inline-block;
}
</style>