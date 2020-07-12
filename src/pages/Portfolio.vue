<template>
  <div>
    <protfolio-mapper></protfolio-mapper>
    <protfolio-backupper :showBackground="true"></protfolio-backupper>
  </div>
</template>

<script>
import mapper from "../components/Portfolios/mapper";
import backupper from "../components/Portfolios/backupper";

export default {
  name: "Protfolio",
  components: {
    "protfolio-mapper": mapper,
    "protfolio-backupper": backupper
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
