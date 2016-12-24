import { addPlantInPlot } from '../actions/actions';
import { connect } from 'react-redux';
import Plant from './Plant';
import React from 'react';
import style from '../index.css';

const PlantSelector = ({ plants, dispatch } = {}) =>
  <div className={style.plantSelector}>
    <h3>Add plant:</h3>
    {plants.map((plant, index) =>
      <Plant style={{display: 'inline-block'}}
        name={plant.name} image={plant.image} key={`${plant.key}-${index}`}
        onClick={ () => dispatch(addPlantInPlot(plant.key)) }/>
    )}
  </div>
;

export default connect()(PlantSelector);
