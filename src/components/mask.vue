<template lang="html">
      <div class="vl-notify-mask" @click="close" :id="id + '_mask'" :style="setOpacity"></div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      shade: true
    };
  },
  props: {},
  computed: {
    setOpacity() {
      if (this.type == 3) {
        return {
          opacity: 0
        };
      }
      return {};
    }
  },
  methods: {
    close(event) {
      if (this.shadeClose) {
        
      }
    }
  }
};
</script>

<style lang="css">
.vl-notify-mask {
  background-color: #000;
  opacity: 0.1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
