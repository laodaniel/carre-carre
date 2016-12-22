export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';
export const ADD_PLANT_IN_PLOT = 'ADD_PLANT_IN_PLOT';
export const REMOVE_PLANT_FROM_PLOT = 'REMOVE_PLANT_FROM_PLOT';

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
