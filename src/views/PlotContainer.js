import DraggablePlant from './DraggablePlant';
import React, { Component } from 'react';
import Slot from './Slot';
import style from '../index.css';
import { connect } from 'react-redux';
import { addPlant, removePlant, setNumberOfSlots } from '../actions/actions';

class Plot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: undefined
    };
  }

  render() {
    const {plot, plants, addPlant, removePlant, showDetails, setNumberOfSlots} = this.props;
    return (
      <section className={style.plot}>
        <div className={style.plotSize}>
          <button onClick={ () => setNumberOfSlots(4) }>S</button>
          <button onClick={ () => setNumberOfSlots(9) }>M</button>
          <button onClick={ () => setNumberOfSlots(16) }>L</button>
        </div>
        { [...Array(plot.slots).keys()].map((slot, index) => {
          let plantData;
          const plantIndex = plot.plants.map((p) => p.slot).indexOf(index);
          if (plantIndex > -1) {
            plantData = plants[plants.map((p) => p.key).indexOf(plot.plants[plantIndex].key)];
          }
          return (
            <Slot numberOfSlots={ plot.slots } key={ index } index={ index }>
              { plantData &&
                <DraggablePlant plant={plantData}
                  addPlant={ (index) => addPlant(plantData.key, index) }
                  removePlant={ () => removePlant(plantIndex) }
                  showDetails={ showDetails }/>
              }
            </Slot>
          );
        })
        }
      </section>
    );
  }
}

Plot.propTypes = {
  plot: React.PropTypes.object,
  plants: React.PropTypes.array,
  addPlant: React.PropTypes.func,
  removePlant: React.PropTypes.func,
  showDetails: React.PropTypes.func,
  setNumberOfSlots: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = ({
  removePlant,
  addPlant,
  setNumberOfSlots
});

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
