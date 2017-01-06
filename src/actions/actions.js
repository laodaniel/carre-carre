export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';
export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_NUMBER_OF_SLOTS = 'SET_NUMBER_OF_SLOTS';
export const BOBBY_SAYS = 'BOBBY_SAYS';
export const SHOW_BOBBY = 'SHOW_BOBBY';

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

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}

export function setNumberOfSlots(slots) {
  return {type: SET_NUMBER_OF_SLOTS, slots};
}

export function bobbySays(message) {
  return {type: BOBBY_SAYS, message};
}

export function showBobby(isVisible) {
  return {type: SHOW_BOBBY, isVisible};
}
