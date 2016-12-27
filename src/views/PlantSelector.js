import { addPlantInPlot } from '../actions/actions';
import { connect } from 'react-redux';
import Plant from './Plant';
import React from 'react';
import style from '../index.css';

const PlantSelector = ({ plants, plot, addPlantInPlot } = {}) =>
  <div className={style.plantSelector}>
    <h3>Add plant:</h3>
    {plants.map((plant, index) =>
      <Plant inlineStyle={{display: 'inline-block', width: 'initial'}}
        name={plant.name} image={plant.image} key={`${plant.key}-${index}`}
        onAdd={ () => { addPlantInPlot(plant.key, plot); }
        }/>
    )}
  </div>
;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addPlantInPlot: (plantKey, plot) => {
    const slots = [...Array(plot.slots).keys()];
    const availableSlots = slots.reduce((acc, id) =>
      plot.plants.map(p => p.slot).indexOf(id) === -1 ? [...acc, id] : acc, []);
    if (availableSlots.length > 0) {
      dispatch(addPlantInPlot(plantKey, availableSlots[0]));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSelector);
