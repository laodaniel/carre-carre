import Plant from './Plant.js';
import React from 'react';
import style from '../index.css';
import { connect } from 'react-redux';
import { removePlantFromPlot } from '../actions/actions';

const Plot = ({plot, plants, removePlantFromPlot} = {}) =>
  <aside className={style.plot}>
    { [...Array(plot.slots).keys()].map((slot, index) => {
      let plantData;
      const plantIndex = plot.plants.map((p) => p.slot).indexOf(index);
      if (plantIndex > -1) {
        plantData = plants[plants.map((p) => p.key).indexOf(plot.plants[plantIndex].key)];
      }
      return (
        <div key={ index } className={style.slot}>
          { plantData &&
            <Plant name={plantData.name} image={plantData.image}
              onRemove={ () => removePlantFromPlot(plantIndex) }/>
          }
        </div>
      );
    })
    }
  </aside>
;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = ({
  removePlantFromPlot
});

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
