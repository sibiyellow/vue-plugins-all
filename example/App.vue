<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created:function(){
    this.$layer.open(
      {
        style:
        {
          name:"ball-clip-rotate",
          css:{
            border:"#000 2px solid",
            bgcolor:"#000",
            "border-bottom-color":"transparent"
            }
        }
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
