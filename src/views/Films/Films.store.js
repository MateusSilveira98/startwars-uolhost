import {getById} from '@/services/index';
import {findArrayProps} from '@/utils/index';

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
    result.characters = findArrayProps(result.characters, 'peoples', getById);
    commit('GET_FILM_BY_ID', {result})
    commit('LOADING')
  }
}

export default { state, mutations, actions }
