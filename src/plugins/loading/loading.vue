<template lang="html">
    <div v-bind:class="[defaultclass, style.name]" :id="id">
        <div v-for="n in style.count" :style="style.css"></div>      
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      defaultclass:"vl-notify",
      style:null,
      timeout: ""
    };
  },
  computed: {},
  mounted() {}
};
</script>
<style scoped>
@import 'loading.less';
</style>
