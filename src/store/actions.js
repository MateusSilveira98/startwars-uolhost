import {getAll, getById} from '@/services/index';
export default {
  getAll({ commit }, entity) {
    commit('LOADING');
    const response = getAll(entity);
    commit('GET_ALL', { payload: response });
    commit('LOADING');
  },
  getById({ commit }, {entity, id}) {
    commit('LOADING');
    const response = getById({entity, id});
    commit('GET_BY_ID', { payload: response });
    commit('LOADING');
  }
}
