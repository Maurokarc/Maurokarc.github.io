<template>
  <div>
    <v-row>
      <v-col class="text-left text-no-wrap py-0">
        <h4>{{text}}</h4>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right text-no-wrap py-0">
        <h4>{{percent}}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-progress-linear height="10" :value="value" :max="maxVal" :color="variant"></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  props: {
    maxVal: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {},
  computed: {
    percent() {
      return ((this.value || 0) / (this.maxVal || 100)) * 100 + " %";
    },
    variant() {
      let percent = ((this.value || 0) / (this.maxVal || 100)) * 100;
      return percent >= 80 ? "primary" : percent >= 50 ? "info" : "warning";
    },
  },
  created() {},
};
</script>