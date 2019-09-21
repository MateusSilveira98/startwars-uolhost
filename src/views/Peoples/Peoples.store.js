import {getById, getAll} from '@/services/index';

const findArrayProps = (array, entity) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = getById({entity, id: array[i]})
  }
  return array
}

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
      results[index].films = findArrayProps(results[index].films, 'films');
      results[index].species = findArrayProps(results[index].species, 'species');
      results[index].homeworld = getById({entity: 'planets', id: results[index].homeworld});
    }
    commit('GET_ALL_PEOPLES', {results})
    commit('LOADING')
  }
}

export default { state, mutations, actions }
