import {getById} from '@/services/index';

const findArrayProps = (array, entity) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = getById({entity, id: array[i]})
  }
  return array
}

const state = {
  film: []
}
const mutations = {
  'GET_FILM_BY_ID' (state, {result}) {
    state.film = result
  }
}
const actions = {
  getFilmById({commit}, id) {
    commit('LOADING')
    const result = getById({entity: 'films', id});
    result.characters = findArrayProps(result.characters, 'peoples');
    commit('GET_FILM_BY_ID', {result})
    commit('LOADING')
  }
}

export default { state, mutations, actions }
