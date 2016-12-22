import { addPlantInPlot } from '../actions/actions';
import { connect } from 'react-redux';
import Plant from './Plant';
import React from 'react';
import style from '../index.css';

const PlantSelector = ({ plants, dispatch } = {}) =>
  <div className={style.plantSelector}> {
    plants.map((plant) =>
      <Plant className={style.plantSelector_plant}
        name={plant.name} image={plant.image} key={plant.plantId}
        onClick={ () => dispatch(addPlantInPlot(plant.plantId)) }/>
    )}
  </div>
;

export default connect()(PlantSelector);
