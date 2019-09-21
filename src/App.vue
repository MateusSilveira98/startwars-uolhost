<template>
  <article>
    <Loading :showLoading="loading"></Loading>
    <router-view/>
  </article>
</template>
<script>
import Loading from "@/components/Loading";
import {mapState} from 'vuex';
export default {
  components: {
    Loading
  },
  computed: {
    ...mapState(['loading'])
  },
};
</script>

<style lang="scss">
</style>
