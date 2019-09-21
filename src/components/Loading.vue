<template>
  <div class="loading" v-if="showLoading">
    <i class="icon is-large fa fa-spinner fa-pulse"></i>
  </div>
</template>

<script>
export default {
  props: {
    showLoading: { type: Boolean, default: false }
  }
};
</script>

<style scoped lang='scss'>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000c2;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20rem;
  color: white;
}
</style>
