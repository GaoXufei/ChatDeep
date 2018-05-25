<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    &::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      clear: both;
    }
  }
</style>
