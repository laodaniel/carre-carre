import Plant from './Plant.js';
import React from 'react';
import style from '../index.css';
import { connect } from 'react-redux';
import { removePlantFromPlot } from '../actions/actions';

const Plot = ({plot, plants, removePlantFromPlot} = {}) =>
  <aside className={style.plot}>
    {plot.plants.map((plant, index) => {
      const plantData = plants[plants.map((p) => p.key).indexOf(plant.key)];
      return (
        <Plant name={plantData.name} image={plantData.image}
          key={`${plant.key}-${index}`} onRemove={ () => removePlantFromPlot(index) }/>
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
