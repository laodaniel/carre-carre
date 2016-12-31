import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const getPlant = (plants, plantKey) =>
  plants[plants.map(plant => plant.key).indexOf(plantKey)];

const Plant = ({plants, plantKey}) => {
  const plant = getPlant(plants, plantKey);
  return (
    plant ?
      <div>
        { plant.name }
      </div> : null
  );
};

Plant.propTypes = {
  plantKey: PropTypes.string,
  plants: PropTypes.array
};

const mapStateToProps = (state, ownProps) => ({
  plants: state.plants,
  plantKey: ownProps.plantKey
});

export default connect(mapStateToProps)(Plant);
