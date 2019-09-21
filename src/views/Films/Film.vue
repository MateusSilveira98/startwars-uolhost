<template>
  <article class="films">
    <section class="section">
      <h1 class="title">Filmes</h1>
      <div class="card">
        <p>{{film.title}}</p>
        <p>{{film.episode_id}}</p>
        <p>{{film.opening_crawl}}</p>
        <p>{{film.director}}</p>
        <p>{{film.producer}}</p>
        <p>{{film.release_date | brDate}}</p>
        <p v-for="people in film.characters" :key="`people-${people.id}`">{{people.name}}</p>
        <p v-for="planet in film.planets" :key="`planet-${planet.id}`">{{planet.name}}</p>
        <p v-for="specie in film.species" :key="`specie-${specie.id}`">{{specie.name}}</p>
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
      film: state => state.Films.film
    })
  },
  methods: {
    ...mapActions(["getFilmById"])
  },
  mounted() {
    this.getFilmById(this.$route.params.id);
  }
};
</script>

<style lang='scss' scoped>
</style>
