import {
  Films, 
  Peoples, 
  Planets,
  Species,
  Starships,
  Vehicles
} from '@/_jsons/index';

const getEntity = (entity) => {
  switch (entity) {
    case 'films': return Films;
    case 'peoples': return Peoples;
    case 'planets': return Planets;
    case 'species': return Species;
    case 'starships': return Starships;
    case 'vehicles': return Vehicles;
  }
}

export const getAll = (entity) => {
  return getEntity(entity)
}
export const getById = (entity, id) => {
  return getEntity(entity).find(item => +item.id === +id);
}