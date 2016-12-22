import React from 'react';
import { connect } from 'react-redux';
import { removePlantFromPlot } from '../actions/actions';

const Plant = (plant) =>
  <div className="plant" onClick={ plant.onRemovePlant }>
    {plant.name}
    {plant.image &&
      <svg>
        <use xlinkHref={plant.image} />
      </svg>
    }
  </div>
;

Plant.propTypes = {
  plant: React.PropTypes.object
};

const Plot = ({plot, plants, removePlantFromPlot} = {}) =>
  <aside className="plot">
    {plot.plants.map((plant, index) => {
      const plantData = plants[plant.plantId];
      return (
        <Plant name={plantData.name} image={plantData.image}
          key={index} onRemovePlant={ () => removePlantFromPlot(plant.plantId) }/>
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
