export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';
export const ADD_PLANT_IN_PLOT = 'ADD_PLANT_IN_PLOT';
export const REMOVE_PLANT_FROM_PLOT = 'REMOVE_PLANT_FROM_PLOT';
export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

export function addPlant(plantId) {
  return { type: ADD_PLANT, plantId };
}

export function removePlant(plantId) {
  return { type: REMOVE_PLANT, plantId };
}

export function addPlantInPlot(plantId) {
  return { type: ADD_PLANT_IN_PLOT, plantId };
}

export function removePlantFromPlot(plantId) {
  return { type: REMOVE_PLANT_FROM_PLOT, plantId };
}

export function setName(name) {
  return { type: SET_NAME, name };
}

export function setDescription(description) {
  return { type: SET_DESCRIPTION, description };
}
