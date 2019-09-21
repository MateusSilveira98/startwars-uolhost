<template>
  <article class="peoples">
    <section class="section">
      <h1 class="title">Personagens</h1>
      <header class="header">
        <div class="select is-info">
          <select v-model="orderBy" @change="setPeoplesOrder(orderBy)">
            <option :value="null" disabled selected>Ordenar</option>
            <option :value="'name'">Nome</option>
            <option :value="'gender'">Gênero</option>
            <option :value="'specie'">Espécies</option>
            <option :value="'homeworld'">Planeta de Origem</option>
          </select>
        </div>
        <div class="field has-addons">
          <div class="control">
            <input
              @input="searchPeoples(search)"
              v-model="search"
              class="input"
              type="text"
              :placeholder="`nome, especie, genero, planeta`"
            />
          </div>
          <div class="control">
            <a class="button is-info">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </header>
      <div class="cards">
        <template v-if="all.length > 0">
          <div class="card animated fadeInDown faster" v-for="people in all" :key="people.id">
            <div class="card-title">
              <h1>{{people.name}}</h1>
            </div>
            <div class="card-infos">
              <p>
                Ano de nascimento:
                <span class="text-yellow text-uppercase">{{people.birth_year}}</span>
              </p>
              <p>
                Sexo:
                <span class="text-yellow text-uppercase">{{people.gender | gender}}</span>
              </p>
              <p>
                Planeta de origem:
                <span class="text-yellow text-uppercase">{{people.homeworld.name}}</span>
              </p>
              <p>
                Espécie:
                <span class="text-yellow text-uppercase">{{people.specie.name}}</span>
              </p>
            </div>
            <div class="card-list">
              <h1 class="card-list-title">Filmes</h1>
              <div class="list-infos">
                <router-link
                  :to="`film/${film.id}`"
                  v-for="film in people.films"
                  :key="`film-${people.id}${film.id}`"
                >
                  <p class="animated fadeInLeft faster">{{film.title}}</p>
                </router-link>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h1 class="title">Resultados não encontrado</h1>
        </template>
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
      allPeoples: state => state.Peoples.allPeoples
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
      this.all = _.orderBy(value, [people => people.films.length], ["desc"]);
    }
  },
  methods: {
    ...mapActions(["getAllPeoples"]),
    searchPeoples(search) {
      search = search.toLowerCase();
      let split = search.split("");
      if (search.length >= 3) {
        const regex = new RegExp(
          `${split
            .map(item => `(?=.*${item})`)
            .toString()
            .split(",")
            .join("")}.*`,
          "g"
        );
        this.all = this.allPeoples.filter(
          item =>
            item.name.toLowerCase().match(regex) ||
            item.specie.name.toLowerCase().match(regex) ||
            item.homeworld.name.toLowerCase().match(regex) ||
            this.getGender(item.gender)
              .toLowerCase()
              .match(regex)
        );
      } else this.all = this.allPeoples;
    },
    setPeoplesOrder(orderBy) {
      if (orderBy == "specie" || orderBy == "homeworld")
        this.all = _.orderBy(
          this.all,
          [people => people[orderBy].name],
          ["asc"]
        );
      else this.all = _.orderBy(this.all, [orderBy], ["asc"]);
    },
    getGender(gender) {
      return gender == "male" ? "masculino" : "feminino";
    }
  },
  async mounted() {
    await this.getAllPeoples();
  }
};
</script>

<style lang='scss' scoped>
@import "../../App.scss";
.header {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  margin-bottom: 1em;
  justify-content: flex-start;
}
.cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  .card {
    padding: 1em;
    background: $black;
    color: $white;
    font-weight: bold;
    border-radius: 30px;
    h1 {
      color: $yellow;
      font-weight: bold;
      font-size: $font23px;
    }
    a {
      &:hover {
        color: $yellow;
      }
    }
  }
}
@media (max-width: 900px) {
  .header,
  .cards {
    display: block;
  }
  .header {
    .select {
      margin-bottom: 1em;
    }
  }
  .cards {
    .card {
      margin-bottom: 1em;
    }
  }
}
</style>
