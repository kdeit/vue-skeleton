<template>
  <div class="form">{{data ? data.title : ''}}</div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
export default {
  name: "mainForm",
  components: {},
  data: function() {
    return {};
  },
  mounted: function() {},
  computed: {
    ...mapGetters("settings", {
      data: "getSettings"
    })
  },
  methods: {}
};
</script>