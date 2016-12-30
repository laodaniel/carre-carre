import { addPlant } from '../actions/actions';
import { connect } from 'react-redux';
import Plant from './Plant';
import React, { Component } from 'react';
import style from '../index.css';

const freeSlot = (plot) => {
  const freeSlots = [...Array(plot.slots).keys()].reduce((acc, id) =>
    plot.plants.map(p => p.slot).indexOf(id) === -1 ? [...acc, id] : acc, []);
  return typeof freeSlots[0] === 'number' ? freeSlots[0] : -1;
};

class PlantSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: undefined
    };
  }

  setSelectedPlant(selectedPlant) {
    this.setState({ selectedPlant });
  }

  isCompanion(plantKey) {
    if (this.state.selectedPlant && this.state.selectedPlant.companions) {
      return this.state.selectedPlant.companions.indexOf(plantKey) > -1;
    }
  }

  isAntagonist(plantKey) {
    if (this.state.selectedPlant && this.state.selectedPlant.antagonists) {
      return this.state.selectedPlant.antagonists.indexOf(plantKey) > -1;
    }
  }

  render() {
    const { plants, plot, addPlant } = this.props;
    return (
      <aside className={style.plantSelector}>
        <h3>Add plant:</h3>
        {plants.map((plant, index) =>
          <Plant inlineStyle={{display: 'inline-block', width: 'initial'}}
            plant={plant} key={`${plant.key}-${index}`}
            addPlant={ (index) => addPlant(plant.key, isNaN(index) ? freeSlot(plot) : index) }
            isCompanion={ this.isCompanion(plant.key) }
            isAntagonist={ this.isAntagonist(plant.key) }
            setSelectedPlant={ (plant) => this.setSelectedPlant(plant) } />
        )}
      </aside>
    );
  }
}

PlantSelector.propTypes = {
  plants: React.PropTypes.array,
  plot: React.PropTypes.object,
  addPlant: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = ({
  addPlant
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSelector);
