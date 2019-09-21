export default {
  'LOADING'(state) {
    state.loading = !state.loading;
  },
  'GET_ALL'(state, {payload}) {
    state.all = payload;
  },
  'GET_BY_ID'(state, {payload}) {
    state.selected = payload;
  }
}
