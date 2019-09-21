<template>
  <article class="films">
    <section class="section">
      <router-link to="/">Voltar</router-link>
      <h1 class="title">{{film.title}}</h1>
      <h3 class="subtitle">Episódio {{film.episode_id}}</h3>
      <div class="card">
        <p class="margin-bottom-1">{{film.opening_crawl}}</p>
        <div class="film-info">
          <p>
            Diretor:
            <span class="text-yellow">{{film.director}}</span>
          </p>
          <p>
            Produtor:
            <span class="text-yellow">{{film.producer}}</span>
          </p>
          <p>
            Estreia:
            <span class="text-yellow">{{film.release_date | brDate}}</span>
          </p>
        </div>
        <h1 class="title text-yellow">Personagens</h1>
        <div class="peoples text-yellow">
          <p v-for="people in film.characters" :key="`people-${people.id}`">{{people.name}}</p>
        </div>
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
@import "../../App.scss";
.films {
  .card {
    background: black;
    padding: 1em;
    color: white;
    border-radius: 10px;
    .film-info {
      display: flex;
      p {
        margin-right: 1em;
      }
    }
  }
  .peoples {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
  }
}

@media (max-width: 850px) {
 .films {
   .card {
     .film-info {
       display: inline-block;
       p {
         margin: 0 0 0.5em;
       }
     }
   }
 }
}
@media (max-width: 450px) {
 .films {
   .peoples {
     grid-template-columns: auto auto;
   }
 }
}
</style>
