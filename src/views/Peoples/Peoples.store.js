import {getById, getAll} from '@/services/index';
import {findArrayProps} from '@/utils/index';

const state = {
  allPeoples: []
}
const mutations = {
  'GET_ALL_PEOPLES' (state, {results}) {
    state.allPeoples = results
  }
}
const actions = {
  getAllPeoples({commit}) {
    commit('LOADING')
    const results = getAll('peoples');
    for (let index = results.length - 1; index >= 0 ; index--) {
      let homeworld = getById({entity: 'planets', id: results[index].homeworld});
      results[index].films = findArrayProps(results[index].films, 'films', getById);
      let species = findArrayProps(results[index].species, 'species', getById);
      results[index].specie = !!species[0] && !!species[0].name && species[0].name || 'Desconhecida';
      results[index].homeworld = !!homeworld && !!homeworld.name && homeworld.name;
    }
    commit('GET_ALL_PEOPLES', {results})
    commit('LOADING')
  }
}

export default { state, mutations, actions }
