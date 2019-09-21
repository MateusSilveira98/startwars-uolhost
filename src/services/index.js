import {
  Films, 
  Peoples, 
  Planets,
  Species,
  Starships,
  Vehicles
} from '@/_jsons/index';
import _ from 'lodash';
const getEntity = (entity) => {
  switch (entity) {
    case 'films': return _.clone(Films);
    case 'peoples': return _.clone(Peoples);
    case 'planets': return _.clone(Planets);
    case 'species': return _.clone(Species);
    case 'starships': return _.clone(Starships);
    case 'vehicles': return _.clone(Vehicles);
  }
}

export const getAll = (entity) => {
  const json = _.clone(getEntity(entity));
  return _.clone(json)
}
export const getById = ({entity, id}) => {
  const json = _.clone(getEntity(entity));
  return _.clone(json.find(item => +item.id === +id));
}