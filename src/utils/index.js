import _ from 'lodash'
export const localstorage = {
  set: (label, obj) => {
    window.localStorage.setItem(label, JSON.stringify(obj));
  },
  get: (label) => {
    let string = window.localStorage.getItem(label);
    return JSON.parse(string);
  },
  remove: (label) => {
    window.localStorage.removeItem(label);
  },
  clear: () => {
    window.localStorage.clear();
  }
}
export const findArrayProps = (array, entity, getById) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = _.clone(getById({entity, id: array[i]}))
  }
  return array
}
