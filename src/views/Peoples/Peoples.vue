<template>
  <article class="peoples">
    <section class="section">
      <h1 class="title">Personagens</h1>
      <div class="" v-for="people in all" :key="people.id">
        {{people}}
      </div>
    </section>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import _ from "lodash";
export default {
  computed: {
    ...mapState({
      allPeoples: state => state.all
    })
  },
  data() {
    return {
      all: [],
      search: "",
      orderBy: null
    };
  },
  watch: {
    allPeoples(value) {
      console.log(value)
      this.all = value;
    }
  },
  methods: {
    ...mapActions(["getAll", "getById"]),
      searchPeoples(search) {
      search = search.toLowerCase();
      let split = search.split('');
      if (search.length >= 3) {
        const regex = new RegExp(`${ split.map(item => `(?=.*${item})`).toString().split(',').join('') }.*`, "g");
        this.all = this.allPeoples.filter(item =>
          item.name.toLowerCase().match(regex)
        );
      } else this.all = this.allPeoples;
    },
    setPeoplesOrder(orderBy) {
      switch(orderBy) {
        case "name": this.all = _.orderBy(this.all, [orderBy], ["asc"]); break;
        case "favorite": this.all = _.orderBy(this.all, [orderBy], ["desc"]); break;
        case "types": this.all = this.allPeoples; break;
      }
    }
  },
  mounted() {
    this.getAll('peoples');
  }
};
</script>

<style lang='scss' scoped>
</style>
