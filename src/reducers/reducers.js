import { combineReducers } from 'redux';
import { ADD_PLANT, REMOVE_PLANT, ADD_PLANT_IN_PLOT, REMOVE_PLANT_FROM_PLOT } from '../actions/actions.js';

const plants = (state = {}, action) => {
  switch (action.type) {
  case ADD_PLANT:
    return [ ...state, action.plantId ];
  case REMOVE_PLANT:
    return state.filter(id => id !== action.plantId);
  default:
    return state;
  }
};

const plot = (state = {}, action) => {
  switch (action.type) {
  case ADD_PLANT_IN_PLOT:
    return {...state, plants: [ ...state.plants, { plantId: action.plantId } ]};
  case REMOVE_PLANT_FROM_PLOT:
    return {...state, plants: state.plants.filter(plant => plant.plantId !== action.plantId)};
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  plants, plot
});

export default rootReducer;
