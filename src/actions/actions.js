export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';
export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

export function addPlant(key, slot) {
  return { type: ADD_PLANT, key, slot };
}

export function removePlant(index) {
  return { type: REMOVE_PLANT, index };
}

export function setName(name) {
  return { type: SET_NAME, name };
}

export function setDescription(description) {
  return { type: SET_DESCRIPTION, description };
}
