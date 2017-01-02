import { addPlant, setVisibilityFilter } from '../actions/actions';
import { connect } from 'react-redux';
import DraggablePlant from './DraggablePlant';
import React, { Component } from 'react';
import style from '../index.css';

const freeSlot = (plot) => {
  const freeSlots = [...Array(plot.slots).keys()].reduce((acc, id) =>
    plot.plants.map(p => p.slot).indexOf(id) === -1 ? [...acc, id] : acc, []);
  return typeof freeSlots[0] === 'number' ? freeSlots[0] : -1;
};

const getVisiblePlants = (plants, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return plants;
  case 'SHOW_ALLIACEAE':
    return plants.filter(p => p.plantFamilies === 'alliaceae');
  case 'SHOW_APIACEAE':
    return plants.filter(p => p.plantFamilies === 'apiaceae');
  case 'SHOW_ASTERACEAE':
    return plants.filter(p => p.plantFamilies === 'asteraceae');
  case 'SHOW_BRASSICACEAE':
    return plants.filter(p => p.plantFamilies === 'brassicaceae');
  case 'SHOW_CHENOPODIACEAE':
    return plants.filter(p => p.plantFamilies === 'chenopodiaceae');
  case 'SHOW_CUCURBITACEAE':
    return plants.filter(p => p.plantFamilies === 'cucurbitaceae');
  case 'SHOW_FABACEAE':
    return plants.filter(p => p.plantFamilies === 'fabaceae');
  case 'SHOW_SOLANACEAE':
    return plants.filter(p => p.plantFamilies === 'solanaceae');
  case 'SHOW_VALERIANACEAE':
    return plants.filter(p => p.plantFamilies === 'valerianaceae');
  case 'SHOW_POACEAE':
    return plants.filter(p => p.plantFamilies === 'poaceae');
  case 'SHOW_POLYGONACEAE‎':
    return plants.filter(p => p.plantFamilies === 'polygonaceae‎');
  case 'SHOW_FLOWER':
    return plants.filter(p => p.plantFamilies === 'flower');
  default:
    throw new Error('Unknown filter: ' + filter);
  }
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
    const { plants, plot, addPlant, showDetails, setVisibilityFilter } = this.props;
    return (
      <aside className={style.plantSelector}>
        <h3>Add plant:</h3>
        <select onChange={ (event) => setVisibilityFilter(event.target.value)}
          className={style.plantSelector_filter}>
          <option value="SHOW_ALL">All</option>
          <option value="SHOW_ALLIACEAE">Alliaceae</option>
          <option value="SHOW_APIACEAE">Apiaceae</option>
          <option value="SHOW_ASTERACEAE">Asteraceae</option>
          <option value="SHOW_BRASSICACEAE">Brassicaceae</option>
          <option value="SHOW_CHENOPODIACEAE">Chenopodiaceae</option>
          <option value="SHOW_CUCURBITACEAE">Cucurbitaceae</option>
          <option value="SHOW_FABACEAE">Fabaceae</option>
          <option value="SHOW_SOLANACEAE">Solanaceae</option>
          <option value="SHOW_VALERIANACEAE">valerianaceae</option>
          <option value="SHOW_POACEAE">poaceae</option>
          <option value="SHOW_POLYGONACEAE‎">polygonaceae‎</option>
          <option value="SHOW_FLOWER">flower</option>
        </select>
        {plants.map((plant, index) =>
          <DraggablePlant inlineStyle={{display: 'inline-block', width: 'initial'}}
            plant={plant} key={`${plant.key}-${index}`}
            addPlant={ (index) => addPlant(plant.key, isNaN(index) ? freeSlot(plot) : index) }
            isCompanion={ this.isCompanion(plant.key) }
            isAntagonist={ this.isAntagonist(plant.key) }
            setSelectedPlant={ (plant) => this.setSelectedPlant(plant) }
            showDetails={ showDetails }/>
        )}
      </aside>
    );
  }
}

PlantSelector.propTypes = {
  plants: React.PropTypes.array,
  plot: React.PropTypes.object,
  addPlant: React.PropTypes.func,
  showDetails: React.PropTypes.func,
  setVisibilityFilter: React.PropTypes.func
};

const mapStateToProps = state => {
  const {plot, visibilityFilter} = state;
  return {
    plants: getVisiblePlants(state.plants, state.visibilityFilter),
    plot,
    visibilityFilter
  };
};

const mapDispatchToProps = ({
  addPlant,
  setVisibilityFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSelector);
