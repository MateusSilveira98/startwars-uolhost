import Vue from 'vue'
import moment from 'moment'

Vue.filter('brDate', value => {
  moment.locale('pt-br');
  return moment(value).format('L');
});