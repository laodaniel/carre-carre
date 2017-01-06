import { combineReducers } from 'redux';
import { ADD_PLANT, REMOVE_PLANT, SET_NAME, SET_DESCRIPTION,
  SET_VISIBILITY_FILTER, SET_NUMBER_OF_SLOTS,
  BOBBY_SAYS, SHOW_BOBBY } from '../actions/actions.js';

const plants = (state = {}) => state;

const plot = (state = {}, action) => {
  switch (action.type) {
  case ADD_PLANT: {
    if (action.slot > -1) {
      return {...state, plants: [
        ...state.plants,
        { key: action.key, slot: action.slot }
      ]};
    }
    return state;
  }
  case REMOVE_PLANT:
    return {...state, plants: [
      ...state.plants.slice(0, action.index),
      ...state.plants.slice(action.index + 1)
    ]};
  case SET_NAME:
    return {...state, name: action.name};
  case SET_DESCRIPTION:
    return {...state, description: action.description};
  case SET_NUMBER_OF_SLOTS:
    return {...state, slots: action.slots};
  default:
    return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

const bobby = (state = {}, action) => {
  switch (action.type) {
  case BOBBY_SAYS:
    return action.message;
  case SHOW_BOBBY:
    return action.isVisible;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  plants, plot, visibilityFilter, bobby
});

export default rootReducer;
