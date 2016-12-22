import Plant from './Plant.js';
import React from 'react';
import style from '../index.css';
import { connect } from 'react-redux';
import { removePlantFromPlot } from '../actions/actions';

const Plot = ({plot, plants, removePlantFromPlot} = {}) =>
  <aside className={style.plot}>
    {plot.plants.map((plant, index) => {
      const plantData = plants[plant.plantId];
      return (
        <Plant name={plantData.name} image={plantData.image}
          key={index} onClick={ () => removePlantFromPlot(plant.plantId) }/>
      );
    })
  }
  </aside>
;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps =  ({
  removePlantFromPlot
});

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
