import { addPlant } from '../actions/actions';
import { connect } from 'react-redux';
import Plant from './Plant';
import React from 'react';
import style from '../index.css';

const freeSlot = (plot) => {
  const freeSlots = [...Array(plot.slots).keys()].reduce((acc, id) =>
    plot.plants.map(p => p.slot).indexOf(id) === -1 ? [...acc, id] : acc, []);
  return typeof freeSlots[0] === 'number' ? freeSlots[0] : -1;
};

const PlantSelector = ({ plants, plot, addPlant } = {}) =>
  <div className={style.plantSelector}>
    <h3>Add plant:</h3>
    {plants.map((plant, index) =>
      <Plant inlineStyle={{display: 'inline-block', width: 'initial'}}
        name={plant.name} image={plant.image} key={`${plant.key}-${index}`}
        addPlant={ (index) => addPlant(plant.key, isNaN(index) ? freeSlot(plot) : index) } />
    )}
  </div>
;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addPlant: (plantKey, index) => {
    dispatch(addPlant(plantKey, index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSelector);
