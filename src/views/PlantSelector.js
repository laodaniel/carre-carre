import { connect } from 'react-redux';
import React from 'react';
import style from '../index.css';
import { addPlantInPlot } from '../actions/actions';

const PlantSelector = ({ plants, dispatch } = {}) =>
  <ul className={style.plantSelector}> {
    plants.map((plant) =>
      <li className={style.plantSelector_plant}
          key={plant.plantId} onClick={ () => dispatch(addPlantInPlot(plant.plantId)) }>
        {plant.name}
      </li>
    )}
  </ul>
;

export default connect()(PlantSelector);
