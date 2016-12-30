import Plant from './Plant';
import React from 'react';
import Slot from './Slot';
import style from '../index.css';
import { connect } from 'react-redux';
import { addPlant, removePlant } from '../actions/actions';

const Plot = ({plot, plants, addPlant, removePlant, setSelectedPlant } = {}) =>
  <section className={style.plot}>
    { [...Array(plot.slots).keys()].map((slot, index) => {
      let plantData;
      const plantIndex = plot.plants.map((p) => p.slot).indexOf(index);
      if (plantIndex > -1) {
        plantData = plants[plants.map((p) => p.key).indexOf(plot.plants[plantIndex].key)];
      }
      return (
        <Slot key={ index } index={ index }>
          { plantData &&
            <Plant plant={plantData}
              addPlant={ (index) => addPlant(plantData.key, index) }
              removePlant={ () => removePlant(plantIndex) }
              setSelectedPlant={ setSelectedPlant }/>
          }
        </Slot>
      );
    })
    }
  </section>
;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = ({
  removePlant,
  addPlant
});

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
